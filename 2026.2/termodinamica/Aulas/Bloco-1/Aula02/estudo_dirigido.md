# 🌡️ Estudo Dirigido: Calorimetria Sensível

**Disciplina:** Termologia e Termodinâmica (FSC060806 / FCA060903)  
**Livro Base:** *Fundamentos da Física*, Ramalho, Nicolau e Toledo (Volume 2, Capítulo 4)

---

## 1. Conceitos Fundamentais

- **Temperatura ($T$):** Grandeza física associada ao grau de agitação térmica das moléculas de um corpo.
- **Calor ($Q$):** Energia térmica em trânsito entre corpos a diferentes temperaturas. O calor flui espontaneamente do corpo de maior temperatura para o de menor temperatura até ser atingido o **equilíbrio térmico**.
- **Equilíbrio Térmico:** Estado em que dois ou mais corpos em contato térmico atingem a mesma temperatura ($T_{eq}$).

---

## 2. Capacidade Térmica e Calor Específico

### Capacidade Térmica ($C$)
Indica a quantidade de calor necessária para alterar em $1^\circ\text{C}$ (ou $1\text{ K}$) a temperatura de um **corpo como um todo**:
$$C = \frac{Q}{\Delta T} \quad \text{ou} \quad C = m \cdot c$$

- **Unidades:** $\text{cal}/^\circ\text{C}$ ou $\text{J}/\text{K}$.

### Calor Específico ($c$)
Propriedade característica da **substância** que constitui o corpo:
$$c = \frac{C}{m}$$

- Para a **água líquida**: $c_{\text{água}} = 1,0\text{ cal}/(\text{g}\cdot^\circ\text{C}) = 4186\text{ J}/(\text{kg}\cdot\text{K})$.
- Quanto maior o calor específico, mais difícil é aquecer ou resfriar a substância.

---

## 3. Equação Fundamental da Calorimetria

$$Q = m \cdot c \cdot \Delta T$$

Onde:
- $Q$: Quantidade de calor sensível ($\text{cal}$ ou $\text{J}$).
  - $Q > 0$: Calor recebido (aquecimento, $\Delta T > 0$).
  - $Q < 0$: Calor cedido (resfriamento, $\Delta T < 0$).
- $m$: Massa do corpo ($\text{g}$ ou $\text{kg}$).
- $c$: Calor específico sensível ($\text{cal}/\text{g}^\circ\text{C}$ ou $\text{J}/\text{kg K}$).
- $\Delta T = T_f - T_i$: Variação de temperatura.

---

## 4. Princípio das Trocas de Calor

Em um **sistema termicamente isolado** (como um calorímetro ideal):
$$\sum Q = Q_1 + Q_2 + Q_3 + \dots = 0$$

$$\Rightarrow |Q_{\text{cedido}}| = |Q_{\text{recebido}}|$$

---

## 5. Exercício Resolvido de Exemplo

**Problema:** Um bloco de alumínio de massa $m = 200\text{ g}$ a $100^\circ\text{C}$ é colocado no interior de um calorímetro de capacidade térmica desprezível contendo $300\text{ g}$ de água a $20^\circ\text{C}$. Dados: $c_{\text{água}} = 1,0\text{ cal}/\text{g}^\circ\text{C}$ e $c_{\text{Al}} = 0,22\text{ cal}/\text{g}^\circ\text{C}$. Determine a temperatura de equilíbrio térmico $T_{\text{eq}}$.

**Resolução:**
$$Q_{\text{Al}} + Q_{\text{água}} = 0$$
$$m_{\text{Al}} \cdot c_{\text{Al}} \cdot (T_{\text{eq}} - 100) + m_{\text{água}} \cdot c_{\text{água}} \cdot (T_{\text{eq}} - 20) = 0$$
$$200 \cdot 0,22 \cdot (T_{\text{eq}} - 100) + 300 \cdot 1,0 \cdot (T_{\text{eq}} - 20) = 0$$
$$44(T_{\text{eq}} - 100) + 300(T_{\text{eq}} - 20) = 0$$
$$44 T_{\text{eq}} - 4400 + 300 T_{\text{eq}} - 6000 = 0$$
$$344 T_{\text{eq}} = 10400 \implies T_{\text{eq}} \approx 30,23^\circ\text{C}$$
