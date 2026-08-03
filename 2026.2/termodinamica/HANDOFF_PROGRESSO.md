# 📋 Progresso — Termodinâmica (2026.2) — Handoff de Sessão

> **Última atualização:** 31/07/2026 · Prof. Humberto Luz Oliveira
> Este arquivo registra o estado do projeto de materiais didáticos de **Termologia e Termodinâmica** (FSC060806 / FCA060903) para retomada em próxima sessão.

---

## ✅ Concluído na última sessão

### 1. Bloco-3/Aula05 (1ª Lei da Termodinâmica, 23/10) — COMPLETA
- Material deslocado movido de `Aulas/Bloco-3/Aula09/` → `Aulas/Bloco-3/Aula05/`
  (estudo_dirigido, flashcards, `Leis_Termo_Aula05.csv`). **Aula09 removida** (só tinha quiz redundante de 1 questão, sem referências no projeto).
- `estudo_dirigido.{md,html}` **enriquecidos** com 6 seções a partir das fontes NotebookLM:
  1. Conceitos Fundamentais
  2. Trabalho Termodinâmico e o Diagrama $p \times V$
  3. Energia Interna e a Lei de Joule
  4. A Primeira Lei da Termodinâmica
  5. Particularidades das Transformações Gasosas (tabela)
  6. Calores Molares e Relação de Mayer
- `flashcards.{md,html}` ampliados de 2 para **12 cards** interativos (base: `Leis_Termo_Aula05.csv`).
- `quiz.{md,html}` da Aula05 já estava completo (10 questões) — mantido.

### 2. `termodinamica/index.html` — CORRIGIDO
- **CSS:** `../assets/style.css` → `../../assets/style.css`
  (⚠️ `2026.2/assets/` NÃO existe; o CSS real está em `assets/style.css` na raiz do repo — **todos os index.html da 2026.2 têm esse mesmo bug**, corrigido apenas na termodinâmica).
- **Painel de blocos** agora lista TODAS as aulas existentes:
  - Bloco 1: Aula01, Aula02, Aula03, Aula04-EP
  - Bloco 2: Aula03, Aula04, Aula06, Aula07, Aula08-EP
  - Bloco 3: Aula05, Aula06, Aula12, Aula13, Aula14-EP

### 3. Validação (skills do usuário)
- `skill_course_validator` (`validate_links.py`): 40 HTMLs · 95 arquivos locais · **0 erros críticos**
- `skill_course_audit` (`audit_course.py`): 40 HTMLs · 163 links · **STATUS: SUCESSO (100% LIMPO)**

---

## 🔧 Pendências identificadas (próximas sessões)

### Alta prioridade
- [ ] **Aulas EP sem flashcards**: `Aula04-EP`, `Aula08-EP`, `Aula14-EP` só têm estudo_dirigido + quiz
- [ ] **CSS quebrado nos demais index.html da 2026.2**: `FSC060804`, `FCA060905`, `FSC060805`, `FCA060906`, `optica-acustica`, `magnetismo-eletromagnetismo`, `psj0111`, `FSC060806`, `FCA060903`, `2026.2/index.html` — todos usam `../assets/style.css` (inexistente); corrigir para `../../assets/style.css`

### Média prioridade (inconsistências de conteúdo)
- [ ] **Aula02 (Bloco-1)**: quiz.md/flashcards tratam de **Calorimetria Sensível** mas a aula é **Mudança de Fase/Latência** — corrigir conteúdo
- [ ] **Aula12/Aula13 (Bloco-3)**: falta a linha "Identificador NotebookLM" no cabeçalho (demais aulas têm)
- [ ] **Aula05 antiga referida como "Aula09"** no index.html de outras pastas? (verificar referências cruzadas)

### Skills do usuário disponíveis
- 📁 `/home/humba/.gemini/antigravity/skills/`
  - `skill_perito_termodinamico` — roteiros "missões antifraude" (narrativa T-300 K / Código Albedo)
  - `skill_elaborador_provas_fisica` — avaliações padrão ENEM/UFSC + TBR (5 questões, somatório 01-16)
  - `skill_course_validator` / `skill_course_audit` — scripts Python de QA de links (`validate_links.py`, `audit_course.py`)
  - `skill_course_sync` — sincronização de menus/navegação entre dashboards
- 📁 `/media/humba/Projetos/IFSC/2026.2/.claude/skills/` — skills Obsidian (obsidian-markdown, obsidian-bases, obsidian-cli, defuddle, json-canvas)

---

## 🗂️ Estrutura de referência

```
termodinamica/
├── index.html                    ← painel central (links validados ✅)
├── Termodinâmica.md              ← plano semestral (links [[wikilinks]])
├── Sistema Avaliativo.md
├── Aulas/
│   ├── Bloco-1/  Aula01, Aula02, Aula03, Aula04-EP
│   ├── Bloco-2/  Aula03, Aula04, Aula06, Aula07, Aula08-EP
│   └── Bloco-3/  Aula05, Aula06, Aula12, Aula13, Aula14-EP
├── Avaliacoes/  (AVA 1, 2, 3, Final/Reposição)
├── Laboratorios/  (Lab 01, 02, 03)
├── Caps_Ramalho/  (PDFs Caps 4-7 e 9)
└── 🔥 Notebooklm-Termodinamica/  (49 fontes — consultar para gerar novos materiais)
```

**Padrão por aula:** cada aula deve ter `estudo_dirigido.{md,html}` + `flashcards.{md,html}` + `quiz.{md,html}` (EPs sem flashcards). Cabeçalho do estudo dirigido: Disciplina · Livro Base (Ramalho Vol. 2, Cap. X) · Identificador NotebookLM (backtick).
