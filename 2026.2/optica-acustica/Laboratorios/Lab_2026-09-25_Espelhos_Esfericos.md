---
course: "Acústica e Óptica Geométrica (FCA060906 & FSC060805)"
date_rac: 2026-09-25
date_tele: 2026-09-28
block: 2
type: "Laboratório Prático"
tags:
  - optica
  - laboratorio
  - espelhos-esfericos
  - gauss
  - foco
---

# 🔬 Roteiro Prático II: Espelhos Esféricos
## Determinação da Distância Focal, Raio de Curvatura, Validação da Equação de Gauss e Fator de Ampliação Linear

**Unidades Curriculares:** FCA060906 (Técnico Integrado em Refrigeração) & FSC060805 (Técnico Integrado em Telecomunicações)  
**Professor:** Prof. Dr. Humberto Luz Oliveira — IFSC Câmpus São José  
**Datas:** 
- Refrigeração (RAC - FCA060906): **25/09/2026**
- Telecomunicações (Tele - FSC060805): **28/09/2026**

---

## 🎯 1. Objetivos de Aprendizagem

1. **Qualitativo:** Observar experimentalmente no banco óptico o comportamento dos raios de luz notáveis nos espelhos côncavo e convexo, identificando a natureza das imagens (reais vs. virtuais, direitas vs. invertidas).
2. **Quantitativo:** Mapear experimentalmente as posições do objeto ($p$) e da imagem ($p'$), medir suas respectivas alturas ($o$ e $i$), determinar a distância focal experimental ($f_{exp}$) e testar a igualdade do fator de ampliação linear:
   $$A = \frac{i}{o} = -\frac{p'}{p}$$
3. **Investigativo:** Ir além do modelo estritamente qualitativo do livro de texto (Ramalho), determinando o centro de curvatura ($C$) pela condição direta $p = p' = R$, estimando o raio de curvatura e avaliando a precisão e limitações das condições de nitidez de Gauss.

---

## 🛠️ 2. Materiais e Equipamentos Necessários

### A) Kit de Demonstração Coletiva (Bancada de Abertura — Sistema Azeheb)
- Trilho de alumínio graduado com suportes deslizantes (cavaleiros);
- Fonte luminosa de feixes paralelos / laser para óptica geométrica;
- Espelhos esféricos côncavo e convexo montados em cavaleiros;
- Disco ou plano graduado para rastreamento angular das trajetórias refletidas.

### B) Kits Práticos dos Grupos de Alunos (Bancadas de Coleta de Dados)
- Trilho graduado com cavaleiros móveis de fixação;
- Fonte luminosa objeto: vela montada em suporte seguro (ou objeto vazado com LED/projeção);
- Espelho esférico côncavo (foco comercial estimado entre 15 cm e 20 cm);
- Espelho esférico convexo;
- Anteparo translúcido ou tela branca milimetrada para projeção de imagens reais;
- Régua milimetrada de precisão para medição direta das alturas ($o$ e $i$).

---

## 🧪 3. Procedimento Experimental

### Parte 1: Demonstração Coletiva — Banco Óptico Azeheb (~25 min)
Antes da etapa prática individual, o professor apresentará na bancada principal o comportamento físico dos raios incidentes paralelos ao eixo principal nos espelhos côncavo e convexo:
1. **Foco Real no Espelho Côncavo:** Ao incidir feixes de luz paralelos, os raios refletidos convergem para um único ponto situado sobre o eixo principal diante da superfície refletora. Este ponto é o **Foco Principal Real ($F$)**. Registre a distância do vértice ao foco para comparação posterior.
2. **Foco Virtual no Espelho Convexo:** Ao incidir os mesmos feixes no espelho convexo, os raios refletidos emergem divergindo. O rastreamento visual demonstra que os prolongamentos dos raios refletidos convergem para um ponto situado atrás da superfície refletora: o **Foco Principal Virtual ($F'$)**.

---

### Parte 2: Atividade Prática em Grupos — Coleta e Medições (~60 min)

#### Etapa A: Determinação Direta do Centro de Curvatura ($C$) e Raio ($R$)
1. Posicione a vela acesa no cavaleiro e coloque o anteparo branco imediatamente ao seu lado no mesmo plano transversal do trilho.
2. Desloque o espelho côncavo ao longo do trilho até obter no anteparo uma imagem da chama da vela perfeitamente nítida, invertida e de mesmo tamanho que a chama real ($i = -o$).
3. Quando a imagem e o objeto possuem a mesma dimensão, ambos encontram-se exatamente sobre o **Centro de Curvatura ($C$)**, pois $p = p' = R$.
4. Anote a distância do vértice do espelho até o plano vela/anteparo. Esta distância corresponde ao **Raio de Curvatura ($R$)** e fornece a distância focal de referência:
   $$f_{ref} = \frac{R}{2}$$

#### Etapa B: Mapeamento de Posições e Validação da Equação de Gauss
Ajuste a vela em quatro regiões distintas no eixo de deslocamento e preencha a tabela de dados:

| Ensaio | Região do Objeto | $p$ (cm) | $p'$ (cm) | $o$ (cm) | $i$ (cm) | $f_{exp}$ (cm) | $A_{exp} = \frac{i}{o}$ |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | Antes de C ($p > R$) | | | | | | |
| 2 | Sobre C ($p = R$) | | | | | | |
| 3 | Entre C e F ($f < p < R$) | | | | | | |
| 4 | Entre F e V ($p < f$) | | *Virtual* | | | — | |
| 5 | Espelho Convexo | | *Virtual* | | | — | |

> [!tip] **Nota de Convenção de Sinais**
> Imagens invertidas projetadas no anteparo devem ter sua altura registrada com sinal negativo ($i < 0$) e aumento negativo ($A < 0$). Para os ensaios virtuais (4 e 5), observe a imagem diretamente pela superfície refletora do espelho.

---

## 📊 4. Tratamento de Dados e Análise Quantitativa (~15 min)

Execute os seguintes passos analíticos para consolidar as medidas da bancada:

1. **Distância Focal Experimental ($f_{exp}$):** Para os ensaios 1, 2 e 3 (imagens reais), calcule a distância focal isolando a Equação de Gauss:
   $$f_{exp} = \frac{p \cdot p'}{p + p'}$$

2. **Validação da Ampliação Linear ($A$):** Calcule o fator de ampliação experimental direto $A_1 = \frac{i}{o}$ e compare com a razão das posições $A_2 = -\frac{p'}{p}$. Determine o erro relativo percentual:
   $$\text{Erro}(\%) = \left| \frac{A_1 - A_2}{A_2} \right| \times 100\%$$

3. **Desvio Relativo da Distância Focal:** Obtenha a média dos focos calculados ($f_{médio}$) e compare com o foco de referência ($f_{ref} = R/2$):
   $$\text{Desvio}(\%) = \left| \frac{f_{médio} - f_{ref}}{f_{ref}} \right| \times 100\%$$

---

## ❓ 5. Questões para Discussão e Fechamento Pedagógico

- **Questão 1:** Por que as imagens virtuais (Ensaio 4 no côncavo e Ensaio 5 no convexo) não podem ser capturadas no anteparo?
- **Questão 2:** Quais foram as principais fontes de incerteza experimental na determinação de $p'$ e da altura $i$ (ex.: espessura da chama, nitidez no anteparo, paralaxe)?
- **Questão 3:** Como as condições de nitidez de Gauss (raios paraxiais próximos ao eixo principal) foram mantidas na prática e qual o efeito do diâmetro do espelho na nitidez da projeção?

---

## 🔗 Navegação e Recursos
- 📥 [Baixar Roteiro Oficial em PDF](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/optica-acustica/Laboratorios/roteiro_pratico_espelhos_esfericos.pdf)
- 🧪 [Acessar Guia Interativo e Calculadora em HTML](Lab_2026-09-25_Espelhos_Esfericos.html)
- 🏠 [Central de Óptica e Acústica](../index.html)
- 📗 [Dashboard Telecomunicações (FSC060805)](../../FSC060805/index.html)
- ❄️ [Dashboard Refrigeração (FCA060906)](../../FCA060906/index.html)
