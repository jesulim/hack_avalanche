import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { MOCK_SERVICES } from "../lib/mock-data"

export function Payments() {
  const navigate = useNavigate()
  const [active, setActive] = useState<Set<string>>(new Set(["luz", "wifi"]))

  const toggle = (id: string) =>
    setActive((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const totalPts = MOCK_SERVICES.filter((s) => active.has(s.id)).reduce((acc, s) => acc + s.pts * (s.multiplier ?? 1), 0)

  return (
    <div className="bg-uy-bg font-satoshi">
      {/* Mobile header */}
      <div className="md:hidden flex items-center gap-3 px-5 pt-12 pb-6">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-uy-card flex items-center justify-center shadow-sm">
          <ArrowLeft size={18} className="text-uy-ink" />
        </button>
        <div>
          <h1 className="text-xl font-black text-uy-ink">Tus pagos de cada mes</h1>
          <p className="text-gray-400 text-sm">Después contás cuándo.</p>
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden md:block mb-6">
        <h1 className="text-3xl font-black text-uy-ink">Tus pagos de cada mes</h1>
        <p className="text-gray-400 text-sm mt-1">Activá los servicios que ya pagás y sumá puntos automáticamente.</p>
      </div>

      {/* 2-col on desktop */}
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start">

        {/* Left: QR + services */}
        <div>
          <div className="mx-5 md:mx-0 mb-5 bg-uy-ink rounded-2xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">⬛</div>
              <div>
                <p className="text-white font-bold text-sm">Pagar con QR ahora</p>
                <p className="text-white/50 text-xs">se registra automático en tu score</p>
              </div>
            </div>
            <span className="text-white/40 text-lg">→</span>
          </div>

          <div className="px-5 md:px-0">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Recurrentes</p>
            <div className="flex flex-col gap-2">
              {MOCK_SERVICES.map((service) => {
                const isOn = active.has(service.id)
                return (
                  <div key={service.id} className="bg-uy-card rounded-2xl px-4 py-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg ${isOn ? "bg-uy-mint/15" : "bg-gray-100"}`}>
                        {service.icon}
                      </div>
                      <div>
                        <p className="text-uy-ink font-semibold text-sm">{service.name}</p>
                        <p className="text-gray-400 text-xs">{service.provider}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {service.multiplier && service.bank && (
                        <span className="bg-uy-primary/10 text-uy-primary text-[10px] font-semibold rounded-full px-2 py-0.5">
                          ×{service.multiplier} · {service.bank}
                        </span>
                      )}
                      <span className={`font-black text-sm ${isOn ? "text-uy-mint" : "text-gray-300"}`}>
                        +{service.pts}
                      </span>
                      <button
                        onClick={() => toggle(service.id)}
                        className={`w-11 h-6 rounded-full transition-colors relative ${isOn ? "bg-uy-primary" : "bg-gray-200"}`}
                      >
                        <span
                          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${isOn ? "left-5" : "left-0.5"}`}
                        />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right: summary + confirm */}
        <div className="px-5 md:px-0 mt-6 md:mt-0 mb-4 md:mb-0">
          <div className="bg-uy-card rounded-3xl p-6 shadow-sm md:sticky md:top-8">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Resumen</p>
            <div className="flex flex-col gap-3 mb-6">
              {MOCK_SERVICES.filter((s) => active.has(s.id)).map((s) => (
                <div key={s.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>{s.icon}</span>
                    <span className="text-uy-ink font-medium text-sm">{s.name}</span>
                  </div>
                  <span className="text-uy-mint font-black text-sm">+{s.pts * (s.multiplier ?? 1)}</span>
                </div>
              ))}
              {totalPts === 0 && (
                <p className="text-gray-300 text-sm text-center py-2">Activá servicios para acumular puntos</p>
              )}
            </div>
            {totalPts > 0 && (
              <div className="border-t border-gray-100 pt-4 mb-4 flex items-center justify-between">
                <span className="text-uy-ink font-bold text-sm">Total</span>
                <span className="text-uy-mint font-black text-lg">+{totalPts} pts</span>
              </div>
            )}
            <button
              onClick={() => navigate("/home")}
              className="w-full py-4 rounded-2xl font-black text-white text-base"
              style={{ background: "linear-gradient(135deg, #3845f5 0%, #1e2fa0 100%)" }}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
