# UY Score — Infraestructura de Reputación Financiera Alternativa

> *En LATAM, la pregunta nunca fue si la gente tiene comportamiento financiero responsable.*
> *La pregunta es si alguien puede verlo.*

---

## La historia que está detrás de esto

Rosa tiene 34 años, vive en El Alto, Bolivia. Paga el alquiler puntualmente desde hace cuatro años. Paga la luz, el agua, el internet. Transfiere por QR-BCB todos los meses. Tiene un pequeño negocio de textiles que genera ingresos consistentes. Declaró sus impuestos el año pasado.

Fue al banco a pedir un microcrédito de $3.000 para comprar mercadería. Le dijeron que no: **no tiene historial crediticio formal**.

El sistema no la ve. Pero su comportamiento financiero es intachable.

Rosa no es la excepción. Es **el mercado**.

---

## Qué es UY Score

UY Score es una plataforma de reputación financiera alternativa para América Latina. Transforma comportamiento económico real —pagos de servicios, ingresos informales verificables, actividad en billeteras digitales— en un score crediticio portable, verificable e inmutable.

**No reemplaza a los burós tradicionales. Los complementa.**

El score se construye desde cero, se certifica en blockchain y puede ser compartido con cualquier institución financiera que el usuario autorice — sin depender de historial bancario previo.

---

## El problema en números

| Indicador | Bolivia | Perú | México | LATAM |
|-----------|---------|------|--------|-------|
| Bancarización adultos | 54% | 57% | 49% | 74% |
| Informalidad laboral | **80%** | 71% | 55% | ~58% |
| Adopción smartphones | ~74% | ~78% | ~80% | ~80% |
| Crédito / PIB | 70% | 44% | 38% | ~55% |

> **122 millones** de adultos en LATAM no acceden a servicios financieros formales (Banco Mundial, Global Findex 2021). El 50% de las MIPYMES de la región no puede demostrar historial crediticio para acceder a financiamiento formal (BID, 2022).

La paradoja: alta digitalización transaccional, baja inclusión crediticia. El comportamiento existe. La infraestructura para leerlo, no.

---

## Cómo funciona

### Dos tracks de usuario

UY Score entiende que no todos construyen su historial de la misma manera.

#### Track 1 — Fiat / Economía informal
Para trabajadores independientes, comerciantes y emprendedores que no usan criptomonedas. Construyen su score subiendo:
- Comprobantes de servicios básicos (luz, agua, internet)
- Recibos de alquiler
- Extractos de pagos QR
- Declaraciones tributarias
- Extractos bancarios o de billeteras digitales

El motor analiza **consistencia, recurrencia y estabilidad** — no el monto absoluto.

#### Track 2B — Wallet / Crypto
Para usuarios con actividad en blockchains públicas (Binance, Takenos, exchanges). Su historial on-chain —transacciones, frecuencia, antigüedad de wallet— es fuente de señal crediticia directa. No requieren documentación paper: la blockchain es el respaldo.

---

### KYC como hard gate

Antes de que cualquier score sea generado o compartido, el usuario debe pasar **verificación de identidad KYC**. No es un peso dentro del score: es una condición binaria.

Sin KYC validado → el score no se activa → ninguna institución puede consultarlo.

Esto no es solo una decisión de producto. Es compliance por diseño. Los proveedores de KYC integrados (Sumsub, Metamap, Truora) aplican screening GAFI/FATF, listas de sanciones y validación documental cruzada antes de habilitar el perfil.

---

### Score con historial de rotaciones

El score no es una foto. Es una trayectoria.

Cada vez que el usuario certifica su reputación en blockchain, esa certificación queda registrada como una **rotación**. Las instituciones B2B no solo ven el score actual — ven cómo evolucionó, cuántas veces fue actualizado y si la tendencia es positiva.

Una persona con score 612 en su tercera rotación consecutiva al alza es un riesgo crediticio diferente a alguien con el mismo score en su primera consulta. El historial importa.

---

### Avalanche: la columna vertebral de la confianza

