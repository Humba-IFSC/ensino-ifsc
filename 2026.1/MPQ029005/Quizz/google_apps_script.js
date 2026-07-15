/**
 * ============================================================
 * Google Apps Script — Receptor de Respostas dos Quizzes MPQ
 * ============================================================
 * 
 * INSTRUÇÕES DE DEPLOY:
 * 
 * 1. Acesse https://script.google.com e crie um novo projeto.
 * 2. Cole todo este código no editor (substitua o conteúdo existente).
 * 3. No menu: Extensões > Apps Script > Salvar (Ctrl+S).
 * 4. Vá em Implantar > Nova implantação.
 * 5. Selecione tipo: "App da Web".
 * 6. Configure:
 *    - Descrição: "MPQ Quiz Receiver"
 *    - Executar como: "Eu"
 *    - Quem pode acessar: "Qualquer pessoa"
 * 7. Clique em "Implantar" e autorize.
 * 8. Copie a URL gerada (algo como https://script.google.com/macros/s/AKfyc.../exec).
 * 9. Cole essa URL no arquivo quiz HTML, na variável APPS_SCRIPT_URL.
 *
 * A planilha será criada AUTOMATICAMENTE na raiz do seu Google Drive
 * chamada "MPQ029005 - Respostas Quizzes".
 */

// ---- CONFIGURAÇÃO ----
const SPREADSHEET_NAME = "MPQ029005 - Respostas Quizzes";

// ---- FUNÇÕES AUXILIARES ----

/**
 * Encontra ou cria a planilha de respostas.
 */
function getOrCreateSpreadsheet() {
  // Procura planilha existente
  const files = DriveApp.getFilesByName(SPREADSHEET_NAME);
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next());
  }
  
  // Cria nova planilha
  const ss = SpreadsheetApp.create(SPREADSHEET_NAME);
  
  // Cria aba "Resumo" (visão geral)
  const resumo = ss.getSheetByName("Sheet1") || ss.getSheets()[0];
  resumo.setName("Resumo");
  resumo.getRange("A1").setValue("📊 MPQ029005 - Painel de Respostas dos Quizzes");
  resumo.getRange("A1").setFontSize(16).setFontWeight("bold");
  resumo.getRange("A3").setValue("As respostas de cada quiz são armazenadas em abas separadas.");
  resumo.getRange("A4").setValue("Criado automaticamente pelo sistema de quizzes.");
  resumo.getRange("A6").setValue("Última atualização:");
  resumo.getRange("B6").setValue(new Date()).setNumberFormat("dd/MM/yyyy HH:mm");
  
  return ss;
}

/**
 * Encontra ou cria a aba para um quiz específico.
 */
function getOrCreateQuizSheet(ss, quizName) {
  let sheet = ss.getSheetByName(quizName);
  
  if (!sheet) {
    sheet = ss.insertSheet(quizName);
    
    // Cabeçalhos
    const headers = [
      "Timestamp",
      "Nome do Aluno",
      "Matrícula",
      "Quiz",
      "Acertos",
      "Total",
      "Percentual (%)",
      "Q1", "Q2", "Q3", "Q4", "Q5",
      "Q6", "Q7", "Q8", "Q9", "Q10",
      "Q1✓", "Q2✓", "Q3✓", "Q4✓", "Q5✓",
      "Q6✓", "Q7✓", "Q8✓", "Q9✓", "Q10✓",
      "Usou Dica Q1", "Usou Dica Q2", "Usou Dica Q3", "Usou Dica Q4", "Usou Dica Q5",
      "Usou Dica Q6", "Usou Dica Q7", "Usou Dica Q8", "Usou Dica Q9", "Usou Dica Q10"
    ];
    
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers]);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#32a041");
    headerRange.setFontColor("#ffffff");
    headerRange.setHorizontalAlignment("center");
    
    // Congela primeira linha
    sheet.setFrozenRows(1);
    
    // Largura das colunas
    sheet.setColumnWidth(1, 160); // Timestamp
    sheet.setColumnWidth(2, 200); // Nome
    sheet.setColumnWidth(3, 120); // Matrícula
    sheet.setColumnWidth(4, 100); // Quiz
    sheet.setColumnWidth(5, 70);  // Acertos
    sheet.setColumnWidth(6, 60);  // Total
    sheet.setColumnWidth(7, 100); // Percentual
  }
  
  return sheet;
}

// ---- ENDPOINT PRINCIPAL ----

/**
 * Recebe requisições POST dos quizzes.
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    const ss = getOrCreateSpreadsheet();
    const quizName = data.quiz || "Quiz";
    const sheet = getOrCreateQuizSheet(ss, quizName);
    
    // Monta a linha de dados
    const answers = data.answers || [];        // ["A", "B", "C", ...]
    const corrects = data.corrects || [];      // [true, false, true, ...]
    const hintsUsed = data.hintsUsed || [];    // [false, true, false, ...]
    
    // Preenche até 10 questões
    const padded = (arr, fill, len) => {
      const result = [...arr];
      while (result.length < len) result.push(fill);
      return result.slice(0, len);
    };
    
    const row = [
      new Date(),                            // Timestamp
      data.nome || "Anônimo",                // Nome
      data.matricula || "-",                 // Matrícula
      quizName,                              // Quiz
      data.score || 0,                       // Acertos
      data.total || 10,                      // Total
      ((data.score / data.total) * 100).toFixed(1), // Percentual
      ...padded(answers, "-", 10),           // Q1..Q10 respostas
      ...padded(corrects, false, 10),        // Q1✓..Q10✓ 
      ...padded(hintsUsed, false, 10),       // Usou dica Q1..Q10
    ];
    
    sheet.appendRow(row);
    
    // Atualiza timestamp do Resumo
    const resumo = ss.getSheetByName("Resumo");
    if (resumo) {
      resumo.getRange("B6").setValue(new Date()).setNumberFormat("dd/MM/yyyy HH:mm");
    }
    
    // Formata células de acerto/erro com cor
    const lastRow = sheet.getLastRow();
    for (let i = 0; i < 10; i++) {
      const cell = sheet.getRange(lastRow, 18 + i); // Colunas Q1✓..Q10✓
      const val = corrects[i];
      if (val === true) {
        cell.setValue("✓").setBackground("#c8e6c9").setFontColor("#1b5e20");
      } else if (val === false) {
        cell.setValue("✗").setBackground("#ffcdd2").setFontColor("#b71c1c");
      }
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok", message: "Resposta registrada com sucesso!" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Responde a requisições GET (útil para testar se o endpoint está ativo).
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "ok", 
      message: "MPQ029005 Quiz Receiver está ativo.",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
