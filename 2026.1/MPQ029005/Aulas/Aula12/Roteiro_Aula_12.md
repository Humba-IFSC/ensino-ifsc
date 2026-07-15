# Roteiro da Aula 12 - Método dos Mínimos Quadrados (MMQ)

## Objetivos de Aprendizagem
* Entender o problema da determinação dos coeficientes $a$ e $b$ que melhor representam a relação linear entre duas variáveis aleatórias (na forma $y = ax + b$) a partir de um conjunto de dados experimentais [1].
* Compreender o conceito estatístico de minimização dos desvios quadráticos para encontrar a melhor reta de ajuste, evitando a subjetividade do traçado manual [2-4].
* Aprender a calcular os parâmetros (coeficiente angular e coeficiente linear) utilizando as fórmulas do Método dos Mínimos Quadrados (MMQ) [4-6].
* Aplicar o MMQ em dados experimentais práticos (ex: Movimento Retilíneo Uniforme - MRU) e comparar os resultados analíticos com a extração de dados pelo Método Gráfico (MG) [5, 7-9].

## Metodologia Proposta
A abordagem sugerida pelas notas e apostilas foca em uma sequência teórico-prática para a modelagem de dados de laboratório:
1. **Introdução Teórica e Problematização:** Apresentação da necessidade do ajuste de curvas (regressão linear) em ciências experimentais. Destaca-se a importância de que os estudantes entendam e verifiquem a validade das fórmulas antes de utilizar algoritmos computacionais prontos como "caixas-pretas" [1, 10].
2. **Desenvolvimento Matemático:** Demonstração do modelo. Apresentação da função dos desvios $f(a,b) = \sum (y_i - ax_i - b)^2$ e das equações deduzidas para encontrar os coeficientes que minimizam essa função [2, 4].
3. **Aplicação Prática Guiada (Exemplo do MRU):** Resolução passo a passo de um conjunto de dados medidos de posição ($x$) e tempo ($t$), efetuando a construção das tabelas de somatórios ($\sum x, \sum t, \sum t^2, \sum x \cdot t$) essenciais para alimentar as equações [5, 7].
4. **Comparação de Métodos:** Cálculo da reta traçada visualmente por meio da escolha de dois pontos arbitrários (Método Gráfico) e a sobreposição das duas retas (MMQ e MG) no mesmo gráfico para análise de precisão [8, 9].

## Sumário Estruturado do Conteúdo Teórico

### 1. O Problema da Regressão Linear
Ao representar graficamente uma sucessão de pontos experimentais que apresentam um comportamento linear, diferentes experimentadores podem traçar diferentes retas "a olho" que acompanham a tendência, resultando em diferentes valores para os coeficientes. O Método dos Mínimos Quadrados busca resolver essa ambiguidade determinando, de forma analítica, os melhores estimadores para a relação linear $y = ax + b$ [1, 2, 10]. Em situações onde o fenômeno inicial não é linear (como leis de potência ou exponenciais), o experimento deve primeiro passar por uma linearização (por troca de variáveis ou propriedades logarítmicas) antes da aplicação do MMQ [10-12].

### 2. O Princípio dos Mínimos Quadrados
O método estabelece um critério analítico de erro: a "melhor reta" deve ser aquela em que a soma dos quadrados das diferenças (resíduos ou desvios) entre os valores reais medidos experimentalmente $y_i$ e os valores estimados pela equação da reta $(ax_i + b)$ seja a menor possível. Em termos matemáticos, busca-se os parâmetros $a$ e $b$ que minimizam a função:
$$f(a,b) = \sum_{i=1}^N (y_i - ax_i - b)^2$$ [2-4].

### 3. Fórmulas para os Coeficientes
A partir da minimização desta função em relação às variáveis de interesse, obtêm-se as expressões clássicas para o cálculo dos parâmetros da reta que melhor ajusta os dados [4-6]:

*   **Coeficiente Angular ($a$ ou $A$):**
    $$a = \frac{N \sum (x \cdot y) - \sum x \sum y}{N \sum x^2 - (\sum x)^2}$$

*   **Coeficiente Linear ($b$ ou $B$):**
    $$b = \frac{\sum y \sum x^2 - \sum x \sum (x \cdot y)}{N \sum x^2 - (\sum x)^2}$$
*(Obs: $N$ corresponde ao número total de pares de pontos medidos no experimento).*

### 4. Contraste com o Método Gráfico (MG)
No Método Gráfico clássico, traça-se uma reta de ajuste visual tentando compensar os desvios. O coeficiente angular é determinado por $a = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}$, utilizando obrigatoriamente dois pontos arbitrários que pertencem *à reta traçada*, e nunca os pontos dispersos da tabela. Recomenda-se escolher pontos distantes para diminuir o erro no cálculo. O coeficiente linear $b$ é obtido substituindo-se os dados de um dos pontos, ou pela leitura direta do eixo vertical (extrapolação) [8, 13]. Comparar o MG ao MMQ permite que os alunos compreendam visual e algebricamente o processo de otimização no tratamento de dados experimentais [8, 9].