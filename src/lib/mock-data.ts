export type ScoreRotation = {
  score: number
  date: string
  label: string
  txHash: string | null
  snowtraceUrl: string | null
}

const SNOWTRACE_EVENTS =
  "https://testnet.snowtrace.io/address/0xa60AdebBB831776b1575B90f4d6f5F91Bb5B723F#events"

export const MOCK_USER = {
  name: "Marina Vargas",
  initials: "MV",
  location: "Santa Cruz, BO",
  since: "mayo 2026",
  streak: 4,
  habitsTotal: 9,
  kycVerified: true,
  kycProvider: "Sumsub-style Web2",
}

export const MOCK_SCORE = {
  value: 612,
  max: 1000,
  level: "bueno",
  weekDelta: 12,
  nextLevel: "excelente",
  ptsToNext: 388,
  track: "crypto" as const,
  breakdown: [
    { label: "Servicios puntuales", detail: "3 de 3 este mes", pts: 12, done: true },
    { label: "Impuestos al día", detail: "GAMC · 15 may", pts: 8, done: true },
    { label: "Ingreso estable", detail: "verificado · Bs. 4,000", pts: 6, done: true },
    { label: "Pagos QR semanales", detail: "pendiente", pts: 5, done: false },
  ],
  rotations: [
    { score: 580, date: "12 mar 2026", label: "1ra certificación", txHash: null, snowtraceUrl: SNOWTRACE_EVENTS },
    { score: 612, date: "14 abr 2026", label: "2da certificación", txHash: null, snowtraceUrl: SNOWTRACE_EVENTS },
    { score: 648, date: "17 may 2026", label: "Actual", txHash: null, snowtraceUrl: null },
  ] satisfies ScoreRotation[],
}

export const MOCK_HABITS = [
  { id: "luz", icon: "💡", name: "Pagaste luz a tiempo", detail: "3 meses seguidos · ELFEC", pts: 4 },
  { id: "wifi", icon: "📶", name: "Wifi pagado", detail: "Tigo · 12 may", pts: 3 },
]

export const MOCK_NEXT_STEP = {
  icon: "💧",
  name: "Pagá el agua",
  detail: "vence en 3 días",
  pts: 3,
}

export const MOCK_SERVICES = [
  { id: "luz", icon: "💡", name: "Luz", provider: "ELFEC · cada 28", pts: 3, multiplier: 3, bank: "Banco Unión" },
  { id: "agua", icon: "💧", name: "Agua", provider: "SAGUAPAC · cada 5", pts: 3 },
  { id: "wifi", icon: "📶", name: "Wifi", provider: "Tigo · cada 12", pts: 2 },
  { id: "impuestos", icon: "🏛️", name: "Impuestos", provider: "GAMC · cada 15", pts: 5, multiplier: 5, bank: "Banco FIE" },
]
