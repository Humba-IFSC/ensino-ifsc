/**
 * ==============================================================================
 * Google Apps Script — Coletor de Respostas dos Quizzes de Magnetismo e Eletromagnetismo (2026.2)
 * ==============================================================================
 * 
 * PASTA DE DESTINO NO GOOGLE DRIVE:
 * https://drive.google.com/drive/folders/1mUFzQEL_ndlyXJ9Z2P3pVOivtz9U2lRU
 */

// ID da Pasta do Google Drive de Magnetismo
const DRIVE_FOLDER_ID = "1mUFzQEL_ndlyXJ9Z2P3pVOivtz9U2lRU";

// Nome da Planilha no Google Drive
const SPREADSHEET_NAME = "Magnetismo - Respostas dos Quizzes (2026.2)";

/**
 * Endpoint POST — Recebe as submissões dos alunos via fetch no quiz.html
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    const ss = getOrCreateSpreadsheetInFolder();
    const sheetName = data.quiz || "Quiz 1";
    const sheet = getOrCreateQuizSheet(ss, sheetName);
    
    const answers = data.answers || {};
    const getAns = (i) => {
      if (Array.isArray(answers)) {
        return answers[i - 1] !== undefined ? answers[i - 1] : "-";
      }
      return answers[i] || answers[String(i)] || "-";
    };
    
    const timestamp = data.dateTime || new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    
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

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "online", 
      course: "Magnetismo e Eletromagnetismo",
      folderId: DRIVE_FOLDER_ID,
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSpreadsheetInFolder() {
  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const files = folder.getFilesByName(SPREADSHEET_NAME);
  
  if (files.hasNext()) {
    const file = files.next();
    return SpreadsheetApp.open(file);
  }
  
  const ss = SpreadsheetApp.create(SPREADSHEET_NAME);
  const ssFile = DriveApp.getFileById(ss.getId());
  
  folder.addFile(ssFile);
  DriveApp.getRootFolder().removeFile(ssFile);
  
  return ss;
}

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
    headerRange.setBackground("#b91c1c"); // Vermelho escuro
    headerRange.setFontColor("#ffffff");
    headerRange.setHorizontalAlignment("center");
    
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 170);
    sheet.setColumnWidth(2, 220);
    sheet.setColumnWidth(3, 220);
    sheet.setColumnWidth(4, 240);
    sheet.setColumnWidth(5, 80);
    sheet.setColumnWidth(6, 70);
    sheet.setColumnWidth(7, 130);
    sheet.setColumnWidth(8, 110);
    sheet.setColumnWidth(9, 260);
  }
  
  return sheet;
}
