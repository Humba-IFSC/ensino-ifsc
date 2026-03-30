# Roteiro da Aula 10 - Análise Gráfica I

*Nota: As fontes fornecidas não detalham os objetivos, o cronograma ou as metodologias de uma aula especificamente intitulada "Aula 10 - Análise Gráfica I". O roteiro e o sumário teórico abaixo foram estruturados a partir dos amplos materiais sobre Análise e Construção de Gráficos presentes nos documentos [1-4].*

## Objetivos de Aprendizagem (Propostos)
* Compreender as normas básicas para a construção de gráficos manuais em diferentes tipos de papéis [1].
* Identificar corretamente variáveis dependentes e independentes e atribuí-las aos eixos coordenados adequados com suas respectivas unidades [5, 6].
* Determinar escalas proporcionais apropriadas e marcar pontos experimentais considerando algarismos significativos e barras de erro [7-9].
* Traçar curvas de tendência médias e extrair a equação da reta utilizando o método gráfico ou o Método dos Mínimos Quadrados (MMQ) [10-13].

## Metodologia Proposta
* **Exposição Teórica:** Apresentação das regras de construção de escalas, plotagem de pontos e identificação do comportamento linear e não linear [1, 2, 14].
* **Atividade Prática:** Construção manual de gráficos e extração de parâmetros lineares a partir de tabelas de dados experimentais [10, 15-17].

## Sumário Estruturado do Conteúdo Teórico

### 1. Papéis e Eixos Coordenados
A construção gráfica inicia-se pela escolha do papel apropriado para a função: milimetrado, mono-log (semilog) ou di-log (log-log) [1, 18-20]. 
* **Variável Independente (x):** Posicionada no eixo horizontal (abscissas), representa a grandeza controlada pelo experimentador [5, 6].
* **Variável Dependente (y):** Posicionada no eixo vertical (ordenadas). Ambos os eixos devem incluir sempre a unidade de medida das grandezas [5, 6, 21].

### 2. Determinação de Escalas
A escala dita a precisão da leitura do gráfico e obedece a regras rígidas:
* Os blocos de divisão devem assumir os valores de 1, 2, 5, 10 e seus múltiplos, o que facilita a interpolação visual. Deve-se evitar blocos de divisões com valores como 3, 7 e 11 [7, 22].
* A escala deve ser construída de forma que os dados preencham o maior espaço possível no papel, otimizando a área de plotagem [6, 7].
* As marcações na escala devem obrigatoriamente ter um número de algarismos significativos condizente com a precisão dos valores da grandeza medida [8].
* Nunca se deve assinalar o valor exato das coordenadas dos pontos experimentais sobre os eixos da escala [9, 23].

### 3. Marcação de Pontos e Traçado da Curva
* **Marcação:** Cada ponto experimental deve ser claramente identificado por um símbolo (como triângulos, cruzes ou quadrados) que não gere dúvidas, devendo vir acompanhado de sua barra de erro correspondente [9, 24].
* **Traçado:** A curva não precisa passar por todos os pontos, tampouco pelo primeiro ou último ponto [10, 13]. É incorreto ligar os pontos sequencialmente com traços retos; deve-se traçar uma curva suave que represente a tendência geral dos dados [10, 25, 26].

### 4. A Equação da Reta e Linearização
Quando a tendência dos pontos é retilínea, o comportamento é regido pela equação linear $y(x) = ax + b$ [3, 13].
* **Coeficientes:** O parâmetro $a$ é o coeficiente angular da reta e $b$ é o coeficiente linear [3]. Para calculá-los graficamente, escolhem-se dois pontos bem afastados pertencentes à reta de tendência, e não aos dados experimentais da tabela [12, 27].
* **Método dos Mínimos Quadrados (MMQ):** Trata-se do procedimento formal e estatístico usado para determinar os parâmetros $a$ e $b$ que formam a "melhor reta" minimizando os desvios (erros) em relação aos pontos medidos [11, 28-30].
* **Linearização (Anamorfose):** Para funções não lineares (quadráticas, exponenciais, etc.), o método de linearização permite transformar a curva numa reta através de trocas ou manipulações de variáveis (ex: plotar $y$ versus $x^2$ ou $\ln y$ versus $x$). Isso torna muito mais simples o cálculo dos parâmetros físicos através da determinação dos coeficientes da nova reta gerada [2, 31-34].