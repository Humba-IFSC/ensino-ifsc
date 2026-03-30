# Aula 07 - Teoria de Erros II (30/03/2026)

Bem-vindos à Aula 07. Neste encontro, aprofundaremos nossos estudos em **Teoria de Erros**, abordando o tratamento matemático das incertezas, a diferença estatística dos erros e a forma como eles se propagam em cálculos indiretos.

Em qualquer pesquisa quantitativa ou prática de laboratório, devemos ter em mente que nenhuma medida pode ser feita com certeza absoluta [1]. A palavra "erro", no contexto científico, não indica falha ou incompetência do experimentador, mas sim a **incerteza inerente** associada ao processo de medição [1, 2].

### 1. Precisão e Exatidão
Antes de quantificarmos as incertezas, é crucial distinguir dois conceitos básicos:
* **Precisão:** Refere-se à qualidade da medida. Se uma medida puder ser repetida várias vezes com uma grande concordância entre os resultados, e se o instrumento possui pequena barra de erro, a medida é considerada precisa [2-4].
* **Exatidão:** Relaciona-se com a concordância da medida realizada em relação ao valor padrão ou valor teórico esperado [2-4]. 

A Teoria de Erros nos ajuda a lidar com essas variáveis, identificando as fontes de erro para diminuir suas causas [3, 4].

### 2. Fontes de Incerteza (Tipos de Erros)
Quando medimos, nosso resultado está sujeito a diferentes categorias de erros, que podem se somar [5, 6].

#### 2.1 Erro de Escala (EE)
É a quantificação da incerteza relacionada à escala do próprio instrumento de medida utilizado [7-9]. 
* Para **instrumentos analógicos** (como uma régua), o erro é convencionalmente estabelecido como a metade da Menor Divisão de Escala ($E = \frac{MDE}{2}$) [7, 8, 10, 11]. 
* Em **instrumentos digitais**, o erro corresponde à própria Menor Divisão de Escala ($E = MDE$) [7, 8, 10].

#### 2.2 Erro Aleatório (EA)
É o erro originário de fatores aleatórios e flutuações estatísticas presentes em todo experimento (reflexos humanos, variação de vento, etc.) [9, 12]. Como ele não segue uma regra definida e dispersa os valores tanto para mais quanto para menos, é impossível de ser totalmente evitado [9, 12, 13]. 

A quantificação do Erro Aleatório exige a repetição das medidas (em laboratório, é comum o uso de triplicatas ou mais repetições) [9, 14]. O tratamento estatístico destas repetições segue as etapas [14, 15]:
1. **Média:** Calcula-se a média aritmética simples das medidas, que representa o valor mais provável [12, 14, 15].
2. **Desvio Padrão ($\sigma$):** Indica a tendência de distribuição dos dados em torno do valor mais provável [10, 15].
3. **Desvio Padrão da Média ($\sigma_m$):** Obtido dividindo o desvio padrão pela raiz quadrada do número de medições ($n$) executadas ($\sigma_m = \frac{\sigma}{\sqrt{n}}$) [10, 11, 15].
4. **Erro Aleatório Provável ($E_a$):** Encontrado multiplicando o desvio padrão da média pelo coeficiente de Student ($t$). A fórmula é $E_a = \pm t \cdot \sigma_m$ [10, 15]. (Na ausência de instrução específica, geralmente adota-se o coeficiente $t = 1$ [10, 11]).

### 3. Erro Total e Escrita do Resultado Final
O Erro Total é a composição das incertezas presentes e, quando aplicável, é calculado pela soma dos erros existentes: $E_{total} = E_{escala} + E_{aleatorio} + E_{sistematico}$ [5, 6, 12, 16]. 

Existem regras rigorosíssimas de arredondamento que definem o padrão correto de escrita do trabalho científico [1, 16]:
* **O erro do resultado deve ter APENAS UM algarismo significativo** (que será o algarismo duvidoso) [5, 6, 16].
* Sempre que precisar arredondar um erro para deixá-lo com apenas um algarismo, **arredonde PARA MAIS** e somente ao final das contas [5, 6, 16].
* É necessário haver concordância nas casas decimais (concordância no duvidoso) entre a medida final e o seu erro [7, 8].

A grandeza sempre será expressa no formato padrão: 
$Grandeza = (resultado \pm erro) unidade$ [7, 8].

### 4. Propagação de Erros
Se precisarmos determinar a incerteza de uma grandeza "$y$" que não é medida diretamente, mas **calculada** a partir de outras grandezas (como $x_1, x_2, x_3$) que foram medidas previamente (por exemplo, calcular a velocidade a partir da distância e do tempo), precisamos usar a **Propagação de Erros** [17, 18].

Esse cálculo da incerteza indireta é baseado em diferenciais e nas derivadas parciais da função utilizada, em módulo [18, 19]:
$\Delta y = |\frac{\partial y}{\partial x_1}| \Delta x_1 + |\frac{\partial y}{\partial x_2}| \Delta x_2 + ...$ 

Para as operações matemáticas básicas, as equações da propagação já são conhecidas [17, 20]:
* **Soma / Subtração** ($y = x_1 \pm x_2$): $E_p = E_1 + E_2$
* **Multiplicação** ($y = x_1 \cdot x_2$): $E_p = x_1 \cdot E_2 + x_2 \cdot E_1$
* **Potência** ($y = x_1^n$): $E_p = n \cdot x_1^{n-1} \cdot E_1$

Assim como no Erro Total, no fim das contas o Erro Propagado ($E_p$) final deve ser arredondado para mais, mantendo apenas 1 algarismo significativo [19, 21].