Aquí es donde la infraestructura hace la diferencia real.

Cuando un usuario certifica su score, se genera un **hash criptográfico** del valor y se escribe en el contrato inteligente `UYScoreRegistry` desplegado en **Avalanche Fuji C-Chain**. Eso significa:

- **Inmutable**: nadie puede modificar ni eliminar un score ya certificado
- **Portable**: el usuario puede llevar su reputación a cualquier institución del mundo que consulte la chain
- **Verificable**: cualquier entidad puede validar la autenticidad del score sin depender de UY Score como intermediario
- **Auditable**: cada certificación genera un evento `ScoreCertified` indexable, lo que permite a reguladores auditar sin acceder a datos sensibles

El contrato está desplegado en:
```
0xa60AdebBB831776b1575B90f4d6f5F91Bb5B723F
```
> [Ver en Snowtrace Testnet](https://testnet.snowtrace.io/address/0xa60AdebBB831776b1575B90f4d6f5F91Bb5B723F#events)

**¿Por qué Avalanche y no otra chain?**

Avalanche combina finalidad de transacción en menos de 2 segundos, costos de gas mínimos (crítico para usuarios con bajo poder adquisitivo) y un ecosistema institucional activo en LATAM. Para una plataforma de inclusión financiera, la fricción técnica del usuario no puede ser una barrera: Avalanche la elimina.

---

## El modelo B2B

UY Score no le vende datos a nadie. Lo que comercializa es **acceso al servicio analítico** que el propio usuario autoriza compartir.

Las instituciones financieras integran UY Score vía API y obtienen:
- Score alternativo certificado on-chain
- Historial de rotaciones con trayectoria temporal
- Estado KYC verificado por tercero
- Nivel de track (fiat / crypto)
- Categoría de riesgo calculada

### Configurables por entidad

Cada institución puede ajustar el modelo a su perfil de riesgo sin modificar la infraestructura base:

**Pesos por categoría** — qué tanto pesa cada bloque de información en el score final (servicios básicos, ingresos verificados, extractos bancarios, historial de pagos).

**Multiplicadores por producto** — un banco que tenga domiciliación automática puede premiar esa categoría con un multiplicador ×3 o ×5, incentivando el uso de sus propios productos mientras mejora la calidad del score del usuario.

**Umbrales de crédito** — score mínimo y monto máximo habilitado por tipo de producto (microcrédito, crédito personal, crédito productivo).

Esto permite que Banco Unión y Banco FIE operen con configuraciones distintas sobre la misma infraestructura, sin que ninguno acceda a los datos del otro.

---

## Compliance por país

UY Score está diseñado para operar como **Empresa de Tecnología Financiera (ETF)** — no como buró de crédito ni entidad financiera supervisada. Esta figura es clave: permite proveer servicios analíticos a entidades reguladas sin requerir licencia propia en cada mercado.

| País | Marco Open Finance | Protección de datos | Sandbox regulatorio | Posicionamiento UY |
|------|-------------------|---------------------|---------------------|-------------------|
| **Bolivia** | Sin marco formal. ASFI activo | Ley 164 + norma constitucional | ECP-ASFI activo | Ingreso al sandbox como ETF de scoring alternativo |
| **Brasil** | Open Finance pleno desde 2021 (BCB) | LGPD — Ley 13.709/2018 | BCB y CVM activos | Compatible con Open Finance; score portable como credencial verificable |
| **México** | Ley Fintech 2018 con Open Banking | LFPDPPP (2010) | CNBV | ETF bajo Ley Fintech; no requiere SOFOM |
| **Colombia** | Decreto 1297/2022 | Ley 1581 de 2012 | Superfinanciera | Scoring alternativo complementario a centrales de riesgo (DataCrédito, TransUnion) |
| **Perú** | En discusión legislativa | Ley 29733 (2011) | En desarrollo | Equivalente a empresa de análisis de riesgo; Yape/Plin como fuente de señal |

### Principios de compliance transversales

- **Consentimiento explícito y granular**: el usuario autoriza quién accede a su score, por cuánto tiempo y para qué producto específico.
- **Privacidad por diseño**: separación estricta entre datos sensibles (off-chain, cifrados) y el hash de reputación (on-chain, anónimo).
- **Sin venta de datos personales**: lo que circula en la API es el score y sus metadatos — nunca información personal identificable.
- **KYC con screening GAFI/FATF**: cumplimiento con listas de sanciones internacionales como condición de activación.
- **Adopción voluntaria de LGPD/GDPR**: estándar más alto de protección de datos, anticipando regulación futura en mercados donde aún no existe ley específica.

---

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Frontend | React 19 + Vite + TypeScript (strict) |
| Estilos | Tailwind CSS 3.4 con design system UY |
| Routing | React Router v7 |
| Blockchain | wagmi v2 + viem v2 + Avalanche Fuji C-Chain |
| Contrato | Solidity — `UYScoreRegistry.sol` |
| Red | Avalanche Fuji Testnet (C-Chain) |
| Identidad | KYC Web2-first (Sumsub-compatible) |

### Contrato inteligente

```solidity
// UYScoreRegistry.sol — Avalanche Fuji C-Chain
// 0xa60AdebBB831776b1575B90f4d6f5F91Bb5B723F

function certifyScore(uint256 score, bytes32 scoreHash) external
function getScore(address user) external view returns (uint256, bytes32, uint256)

event ScoreCertified(address indexed user, uint256 score, bytes32 scoreHash, uint256 timestamp)
```

Cada certificación emite un evento indexable. Los reguladores pueden auditar el historial sin necesidad de acceder a los datos off-chain del usuario.

---

## Demo en vivo

La demo muestra dos flujos completos:

**Para usuarios** (`/`) — construcción del score, visualización de trayectoria, pagos con multiplicadores activos y certificación on-chain en Avalanche.

**Para instituciones** (`/instituciones` → `/b2b`) — pipeline de solicitudes con estado KYC y rotaciones, panel de configuración de pesos, multiplicadores y umbrales por producto crediticio.

---

## Benchmarking: el patrón que funciona

| Referente | Mercado | Aprendizaje |
|-----------|---------|-------------|
| **Tala** | Kenia, México, India | Datos no convencionales del smartphone tienen poder predictivo demostrado. +6M usuarios |
| **Branch** | África, México | Scoring alternativo escala multinacional. Adquirida >US$ 400M |
| **Jumo** | Sudáfrica, Asia | Modelo B2B2C validado: scoring para telcos y bancos en 7 países |
| **M-Shwari** | Kenia | Historial de billetera móvil = señal crediticia válida. >20M usuarios |
| **Nubank** | Brasil | Modelo nativo digital en LATAM escala masivamente. UY no compite: complementa |

El patrón consistente en todos los casos exitosos: **datos alternativos verificables + foco institucional B2B + disciplina regulatoria**. UY Score aplica ese mismo patrón con el agregado de portabilidad on-chain — algo que ninguno de estos referentes tiene.

---

## Roadmap

```
Hoy            Q3 2026         Q1 2027         2028
  │               │               │               │
  ▼               ▼               ▼               ▼
Demo MVP     Piloto Bolivia   Escala Bolivia   LATAM
on Fuji      ECP-ASFI         3-5 partners     Perú · Colombia
             Cooperativa      5K+ usuarios     Open Finance
             500-1K usuarios  Ronda Seed       Series A
```

---

## Fuentes

Banco Mundial Global Findex 2021 · BID MIPYMES LATAM 2022 · OIT Panorama Laboral LATAM 2023 · GSMA Mobile Economy LATAM 2023 · ASFI Ley 393 · BCB Sistema QR · LGPD Brasil · Ley Fintech México · Superfinanciera Colombia · CGAP Alternative Data and Financial Inclusion 2018 · Berg et al., Review of Financial Studies 2020 · Björkegren & Grissen, World Bank Economic Review 2020.

---

*Bolivia · LATAM · 2026*
