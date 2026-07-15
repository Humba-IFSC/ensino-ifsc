# Aula 12 - Método dos Mínimos Quadrados (MMQ) (11/05/2026)

## 1. Introdução
Na física e na química experimental, é muito frequente nos depararmos com o problema de determinar a melhor relação linear entre duas grandezas a partir de um conjunto de pares de valores medidos $(x_i, y_i)$ em laboratório [1]. Contudo, devido à presença de erros experimentais (como os erros aleatórios de medida), raramente os pontos experimentais se alinham de forma perfeita sobre uma única reta ao serem plotados em um gráfico [2, 3]. O Método dos Mínimos Quadrados (MMQ) é uma técnica estatística de regressão linear utilizada justamente para determinar os coeficientes dessa "melhor reta" que se ajusta ao conjunto de dados coletados [2-4].

## 2. O Conceito de Minimização de Resíduos
A base matemática deste método reside em encontrar a reta que gere a menor discrepância possível em relação aos dados empíricos [2, 5]. Essa diferença é chamada de **resíduo**, definido como a variação entre o valor experimental obtido (real) e o valor estimado teoricamente pela equação de regressão [5]. 

Se buscamos ajustar os dados a uma função retilínea do tipo $y = ax + b$, o MMQ encontra os estimadores ótimos $a$ e $b$ por meio da minimização do somatório dos quadrados desses resíduos, que pode ser expresso pela função $f(a,b) = \sum_{i=1}^N (y_i - ax_i - b)^2$ [1, 2].

## 3. Fórmulas do MMQ
Considerando a equação da reta no formato $Y = A + BX$, onde $A$ representa o coeficiente linear (ponto em que a reta intercepta o eixo das ordenadas) e $B$ representa o coeficiente angular (a inclinação da reta), o método fornece as seguintes equações fundamentais para $N$ medidas [6, 7]:

*   **Coeficiente Linear ($A$):**
$$A = \frac{\Sigma Y \Sigma X^2 - \Sigma X \Sigma (XY)}{N \Sigma X^2 - (\Sigma X)^2}$$ [6, 7]

*   **Coeficiente Angular ($B$):**
$$B = \frac{N \Sigma (XY) - \Sigma X \Sigma Y}{N \Sigma X^2 - (\Sigma X)^2}$$ [6, 7]

*(Nota: Alguns materiais utilizam a notação matemática $y = ax + b$, mas a estrutura lógica para isolar o termo angular e o termo linear através das somas permanece rigorosamente a mesma [4, 8, 9]).*

## 4. O Papel da Linearização de Curvas
É imperativo destacar que as equações do MMQ apresentadas são estritamente aplicadas a funções lineares [1, 10]. Entretanto, inúmeros modelos que descrevem fenômenos físicos comportam-se como curvas (funções quadráticas do tipo $y = ax^2 + c$, ou exponenciais do tipo $y = Ae^{Bx}$) [11-13]. 

Para que seja possível aplicar o MMQ nesses casos, é obrigatório executar antes o processo de **linearização** [10, 11, 14]. Essa técnica consiste em aplicar artifícios matemáticos (como logaritmos ou substituição de variáveis) para "desentortar" o gráfico [10, 12]. Ao tomar como exemplo uma parábola $y(x) = a x^2 + c$, adota-se uma nova variável $x' = x^2$ [15, 16]. Com isso, passa-se a analisar o gráfico de $y(x)$ versus $x^2$, que é uma reta, permitindo extrair os coeficientes da curva utilizando as fórmulas do MMQ [14, 16, 17].

## 5. Procedimento Prático
A forma mais segura e didática de aplicar o MMQ manualmente em sala de aula é através da construção e organização de uma tabela [8, 16, 17]. Os passos são:
1. Contabilizar o número total de amostras/pontos ($N$) [7, 8].
2. Calcular o somatório das variáveis independentes ($\Sigma X$) e dependentes ($\Sigma Y$) [7, 8, 17].
3. Elevar cada coordenada $X$ ao quadrado e somá-las para obter $\Sigma X^2$ [7, 8, 17].
4. Multiplicar ordenadamente cada par $(X \cdot Y)$ e somar esses resultados para calcular $\Sigma (XY)$ [7, 8, 17].
5. Substituir todos esses somatórios parciais nas fórmulas teóricas de $A$ e $B$ [7, 17, 18].

Após este procedimento, você obterá a equação paramétrica da reta ótima. Ferramentas modernas e softwares estatísticos automatizam este processo (comumente chamado de regressão) e também calculam parâmetros adicionais, como os erros das variáveis e coeficientes de determinação que indicam a aderência dos pontos à reta, mas é fundamental que o aluno entenda qual algoritmo e matemática fundamentam o método antes de utilizá-lo [1, 5, 19].