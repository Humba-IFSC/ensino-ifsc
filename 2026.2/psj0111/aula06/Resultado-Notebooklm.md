## resultado do prompt de busca

Para obter o maior alcance de resultados na **Web of Science (WOS)**, a melhor estratégia é traduzir e estruturar os conceitos em inglês utilizando operadores booleanos (`AND`, `OR`, `NOT`), aspas para termos compostos exatos e o caractere de truncamento `*` para capturar variações das palavras.

Como a **Lei nº 14.260/2021** é uma legislação especificamente brasileira, as buscas internacionais de alto impacto podem não citar a lei diretamente, mas sim os conceitos subjacentes (**incentivos fiscais na cadeia de reciclagem**). Por isso, as buscas abaixo foram desenhadas para capturar tanto o contexto nacional exato quanto a teoria internacional equivalente, garantindo a abrangência que você precisa.

Abaixo estão as duas configurações de busca prontas para uso:

---

### 1. Fielded Search (Busca por Campos Individuais)

Na interface padrão da Web of Science, você pode adicionar várias linhas utilizando o botão **"+ Add row"** e selecionar o campo **Topic** (Tópico) para todas elas, conectando-as com o operador **AND**.

Configure os campos do formulário da seguinte forma:

- **Campo 1: Topic** `("tax incentive*" OR "fiscal incentive*" OR "tax benefit*" OR "Law 14260" OR "Law 14.260" OR "Lei 14260" OR "Lei 14.260")` _(Este campo cobre as políticas de incentivo fiscal e a menção direta à lei brasileira)_
- **AND**
- **Campo 2: Topic** `("recycling" OR "recycle*" OR "recycling chain*" OR "recycling industry" OR "waste management")` _(Este campo foca na reciclagem e sua cadeia produtiva)_
- **AND**
- **Campo 3: Topic** `("environmental education" OR "sustainability education" OR "green education")` _(Este campo foca na educação ambiental)_
- **AND**
- **Campo 4: Topic** `("content analysis" AND ("Bardin" OR "Laurence Bardin"))` _(Este campo restringe os resultados estritamente à metodologia de análise de conteúdo de Laurence Bardin)_

---

### 2. Query Builder / Advanced Search (Busca Avançada)

Se você preferir utilizar a ferramenta de **Query Builder** ou a caixa de busca em uma única linha (Advanced Search), copie e cole a seguinte string de busca consolidada. Ela utiliza o prefixo `TS=` (Topic), que pesquisa simultaneamente no Título, Resumo (Abstract), Palavras-chave do autor e Keywords Plus da Web of Science:

```
TS=(("tax incentive*" OR "fiscal incentive*" OR "tax benefit*" OR "Law 14260" OR "Law 14.260" OR "Lei 14260") AND ("recycling" OR "recycle*" OR "recycling chain*") AND ("environmental education" OR "sustainability education") AND ("content analysis" AND (Bardin OR "Laurence Bardin")))
```

#### Opção Alternativa (Mais Ampla):

Como a metodologia de Bardin é extremamente popular no Brasil e em países de língua hispânica/francesa, mas às vezes descrita apenas como "content analysis" em periódicos internacionais (citando Bardin apenas nas referências bibliográficas, as quais não são cobertas pelo campo _Topic_), se a busca acima trouxer poucos resultados, você pode utilizar esta versão ligeiramente mais ampla:

```
TS=(("tax incentive*" OR "fiscal incentive*" OR "tax benefit*" OR "Law 14260" OR "Law 14.260" OR "Lei 14260") AND ("recycling" OR "recycle*" OR "recycling chain*") AND ("environmental education" OR "sustainability education") AND "content analysis")
```

---

### 💡 Dicas de Ouro para Encontrar Artigos de "Alto Impacto" na WOS

1. **Ordenação por Citações (Citations: highest first):** Após processar a busca, mude o filtro de ordenação padrão (que costuma ser _Relevance_ ou _Date_) para **"Citations: highest first"**. Isso colocará no topo os artigos mais influentes e citados academicamente no mundo sobre esse tema.
2. **Filtro Quick Filters / Highly Cited Papers:** Na barra lateral esquerda dos resultados, ative o filtro de **"Highly Cited Papers"** (Artigos Altamente Citados). Isso filtrará apenas os trabalhos que estão no top 1% de citações em suas respectivas áreas de atuação.
3. **Refinar por Tipo de Documento:** Para focar em pesquisas consolidadas e revisadas por pares, utilize o filtro lateral **Document Types** e selecione apenas **"Article"** (Artigos de pesquisa) e **"Review Article"** (Artigos de revisão de literatura, ótimos para entender o estado da arte do tema).

Se precisar que eu faça uma busca inicial na web para trazer resumos de artigos internacionais de destaque sobre incentivos fiscais na reciclagem e educação ambiental, é só pedir!