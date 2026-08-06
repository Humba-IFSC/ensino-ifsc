---
course: "Termologia e Termodinâmica"
semester: "2026.2"
units: ["FSC060806", "FCA060903"]
activity: "Quiz 1 — Calorimetria Sensível"
open_date: "2026-08-06 (Quinta-feira)"
close_date: "2026-08-09 (Domingo, 23:59)"
password: "termo2026B1"
duration: "30 minutos"
---

# 📋 Guia e Planilha de Envio do Quiz 1 — Termodinâmica (2026.2)

Este documento estabelece as orientações oficiais para a realização do **Quiz 1 (Avaliativo)** da unidade curricular de **Termologia e Termodinâmica**, válido para as turmas de **Telecomunicações (FSC060806)** e **Refrigeração e Ar Condicionado (FCA060903)** do IFSC Câmpus São José.

---

## 🗓️ 1. Cronograma e Janela de Liberação

| Campo | Especificação |
| :--- | :--- |
| **Atividade** | Quiz 1 — Calorimetria Sensível, Capacidade Térmica e Trocas de Calor |
| **Unidades Curriculares** | `FSC060806` (Telecom) & `FCA060903` (RAC) |
| **Abertura do Quiz** | **06/08/2026 (Quinta-feira)** — Aberto |
| **Encerramento do Quiz** | **09/08/2026 (Domingo às 23:59)** |
| **Tempo Limite** | **30 minutos contínuos** (com cronômetro no topo da página) |
| **Senha de Acesso** | `termo2026B1` |
| **Link Direto** | [Acessar Quiz 1 em HTML](Aulas/Bloco-1/Aula02_2026-07-31/quiz.html) |

---

## 📌 2. Orientações Gerais aos Alunos

1. **Objetivo Pedagógico**:
   - Manter o ritmo semanal de estudos e consolidação teórica para os blocos didáticos (Blocos 1, 2 e 3).
   - O cumprimento rigoroso dos prazos de Quizzes e Mapas Mentais garante o acompanhamento continuo do plano de ensino e prepara os discentes para as avaliações presenciais ($\text{AVA}_1$, $\text{AVA}_2$ e $\text{AVA}_3$).

2. **Passo a Passo de Acesso**:
   - Acesse a página do Quiz pelo link disponibilizado na página do seu curso ([FSC060806](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/FSC060806/index.html) ou [FCA060903](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/FCA060903/index.html)).
   - Preencha seu **Nome Completo** e **E-mail Institucional**.
   - Insira a senha de acesso: `termo2026B1`.
   - Clique em **"Iniciar Quiz e Ativar Cronômetro (30 min)"**.
   - Responda às 10 questões e verifique as justificativas teóricas apresentadas.
   - Ao finalizar, salve seu **Código Hash de Validação** gerado na tela de encerramento.

---

## 📊 3. Planilha de Controle e Liberação dos Quizzes por Bloco

| Bloco | Aula / Tópico | Janela de Abertura | Senha de Acesso | Tempo | Status |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **Bloco 1** | **Quiz 1 — Calorimetria Sensível (Cap. 4)** | **06/08 a 09/08/2026** | `termo2026B1` | 30 min | 🟢 **LIBERADO** |
| **Bloco 1** | Quiz 2 — Mudanças de Fase e Latência (Cap. 5) | 13/08 a 16/08/2026 | `termo2026B1L` | 30 min | 📅 Agendado |
| **Bloco 2** | Quiz 3 — Diagramas de Fase (Cap. 6) | 03/09 a 06/09/2026 | `termo2026B2D` | 30 min | 📅 Agendado |
| **Bloco 2** | Quiz 4 — Transferência de Calor (Cap. 7) | 10/09 a 13/09/2026 | `termo2026B2T` | 30 min | 📅 Agendado |
| **Bloco 3** | Quiz 5 — 1ª Lei da Termodinâmica (Cap. 9) | 15/10 a 18/10/2026 | `termo2026B31` | 30 min | 📅 Agendado |
| **Bloco 3** | Quiz 6 — 2ª Lei e Ciclo de Carnot (Cap. 9) | 22/10 a 25/10/2026 | `termo2026B32` | 30 min | 📅 Agendado |

---

## ☁️ 4. Integração via Google Apps Script (Coleta Automática)

O envio das respostas é realizado de forma **100% automática** para uma planilha no Google Drive através do Google Apps Script.

### 📄 Arquivos e Links de Referência
- **URL Ativa do Web App (Apps Script)**: [`https://script.google.com/macros/s/AKfycbwM6yxL2FsK9oLUX9BXjJ_wDSQcwhfVwoKCL8gdoi2A1xduiMh8CPoA7gw-Hk80C4v7/exec`](https://script.google.com/macros/s/AKfycbwM6yxL2FsK9oLUX9BXjJ_wDSQcwhfVwoKCL8gdoi2A1xduiMh8CPoA7gw-Hk80C4v7/exec)
- **Código do Script no Repositório**: [`google_apps_script.js`](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/termodinamica/google_apps_script.js)
- **Planilha Modelo de Referência**: [Ver Modelo do Magnetismo](https://docs.google.com/spreadsheets/d/14VC4MJJw3Jo23ZU2eBN4egKu1wnQqr6mJ-wAZvXC26g/edit?usp=sharing)

### 🛠️ Passo a Passo de Implantação
1. Acesse [script.google.com](https://script.google.com) e crie um **Novo projeto** nomeado `Termodinâmica - Receptor de Quizzes`.
2. Copie o conteúdo de [`google_apps_script.js`](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/termodinamica/google_apps_script.js) e cole no editor.
3. (Opcional) Cole o ID da pasta do Google Drive em `DRIVE_FOLDER_ID`.
4. Clique em **Implantar** > **Nova implantação** > tipo **App da Web**:
   - **Executar como**: `Eu`
   - **Quem pode acessar**: `Qualquer pessoa`
5. Copie a URL do Web App gerada e cole na variável `GOOGLE_APP_SCRIPT_URL` no arquivo `quiz.html` de Termodinâmica.

### 📊 Colunas Coletadas na Planilha
1. `Timestamp / Data e Hora`
2. `Nome do Aluno`
3. `E-mail`
4. `Turma / UC (FSC060806 / FCA060903)`
5. `Quiz`
6. `Acertos`
7. `Total`
8. `Aproveitamento (%)`
9. `Tempo Gasto`
10. `Código Hash de Autenticação`
11. `Q1` a `Q10` (Alternativas marcadas)

---

## 👨‍🏫 Responsável Didático
- **Professor:** Prof. Dr. Humberto Luz Oliveira
- **Instituição:** Instituto Federal de Santa Catarina — Câmpus São José

