---
course: "Magnetismo e Eletromagnetismo"
dates:
  rac: 2026-09-29
  tele: 2026-10-05
block: 2
type: "Prática"
tags:
  - magnetismo
  - laboratorio
  - eletroima
  - permeabilidade
---

# 🔬 Laboratório 02: Força Magnética, Permeabilidade Relativa e Densidade de Espiras em Eletroímãs

> [!info] **Datas de Realização da Prática**
> - **FCA060905 (Refrigeração - RAC):** 29/09/2026 (Terça-feira)
> - **FSC060804 (Telecomunicações - Tele):** 05/10/2026 (Segunda-feira)
> - **Links Rápidos:** [Guia Interativo HTML](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/magnetismo-eletromagnetismo/Laboratorios/roteiro-pratica-eletroima-forca-densidade.html) · [Roteiro Oficial PDF](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/magnetismo-eletromagnetismo/Laboratorios/roteiro-pratica-eletroima-forca-densidade.pdf) · [Roteiro Word DOCX](file:///media/humba/Projetos/Meus_Projetos/ensino-ifsc/2026.2/magnetismo-eletromagnetismo/Laboratorios/roteiro-pratica-eletroima-forca-densidade.docx)

---

## 🎯 1. Objetivos da Prática
1. **Determinação de Permeabilidade Relativa ($\mu_r$):** Determinar experimental e analiticamente a permeabilidade magnética relativa de diferentes núcleos metálicos cilíndricos (Alumínio, Aço Galvanizado e Ferro Doce) a partir da massa sustentada pelo eletroímã contra a gravidade.
2. **Estudo da Densidade de Espiras:** Quantificar o impacto do número de espiras ($N = 50$ vs $N = 100$) e da densidade linear de enrolamento ($n = N/L$) na força magnética de atração ($F_m$).
3. **Investigação & Argumentação Científica:** Formular hipóteses fundamentadas na Lei de Ampère e na pressão magnética no entreferro para justificar a relação de proporcionalidade quadrática entre força e número de espiras ($F_m \propto N^2$).

---

## 📐 2. Modelo Teórico e Equações

O campo magnético no interior do solenoide preenchido por um núcleo de permeabilidade $\mu_r$ é:
$$B = \mu_r \cdot \mu_0 \cdot n \cdot i = \mu_r \cdot \mu_0 \cdot \left(\frac{N}{L}\right) \cdot i$$

A força magnética atrativa no polo do eletroímã de área de seção reta $A = \pi R^2$ é:
$$F_m = \frac{B^2 \cdot A}{2 \mu_0 \mu_r} = \frac{\mu_r \cdot \mu_0 \cdot n^2 \cdot i^2 \cdot A}{2}$$

Igualando à força peso da massa erguida no limiar estático ($F_m = m_{\text{exp}} \cdot g$), isola-se a permeabilidade relativa:
$$\mu_r = \frac{2 \cdot m_{\text{exp}} \cdot g}{\mu_0 \cdot n^2 \cdot i^2 \cdot A} = \frac{2 \cdot m_{\text{exp}} \cdot g \cdot L^2}{\mu_0 \cdot N^2 \cdot i^2 \cdot \pi \cdot R^2}$$

Como $F_m \propto N^2$, ao dobrar o número de espiras de $N = 50$ para $N = 100$, a força atrativa e a massa sustentada quadruplicam ($4\times$).

---

## 🧰 3. Parâmetros de Bancada e Constantes
- **Corrente contínua:** $i = 2,0\text{ A}$ (fonte com limitação de corrente)
- **Cilindros metálicos padronizados:** Alumínio, Aço Galvanizado e Ferro Doce ($R = 1,0\text{ cm} = 0,01\text{ m}$; $L = 4,0\text{ cm} = 0,04\text{ m}$)
- **Área da seção reta:** $A = \pi \cdot (0,01)^2 \approx 3,1416 \times 10^{-4}\text{ m}^2$
- **Solenoides:** Solenoide 1 ($N_1 = 50$, $n_1 = 1250\text{ esp/m}$) e Solenoide 2 ($N_2 = 100$, $n_2 = 2500\text{ esp/m}$)
- **Constantes:** $\mu_0 = 4\pi \times 10^{-7}\text{ T}\cdot\text{m/A}$, $g = 9,8\text{ m/s}^2$
- **Balança digital de precisão** e clipes metálicos / pregos finos

---

## 📋 4. Procedimento e Coleta de Dados

### Parte A: Permeabilidade Relativa ($\mu_r$) com $N = 50$ espiras
| Núcleo Metálico | $N$ | $i$ | $m_{\text{exp}}$ (g) | $F_m = m \cdot g$ (N) | $\mu_r$ Calculado | Classificação |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Alumínio** | 50 | 2,0 A | ~ 0,1 g | ~ 0,001 N | $\mu_r \approx 1$ | Paramagnético |
| **Aço Galvanizado** | 50 | 2,0 A | ~ 45-50 g | ~ 0,44-0,49 N | $\mu_r \sim 350-400$ | Ferromagnético |
| **Ferro Doce** | 50 | 2,0 A | ~ 140-160 g | ~ 1,37-1,57 N | $\mu_r \sim 1100-1300$ | Ferromagnético Forte |

### Parte B: Variação de Espiras ($N = 50$ vs $N = 100$) em Núcleo Ferromagnético
| Configuração | $N$ | $n$ | $i$ | $m$ Sustentada (g) | Razão ($m_{100}/m_{50}$) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Solenoide 1** | 50 | 1250 esp/m | 2,0 A | $m_{50}$ | 1,00 (Referência) |
| **Solenoide 2** | 100 | 2500 esp/m | 2,0 A | $m_{100}$ | **Previsão Teórica: 4,00×** |

---

## 💡 5. Questões de Análise & Discussão
1. **Diferença Alumínio vs Aço/Ferro:** Explicação com base nos domínios magnéticos de Weiss e momento magnético atômico.
2. **Hipótese $N^2$:** Justificativa da proporcionalidade quadrática a partir de $B \propto N$ e $F_m \propto B^2$.
3. **Limitações Experimentais:** Efeitos de saturação magnética ($B_{\text{sat}}$), dispersão de fluxo nas bordas do entreferro e aquecimento Joule.

---

## 🔗 Navegação
- ⬅️ Aula de Exercícios do Bloco 2: [[Magnetismo_Eletromag/Aulas/Bloco-2/Aula09-EP/Aula_2026-09-28|Aula 09 - Dúvidas e Exercícios]]
- 🏠 Hub Principal: [[Magnetismo_Eletromag/Magnetismo_Eletromag|Plano de Ensino (Hub)]]
- ➡️ Avaliação 2: [[Magnetismo_Eletromag/Avaliacoes/Avaliacao_2_Forca_Magnetica|Avaliação 2 - Força Magnética e Matéria]]
