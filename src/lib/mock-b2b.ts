export const MOCK_INSTITUTION = {
  name: "Banco Unión",
  plan: "Enterprise",
  activeUsers: 1247,
  avgScore: 628,
  approvalRate: 89,
  monthlyVolume: "$2.3M",
}

export type ApplicantStatus = "approved" | "review" | "rejected"

export const MOCK_APPLICANTS = [
  {
    id: 1, name: "Marina Vargas", initials: "MV", score: 648, kyc: true,
    rotations: [580, 612, 648], amount: 5000, status: "approved" as ApplicantStatus,
    track: "crypto", date: "17 may 2026", product: "Crédito personal",
  },
  {
    id: 2, name: "Carlos Mendoza", initials: "CM", score: 712, kyc: true,
    rotations: [590, 630, 670, 695, 712], amount: 15000, status: "approved" as ApplicantStatus,
    track: "fiat", date: "16 may 2026", product: "Crédito personal",
  },
  {
    id: 3, name: "Ana Quispe", initials: "AQ", score: 534, kyc: true,
    rotations: [534], amount: 3000, status: "review" as ApplicantStatus,
    track: "fiat", date: "16 may 2026", product: "Microcrédito",
  },
  {
    id: 4, name: "Diego Flores", initials: "DF", score: 789, kyc: true,
    rotations: [600, 640, 680, 710, 745, 768, 789], amount: 25000, status: "approved" as ApplicantStatus,
    track: "crypto", date: "15 may 2026", product: "Crédito productivo",
  },
  {
    id: 5, name: "Lucía Torres", initials: "LT", score: 498, kyc: false,
    rotations: [], amount: 2000, status: "rejected" as ApplicantStatus,
    track: "fiat", date: "15 may 2026", product: "—",
  },
  {
    id: 6, name: "Roberto Paz", initials: "RP", score: 601, kyc: true,
    rotations: [570, 601], amount: 8000, status: "review" as ApplicantStatus,
    track: "fiat", date: "14 may 2026", product: "Microcrédito",
  },
]

export const MOCK_CONFIG = {
  weights: [
    { label: "Servicios básicos", value: 30, color: "bg-uy-primary" },
    { label: "Ingresos verificados", value: 25, color: "bg-uy-mint" },
    { label: "Extractos bancarios", value: 25, color: "bg-uy-lemon" },
    { label: "Historial de pagos", value: 20, color: "bg-uy-coral" },
  ],
  multipliers: [
    { product: "Banca móvil BU", category: "Arriendo", value: 3 },
    { product: "Tarjeta débito BU", category: "Impuestos", value: 5 },
    { product: "Débito automático BU", category: "Servicios", value: 2 },
  ],
  thresholds: [
    { product: "Microcrédito", score: 500, maxAmount: "$5,000" },
    { product: "Crédito personal", score: 650, maxAmount: "$20,000" },
    { product: "Crédito productivo", score: 750, maxAmount: "$100,000" },
  ],
}
