/**
 * ==============================================================================
 * Google Apps Script — Coletor de Respostas dos Quizzes de Acústica e Óptica (2026.2)
 * ==============================================================================
 * 
 * INSTRUÇÕES DE IMPLANTAÇÃO (DEPLOY):
 * 
 * 1. Acesse https://script.google.com e clique em "Novo Projeto".
 * 2. Substitua o código existente por TODO este arquivo.
 * 3. Clique no ícone de disco 💾 (Salvar) ou pressione Ctrl+S.
 * 4. Clique no botão azul "Implantar" > "Nova implantação".
 * 5. Selecione o tipo: "App da Web" (Web App).
 * 6. Preencha as configurações:
 *    - Descrição: "Acústica e Óptica Quiz Receiver 2026.2"
 *    - Executar como: "Eu (seu e-mail)"
 *    - Quem pode acessar: "Qualquer pessoa" (Qualquer pessoa, mesmo sem login Google)
 * 7. Clique em "Implantar" e conceda as permissões de acesso ao Drive/Sheets quando solicitado.
 * 8. Copie a URL gerada (exemplo: https://script.google.com/macros/s/AKfycb.../exec).
 * 9. Atualize a constante `GOOGLE_APP_SCRIPT_URL` nos arquivos quiz.html do curso de Acústica e Óptica.
 *
 * PASTA DE DESTINO NO GOOGLE DRIVE:
 * https://drive.google.com/drive/folders/1dYFWldq87HJ-LGnM_f1RgH2jdE18be1N
 */

// ID da Pasta do Google Drive de Acústica e Óptica
const DRIVE_FOLDER_ID = "1dYFWldq87HJ-LGnM_f1RgH2jdE18be1N";

// Nome da Planilha no Google Drive
const SPREADSHEET_NAME = "Acústica e Óptica - Respostas dos Quizzes (2026.2)";

/**
 * Endpoint POST — Recebe as submissões dos alunos via fetch no quiz.html
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Obter ou criar a planilha na pasta especificada do Drive
    const ss = getOrCreateSpreadsheetInFolder();
    
    // Nome da aba (por ex: "Quiz 1 — Aula 02" ou o valor enviado em data.quiz)
    const sheetName = data.quiz || "Quiz 1";
    const sheet = getOrCreateQuizSheet(ss, sheetName);
    
    // Extrai respostas Q1..Q10 de forma resiliente (suporta objeto {1: "A"} ou array ["A", "B"])
    const answers = data.answers || {};
    const getAns = (i) => {
      if (Array.isArray(answers)) {
        return answers[i - 1] !== undefined ? answers[i - 1] : "-";
      }
      return answers[i] || answers[String(i)] || "-";
    };
    
    const timestamp = data.dateTime || new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    
    // Monta a linha com exatamente as mesmas colunas da planilha do curso de Magnetismo
    const row = [
      timestamp,                                 // Timestamp / Data e Hora
      data.student || "Anônimo",                 // Nome do Aluno
      data.email || "-",                         // E-mail
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
      course: "Acústica e Óptica",
      folderId: DRIVE_FOLDER_ID,
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Localiza a planilha na pasta do Drive especificada ou cria uma nova direto nessa pasta.
 */
function getOrCreateSpreadsheetInFolder() {
  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const files = folder.getFilesByName(SPREADSHEET_NAME);
  
  if (files.hasNext()) {
    const file = files.next();
    return SpreadsheetApp.open(file);
  }
  
  // Cria a planilha e move para a pasta de Acústica e Óptica
  const ss = SpreadsheetApp.create(SPREADSHEET_NAME);
  const ssFile = DriveApp.getFileById(ss.getId());
  
  folder.addFile(ssFile);
  DriveApp.getRootFolder().removeFile(ssFile); // Remove da raiz do My Drive
  
  return ss;
}

/**
 * Garante que a aba correspondente ao Quiz exista com os cabeçalhos idênticos aos de Magnetismo.
 */
function getOrCreateQuizSheet(ss, sheetName) {
  // Limpa o nome da aba para garantir que respeite o limite de 30 caracteres do Google Sheets
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
    
    // Cabeçalhos padronizados
    const headers = [
      "Timestamp / Data e Hora",
      "Nome do Aluno",
      "E-mail",
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
    headerRange.setBackground("#1e40af"); // Azul escuro
    headerRange.setFontColor("#ffffff");
    headerRange.setHorizontalAlignment("center");
    
    // Congela primeira linha
    sheet.setFrozenRows(1);
    
    // Ajusta a largura das colunas principais
    sheet.setColumnWidth(1, 170); // Timestamp
    sheet.setColumnWidth(2, 220); // Nome do Aluno
    sheet.setColumnWidth(3, 220); // E-mail
    sheet.setColumnWidth(4, 240); // Quiz
    sheet.setColumnWidth(5, 80);  // Acertos
    sheet.setColumnWidth(6, 70);  // Total
    sheet.setColumnWidth(7, 130); // Aproveitamento
    sheet.setColumnWidth(8, 110); // Tempo Gasto
    sheet.setColumnWidth(9, 260); // Hash Code
  }
  
  return sheet;
}
