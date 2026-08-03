# ⚙️ Estudo Dirigido: 2ª Lei da Termodinâmica e Ciclo de Carnot

**Disciplina:** Termologia e Termodinâmica (FSC060806 / FCA060903)  
**Livro Base:** *Fundamentos da Física*, Ramalho, Nicolau e Toledo (Volume 2, Capítulo 9)

---

## 1. Enunciados da Segunda Lei da Termodinâmica

1. **Enunciado de Kelvin-Planck:** É impossível construir uma máquina térmica operando em ciclo que transforme integralmente em trabalho o calor retirado de uma única fonte térmica (nenhuma máquina térmica tem rendimento de $100\%$).
2. **Enunciado de Clausius:** O calor não pode fluir espontaneamente de um corpo frio para um corpo quente sem a realização de trabalho externo.

---

## 2. Máquinas Térmicas e Rendimento ($\eta$)

Uma máquina térmica opera entre uma **fonte quente** (temperatura $T_Q$, calor $Q_Q$) e uma **fonte fria** (temperatura $T_F$, calor $Q_F$), realizando trabalho útil $W$:

$$W = Q_Q - |Q_F|$$

$$\eta = \frac{W}{Q_Q} = \frac{Q_Q - |Q_F|}{Q_Q} = 1 - \frac{|Q_F|}{Q_Q}$$

- $\eta$: Rendimento da máquina ($0 < \eta < 1$).

---

## 3. O Ciclo de Carnot (Rendimento Máximo Ideal)

Proposto por Nicolas Léonard Sadi Carnot em 1824, representa o ciclo teórico reversível de **maior rendimento possível** operando entre duas temperaturas fixas $T_Q$ e $T_F$ (em Kelvin):

### Composição do Ciclo de Carnot:
1. **Expansão Isotérmica reversível** à temperatura $T_Q$ (absorve $Q_Q$).
2. **Expansão Adiabática reversível** (temperatura cai de $T_Q$ para $T_F$).
3. **Compressão Isotérmica reversível** à temperatura $T_F$ (rejeita $Q_F$).
4. **Compressão Adiabática reversível** (temperatura sobe de $T_F$ para $T_Q$).

### Rendimento do Ciclo de Carnot:
$$\eta_{\text{Carnot}} = 1 - \frac{T_F}{T_Q} \quad \text{(Temperaturas obrigatoriamente em Kelvin)}$$

$$\frac{|Q_F|}{Q_Q} = \frac{T_F}{T_Q}$$

---

## 4. Entropia ($S$) e Degradação da Energia

- A entropia mede a desordem molecular e a irreversibilidade dos processos naturais.
- Para qualquer processo espontâneo em um sistema isolado: $\Delta S_{\text{universo}} > 0$.
- O calor espontaneamente flui no sentido de aumentar a entropia do universo.
