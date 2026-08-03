# ⚙️ Estudo Dirigido: 1ª Lei da Termodinâmica e Transformações Gasosas

**Disciplina:** Termologia e Termodinâmica (FSC060806 / FCA060903)  
**Livro Base:** *Fundamentos da Física*, Ramalho, Nicolau e Toledo (Volume 2, Capítulo 9)

---

## 1. Conceitos Fundamentais

- **Trabalho Termodinâmico ($W$):** Energia trocada entre o sistema e o meio exterior por variação de volume ($W = p \cdot \Delta V$).
  - $W > 0$: Expansão do gás (gás realiza trabalho sobre o meio).
  - $W < 0$: Compressão do gás (meio realiza trabalho sobre o gás).
  - $W = 0$: Transformação isocórica / isométrica (volume constante).
- **Energia Interna ($\Delta U$):** Soma da energia cinética das partículas do gás. Depende exclusivamente da **temperatura**:
  $$\Delta U = \frac{3}{2} n R \Delta T \quad \text{(gás monoatômico ideal)}$$

---

## 2. A Primeira Lei da Termodinâmica

Trata-se do Princípio da Conservação de Energia aplicado aos sistemas térmicos:

$$\Delta U = Q - W \quad \implies \quad Q = W + \Delta U$$

Onde:
- $Q > 0$: Calor absorvido pelo gás.
- $Q < 0$: Calor cedido pelo gás.
- $W > 0$: Expansão ($V$ aumenta).
- $W < 0$: Compressão ($V$ diminui).
- $\Delta U > 0$: Aquecimento ($T$ aumenta).
- $\Delta U < 0$: Resfriamento ($T$ diminui).

---

## 3. Particularidades das Transformações Gasosas

| Transformação | Condição | Consequência na 1ª Lei | Equação Resultante |
| :--- | :--- | :--- | :--- |
| **Isotérmica** | Temperatura constante ($\Delta T = 0$) | $\Delta U = 0$ | $Q = W$ |
| **Isocórica** / Isométrica | Volume constante ($\Delta V = 0$) | $W = 0$ | $Q = \Delta U$ |
| **Isobárica** | Pressão constante ($p = \text{cte}$) | $W = p \Delta V$ | $Q = p\Delta V + \Delta U$ |
| **Adiabática** | Sem troca de calor ($Q = 0$) | $Q = 0$ | $W = -\Delta U$ |
| **Cíclica** | Estado inicial = Estado final | $\Delta U = 0$ | $W_{\text{ciclo}} = Q_{\text{líquido}}$ |

- Em um gráfico $p \times V$, o **Trabalho $W$ é numericamente igual à área sob a curva**. Em um ciclo fechado no sentido horário, $W > 0$ (motor térmico).
