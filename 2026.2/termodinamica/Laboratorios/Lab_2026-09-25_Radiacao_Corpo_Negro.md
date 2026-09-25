---
course: "Termologia e Termodinâmica"
date: 2026-09-25
block: 2
type: "Prática"
tags:
  - radiacao-corpo-negro
  - laboratorio
  - irradiancia
  - emissividade
  - ilhas-de-calor
  - stefan-boltzmann
---

# 🔬 Laboratório: Radiação de Corpo Negro — Da Irradiância à Emissividade (25/09)

> [!info] **Missão Experimental: A Física das Ilhas de Calor Urbanas**
> Investigação do comportamento termodinâmico de materiais sob radiação térmica. Utilizando blocos de alumínio (preto fosco e branco fosco), mede-se a absorção de energia luminosa (Albedo e Irradiância) durante o aquecimento e a taxa de perda térmica no escuro para determinação empírica da **Emissividade ($\varepsilon$)** através da **Lei de Stefan-Boltzmann**.
> 
> *Roteiro oficial disponível em PDF:* [Roteiro-II-Radiação-Corpo-Negro.pdf](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/termodinamica/Laboratorios/Roteiro-II-Radia%C3%A7%C3%A3o-Corpo-Negro.pdf)

---

## 🎯 Contextualização e Conexão Teórica

Nas aulas teóricas de 11/09 e 18/09, foram consolidados os três mecanismos fundamentais de transferência de calor:
1. **Condução Térmica:** Transporte microscópico de energia sem transporte macroscópico de matéria (Lei de Fourier: $\Phi = -k A \frac{\Delta T}{L}$).
2. **Convecção Térmica:** Movimentação macroscópica de fluidos impulsionada por diferenças de densidade criadas por gradientes térmicos.
3. **Radiação Térmica:** Emissão e propagação contínua de ondas eletromagnéticas (espectro visível e infravermelho) por qualquer corpo a temperatura absoluta superior ao zero absoluto ($T > 0\text{ K}$), sem a necessidade de meio material de propagação.

### 💡 Conexão com a Demonstração do Radiômetro de Crookes (18/09)
Na aula anterior (18/09), foi demonstrado em bancada o funcionamento do **Radiômetro de Crookes**:
- No interior da ampola de vidro sob pressão rarefeita, as palhetas pintadas de **preto fosco** absorvem mais radiação incidente do que as faces polidas de **alumínio** (refletoras).
- O aquecimento diferencial da face preta provoca forças moleculares de transpiração térmica nas bordas e convecção local no gás residual rarefeito, impulsionando a face preta para longe da fonte de luz.
- Essa experiência provou qualitativamente a conversão de **energia radiante $\to$ térmica $\to$ cinética de rotação**.
- **Na prática de hoje (25/09):** Vamos quantificar em escala macroscópica as grandezas termodinâmicas envolvidas: o fluxo de radiação absorvida ($I$), a potência líquida de resfriamento ($P_{\text{resf}}$) e a emissividade superficial ($\varepsilon$).

---

## 📋 Materiais Necessários

* 1 Bloco de alumínio preto fosco com orifício para termômetro
* 1 Bloco de alumínio branco fosco com orifício para termômetro
* 2 Termômetros de precisão (ou sensores digitais com termopar)
* Gotículas de óleo mineral ou pasta térmica (para acoplamento térmico no orifício)
* Placas isolantes de suporte (isopor ou EVA de alta densidade)
* 1 Lâmpada incandescente / halógena de 100 W montada em suporte
* 1 Cronômetro digital
* 1 Paquímetro ou régua milimetrada
* 1 Balança de precisão

---

## ⚙️ Procedimento Experimental

