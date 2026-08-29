/**
 * Google Apps Script — Mala Direta para PSJ0111 (IFSC São José)
 * Notificação automática por e-mail para Docentes e Discentes.
 * 
 * Como usar no Google Planilhas / Google Drive:
 * 1. Abra sua planilha de Mala Direta no Google Drive (ou importe Contatos_Mala_Direta.xlsx).
 * 2. Acesse Extensões > Apps Script.
 * 3. Cole este código e salve.
 * 4. Execute a função 'enviarNotificacaoAtualizacao()' ou use o menu personalizado no topo da planilha.
 */

const CONFIG = {
  TITULO_DISCIPLINA: "Metodologia da Pesquisa em Educação (PSJ0111)",
  URL_PORTAL: "https://humba-ifsc.github.io/ensino-ifsc/2026.2/psj0111/",
  DOCENTES: "Prof. Dr. Humberto Luz Oliveira, Profª. Dra. Joce Mary Mello Giotto e Prof. Dr. Volmir Von Dentz",
  INSTITUICAO: "IFSC Câmpus São José — 2026.2"
};

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('📧 Mala Direta PSJ0111')
    .addItem('Preview da Mensagem', 'previewMensagem')
    .addItem('🚀 Enviar Notificação aos Alunos e Docentes', 'enviarNotificacaoAtualizacao')
    .addToUi();
}

function obterDestinatarios() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dados = sheet.getDataRange().getValues();
  const destinatarios = [];

  for (let i = 4; i < dados.length; i++) { // Começa na linha 5
    const email = dados[i][2]; // Coluna C (E-mail)
    const categoria = dados[i][3]; // Coluna D (Docente / Discente)
    const status = dados[i][4]; // Coluna E (Status do Envio)

    if (email && email.toString().includes('@')) {
      destinatarios.push({
        linha: i + 1,
        email: email.toString().trim(),
        categoria: categoria || 'Discente',
        status: status
      });
    }
  }
  return destinatarios;
}

function gerarConteudoEmail(arquivosAtualizados, recadoExtra) {
  const dataHoje = Utilities.formatDate(new Date(), "GMT-3", "dd/MM/yyyy");
  const assunto = `[PSJ0111] Atualização no Portal de Metodologia da Pesquisa (${dataHoje})`;

  let listaHtml = "";
  if (arquivosAtualizados && arquivosAtualizados.length > 0) {
    listaHtml = arquivosAtualizados.map(arq => `<li><code>${arq}</code></li>`).join("");
  } else {
    listaHtml = `<li>Novos materiais e atualizações de seminários de pesquisa.</li>`;
  }

  const corpoHtml = `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff;">
    <div style="border-bottom: 2px solid #10b981; padding-bottom: 10px; margin-bottom: 15px;">
      <span style="background: #ecfdf5; color: #059669; font-size: 12px; font-weight: bold; padding: 3px 8px; border-radius: 4px;">IFSC São José · 2026.2</span>
      <h2 style="color: #065f46; margin: 8px 0 0 0; font-size: 18px;">${CONFIG.TITULO_DISCIPLINA}</h2>
    </div>

    <p style="color: #334155; font-size: 14px; line-height: 1.6;">Olá, professores e discentes,</p>
    <p style="color: #334155; font-size: 14px; line-height: 1.6;">Informamos que novos arquivos e conteúdos foram atualizados no repositório e portal da disciplina no <strong>GitHub Pages</strong>.</p>

    <div style="background: #f8fafc; border-left: 3px solid #10b981; padding: 10px 15px; margin: 15px 0;">
      <strong style="font-size: 13px; color: #0f172a;">📋 Principais atualizações:</strong>
      <ul style="margin: 8px 0 0 0; padding-left: 20px; color: #475569; font-size: 13px;">
        ${listaHtml}
      </ul>
    </div>

    ${recadoExtra ? `<p style="background: #fef3c7; color: #92400e; padding: 10px; border-radius: 6px; font-size: 13px;"><strong>📢 Aviso:</strong> ${recadoExtra}</p>` : ''}

    <div style="text-align: center; margin: 25px 0;">
      <a href="${CONFIG.URL_PORTAL}" style="background: #10b981; color: #ffffff; text-decoration: none; padding: 10px 22px; font-weight: bold; border-radius: 6px; font-size: 14px; display: inline-block;">🌐 Acessar Portal no GitHub Pages</a>
    </div>

    <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 20px; font-size: 12px; color: #64748b; line-height: 1.5;">
      <strong>Corpo Docente:</strong> ${CONFIG.DOCENTES}<br>
      ${CONFIG.INSTITUICAO}
    </div>
  </div>`;

  return { assunto, corpoHtml };
}

function previewMensagem() {
  const destinatarios = obterDestinatarios();
  const { assunto, corpoHtml } = gerarConteudoEmail(["Exemplo: aula07/index.html (Seminários)", "Exemplo: aula06/busca-wos-ia.html"], "Lembrete das datas do Seminário.");
  
  const ui = SpreadsheetApp.getUi();
  ui.alert(
    "Preview da Mala Direta",
    `Total de contatos encontrados: ${destinatarios.length}\nAssunto: ${assunto}\n\nO e-mail será enviado em cópia oculta (BCC) garantindo a privacidade de todos.`,
    ui.ButtonSet.OK
  );
}

function enviarNotificacaoAtualizacao(arquivos, recado) {
  const destinatarios = obterDestinatarios();
  if (destinatarios.length === 0) {
    SpreadsheetApp.getUi().alert("Nenhum destinatário com e-mail válido foi encontrado na planilha.");
    return;
  }

  const { assunto, corpoHtml } = gerarConteudoEmail(arquivos, recado);
  const emailsBcc = destinatarios.map(d => d.email).join(",");
  const usuarioAtual = Session.getActiveUser().getEmail();

  // Disparo via GmailApp em cópia oculta
  GmailApp.sendEmail(usuarioAtual, assunto, "Por favor, visualize em cliente com suporte a HTML.", {
    htmlBody: corpoHtml,
    bcc: emailsBcc,
    name: "PSJ0111 - IFSC São José"
  });

  // Atualizar status na planilha
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dataHoje = Utilities.formatDate(new Date(), "GMT-3", "yyyy-MM-dd HH:mm");
  destinatarios.forEach(d => {
    sheet.getRange(d.linha, 5).setValue("Enviado"); // Coluna E (Status)
    sheet.getRange(d.linha, 6).setValue(dataHoje);  // Coluna F (Data de Envio)
  });

  SpreadsheetApp.getUi().alert(`✅ Sucesso! Notificação enviada com sucesso para ${destinatarios.length} contatos!`);
}
