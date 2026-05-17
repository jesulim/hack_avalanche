import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  CheckCircle2, XCircle, Settings, Users, BarChart2,
  ArrowUpRight, ExternalLink, ShieldCheck, TrendingUp,
} from "lucide-react"
import { MOCK_INSTITUTION, MOCK_APPLICANTS, MOCK_CONFIG, type ApplicantStatus } from "../lib/mock-b2b"

type Tab = "solicitudes" | "configuracion"
type Applicant = typeof MOCK_APPLICANTS[number]

function StatusBadge({ status }: { status: ApplicantStatus }) {
  const map = {
    approved: "bg-uy-mint/15 text-uy-mint",
    review: "bg-uy-lemon/40 text-uy-ink",
    rejected: "bg-uy-coral/15 text-uy-coral",
  }
  const label = { approved: "Aprobado", review: "Revisión", rejected: "Rechazado" }
  return (
    <span className={`text-[10px] font-bold rounded-full px-2.5 py-1 ${map[status]}`}>
      {label[status]}
    </span>
  )
}

function ApplicantDetail({ applicant }: { applicant: Applicant }) {
  const scoreColor = applicant.score >= 700
    ? "text-uy-mint"
    : applicant.score >= 550
    ? "text-uy-primary"
    : "text-uy-coral"

  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-full bg-uy-primary flex items-center justify-center text-white font-black text-sm">
            {applicant.initials}
          </div>
          <div>
            <p className="font-black text-uy-ink">{applicant.name}</p>
            <p className="text-gray-400 text-xs">{applicant.date}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Score certificado</p>
            <p className={`text-5xl font-black ${scoreColor}`}>{applicant.score}</p>
          </div>
          <StatusBadge status={applicant.status} />
        </div>
      </div>

      <div className="px-6 py-4 flex flex-col gap-3">
        {/* KYC */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">Identidad KYC</span>
          {applicant.kyc ? (
            <span className="flex items-center gap-1 text-uy-mint text-xs font-bold">
              <CheckCircle2 size={12} />Verificada
            </span>
          ) : (
            <span className="flex items-center gap-1 text-uy-coral text-xs font-bold">
              <XCircle size={12} />Sin verificar
            </span>
          )}
        </div>

        {/* Track */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">Track</span>
          <span className={`text-xs font-bold rounded-full px-2 py-0.5 ${applicant.track === "crypto" ? "bg-uy-primary/10 text-uy-primary" : "bg-uy-lemon/40 text-uy-ink"}`}>
            {applicant.track === "crypto" ? "2B · Wallet" : "Fiat"}
          </span>
        </div>

        {/* Rotations */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">Rotaciones on-chain</span>
          <span className="text-xs font-bold text-uy-ink">{applicant.rotations.length}</span>
        </div>

        {/* Amount */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">Monto solicitado</span>
          <span className="text-xs font-bold text-uy-ink">${applicant.amount.toLocaleString()}</span>
        </div>

        {/* Product */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">Producto habilitado</span>
          <span className="text-xs font-bold text-uy-ink">{applicant.product}</span>
        </div>

        {/* Rotation trend */}
        {applicant.rotations.length > 1 && (
          <div className="mt-1">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Trayectoria</p>
            <div className="flex items-end gap-1 h-10">
              {applicant.rotations.map((v, i) => {
                const pct = ((v - 400) / 600) * 100
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t bg-uy-primary/20 relative"
                      style={{ height: `${Math.max(pct, 10)}%` }}
                    >
                      {i === applicant.rotations.length - 1 && (
                        <div className="absolute inset-0 bg-uy-primary rounded-t" />
                      )}
                    </div>
                    <span className="text-[8px] text-gray-300">{v}</span>
                  </div>
                )
              })}
            </div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp size={10} className="text-uy-mint" />
              <span className="text-[10px] text-uy-mint font-semibold">tendencia positiva</span>
            </div>
          </div>
        )}

        {/* Snowtrace */}
        <a
          href="https://testnet.snowtrace.io/address/0xa60AdebBB831776b1575B90f4d6f5F91Bb5B723F#events"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-uy-primary text-xs font-semibold mt-1"
        >
          Ver historial on-chain <ExternalLink size={10} />
        </a>

        {/* Actions */}
        {applicant.status === "review" && (
          <div className="flex gap-2 mt-2">
            <button className="flex-1 py-2.5 rounded-xl bg-uy-mint/15 text-uy-mint font-bold text-xs">
              Aprobar
            </button>
            <button className="flex-1 py-2.5 rounded-xl bg-uy-coral/15 text-uy-coral font-bold text-xs">
              Rechazar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function ConfigPanel() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Pesos */}
      <div className="bg-white rounded-3xl shadow-sm p-6">
        <h3 className="font-black text-uy-ink mb-1">Pesos por categoría</h3>
        <p className="text-gray-400 text-xs mb-5">Cómo se distribuye el score total.</p>
        <div className="flex flex-col gap-4">
          {MOCK_CONFIG.weights.map((w) => (
            <div key={w.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-uy-ink">{w.label}</span>
                <span className="text-xs font-black text-uy-ink">{w.value}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${w.color} rounded-full`} style={{ width: `${w.value * 3}%` }} />
              </div>
            </div>
          ))}
        </div>
        <button className="mt-5 w-full py-2.5 rounded-xl border border-gray-200 text-gray-400 text-xs font-bold hover:border-uy-primary hover:text-uy-primary transition-colors flex items-center justify-center gap-2">
          <Settings size={12} /> Editar pesos
        </button>
      </div>

      {/* Multiplicadores */}
      <div className="bg-white rounded-3xl shadow-sm p-6">
        <h3 className="font-black text-uy-ink mb-1">Multiplicadores activos</h3>
        <p className="text-gray-400 text-xs mb-5">Bonus por uso de productos Banco Unión.</p>
        <div className="flex flex-col gap-3">
          {MOCK_CONFIG.multipliers.map((m) => (
            <div key={m.product} className="bg-uy-bg rounded-2xl px-4 py-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-uy-ink font-semibold text-sm">{m.category}</span>
                <span className="bg-uy-primary/10 text-uy-primary text-xs font-black rounded-full px-2 py-0.5">×{m.value}</span>
              </div>
              <p className="text-gray-400 text-[10px]">{m.product}</p>
            </div>
          ))}
        </div>
        <button className="mt-5 w-full py-2.5 rounded-xl border border-gray-200 text-gray-400 text-xs font-bold hover:border-uy-primary hover:text-uy-primary transition-colors flex items-center justify-center gap-2">
          <Settings size={12} /> Editar multiplicadores
        </button>
      </div>

      {/* Umbrales */}
      <div className="bg-white rounded-3xl shadow-sm p-6">
        <h3 className="font-black text-uy-ink mb-1">Umbrales de crédito</h3>
        <p className="text-gray-400 text-xs mb-5">Score mínimo por producto crediticio.</p>
        <div className="flex flex-col gap-3">
          {MOCK_CONFIG.thresholds.map((t) => (
            <div key={t.product} className="bg-uy-bg rounded-2xl px-4 py-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-uy-ink font-semibold text-sm">{t.product}</span>
                <span className="text-uy-mint font-black text-sm">{t.score}+</span>
              </div>
              <p className="text-gray-400 text-[10px]">hasta {t.maxAmount}</p>
            </div>
          ))}
        </div>
        <button className="mt-5 w-full py-2.5 rounded-xl border border-gray-200 text-gray-400 text-xs font-bold hover:border-uy-primary hover:text-uy-primary transition-colors flex items-center justify-center gap-2">
          <Settings size={12} /> Editar umbrales
        </button>
      </div>
    </div>
  )
}

export function B2BDashboard() {
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>("solicitudes")
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 font-satoshi">
      {/* Top nav */}
      <nav className="bg-uy-ink sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo_uy.png" alt="UY Score" className="h-7 w-auto brightness-0 invert" />
            <span className="text-white/20">|</span>
            <span className="text-white font-bold text-sm">{MOCK_INSTITUTION.name}</span>
            <span className="bg-uy-primary/40 text-uy-lemon text-[10px] font-bold rounded-full px-2.5 py-0.5">
              {MOCK_INSTITUTION.plan}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5 text-xs text-white/40">
              <div className="w-1.5 h-1.5 rounded-full bg-uy-mint animate-pulse" />
              Avalanche Fuji · en vivo
            </div>
            <button
              onClick={() => navigate("/instituciones")}
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              ← Volver
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-uy-ink">Panel de control</h1>
            <p className="text-gray-400 text-sm mt-0.5">Evaluación crediticia alternativa · UY Score</p>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-uy-mint" />
            <span className="text-xs text-gray-400">Datos certificados on-chain</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Usuarios evaluados", value: MOCK_INSTITUTION.activeUsers.toLocaleString(), delta: "+47 este mes", icon: <Users size={15} className="text-uy-primary" /> },
            { label: "Score promedio", value: MOCK_INSTITUTION.avgScore, delta: "+12 vs mes anterior", icon: <BarChart2 size={15} className="text-uy-mint" /> },
            { label: "Tasa de aprobación", value: `${MOCK_INSTITUTION.approvalRate}%`, delta: "umbral configurado: 550", icon: <CheckCircle2 size={15} className="text-uy-mint" /> },
            { label: "Volumen crediticio", value: MOCK_INSTITUTION.monthlyVolume, delta: "en el último mes", icon: <ArrowUpRight size={15} className="text-uy-lemon" style={{ filter: "brightness(0.7)" }} /> },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 text-gray-400 mb-3">
                {s.icon}
                <span className="text-xs font-medium">{s.label}</span>
              </div>
              <p className="text-2xl font-black text-uy-ink">{s.value}</p>
              <p className="text-uy-mint text-[10px] font-semibold mt-1">{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6 w-fit">
          {(["solicitudes", "configuracion"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                tab === t ? "bg-white text-uy-ink shadow-sm" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {t === "configuracion" && <Settings size={13} />}
              {t === "solicitudes" ? "Solicitudes" : "Configuración"}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === "solicitudes" ? (
          <div className="grid md:grid-cols-3 gap-6">
            {/* List */}
            <div className="md:col-span-2 bg-white rounded-3xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-black text-uy-ink">Solicitudes recientes</h2>
                <span className="text-xs text-gray-400">{MOCK_APPLICANTS.length} solicitantes</span>
              </div>
              <div className="divide-y divide-gray-50">
                {MOCK_APPLICANTS.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setSelected(selected === a.id ? null : a.id)}
                    className={`w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left ${
                      selected === a.id ? "bg-uy-primary/5 border-l-2 border-uy-primary" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-uy-primary/10 flex items-center justify-center text-uy-primary font-black text-xs shrink-0">
                        {a.initials}
                      </div>
                      <div>
                        <p className="text-uy-ink font-semibold text-sm">{a.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          {a.kyc ? (
                            <span className="text-uy-mint text-[10px] font-bold flex items-center gap-0.5">
                              <CheckCircle2 size={9} />KYC
                            </span>
                          ) : (
                            <span className="text-uy-coral text-[10px] font-bold flex items-center gap-0.5">
                              <XCircle size={9} />Sin KYC
                            </span>
                          )}
                          <span className="text-gray-200">·</span>
                          <span className="text-gray-400 text-[10px]">{a.rotations.length} rot.</span>
                          <span className="text-gray-200">·</span>
                          <span className="text-gray-400 text-[10px]">{a.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right hidden sm:block">
                        <p className="font-black text-uy-ink text-sm">{a.score}</p>
                        <p className="text-gray-400 text-[10px]">score</p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="font-semibold text-uy-ink text-sm">${a.amount.toLocaleString()}</p>
                        <p className="text-gray-400 text-[10px]">solicitado</p>
                      </div>
                      <StatusBadge status={a.status} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Detail */}
            <div>
              {selected ? (
                <ApplicantDetail applicant={MOCK_APPLICANTS.find((a) => a.id === selected)!} />
              ) : (
                <div className="bg-white rounded-3xl shadow-sm p-8 text-center">
                  <div className="text-5xl mb-4">👆</div>
                  <p className="text-gray-400 text-sm font-medium">Seleccioná un solicitante para ver score certificado, trayectoria y detalle KYC</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <ConfigPanel />
        )}
      </div>
    </div>
  )
}