### 1. Parâmetros Iniciais do Sistema
Antes de iniciar o acionamento da lâmpada, meça e anote na bancada:
* Massa do bloco preto ($m_{\text{preto}}$): $\underline{\hspace{2cm}}\text{ kg}$
* Massa do bloco branco ($m_{\text{branco}}$): $\underline{\hspace{2cm}}\text{ kg}$
* Área iluminada ($A_{\text{ilum}}$): Apenas a face frontal voltada para a lâmpada ($\text{base} \times \text{altura}$): $\underline{\hspace{2cm}}\text{ m}^2$
* Área superficial total ($A_{\text{sup}}$): Soma de todas as faces expostas ao ar livre (exceto a base apoiada no isolante térmico): $\underline{\hspace{2cm}}\text{ m}^2$
* Temperatura ambiente inicial ($T_A$): $\underline{\hspace{1.5cm}}^\circ\text{C} = \underline{\hspace{1.5cm}}\text{ K}$ *(Atenção: some $273,15$ para obter Kelvin)*

### 2. Montagem e Alinhamento
1. Apoie os blocos lado a lado sobre a placa isolante térmica.
2. Pingue uma gotícula de pasta térmica ou óleo no furo central e insira os termômetros.
3. Posicione a lâmpada de 100 W a aproximadamente **10 cm de distância**, perfeitamente equidistante de ambos os blocos.

### 3. Fase 1: Aquecimento (0 a 14 minutos)
* Ligue a lâmpada e inicie o cronômetro simultaneamente.
* Registre a temperatura dos dois blocos a cada **2 minutos** até completar 14 minutos.

### 4. Fase 2: Resfriamento (14 a 28 minutos)
* Ao completar 14 minutos, **desligue a lâmpada**.
* Continue anotando a temperatura de ambos os blocos a cada **2 minutos**, dos 14 aos 28 minutos.

---

## 📊 Tabela de Coleta de Dados

| Tempo (min) | AQUECIMENTO — Bloco Preto (°C) | AQUECIMENTO — Bloco Branco (°C) | Tempo (min) | RESFRIAMENTO — Bloco Preto (°C) | RESFRIAMENTO — Bloco Branco (°C) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | | | **14** | *(mesmo valor de 14 min)* | *(mesmo valor de 14 min)* |
| **2** | | | **16** | | |
| **4** | | | **18** | | |
| **6** | | | **20** | | |
| **8** | | | **22** | | |
| **10** | | | **24** | | |
| **12** | | | **26** | | |
| **14** | | | **28** | | |

---

## 🧮 Tratamento de Dados

*Constante térmica:* Calor específico do alumínio: $c = 900\text{ J/(kg}\cdot\text{K)}$  
*Constante física:* Constante de Stefan-Boltzmann: $\sigma = 5,67 \times 10^{-8}\text{ W/(m}^2\cdot\text{K}^4)$

### Parte 3: Aquecimento e Irradiância
1. **Energia Total Absorvida ($Q_{\text{abs}}$):**
   $$Q_{\text{abs}} = m \cdot c \cdot (T_{14\text{min}} - T_{0\text{min}})$$
   * $Q_{\text{preto}} = \underline{\hspace{2.5cm}}\text{ Joules}$
   * $Q_{\text{branco}} = \underline{\hspace{2.5cm}}\text{ Joules}$

2. **Fluxo de Radiação Absorvido (Irradiância $I$):**
   Potência absorvida por unidade de área iluminada ($\Delta t = 14\text{ min} = 840\text{ s}$):
   $$I = \frac{Q_{\text{abs}}}{A_{\text{ilum}} \cdot \Delta t}$$
   * $I_{\text{preto}} = \underline{\hspace{2.5cm}}\text{ W/m}^2$
   * $I_{\text{branco}} = \underline{\hspace{2.5cm}}\text{ W/m}^2$

---

### Parte 4: Resfriamento e Emissividade ($\varepsilon$)
Análise no intervalo de maior intensidade radiante: **minuto 14 ao minuto 18** ($\Delta t = 240\text{ segundos}$).

