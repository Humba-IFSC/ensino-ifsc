# Aula 06 - Teoria de Erros I (23/03/2026)

Em qualquer trabalho científico ou prática de laboratório, devemos compreender que **nenhuma medida pode ser realizada com certeza absoluta** [1, 2]. Sempre haverá uma dúvida associada ao processo de medição [1]. Em ciência, o termo "erro" não indica algo errado, ignorância ou incompetência, mas sim a **incerteza intrínseca** relacionada à medida realizada [1, 3]. Para quantificar e tratar essas incertezas de forma adequada, utilizamos a Teoria de Erros [4, 5].

### Precisão vs. Exatidão
Dois conceitos fundamentais para a análise de medidas são a precisão e a exatidão [3-5].
*   **Precisão:** Relaciona-se à qualidade da medida. Se as medidas de um mesmo objeto puderem ser repetidas várias vezes apresentando resultados muito próximos entre si (pequena barra de erro), o experimento tem alta precisão [3-5].
*   **Exatidão:** Relaciona-se à proximidade das medidas obtidas com um valor padrão teórico, esperado ou correto [3-5].

Para visualizar, imagine um atirador lançando flechas em um alvo com o objetivo de acertar o centro. Se as flechas atingirem pontos muito próximos uns dos outros, mas no canto do alvo, ele é preciso, mas não exato [3, 6]. Se os impactos se concentrarem no centro, ele apresenta tanto precisão quanto exatidão [3, 6]. 

### Fontes de Incerteza (Tipos de Erros)
Para atingir resultados precisos e exatos, o experimentador deve identificar e diminuir as causas de incerteza [4, 5]. Os erros podem ser classificados nas seguintes categorias:

1.  **Erro de Escala (EE):** Quantifica a incerteza relacionada à precisão e à escala do próprio instrumento de medição [6-8]. Por exemplo, uma régua graduada em milímetros possui um erro de medida menor do que uma régua graduada apenas em decímetros [6]. Em instrumentos analógicos, o erro de escala é geralmente a metade da menor divisão; em digitais, costuma ser igual à menor divisão [7-9].
2.  **Erro Aleatório (EA) ou Acidental:** É originário de fatores e perturbações estatísticas imprevisíveis presentes em todo experimento [6, 10]. Pode ocorrer devido a pequenas variações nas condições do ambiente (como rajadas de vento) ou devido ao tempo de reflexo do observador ao operar um cronômetro [6]. O EA atua dispersando os valores medidos em ambas as direções (para mais ou para menos) em relação ao valor exato [6, 10]. Como não segue regras definidas, é tratado através da repetição das medidas e análise estatística (cálculo de média e desvio padrão) [6, 10, 11].
3.  **Erro Sistemático (ES):** Provém de fatores que deslocam o valor medido para longe do valor exato, mas sempre atuando na mesma direção ou sentido (apenas para mais ou apenas para menos) [12-14]. Geralmente é causado por calibração incorreta do aparelho (como uma balança desnivelada) ou o não cumprimento dos limites de operação de um equipamento [14]. Caso suas causas sejam identificadas, o erro sistemático pode ser eliminado ou compensado [10, 15].
4.  **Erro Grosseiro (EG):** Surge da manipulação incorreta de equipamentos, leituras equivocadas ou cálculos errados [14, 16]. Relaciona-se à falta de atenção ou inexperiência do experimentador [14, 16]. Os erros grosseiros não devem ser considerados no cálculo da incerteza e exigem que o experimento (ou parte dele) seja corrigido e refeito [14].

### Forma Padrão de Apresentação de um Resultado
Quando reportamos o valor final de uma medição física, ele deve englobar a incerteza através da soma dos erros envolvidos, que constitui o **Erro Total** ($ET = EE + EA + ES$) [12, 13, 17].

A forma padronizada de escrever a medida é: 
**$\text{Grandeza} = (\text{resultado} \pm \text{erro total}) \text{ unidade}$** [7, 8].

Nesta etapa, algumas regras fundamentais de algarismos significativos e arredondamento devem ser estritamente respeitadas:
*   O erro do resultado deve ser apresentado com **apenas um algarismo significativo** (que corresponde à casa duvidosa) [12, 13, 17].
*   Se for necessário arredondar o valor calculado para o erro, esse arredondamento deve ser feito **sempre para cima (para mais)**, independentemente do valor do algarismo subsequente [12, 13, 17].
*   É obrigatório que haja **concordância de casas decimais** entre o algarismo duvidoso da medida e a casa decimal do seu erro associado [7, 8, 18]. 

### Erro Relativo / Percentual
Além de indicar o valor da medida com a sua respectiva incerteza, muitas vezes é útil determinar o **Erro Percentual (E%)** [12, 13]. Este é um indicador de "quão longe" a medida obtida no laboratório está do seu valor padrão teórico esperado [12, 13]. O Erro Percentual é calculado a partir do valor final medido com a seguinte fórmula: $E\% = \frac{|\text{medida} - \text{padrão}|}{\text{padrão}} \cdot 100$ [12, 13, 19].