# Aula 13 - Linearização de Gráficos (18/05/2026)

## 1. O que é a Linearização de Gráficos?
A linearização (ou anamorfose) é um procedimento matemático e gráfico utilizado para transformar uma curva que não é uma reta em um gráfico linear [1, 2]. O objetivo central dessa técnica é encontrar uma relação matemática entre duas variáveis experimentais que satisfaça a equação reduzida da reta, geralmente expressa como $Y = AX + B$ [2, 3].

**Por que devemos linearizar?** 
Em ciências experimentais, a análise de uma reta é consideravelmente mais simples do que a análise de uma curva [2]. O processo de linearização facilita a extração de parâmetros físicos importantes, permitindo determinar as leis empíricas que governam o experimento através do cálculo dos coeficientes angular ($A$) e linear ($B$) da reta ajustada [1, 2].

## 2. O Princípio do Método
O método consiste fundamentalmente em fazer uma mudança de variáveis conveniente [4, 5]. Nós comparamos a função teórica que descreve o fenômeno com a equação da reta $Y' = A \cdot X' + B'$, onde $Y'$ e $X'$ representam as nossas novas variáveis linearizadas [3, 4].

Vejamos como isso se aplica a diferentes tipos de funções:

### Exemplo A: Função Quadrática
Suponha que os dados do seu experimento sigam o modelo de uma parábola: $y(x) = a \cdot x^2 + c$ [6]. 
Para linearizar, comparamos com a equação da reta $Y' = A \cdot X' + B'$:
* Variável dependente: $Y' = y(x)$
* Variável independente: $X' = x^2$
* Coeficiente angular: $A = a$
* Coeficiente linear: $B = c$ [3].
Na prática, você deve calcular uma nova coluna na sua tabela de dados contendo os valores de $x^2$ e, em seguida, plotar um gráfico de $y(x)$ versus $x^2$, o que resultará em uma linha reta [7].

### Exemplo B: Função Inversa
Se a relação entre as variáveis for do tipo $y(x) = \frac{g}{x} + h$ [4], a troca de variáveis será:
* $Y' = y(x)$
* $X' = \frac{1}{x}$
* $A = g$ (coeficiente angular)
* $B = h$ (coeficiente linear) [4, 8].
O gráfico linearizado será obtido traçando $y(x)$ versus $1/x$ [8].

### Exemplo C: Função Exponencial
Muitos fenômenos, como o resfriamento de um corpo ou o descarregamento de um capacitor, seguem a lei exponencial: $y(x) = b \cdot e^{ax}$ [9]. 
Para linearizar esta função, aplicamos o logaritmo neperiano ($\ln$) em ambos os lados da igualdade: 
$\ln(y) = \ln(b) + a \cdot x$ [10].
Comparando com a reta:
* $Y' = \ln(y)$
* $X' = x$
* $A = a$
* $B = \ln(b)$ [10].
Portanto, o gráfico será linear se plotarmos $\ln(y)$ versus $x$ [10].

## 3. Passo a Passo para a Prática de Laboratório
Quando estiver elaborando seu relatório ou analisando seus dados, siga esta receita [3, 7, 11, 12]:
1. **Identificação:** Identifique a função teórica e compare-a com a equação da reta ($Y = AX + B$).
2. **Nova Tabela:** A partir dos dados brutos ($x$ e $y$), calcule os novos valores para a sua variável independente e/ou dependente (ex: $x^2$, $1/x$, $\ln(y)$). Lembre-se de respeitar os algarismos significativos.
3. **Construção do Gráfico:** Plote as novas variáveis em um papel milimetrado. A tendência dos pontos deverá ser linear.
4. **Cálculo dos Parâmetros:** Utilize o Método dos Mínimos Quadrados (M.M.Q.) ou o método gráfico para calcular os coeficientes angular ($A$) e linear ($B$) da melhor reta. Com eles, determine as constantes originais do seu problema físico.

## 4. O Uso de Papéis Especiais
Embora possamos recalcular os dados e usar papel milimetrado padrão, existem papéis gráficos especiais que "fazem o cálculo" matematicamente nas próprias escalas:
* **Papel Mono-log (Semilog):** Possui um eixo linear e outro logarítmico. É ideal para linearizar funções exponenciais ($y = C \cdot e^{\alpha x}$) sem a necessidade de calcular os logaritmos dos dados manualmente na tabela [13-15].
* **Papel Di-log (Log-log):** Possui ambos os eixos em escala logarítmica. É excelente para fenômenos regidos por leis de potência ($y = k \cdot x^n$), transformando a curva em reta ao se traçar simplesmente $y$ versus $x$ neste papel [16-18].

## 5. Tabela Resumo de Linearizações Comuns
Para facilitar seus estudos, aqui está um guia rápido de como linearizar as funções mais frequentes no laboratório [19]:

| Função do Fenômeno | Gráfico Original (Não linear) | Como Linearizar (O que plotar) |
| :--- | :--- | :--- |
| $y(x) = Ax^2 + B$ | $y$ versus $x$ | $y$ versus $x^2$ |
| $y(x) = Ax^{1/2} + B$ | $y$ versus $x$ | $y$ versus $x^{1/2}$ |
| $y(x) = Ax^{-1} + B$ | $y$ versus $x$ | $y$ versus $x^{-1}$ |
| $y(x) = Ax^3 + B$ | $y$ versus $x$ | $y$ versus $x^3$ |
| $y(x) = B \cdot e^{Ax}$ | $y$ versus $x$ | $\ln(y)$ versus $x$ |
| $y(x) = A \cdot x^n$ | $y$ versus $x$ | $\ln(y)$ versus $\ln(x)$ |
| $y(x) = A\cos(x) + B$| $y$ versus $x$ | $y$ versus $\cos(x)$ |

Bons estudos e aproveitem ao máximo o processo de descoberta no laboratório analisando e retificando seus gráficos!