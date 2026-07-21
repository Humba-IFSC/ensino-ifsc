# 📅 Cronograma de Liberação Semanal de Aulas (2026.2)

Este documento serve como referência rápida para o processo de desbloqueio gradativo dos links de slides e materiais de Óptica e Acústica nos cronogramas HTML das turmas de Refrigeração e Eletromecânica.

---

## 🛠 Como desbloquear uma aula
Para liberar o acesso de uma aula nos cronogramas `FCA060906/index.html` e `FSC060805/index.html`:
1. Abra o arquivo HTML da disciplina correspondente.
2. Localize o bloco de código correspondente à **Aula** ou **Semana** desejada.
3. Remova a propriedade de estilo `style="opacity: 0.65; pointer-events: none;"` da tag `div` do card da aula.
4. Altere a badge de status (de `badge-soon` para `badge-done`, `badge-lab` ou `badge-ava` conforme a tabela abaixo).
5. Realize o commit e envie ao GitHub.

---

## 🗓 Calendário de Atividades

| Data | Semana | Aula | Nome do Conteúdo / Atividade | Status/Badge Sugerida |
| :--- | :---: | :---: | :--- | :--- |
| **Já Liberado** | 1 | Aula 01 | Apresentação e Contrato Didático | `badge-done` (✓ Concluída) |
| **Já Liberado** | 2 | Aula 02 | Fundamentos da Acústica | `badge-done` (✓ Concluída) |
| **07/08/2026** | 3 | Aula 03 | Fenômenos Acústicos, Fontes e Doppler | `badge-done` (✓ Concluída) |
| **14/08/2026** | 4 | Lab 01 | Copos Cantantes e Frequência | `badge-lab` (🔬 Laboratório) |
| **21/08/2026** | 5 | Aula 04 | Exercícios de Acústica (Estudo Dirigido) | `badge-done` (✓ Concluída) |
| **28/08/2026** | 6 | AVA 1 | Avaliação Escrita 1 — Acústica | `badge-ava` (📝 Avaliação 1) |
| **04/09/2026** | 7 | Aula 05 | Início do Bloco 2: Óptica e Espelhos Planos | `badge-done` (✓ Concluída) |
| **11/09/2026** | 8 | Aula 06 | Espelhos Esféricos Côncavos e Convexos | `badge-done` (✓ Concluída) |
| **18/09/2026** | 9 | Lab 02 | Prática: Simetria no Espelho Plano | `badge-lab` (🔬 Laboratório) |
| **25/09/2026** | 10 | Aula 07 | Resolução de Exercícios de Espelhos | `badge-done` (✓ Concluída) |
| **02/10/2026** | 11 | AVA 2 | Avaliação Escrita 2 — Óptica e Espelhos | `badge-ava` (📝 Avaliação 2) |
| **23/10/2026** | 14 | Aula 08 | Início do Bloco 3: Refração Luminosa | `badge-done` (✓ Concluída) |
| **30/10/2026** | 15 | Aula 09 | Lentes Esféricas Delgadas | `badge-done` (✓ Concluída) |
| **06/11/2026** | 16 | Lab 03 | Prática: Foco de Lente Convergente | `badge-lab` (🔬 Laboratório) |
| **13/11/2026** | 17 | Aula 10 | Resolução de Exercícios de Refração/Lentes | `badge-done` (✓ Concluída) |
| **27/11/2026** | 19 | AVA 3 | Avaliação Escrita 3 — Lentes e Refração | `badge-ava` (📝 Avaliação 3) |
| **11/12/2026** | 21 | Final | Prova de Reposição e Fechamento Final | `badge-ava` (📝 Final) |

---

*Nota: As semanas de Conselhos e Feriados não possuem links bloqueados.*
