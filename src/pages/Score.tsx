import { Share2, CheckCircle2, Clock, ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { ScoreRing } from "../components/ScoreRing"
import { MOCK_SCORE } from "../lib/mock-data"

export function Score() {
  const navigate = useNavigate()

  return (
    <div className="bg-uy-bg font-satoshi">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4 md:px-0 md:pt-0 md:pb-6">
        <h1 className="text-xl md:text-3xl font-black text-uy-ink">Tu score</h1>
        <div className="flex items-center gap-2 md:gap-3">
          {MOCK_SCORE.track === "crypto" ? (
            <span className="bg-uy-primary/10 text-uy-primary font-bold text-xs rounded-full px-3 py-1">Track 2B · Wallet</span>
          ) : (
            <span className="bg-uy-lemon text-uy-ink font-bold text-xs rounded-full px-3 py-1">Track Fiat</span>
          )}
          <div className="flex items-center gap-1.5 bg-uy-mint/15 rounded-full px-3 py-1">
            <CheckCircle2 size={12} className="text-uy-mint" />
            <span className="text-uy-mint font-bold text-xs">certificado</span>
          </div>
          <button className="w-8 h-8 rounded-full bg-uy-card flex items-center justify-center shadow-sm">
            <Share2 size={16} className="text-uy-ink" />
          </button>
        </div>
      </div>

      {/* 2-col on desktop */}
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start">

        {/* Left: ring + stats + CTA */}
        <div>
          <div className="flex flex-col items-center py-6 md:py-0 md:items-start">
            <div className="relative md:mx-auto">
              <ScoreRing value={MOCK_SCORE.value} max={MOCK_SCORE.max} size={180} strokeWidth={12} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-uy-ink">{MOCK_SCORE.value}</span>
                <span className="text-gray-400 text-sm font-medium">de {MOCK_SCORE.max}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-uy-mint font-bold text-sm">+48 este mes</span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400 text-sm">nivel · {MOCK_SCORE.level}</span>
            </div>
          </div>

          {/* Certify CTA */}
          <div className="px-5 md:px-0 mt-6 md:mt-8 mb-4 md:mb-0">
            <button
              onClick={() => navigate("/certify")}
              className="w-full py-4 rounded-2xl font-black text-white text-base"
              style={{ background: "linear-gradient(135deg, #3845f5 0%, #1e2fa0 100%)" }}
            >
              Certificar en Avalanche →
            </button>
          </div>
        </div>

        {/* Right: breakdown + rotation history */}
        <div>
          {/* Breakdown */}
          <div className="px-5 md:px-0 mt-2 md:mt-0">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
              Qué construyó tu score
            </p>
            <div className="flex flex-col gap-2">
              {MOCK_SCORE.breakdown.map((item, i) => (
                <div key={i} className="bg-uy-card rounded-2xl px-4 py-3 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${item.done ? "bg-uy-mint/15" : "bg-gray-100"}`}>
                      {item.done
                        ? <CheckCircle2 size={14} className="text-uy-mint" />
                        : <Clock size={14} className="text-gray-400" />
                      }
                    </div>
                    <div>
                      <p className="text-uy-ink font-semibold text-sm leading-tight">{item.label}</p>
                      <p className="text-gray-400 text-xs">{item.detail}</p>
                    </div>
                  </div>
                  <span className={`font-black text-sm ${item.done ? "text-uy-mint" : "text-gray-300"}`}>
                    +{item.pts}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Rotation history */}
          <div className="px-5 md:px-0 mt-6 mb-4 md:mb-0">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Tu trayectoria</p>
              <span className="text-uy-mint text-xs font-semibold">↑ tendencia positiva</span>
            </div>
            <div className="flex flex-col gap-2">
              {MOCK_SCORE.rotations.slice().reverse().map((r, i) => {
                const isLatest = i === 0
                return (
                  <div
                    key={r.label}
                    className={`bg-uy-card rounded-2xl px-4 py-3 flex items-center justify-between shadow-sm ${isLatest ? "border border-uy-primary" : ""}`}
                  >
                    <div>
                      <p className={`font-black text-lg leading-none ${isLatest ? "text-uy-primary" : "text-uy-ink"}`}>{r.score}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{r.label} · {r.date}</p>
                    </div>
                    {r.snowtraceUrl ? (
                      <a
                        href={r.snowtraceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-uy-primary text-xs font-semibold"
                      >
                        Ver en Snowtrace <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span className="text-gray-300 text-[10px]">pendiente de certificar</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
