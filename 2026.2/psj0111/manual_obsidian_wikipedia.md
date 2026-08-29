# 🌐 MANUAL OPERACIONAL: PORTAL WIKIPÉDIA INTEGRADO AO VAULT MPE-2026-2
### Unidade Curricular: Metodologia de Pesquisa em Educação (PSJ0111) — IFSC Câmpus São José
*Manual do Usuário para Configuração, Navegação e Expansão da Wikipédia Acadêmica de TCC*

Este manual orienta a equipe docente (professores Humberto, Joce e Volmir) sobre como importar, navegar e expandir a **Wikipédia Acadêmica de Educação Ambiental** diretamente dentro do seu cofre ativo do Obsidian, denominado **`MPE-2026-2`**. 

Diferente de uma pasta isolada, esta versão foi reestruturada para mimetizar com precisão o mapeamento de diretórios contido no seu arquivo de controle **`arvore-mpe.md`**. Todo o acervo conceitual de metodologia (Natureza, Objetivos, Procedimento e Abordagem) e os **15 anteprojetos** dos alunos foram integrados em um ecossistema de notas conectadas por links bidirecionais (`[[Wiki-Links]]`) e equipados com as clássicas **Wikipedia Infoboxes** estilizadas.

---

## 📂 1. ESTRUTURA DE DIRETÓRIOS E NOTAS INTEGRADA

O arquivo compactado **`obsidian_wikipedia_vault.zip`** contém a seguinte árvore de diretórios, planejada para se mesclar diretamente e de forma transparente com a estrutura original do seu vault do Obsidian:

```
📁 MPE-2026-2/ (Pasta Principal do seu Cofre no Obsidian)
├── 📁 00 - Portal/
│   └── 📄 Home.md                         <-- Portal de Entrada da Wikipédia (Dashboard de Controle)
├── 📁 01 - Pilares Metodológicos/
│   ├── 📄 1. Natureza.md                  <-- Conceito de Pesquisa Básica vs. Aplicada
│   ├── 📄 2. Objetivos.md                  <-- Conceito de Pesquisa Exploratória, Descritiva e Explicativa
│   ├── 📄 3. Procedimento.md              <-- Mapeamento Geral de Delineamentos e Suas Fontes (Papel vs. Pessoas)
│   └── 📄 4. Abordagem.md                 <-- Conceito de Abordagem Qualitativa vs. Mista
├── 📁 02 - Delineamentos/
│   ├── 📄 Pesquisa-Ação.md                <-- Definição, Aplicação na EA e Alunos do Cluster
│   ├── 📄 Estudo de Caso.md               <-- Definição, Aplicação na EA e Alunos do Cluster
│   ├── 📄 Levantamento (Survey).md        <-- Definição, Aplicação na EA e Alunos do Cluster
│   ├── 📄 Estudo Etnográfico.md           <-- Definição, Aplicação na EA e Alunos do Cluster
│   ├── 📄 Pesquisa Bibliográfica.md       <-- Definição, Aplicação na EA e Alunos do Cluster
│   └── 📄 Pesquisa Documental.md          <-- Definição, Aplicação na EA e Alunos do Cluster
└── 📁 aula02/
    └── 📁 Levantamento-Tema/
        └── 📁 Tema-Pesquisa/
            ├── 📄 Andre Barbosa da Silva.md   <-- Ficha Individual do Aluno com Wikipedia Infobox
            ├── 📄 Dinah Guimaraes.md
            ├── ... (15 arquivos no total)
            └── 📄 Silvana Rodrigues Seara.md
```

---

## 🏛️ 2. O DESIGN DE WIKIPÉDIA NO OBSIDIAN