1. **Potência de Resfriamento ($P_{\text{resf}}$):**
   $$P_{\text{resf}} = \frac{|m \cdot c \cdot (T_{18\text{min}} - T_{14\text{min}})|}{\Delta t}$$
   * $P_{\text{preto}} = \underline{\hspace{2.5cm}}\text{ W (J/s)}$
   * $P_{\text{branco}} = \underline{\hspace{2.5cm}}\text{ W (J/s)}$

2. **Cálculo da Emissividade Superficial ($\varepsilon$):**
   Pela Lei de Stefan-Boltzmann aplicada ao corpo cinzento em troca radiante com o ambiente:
   $$P_{\text{resf}} \approx \varepsilon \cdot A_{\text{sup}} \cdot \sigma \cdot (T^4 - T_A^4) \implies \varepsilon = \frac{P_{\text{resf}}}{A_{\text{sup}} \cdot \sigma \cdot (T^4 - T_A^4)}$$
   
   > [!WARNING]
   > **Atenção:** As temperaturas $T$ e $T_A$ **DEVEM estar expressas em Kelvin**.  
   > Para a temperatura do bloco ($T$), utilize a média aritmética entre os minutos 14 e 18 convertida para Kelvin:  
   > $$T = \frac{T_{14\text{min}} + T_{18\text{min}}}{2} + 273,15$$

   * $\varepsilon_{\text{preto}} = \underline{\hspace{2.5cm}}$ (Adimensional, esperado entre 0 e 1)
   * $\varepsilon_{\text{branco}} = \underline{\hspace{2.5cm}}$ (Adimensional, esperado entre 0 e 1)

---

## 💬 Análise e Discussão Conceitual

Responda em equipe com base nas medições realizadas:

1. **Albedo e Absorção:** Analisando os valores de Irradiância ($I$) calculados na Parte 3, qual das cores demonstrou possuir o menor Albedo (menor coeficiente de reflexão)? De que forma essa constatação física valida a sensação térmica de vestir roupas pretas sob sol intenso?
2. **A Lei de Kirchhoff da Radiação:** Na física térmica, a Lei de Kirchhoff postula que *"um bom absorvedor de radiação é obrigatoriamente um bom emissor radiante"*. Os valores empíricos calculados para $\varepsilon_{\text{preto}}$ e $\varepsilon_{\text{branco}}$ corroboram essa lei? Explique.
3. **O Paradoxo das Ilhas de Calor:** O asfalto e as coberturas de concreto escuro das metrópoles comportam-se de maneira similar ao bloco preto de alumínio. Durante o dia solar, absorvem elevadas quantidades de irradiância e, à noite, irradiam esse calor de volta para a baixa atmosfera. Como esse mecanismo, agravado pela ausência de cobertura vegetal, explica por que os centros urbanos podem amanhecer até 5 °C mais quentes do que as áreas periféricas arborizadas?
4. **Limitações do Modelo:** No cálculo analítico de emissividade, supôs-se simplificadamente que toda a dissipação térmica decorreu exclusivamente da radiação. Na realidade, o ar atmosférico circunvizinho também se aquece por condução na interface, expande-se e ascende. Qual é a denominação desse mecanismo de transferência de calor que foi desprezado no modelo idealizado?

---

## 🔗 Navegação e Recursos

* 📄 **Roteiro em PDF:** [`Roteiro-II-Radiação-Corpo-Negro.pdf`](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/termodinamica/Laboratorios/Roteiro-II-Radia%C3%A7%C3%A3o-Corpo-Negro.pdf)
* ⬅️ Aula anterior: [[Termodinâmica/Aulas/Bloco-2/Aula09_2026-09-18/Aula09_2026-09-18|Aula 09 — Mecanismos de Transferência & Radiômetro de Crookes]]
* 🏠 [[Termodinâmica/Termodinâmica|Portal de Termodinâmica (Hub Central)]]
* ➡️ Próxima aula: [[Termodinâmica/Aulas/Bloco-2/Aula11_2026-10-02/Aula11_2026-10-02|Aula 11 — Avaliação 2 (AVA 2)]]
