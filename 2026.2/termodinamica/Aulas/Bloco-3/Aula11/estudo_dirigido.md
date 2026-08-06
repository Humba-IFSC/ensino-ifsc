# ⚙️ Estudo Dirigido: Aula 05 — 1ª Lei da Termodinâmica e Transformações Gasosas

**Disciplina:** Termologia e Termodinâmica (FSC060806 / FCA060903)  
**Livro Base:** *Fundamentos da Física*, Ramalho, Nicolau e Toledo (Volume 2, Capítulo 9)  
**Identificador NotebookLM:** `Aula05`

---

## 1. Conceitos Fundamentais

- **Sistema termodinâmico:** Porção de matéria sob estudo, separada do resto do Universo (meio exterior) por limites reais ou imaginários.
- **Trabalho ($W$):** Transferência de energia puramente mecânica, independente da diferença de temperatura.
  - **Trabalho externo:** realizado quando o sistema desloca um obstáculo (ex.: êmbolo) do meio exterior. É o trabalho contabilizado nas equações.
  - **Trabalho interno:** realizado pelas forças de interação entre partes do próprio sistema.
- **Calor ($Q$):** Transferência de energia motivada por uma diferença de temperatura.

---

## 2. Trabalho Termodinâmico e o Diagrama $p \times V$

$$W = p \cdot \Delta V$$

- $W > 0$: **Expansão** — o gás realiza trabalho sobre o meio (perde energia mecânica).
- $W < 0$: **Compressão** — o meio realiza trabalho sobre o gás (o gás recebe energia).
- **Geometricamente:** em um diagrama $p \times V$, o trabalho é numericamente igual à **área sob a curva** representativa da transformação.
- **O trabalho depende do caminho:** não é função de estado; depende dos estados intermediários percorridos.

---

## 3. Energia Interna e a Lei de Joule

- **Energia Interna ($U$):** Soma da energia térmica, potencial de configuração e energias cinéticas moleculares do sistema.
- **Lei de Joule:** Para um gás ideal monoatômico, a energia interna depende **exclusivamente da temperatura absoluta**:
$$\Delta U = \frac{3}{2} n R \Delta T$$
- $\Delta T > 0 \implies \Delta U > 0$ (aquecimento); $\Delta T < 0 \implies \Delta U < 0$ (resfriamento).
- Mede-se apenas a **variação** $\Delta U$, nunca o valor absoluto.

---

## 4. A Primeira Lei da Termodinâmica

A 1ª Lei é a consagração do **Princípio da Conservação da Energia** aplicado aos sistemas térmicos:

$$\Delta U = Q - W \quad \implies \quad Q = W + \Delta U$$

- $Q > 0$: Calor absorvido pelo gás; $Q < 0$: calor cedido ao meio.
- $W > 0$: Expansão; $W < 0$: compressão.
- $\Delta U > 0$: Aquecimento; $\Delta U < 0$: resfriamento.

---

## 5. Particularidades das Transformações Gasosas

| Transformação | Condição | Consequência na 1ª Lei | Equação Resultante |
| :--- | :--- | :--- | :--- |
| **Isotérmica** | Temperatura constante ($\Delta T = 0$) | $\Delta U = 0$ | $Q = W$ |
| **Isocórica** / Isométrica | Volume constante ($\Delta V = 0$) | $W = 0$ | $Q = \Delta U$ |
| **Isobárica** | Pressão constante ($p = \text{cte}$) | $W = p \Delta V$ | $Q = p\Delta V + \Delta U$ |
| **Adiabática** | Sem troca de calor ($Q = 0$) | $W = -\Delta U$ | $\Delta U = -W$ |
| **Cíclica** | Estado inicial = Estado final | $\Delta U = 0$ | $W_{\text{ciclo}} = Q_{\text{líquido}}$ |

- **Adiabática rápida:** não há tempo para trocas de calor significativas; a compressão eleva a temperatura ($W < 0 \implies \Delta U > 0$).
- No diagrama $p \times V$: **reta vertical** = isocórica; **reta horizontal** = isobárica; **hipérbole equilátera** = isotérmica.

---

## 6. Calores Molares e Relação de Mayer

- **Calor molar a volume constante:** $Q_v = n \cdot C_v \cdot \Delta T$ (todo o calor vira energia interna).
- **Calor molar a pressão constante:** $Q_p = n \cdot C_p \cdot \Delta T$ (parte do calor realiza trabalho de expansão).
- Por isso $C_p > C_v$; a diferença é a própria constante universal dos gases:
$$C_p - C_v = R$$
