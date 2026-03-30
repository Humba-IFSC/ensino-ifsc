# Aula 08 - Teoria de Erros III (06/04/2026)

Bem-vindos à Aula 08! Neste material, vamos aprofundar nossos conhecimentos sobre a Teoria de Erros, abordando como quantificar, propagar e representar as incertezas inerentes a qualquer processo de medição científica.

## 1. Introdução: A Incerteza na Medida
Nenhuma medida pode ser feita com certeza absoluta; sempre haverá uma dúvida associada [1, 2]. O objetivo da Teoria de Erros é justamente quantificar essas incertezas para que possamos avaliar a confiabilidade dos nossos dados [3, 4]. Em um laboratório, buscamos atingir tanto a **precisão** (medidas próximas entre si, com pequena barra de erro) quanto a **exatidão** (medidas concordantes com os valores padrões teóricos) [3-5].

Para isso, dividimos as fontes de incerteza em três categorias principais:
*   **Erro de Escala ($E_e$):** Relacionado ao limite de resolução do próprio instrumento. Em instrumentos digitais, equivale à menor divisão de escala (MDE); em analógicos, equivale a MDE/2; e em instrumentos com nônio (como o paquímetro), divide-se a menor divisão principal pelo número de divisões do nônio [6-8].
*   **Erro Aleatório ($E_a$):** Originário de fatores imprevisíveis e estatísticos presentes em todo experimento (como reflexo do operador ou rajadas de vento) [9, 10]. É minimizado pelo controle do experimento e repetição de medidas, sendo calculado com base no desvio padrão da média ($\sigma_m$): $E_a = t \cdot \sigma_m$ [8, 11, 12].
*   **Erro Sistemático ($E_s$):** Desvia as medidas sempre em um mesmo sentido, geralmente devido a falhas de calibração ou fatores instrumentais conhecidos, podendo muitas vezes ser eliminado [9, 10].

## 2. Erro Total e Escrita do Resultado
Quando um experimento está sujeito a múltiplas fontes de incerteza que puderam ser quantificadas, o **Erro Total** ($\Delta G$) da medida é assumido como a soma desses erros: $\Delta G = E_e + E_a + E_s$ [10, 13].

A regra de ouro da Teoria de Erros dita a forma padrão de escrever o resultado final:
**O erro do resultado deve ter apenas UM algarismo significativo** [13-15]. 
Como o erro já representa a incerteza (o algarismo duvidoso), não faz sentido apresentar vários dígitos de dúvida [1, 13]. Se os cálculos fornecerem um erro com vários dígitos, você deve **arredondar sempre PARA MAIS** [13-15]. 

A medida final deve ter concordância de casas decimais com o seu erro. A forma padrão é expressa como: $Grandeza = (resultado \pm erro) \ unidade$ [6, 7].

## 3. Propagação de Erros
A propagação de erros é utilizada quando precisamos determinar a incerteza de uma grandeza "$y$" que não foi medida diretamente, mas sim **calculada** a partir de outras grandezas medidas experimentalmente ($x_1, x_2, x_3...$) [16, 17].

A determinação do erro máximo propagado é feita tomando-se o módulo das derivadas parciais da função em relação a cada variável independente [17]. A fórmula geral (equação do erro indeterminado) é [17, 18]:
$\Delta y = \left|\frac{\partial y}{\partial x_1}\right|\Delta x_1 + \left|\frac{\partial y}{\partial x_2}\right|\Delta x_2 + ... + \left|\frac{\partial y}{\partial x_n}\right|\Delta x_n$

A partir dessa derivada, derivam-se regras práticas para operações básicas [16]:
*   **Soma ou Subtração ($y = x_1 \pm x_2$):** $E_p = E_1 + E_2$
*   **Multiplicação ($y = x_1 \cdot x_2$):** $E_p = x_1 \cdot E_2 + x_2 \cdot E_1$
*   **Divisão ($y = x_1 / x_2$):** $E_p = \frac{x_1 \cdot E_2 + x_2 \cdot E_1}{x_2^2}$

*Nota: Não se esqueça de que o erro propagado final também deve ser arredondado para mais, mantendo apenas um algarismo significativo* [18, 19].

## 4. Erro Percentual (Relativo)
Para analisar "quão longe" a nossa medida final ficou do valor padrão (teórico ou tabelado), utilizamos o erro relativo percentual [14, 15, 18].
Sua fórmula é: 
**$E\% = \frac{|medida - padrão|}{padrão} \cdot 100$** [14, 15].

## 5. Ajuste de Curvas e Método dos Mínimos Quadrados (MMQ)
Muitas vezes, a relação teórica entre grandezas é demonstrada através de gráficos. Quando os pontos experimentais sugerem uma curva que não é reta, aplicamos a técnica de **linearização** (anamorfose) para "desentortar" a curva, transformando-a em uma equação do tipo $Y = A + BX$ [20, 21]. Isso pode envolver gráficos em papel mono-log ou di-log, dependendo se a função original era exponencial ou de potência [22-24].

Uma vez linearizada a relação, utilizamos o **Método dos Mínimos Quadrados (MMQ)**. Este método estatístico serve para determinar os estimadores estatísticos ótimos para os coeficientes angular ($B$) e linear ($A$) da reta que melhor representa os pontos experimentais, minimizando os desvios (resíduos) entre os dados medidos e a reta teórica [25-27].