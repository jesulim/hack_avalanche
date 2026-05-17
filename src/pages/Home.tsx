import { useNavigate } from "react-router-dom"
import { Bell, CheckCircle2 } from "lucide-react"
import { ScoreRing } from "../components/ScoreRing"
import { MOCK_USER, MOCK_SCORE, MOCK_HABITS, MOCK_NEXT_STEP } from "../lib/mock-data"

export function Home() {
  const navigate = useNavigate()
  const progress = (MOCK_SCORE.value / MOCK_SCORE.max) * 100

  return (
    <div className="bg-uy-bg font-satoshi">
      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between px-5 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-uy-primary flex items-center justify-center text-white font-black text-sm">
            {MOCK_USER.initials}
          </div>
          <div>
            <p className="text-[11px] text-gray-400 font-medium">Hola,</p>
            <p className="text-uy-ink font-black text-sm leading-none">{MOCK_USER.name.split(" ")[0]}</p>
            {MOCK_USER.kycVerified && (
              <span className="inline-flex items-center gap-1 bg-uy-mint/10 text-uy-mint text-[10px] font-semibold rounded-full px-2 py-0.5 mt-0.5">
                <CheckCircle2 size={10} />Identidad verificada
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-uy-coral/10 rounded-full px-2.5 py-1">
            <span className="text-uy-coral text-xs">🔥</span>
            <span className="text-uy-coral font-black text-xs">{MOCK_USER.streak}</span>
          </div>
          <Bell size={20} className="text-gray-400" />
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden md:flex items-center justify-between mb-6">
        <div>
          <p className="text-gray-400 text-sm font-medium">Hola,</p>
          <h1 className="text-3xl font-black text-uy-ink">{MOCK_USER.name.split(" ")[0]}</h1>
          {MOCK_USER.kycVerified && (
            <span className="inline-flex items-center gap-1 bg-uy-mint/10 text-uy-mint text-xs font-semibold rounded-full px-2.5 py-1 mt-1">
              <CheckCircle2 size={12} />Identidad verificada
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-uy-coral/10 rounded-full px-3 py-1.5">
            <span className="text-uy-coral text-sm">🔥</span>
            <span className="text-uy-coral font-black text-sm">{MOCK_USER.streak} días seguidos</span>
          </div>
          <Bell size={22} className="text-gray-400" />
        </div>
      </div>

      {/* 2-col on desktop */}
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start">
        {/* Score card */}
        <div className="mx-5 md:mx-0 rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #3845f5 0%, #1e2fa0 100%)" }}>
          <div className="p-5 md:p-7">
            <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-3">Tu Score UY</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-6xl font-black text-white leading-none">{MOCK_SCORE.value}</span>
                  <span className="text-white/50 text-lg font-medium mb-1">/{MOCK_SCORE.max}</span>
                </div>
                <div className="inline-flex items-center gap-1 bg-uy-mint/20 rounded-full px-3 py-1">
                  <span className="text-uy-mint text-xs">↗</span>
                  <span className="text-uy-mint font-bold text-xs">+{MOCK_SCORE.weekDelta} esta semana</span>
                </div>
              </div>
              <ScoreRing value={MOCK_SCORE.value} max={MOCK_SCORE.max} size={90} strokeWidth={7} />
            </div>
            <div className="mt-4">
              <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-uy-lemon rounded-full" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-white/50 text-[10px]">nivel · {MOCK_SCORE.level}</span>
                <span className="text-white/50 text-[10px]">{MOCK_SCORE.ptsToNext} para {MOCK_SCORE.nextLevel}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right col: Esta semana + Próximo paso */}
        <div className="flex flex-col gap-5">
          <div className="px-5 md:px-0 mt-6 md:mt-0">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Esta semana</p>
              <button className="text-uy-primary text-xs font-bold">Ver todo</button>
            </div>
            <div className="flex flex-col gap-2">
              {MOCK_HABITS.map((h) => (
                <div key={h.id} className="bg-uy-card rounded-2xl px-4 py-3 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-uy-lemon/20 flex items-center justify-center text-lg">
                      {h.icon}
                    </div>
                    <div>
                      <p className="text-uy-ink font-semibold text-sm leading-tight">{h.name}</p>
                      <p className="text-gray-400 text-xs">{h.detail}</p>
                    </div>
                  </div>
                  <span className="text-uy-mint font-black text-sm">+{h.pts}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-5 md:px-0 mb-4 md:mb-0">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Próximo paso</p>
            <div className="bg-uy-lemon rounded-2xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/40 flex items-center justify-center text-lg">
                  {MOCK_NEXT_STEP.icon}
                </div>
                <div>
                  <p className="text-uy-ink font-bold text-sm">{MOCK_NEXT_STEP.name}</p>
                  <p className="text-uy-ink/60 text-xs">{MOCK_NEXT_STEP.detail} · +{MOCK_NEXT_STEP.pts} pts</p>
                </div>
              </div>
              <button
                onClick={() => navigate("/payments")}
                className="bg-uy-ink text-white rounded-xl px-3 py-2 text-xs font-bold"
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
