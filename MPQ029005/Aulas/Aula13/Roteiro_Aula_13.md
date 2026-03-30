# Roteiro da Aula 13 - Linearização de Gráficos

## Objetivos de Aprendizagem
* Construir gráficos em papel milimetrado [1].
* Trabalhar com gráficos lineares e calcular os coeficientes da reta [1].
* Transformar o gráfico de uma curva que não é reta em um gráfico linear (técnica conhecida como linearização ou anamorfose) [1, 2].
* Calcular, a partir do gráfico linearizado, as constantes relacionadas com a curva não linear estudada [1].

## Metodologia Proposta (Passo a Passo)
O método de linearização é abordado através de uma metodologia estruturada em quatro passos práticos para análise de dados experimentais:
1. **Primeiro Passo:** Comparar a função original associada à curva graficada (por exemplo, uma parábola ou uma exponencial) com a equação reduzida da reta ($y' = Ax' + B$) para identificar os termos correspondentes [3, 4].
2. **Segundo Passo:** A partir dos dados experimentais brutos da tabela, calcular uma nova linha de valores para a variável modificada (por exemplo, $x^2$ ou $\ln y$), respeitando o uso correto de algarismos significativos e suas unidades [5, 6].
3. **Terceiro Passo:** Construir o novo gráfico linearizado em papel milimetrado utilizando os novos valores calculados [5, 7].
4. **Quarto Passo:** Calcular os coeficientes angular e linear da reta obtida através do Método dos Mínimos Quadrados (MMQ) [8, 9].

## Sumário Estruturado do Conteúdo Teórico

### 1. Definição de Linearização
Linearização é o procedimento que transforma o gráfico de uma curva que não é uma reta em um gráfico de reta. O processo consiste em encontrar uma relação matemática entre duas variáveis que satisfaça a equação da reta e permita determinar seus coeficientes linear e angular [2, 10].

### 2. Justificativa: Por que linearizar?
A análise do comportamento de uma reta é muito mais simples do que a análise de uma curva. Consequentemente, o processo de linearização facilita enormemente a descoberta e a determinação das leis físicas que governam o experimento que gerou os dados [10].

### 3. Modelos Matemáticos Explorados
* **Função Quadrática (Ex: Atividade de Aresta e Massa)**
  * Equação base: $y(x) = ax^2 + c$ [3].
  * Transformação: Plota-se $y(x)$ versus $x^2$ para obter o gráfico linear [3].
  * Equivalência da reta: $y' = y$, $x' = x^2$, coeficiente angular $A = a$, e coeficiente linear $B = c$ [3].
* **Função Exponencial (Ex: Curva de Resfriamento)**
  * Equação base: $y(x) = b \cdot e^{ax}$ [4].
  * Transformação: Aplica-se o logaritmo neperiano ($\ln$) em ambos os lados, originando a equação $\ln y(x) = \ln b + ax$ [6].
  * Equivalência da reta: O gráfico linear é obtido plotando $\ln y(x)$ versus $x$ [6]. Aqui, $y' = \ln y(x)$, $x' = x$, coeficiente angular $A = a$, e coeficiente linear $B = \ln b$ [4, 6].

### 4. Transformações Comuns para Linearização
Em princípio, as curvas oriundas de resultados experimentais podem ser graficadas se adotarmos as transformações corretas para os eixos [1]:
* Para $y(x) = Ax^2 + B$, plota-se $y$ versus $x^2$ [11].
* Para $y(x) = Ax^{1/2} + B$, plota-se $y$ versus $x^{1/2}$ [11].
* Para $y(x) = Ax^{-1} + B$, plota-se $y$ versus $x^{-1}$ [11].
* Para $y(x) = Ax^n$, plota-se $\ln y(x)$ versus $\ln x$ [11].
* Para $y(x) = A \cdot e^{bx}$, plota-se $\ln y(x)$ versus $x$ [11].

### 5. Integração com o Método dos Mínimos Quadrados (MMQ)
Após construir a nova tabela com as variáveis devidamente transformadas para o modelo linear, extraem-se os somatórios necessários ($\Sigma Y$, $\Sigma X$, $\Sigma X^2$, $\Sigma XY$) para alimentar as fórmulas do MMQ. Isso permite encontrar matematicamente a "melhor reta" representativa do conjunto e calcular suas respectivas constantes físicas com precisão [8, 9].