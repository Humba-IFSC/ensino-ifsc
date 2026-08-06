/**
 * ==============================================================================
 * Google Apps Script — Coletor de Respostas dos Quizzes de Termodinâmica (2026.2)
 * Unidades Curriculares: FSC060806 (Telecom) & FCA060903 (RAC)
 * ==============================================================================
 * 
 * INSTRUÇÕES DE IMPLANTAÇÃO (DEPLOY):
 * 
 * 1. Acesse https://script.google.com e clique em "Novo Projeto".
 * 2. Nomeie o projeto como "Termodinâmica - Receptor de Quizzes".
 * 3. Cole todo este código no editor (substituindo o conteúdo existente).
 * 4. (Opcional) Se tiver uma pasta específica no Google Drive para Termodinâmica, 
 *    insira o ID da pasta na variável DRIVE_FOLDER_ID abaixo.
 * 5. Clique em "Implantar" > "Nova implantação".
 * 6. Tipo: "App da Web"
 *    - Executar como: "Eu"
 *    - Quem pode acessar: "Qualquer pessoa"
 * 7. Clique em "Implantar", autorize o acesso e copie a URL gerada.
 * 8. Cole a URL no arquivo quiz.html na variável `GOOGLE_APP_SCRIPT_URL`.
 */

// Cole aqui o ID da pasta do Google Drive destinada a Termodinâmica (se houver)
const DRIVE_FOLDER_ID = ""; // Exemplo: "1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

// Nome da Planilha no Google Drive
const SPREADSHEET_NAME = "Termodinâmica - Respostas dos Quizzes (2026.2)";

/**
 * Endpoint POST — Recebe as submissões dos alunos via fetch no quiz.html
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Obter ou criar a planilha no Drive
    const ss = getOrCreateSpreadsheetInFolder();
    
    // Nome da aba (ex: "Quiz 1 — Calorimetria" ou o valor enviado em data.quiz)
    const sheetName = data.quiz || "Quiz 1";
    const sheet = getOrCreateQuizSheet(ss, sheetName);
    
    // Extrai respostas Q1..Q10 de forma resiliente
    const answers = data.answers || {};
    const getAns = (i) => {
      if (Array.isArray(answers)) {
        return answers[i - 1] !== undefined ? answers[i - 1] : "-";
      }
      return answers[i] || answers[String(i)] || "-";
    };
    
    const timestamp = data.dateTime || new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    
    // Monta a linha com suporte à Turma / UC (FSC060806 ou FCA060903)
    const row = [
      timestamp,                                 // Timestamp / Data e Hora
      data.student || "Anônimo",                 // Nome do Aluno
      data.email || "-",                         // E-mail
      data.course || "-",                        // Turma / UC (FSC060806 / FCA060903)
      data.quiz || "Quiz 1",                     // Quiz
      data.score !== undefined ? data.score : 0, // Acertos / Nota
      data.total || 10,                          // Total de Questões
      data.percent || "0%",                      // Aproveitamento (%)
      data.timeSpent || "-",                     // Tempo Gasto
      data.authCode || "-",                      // Código Hash de Autenticação
      getAns(1), getAns(2), getAns(3), getAns(4), getAns(5),
      getAns(6), getAns(7), getAns(8), getAns(9), getAns(10)
    ];
    
    sheet.appendRow(row);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Resposta registrada com sucesso!" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Endpoint GET — Teste de status do Web App
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "online", 
      course: "Termologia e Termodinâmica (FSC060806 / FCA060903)",
      folderId: DRIVE_FOLDER_ID || "Raiz do My Drive",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Localiza a planilha na pasta do Drive especificada ou cria uma nova.
 */
function getOrCreateSpreadsheetInFolder() {
  let folder;
  if (DRIVE_FOLDER_ID && DRIVE_FOLDER_ID.trim() !== "") {
    try {
      folder = DriveApp.getFolderById(DRIVE_FOLDER_ID.trim());
    } catch (e) {
      folder = DriveApp.getRootFolder();
    }
  } else {
    folder = DriveApp.getRootFolder();
  }
  
  const files = folder.getFilesByName(SPREADSHEET_NAME);
  
  if (files.hasNext()) {
    const file = files.next();
    return SpreadsheetApp.open(file);
  }
  
  // Cria a planilha no Drive
  const ss = SpreadsheetApp.create(SPREADSHEET_NAME);
  const ssFile = DriveApp.getFileById(ss.getId());
  
  if (folder.getId() !== DriveApp.getRootFolder().getId()) {
    folder.addFile(ssFile);
    DriveApp.getRootFolder().removeFile(ssFile);
  }
  
  return ss;
}

/**
 * Garante que a aba correspondente ao Quiz exista com os cabeçalhos organizados.
 */
function getOrCreateQuizSheet(ss, sheetName) {
  const cleanName = sheetName.replace(/[^\w\s—\-\(\)]/gi, '').substring(0, 30).trim() || "Respostas";
  
  let sheet = ss.getSheetByName(cleanName);
  
  if (!sheet) {
    const sheets = ss.getSheets();
    if (sheets.length === 1 && (sheets[0].getName() === "Página 1" || sheets[0].getName() === "Sheet1")) {
      sheet = sheets[0];
      sheet.setName(cleanName);
    } else {
      sheet = ss.insertSheet(cleanName);
    }
    
    // Cabeçalhos padronizados com coluna de Turma / UC
    const headers = [
      "Timestamp / Data e Hora",
      "Nome do Aluno",
      "E-mail",
      "Turma / UC (FSC060806 / FCA060903)",
      "Quiz",
      "Acertos",
      "Total",
      "Aproveitamento (%)",
      "Tempo Gasto",
      "Código Hash de Autenticação",
      "Q1", "Q2", "Q3", "Q4", "Q5",
      "Q6", "Q7", "Q8", "Q9", "Q10"
    ];
    
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers]);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#15803d"); // Verde escuro pedagógico
    headerRange.setFontColor("#ffffff");
    headerRange.setHorizontalAlignment("center");
    
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 170); // Timestamp
    sheet.setColumnWidth(2, 220); // Nome do Aluno
    sheet.setColumnWidth(3, 220); // E-mail
    sheet.setColumnWidth(4, 250); // Turma / UC
    sheet.setColumnWidth(5, 240); // Quiz
    sheet.setColumnWidth(6, 80);  // Acertos
    sheet.setColumnWidth(7, 70);  // Total
    sheet.setColumnWidth(8, 130); // Aproveitamento
    sheet.setColumnWidth(9, 110); // Tempo Gasto
    sheet.setColumnWidth(10, 260); // Hash Code
  }
  
  return sheet;
}
