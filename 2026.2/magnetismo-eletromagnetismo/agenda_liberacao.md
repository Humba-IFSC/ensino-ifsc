# 📅 Cronograma de Liberação Semanal de Aulas — Magnetismo (2026.2)

Este documento serve como referência rápida para o processo de desbloqueio gradativo dos links de slides e materiais de Magnetismo e Eletromagnetismo nos cronogramas HTML das turmas **FSC060804 (Telecom)** e **FCA060905 (Refrigeração)**.

---

## 🛠 Como desbloquear uma aula
Para liberar o acesso de uma aula nos cronogramas `FSC060804/index.html` e `FCA060905/index.html`:
1. Abra o arquivo HTML da disciplina correspondente.
2. Localize o bloco de código correspondente à **Aula** ou **Semana** desejada.
3. Remova a propriedade de estilo `style="opacity: 0.65; pointer-events: none;"` da tag `div` do card da aula.
4. Altere a badge de status (de `badge-soon` para `badge-done`, `badge-lab` ou `badge-ava` conforme a tabela abaixo).
5. Realize o commit e envie ao GitHub.

---

## 🗓 Calendário de Atividades (Sincronizado)

| Data (Telecom / RAC) | Semana | Aula | Nome do Conteúdo / Atividade | Status/Badge Sugerida |
| :--- | :---: | :---: | :--- | :--- |
| **Já Liberado** | 1 | Aula 01 | Introdução aos Campos Magnéticos | `badge-done` (✓ Concluída) |
| **Já Liberado** | 2 | Aula 02 | Campo das Correntes Elétricas | `badge-done` (✓ Concluída) |
| **10/08 / 11/08** | 3 | Lab 01 | Espectro Magnético e Oersted | `badge-lab` (🔬 Laboratório) |
| **17/08 / 18/08** | 4 | Aula 04 | Exercícios de Fixação (Bloco 1) | `badge-done` (✓ Concluída) |
| **24/08 / 25/08** | 5 | AVA 1 | Avaliação 1 — Fontes de Campo Magnético | `badge-ava` (📝 Avaliação 1) |
| **31/08 / 01/09** | 6 | Aula 06 | Força sobre Cargas em Movimento | `badge-done` (✓ Concluída) |
| **14/09 / 15/09** | 8 | Aula 07 | Força sobre Condutores | `badge-done` (✓ Concluída) |
| **21/09 / 22/09** | 9 | Lab 02 | Construção de Eletroímã | `badge-lab` (🔬 Laboratório) |
| **28/09 / 29/09** | 10 | Aula 09 | Exercícios de Fixação (Bloco 2) | `badge-done` (✓ Concluída) |
| **19/10 / 20/10** | 13 | AVA 2 | Avaliação 2 — Força Magnética e Matéria | `badge-ava` (📝 Avaliação 2) |
| **09/11 / 10/11** | 16 | Aula 12 | Indução Eletromagnética | `badge-done` (✓ Concluída) |
| **16/11 / 17/11** | 17 | Aula 13 | Leis da Indução e Corrente Alternada | `badge-done` (✓ Concluída) |
| **23/11 / 24/11** | 18 | Aula 14 | Exercícios de Fixação (Bloco 3) | `badge-done` (✓ Concluída) |
| **30/11 / 01/12** | 19 | AVA 3 | Avaliação 3 — Indução e Corrente Alternada | `badge-ava` (📝 Avaliação 3) |
| **07/12 / 08/12** | 20 | Final | Avaliação de Reposição Final | `badge-ava` (📝 Final) |