### A. O Dashboard Central (`Home.md`)
O arquivo central utiliza blocos de destaque nativos do Obsidian (Callouts) e tabelas com design em grid HTML para mimetizar os portais de navegação da Wikipédia tradicional:
*   **Acesso Rápido aos Pilares:** Direciona o usuário para as páginas de fundamentação dos 4 pilares: `[[1. Natureza]]`, `[[2. Objetivos]]`, `[[3. Procedimento]]` e `[[4. Abordagem]]`.
*   **Diretório por Clusters Pedagógicos:** Organiza os 15 alunos ativos em seus respectivos Grupos de Trabalho Metodológico (GTM) por proximidade temática.

### B. A Ficha do Pesquisador (Wikipedia Infobox)
Cada nota de aluno na pasta `aula02/Levantamento-Tema/Tema-Pesquisa/` conta com um **painel lateral flutuante (Infobox)** codificado em HTML nativo compatível com o Obsidian. Este painel destaca:
*   O nome completo do pesquisador e sua instituição;
*   Hiperlinks que direcionam para as notas conceituais que regem seu anteprojeto. Ao clicar em `[[1. Natureza|Aplicada]]` dentro da Infobox, o usuário é imediatamente levado ao texto conceitual de fundamentação daquela categoria.

---

## 🛠️ 3. PASSO A PASSO PARA IMPORTAR E INTEGRAR NO SEU COFRE

Como o arquivo compactado foi projetado respeitando a risca a árvore de diretórios do seu vault `MPE-2026-2`, o processo de importação é extremamente simples e não quebra nenhum link existente:

### Método A: Atualização Completa da Pasta (Recomendado)
1.  **Faça o Download:** Baixe o arquivo **`obsidian_wikipedia_vault.zip`** disponível no seu painel **Studio**.
2.  **Descompacte na Pasta de Trabalho:** Extraia o conteúdo diretamente sobre a pasta do seu cofre **`MPE-2026-2`** em seu computador.
3.  **Confirmar Substituição:** Caso o sistema pergunte, confirme a mesclagem das pastas e a substituição das notas dos 15 alunos na pasta `Tema-Pesquisa`. Suas notas originais serão enriquecidas com o design de Infoboxes e links bibliográficos de metodologia do curso.
4.  **Abra o Obsidian:** Abra o Obsidian normalmente no cofre `MPE-2026-2` e clique duas vezes em `Home.md` (na pasta `00 - Portal`).

### Método B: Para Visualização Paralela
Caso prefira testar a estrutura de forma isolada antes de fundi-la ao seu material de aula:
1.  Extraia o arquivo `obsidian_wikipedia_vault.zip` em uma pasta vazia.
2.  Abra o Obsidian e clique em **"Open folder as vault"** (Abrir pasta como cofre).
3.  Selecione a pasta extraída `MPE-2026-2` e explore a navegação de forma totalmente independente.

---

## ⚡ 4. REGRAS DE OURO E MANUTENÇÃO PEDAGÓGICA (Para a Equipe Docente)

*   **Verificação de Backlinks:** Ative o painel lateral de backlinks no Obsidian. Quando um professor abrir a nota conceitual `Pesquisa-Ação.md`, o painel lateral exibirá dinamicamente uma listagem em tempo real contendo todos os alunos que adotam esse delineamento.
*   **Edição e Atualização de Temas:** Caso um discente altere seu problema ou mude de delineamento (ex.: de *Estudo de Caso* para *Pesquisa-Ação*), basta o professor abrir a nota do aluno e alterar o link dentro do HTML da Infobox: de `[[Estudo de Caso]]` para `[[Pesquisa-Ação]]`. O Obsidian se encarregará de atualizar as conexões do gráfico em tempo real, sem quebrar os caminhos.
*   **Uso de Citações nas Notas:** Sempre que os professores **Humberto, Joce e Volmir** forem discutir os enquadramentos conceituais nas aulas práticas, as páginas de Delineamentos e Pilares contêm as referências clássicas em conformidade com as normas **ABNT NBR 10520** (Citações) e **ABNT NBR 6023** (Referências).
