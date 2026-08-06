# 🧊 Estudo Dirigido: Aula 02 — Mudança de Fase e Calor Latente

**Disciplina:** Termologia e Termodinâmica (FSC060806 / FCA060903)  
**Livro Base:** *Fundamentos da Física*, Ramalho, Nicolau e Toledo (Volume 2, Capítulo 5)  
**Identificador NotebookLM:** `Aula02`

---

## 1. Estados Físicos da Matéria e Transições de Fase

A matéria apresenta-se sob três estados físicos fundamentais: **sólido**, **líquido** e **gasoso**. A transição entre esses estados ocorre por troca de energia térmica (calor) e pode ser classificada da seguinte forma:

* **Fusão:** Passagem da fase sólida para a fase líquida (absorve calor).
* **Solidificação:** Passagem da fase líquida para a fase sólida (cede calor).
* **Vaporização:** Passagem da fase líquida para a fase gasosa (absorve calor). Ocorre de três formas:
  * *Evaporação:* Processo lento e espontâneo em qualquer temperatura na superfície do líquido.
  * *Ebulição:* Processo tumultuoso e rápido em uma temperatura bem definida (ponto de ebulição).
  * *Calefação:* Processo instantâneo quando o líquido toca uma superfície aquecida muito acima do seu ponto de ebulição.
* **Condensação ou Liquefação:** Passagem da fase gasosa para a fase líquida (cede calor).
* **Sublimação:** Passagem direta da fase sólida para a fase gasosa (ou vice-versa, chamada ressublimação).

---

## 2. Calor Latente ($Q = m L$)

Diferente do calor sensível (que altera a temperatura do corpo), o **calor latente** é a quantidade de energia térmica por unidade de massa necessária para provocar uma **mudança de estado físico**, mantendo a **temperatura rigorosamente constante** (sob pressão constante).

$$\Large Q = m \cdot L$$

Onde:
* $Q$: Quantidade de calor latente ($\text{cal}$ ou $\text{J}$).
  * $Q > 0$: Calor absorvido (fusão, vaporização, sublimação).
  * $Q < 0$: Calor cedido (solidificação, liquefação).
* $m$: Massa da substância ($\text{g}$ ou $\text{kg}$).
* $L$: Calor latente específico de mudança de fase ($\text{cal/g}$ ou $\text{J/kg}$).

### Valores Notáveis para a Água (Pressão de $1\text{ atm}$):
* **Fusão do gelo / Solidificação da água:** $L_f = +80\text{ cal/g} \quad (L_s = -80\text{ cal/g})$
* **Vaporização da água / Liquefação do vapor:** $L_v = +540\text{ cal/g} \quad (L_l = -540\text{ cal/g})$

---

## 3. Patamar de Temperatura em Substâncias Puras

Durante uma mudança de fase de uma **substância pura** sob pressão constante, toda a energia térmica recebida é utilizada na alteração da estrutura intermolecular e no aumento da energia potencial agregada, e **não** no aumento da energia cinética média das moléculas. Por isso:

$$\text{Durante a mudança de fase de uma substância pura, a temperatura não varia!}$$

---

## 4. Curva de Aquecimento Completa da Água

Considere o aquecimento de um bloco de gelo desde $-20^\circ\text{C}$ até tornar-se vapor d'água superaquecido a $120^\circ\text{C}$:

1. **Aquecimento do gelo (Sólido):** $Q_1 = m \cdot c_{\text{gelo}} \cdot (0 - (-20))$ (Calor sensível)
2. **Fusão do gelo (Sólido + Líquido):** $Q_2 = m \cdot L_f$ (Patamar a $0^\circ\text{C}$, calor latente)
3. **Aquecimento da água (Líquido):** $Q_3 = m \cdot c_{\text{água}} \cdot (100 - 0)$ (Calor sensível)
4. **Vaporização da água (Líquido + Vapor):** $Q_4 = m \cdot L_v$ (Patamar a $100^\circ\text{C}$, calor latente)
5. **Aquecimento do vapor (Vapor):** $Q_5 = m \cdot c_{\text{vapor}} \cdot (120 - 100)$ (Calor sensível)

$$\Large Q_{\text{total}} = Q_1 + Q_2 + Q_3 + Q_4 + Q_5$$

---

## 5. Exercício Resolvido de Exemplo

**Problema:** Qual a quantidade total de calor necessária para transformar $200\text{ g}$ de gelo a $-10^\circ\text{C}$ em água líquida a $50^\circ\text{C}$ sob pressão normal?  
*Dados:* $c_{\text{gelo}} = 0,5\text{ cal/g}^\circ\text{C}$, $c_{\text{água}} = 1,0\text{ cal/g}^\circ\text{C}$, $L_f = 80\text{ cal/g}$.

**Resolução:**
1. Aquecimento do gelo de $-10^\circ\text{C}$ até $0^\circ\text{C}$:
   $$Q_1 = m \cdot c_{\text{gelo}} \cdot \Delta T = 200 \cdot 0,5 \cdot (0 - (-10)) = 100 \cdot 10 = 1.000\text{ cal}$$
2. Fusão do gelo a $0^\circ\text{C}$:
   $$Q_2 = m \cdot L_f = 200 \cdot 80 = 16.000\text{ cal}$$
3. Aquecimento da água líquida de $0^\circ\text{C}$ até $50^\circ\text{C}$:
   $$Q_3 = m \cdot c_{\text{água}} \cdot \Delta T = 200 \cdot 1,0 \cdot (50 - 0) = 200 \cdot 50 = 10.000\text{ cal}$$
4. Quantidade total de calor:
   $$Q_{\text{total}} = 1.000 + 16.000 + 10.000 = 27.000\text{ cal} = 27\text{ kcal}$$
