---
course: "Acústica e Óptica"
semester: "2026.2"
activity: "Quiz 1 — Coleta de Respostas e Integração Google Drive"
drive_folder: "https://drive.google.com/drive/folders/1dYFWldq87HJ-LGnM_f1RgH2jdE18be1N"
reference_spreadsheet: "https://docs.google.com/spreadsheets/d/14VC4MJJw3Jo23ZU2eBN4egKu1wnQqr6mJ-wAZvXC26g/edit?usp=sharing"
---

# 📊 Guia de Configuração e Envio dos Quizzes — Acústica e Óptica (2026.2)

Este guia orienta a configuração do **Google Apps Script** para salvar automaticamente todas as respostas dos quizzes de **Acústica e Óptica** em uma planilha do Google Sheets dentro da pasta do Google Drive correspondente.

---

## 📂 1. Links de Destino e Referência

| Recurso | Link |
| :--- | :--- |
| 🌐 **URL Ativa do Web App (Apps Script)** | [`https://script.google.com/macros/s/AKfycbzYHl7-56XlsUf3Z9FOiRSyikcCWL57xu8BmXxpYAc3u0mQMUO5Bhky8W6ae0vDZDo6OA/exec`](https://script.google.com/macros/s/AKfycbzYHl7-56XlsUf3Z9FOiRSyikcCWL57xu8BmXxpYAc3u0mQMUO5Bhky8W6ae0vDZDo6OA/exec) |
| 📁 **Pasta do Google Drive (Acústica e Óptica)** | [Acessar Pasta do Drive](https://drive.google.com/drive/folders/1dYFWldq87HJ-LGnM_f1RgH2jdE18be1N) |
| 📋 **Planilha Modelo de Referência (Magnetismo)** | [Ver Planilha Modelo](https://docs.google.com/spreadsheets/d/14VC4MJJw3Jo23ZU2eBN4egKu1wnQqr6mJ-wAZvXC26g/edit?usp=sharing) |
| 📄 **Código Apps Script (No repositório)** | [`google_apps_script.js`](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/optica-acustica/google_apps_script.js) |

---

## 🛠️ 2. Passo a Passo para Implantação no Google Apps Script

1. **Criar o Projeto no Apps Script**:
   - Acesse [script.google.com](https://script.google.com) logado na sua conta Google (onde a pasta do Drive foi criada).
   - Clique no botão **"Novo projeto"**.
   - Renomeie o projeto no topo para: `Acústica e Óptica - Receptor de Quizzes`.

2. **Inserir o Código**:
   - Copie o conteúdo completo do arquivo [`google_apps_script.js`](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/optica-acustica/google_apps_script.js).
   - Substitua todo o conteúdo da janela de código `Código.gs`.
   - Verifique se a variável `DRIVE_FOLDER_ID` está com o valor `"1dYFWldq87HJ-LGnM_f1RgH2jdE18be1N"`.

3. **Salvar e Implantar como Web App**:
   - Clique em **Salvar** (ícone de disquete 💾 ou `Ctrl + S`).
   - Clique no botão azul **Implantar** (canto superior direito) > **Nova implantação**.
   - Clique no ícone de engrenagem ⚙️ ao lado de "Selecionar tipo" e escolha **App da Web**.
   - Configure os campos:
     - **Descrição**: `Receptor Acústica e Óptica`
     - **Executar como**: `Eu (seu e-mail)`
     - **Quem pode acessar**: `Qualquer pessoa` *(MUITO IMPORTANTE para que os alunos possam enviar sem necessitar de login)*.
   - Clique em **Implantar**.

4. **Autorização**:
   - O Google solicitará autorizações. Clique em **Autorizar acesso**, escolha sua conta Google, clique em **Avançado** e **Acessar Acústica e Óptica - Receptor de Quizzes (não seguro)** e confirme.

5. **Copiar a URL de Implantação**:
   - Copie a **URL do App da Web** gerada (começa com `https://script.google.com/macros/s/.../exec`).

6. **Atualizar no Repositório**:
   - Cole essa URL no arquivo `quiz.html` de cada aula de Acústica e Óptica na variável `GOOGLE_APP_SCRIPT_URL`.

---

## 📋 3. Estrutura das Colunas Coletadas

A planilha gerada automaticamente apresentará exatamente a mesma estrutura padronizada:

| Coluna | Campo | Descrição |
| :---: | :--- | :--- |
| **A** | `Timestamp` | Data e Hora da submissão |
| **B** | `Nome do Aluno` | Nome completo informado pelo estudante |
| **C** | `E-mail` | E-mail institucional do estudante |
| **D** | `Quiz` | Identificação da atividade (ex: Quiz 1 — Aula 02) |
| **E** | `Acertos` | Quantidade de respostas corretas |
| **F** | `Total` | Total de questões (10) |
| **G** | `Aproveitamento (%)` | Percentual de acertos |
| **H** | `Tempo Gasto` | Duração da tentativa |
| **I** | `Código Hash` | Hash de autenticação do comprovante |
| **J a S** | `Q1` a `Q10` | Alternativas assinaladas pelo aluno em cada questão |

---

## 📌 4. Mapeamento de Pastas por Curso (Google Drive)

| Curso | Pasta no Google Drive | ID da Pasta |
| :--- | :--- | :--- |
| **Magnetismo e Eletromagnetismo** | [Abrir Pasta](https://drive.google.com/drive/folders/1mUFzQEL_ndlyXJ9Z2P3pVOivtz9U2lRU) | `1mUFzQEL_ndlyXJ9Z2P3pVOivtz9U2lRU` |
| **Acústica e Óptica** | [Abrir Pasta](https://drive.google.com/drive/folders/1dYFWldq87HJ-LGnM_f1RgH2jdE18be1N) | `1dYFWldq87HJ-LGnM_f1RgH2jdE18be1N` |
| **Termologia e Termodinâmica** | *(Configurar ID da pasta)* | *(A definir)* |
