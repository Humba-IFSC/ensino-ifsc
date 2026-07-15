# Aula 09 - Teoria de Erros IV (13/04/2026)

Bem-vindos à nossa quarta aula sobre Teoria de Erros. Após discutirmos conceitos basilares como precisão, exatidão, erro de escala e erro aleatório, chegou o momento de aprofundarmos nossos conhecimentos e compreendermos como quantificar a incerteza de resultados que são obtidos de forma indireta, além de consolidarmos as regras de como escrever nossos resultados finais de acordo com os padrões científicos [1-3].

## 1. Erro Propagado

Quando realizamos uma pesquisa quantitativa no laboratório, muitas vezes não conseguimos medir diretamente a grandeza final que desejamos estudar. O cálculo do **erro propagado** é necessário justamente para determinarmos a incerteza de uma grandeza "$y$" que é *calculada* a partir de outras grandezas matemáticas ($x_1$, $x_2$, $x_3$, etc.) que foram *medidas* durante o experimento [4].

**Exemplo prático:** Se você deseja determinar a velocidade média de um objeto em movimento ($v = \Delta x / \Delta t$), o que você de fato mediu no laboratório foi o deslocamento ($x \pm E_x$) e o tempo ($t \pm E_t$). Para saber a incerteza da velocidade resultante ($v \pm E_p$), não podemos simplesmente somar os erros; precisamos aplicar as regras de propagação do erro de acordo com as operações matemáticas envolvidas [4].

As principais regras algébricas para encontrar o erro propagado ($E_p$) da função "$y$", a partir dos erros de medida $E_1$ e $E_2$ das grandezas $x_1$ e $x_2$, são [4]:

*   **Soma ou Subtração** ($y = x_1 \pm x_2$): $E_p = E_1 + E_2$
*   **Multiplicação de medidas** ($y = x_1 \cdot x_2$): $E_p = x_1 \cdot E_2 + x_2 \cdot E_1$
*   **Divisão de medidas** ($y = \frac{x_1}{x_2}$): $E_p = \frac{x_1 \cdot E_2 + x_2 \cdot E_1}{x_2^2}$
*   **Multiplicação por constante** "$a$" ($y = a \cdot x_1$): $E_p = a \cdot E_1$
*   **Potência** ($y = x_1^n$): $E_p = n \cdot x_1^{n-1} \cdot E_1$

*Atenção:* Em cálculos que envolvem várias operações matemáticas sequenciais, aplique o critério de arredondamento somente ao final de todo o processo para evitar acúmulos indesejados de desvios [5].

## 2. Erro Total

Na rotina da pesquisa quantitativa, é muito frequente termos diversas fontes de incerteza influenciando o sistema ao mesmo tempo. O **erro total** do seu experimento (ou seja, a incerteza que de fato será agregada à resposta) equivale à soma das diferentes classes de erros aplicáveis: o Erro de Escala (EE), o Erro Aleatório (EA) e o Erro Sistemático (ES) [6, 7]. Portanto, o erro total se expressaria genericamente pela soma $E_{total} = E_E + E_A + E_S$ [6, 7]. 

Na prática, quando não for possível contabilizar todos os fatores de erro que interferem, considere como erro total a soma apenas daqueles quantificados, mas sempre tenha a honestidade intelectual de discorrer em seu trabalho científico sobre outras limitações do sistema que você percebeu durante o estudo [7].

## 3. Forma Padrão de Escrita do Resultado Final

Para garantir clareza e credibilidade, os achados científicos têm uma forma padrão de escrita: **$\text{Grandeza} = \text{resultado} \pm \text{erro} \ (\text{unidade})$** [2]. Para que seu resultado esteja formatado corretamente segundo a Teoria de Erros, você deve sempre observar três regrinhas fundamentais [2, 6, 7]:

1.  **Apenas UM algarismo significativo para o erro:** Como o erro já é um indicativo de dúvida, não possui significado físico representá-lo com precisão exagerada. O erro do resultado deve possuir somente um algarismo significativo [2, 6, 7].
2.  **Arredondamento sempre PARA MAIS:** Quando os cálculos fornecerem um valor de erro com muitos decimais, deve-se limitá-lo a um significativo e o seu arredondamento deverá ser sempre jogado para cima [2, 6, 7]. 
3.  **Concordância decimal obrigatória:** Tem que haver concordância na casa decimal do algarismo duvidoso da medida e a casa do respectivo erro final associado [2].

**Exemplos de Correções Comuns [2]:**
*   *Escrita Incorreta:* $m = (3,2 \pm 0,05) \text{ g}$ $\rightarrow$ *Escrita Correta:* $m = (3,20 \pm 0,05) \text{ g}$ (o número principal precisou ganhar um 'zero' para ficar com o mesmo número de casas decimais que o seu erro).
*   *Escrita Incorreta:* $L = (12,841 \pm 0,052) \text{ m}$ $\rightarrow$ *Escrita Correta:* $L = (12,84 \pm 0,06) \text{ m}$ (primeiramente o erro $0,052$ foi arredondado para mais, virando um único significativo $0,06$, o que por sua vez forçou a medida a ter apenas duas casas decimais, acompanhando a posição do seu duvidoso).