---
name: notificador-atualizacoes-psj0111
description: >-
  Agente de notificação e mala direta por e-mail para a disciplina PSJ0111
  (Metodologia da Pesquisa em Educação - IFSC). Lê a lista de contatos de
  Contatos_Mala_Direta.xlsx, detecta novos arquivos e alterações no repositório
  Git/GitHub e elabora ou dispara comunicados curtos, diretos e objetivos aos
  professores e estudantes.
---

# 📬 Skill: Notificador de Atualizações por E-mail (PSJ0111)

Esta skill automatiza a comunicação e mala direta para os **31 contatos cadastrados** (3 docentes e 28 discentes) da disciplina **PSJ0111 — Metodologia da Pesquisa em Educação** (Especialização em Educação Ambiental — IFSC Câmpus São José).

---

## 🎯 Finalidade e Capacidades

1. **Monitoramento de Atualizações no Repositório:**
   - Inspeciona o último commit do Git (`git diff-tree` / `git log`) para listar precisamente quais arquivos foram adicionados (`A`), modificados (`M`) ou removidos (`D`).
2. **Leitura Automatizada da Mala Direta:**
   - Extrai diretamente os endereços de e-mail e categorias do arquivo Excel:
     `2026.2/psj0111/aula07/Contatos_Mala_Direta.xlsx`.
3. **Formatação de Mensagens Simples e Curtas:**
   - Cria mensagens diretas e sem prolixidade informando apenas o que foi atualizado e o link do portal no GitHub Pages.
   - Preserva a privacidade enviando sempre em **Cópia Oculta (BCC / CCO)**.
4. **Modos de Operação Flexíveis:**
   - **CLI / Python:** Execução local ou automatizada via terminal.
   - **Google Apps Script:** Execução integrada no Google Planilhas / Gmail.

---

## 🚀 Como Utilizar a Skill

### 1. Pré-visualizar a Notificação e Lista de Contatos
Para verificar os arquivos atualizados e o texto formatado antes do envio:

```bash
python3 .agents/skills/notificador-atualizacoes-psj0111/scripts/notificar_atualizacao.py --preview
```

Com recado extra (opcional):
```bash
python3 .agents/skills/notificador-atualizacoes-psj0111/scripts/notificar_atualizacao.py --preview --msg "Lembrete: Os seminários iniciam na próxima aula (03/09)."
```

---

### 2. Disparar Envio Real via SMTP (Python)
Para realizar o envio dos e-mails:

1. Configure as credenciais no terminal (ex: usando senha de aplicativo do Gmail):
   ```bash
   export SMTP_USER="seu-email@gmail.com"
   export SMTP_PASS="sua-senha-de-app-16-digitos"
   export SMTP_HOST="smtp.gmail.com"
   export SMTP_PORT=587
   ```

2. Execute com a flag `--send`:
   ```bash
   python3 .agents/skills/notificador-atualizacoes-psj0111/scripts/notificar_atualizacao.py --send
   ```

---

### 3. Integração com Google Apps Script
Caso prefira disparar diretamente pela nuvem (Google Planilhas / Gmail):
- Utilize o código em [`scripts/google_apps_script_mala_direta.js`](file:///.agents/skills/notificador-atualizacoes-psj0111/scripts/google_apps_script_mala_direta.js).
- Ele adiciona um menu **"📧 Mala Direta PSJ0111"** com funções de preview e disparo em lote automático com marcação de data de envio.

---

## 📋 Padrão da Mensagem Gerada (Curta e Direta)

- **Assunto:** `[PSJ0111] Atualização no Portal de Metodologia da Pesquisa (DD/MM/AAAA)`
- **Corpo:**
  > Olá, professores e estudantes de PSJ0111,
  >
  > O repositório da disciplina de Metodologia da Pesquisa em Educação (2026.2) foi atualizado no GitHub Pages.
  >
  > **📋 Arquivos atualizados / Novidades:**
  > • [Novo arquivo] `aula07/index.html` (Seminários das Metodologias)
  > • [Novo arquivo] `aula07/cronograma-seminarios.png` (Quadro de Equipes)
  > • [Atualizado] `index.html`
  >
  > **🌐 Acesse o portal e os materiais atualizados:**
  > https://humba-ifsc.github.io/ensino-ifsc/2026.2/psj0111/
  >
  > Atenciosamente,  
  > Corpo Docente — Prof. Humberto Luz Oliveira, Profª. Joce Mary Mello Giotto e Prof. Volmir Von Dentz  
  > IFSC Câmpus São José
