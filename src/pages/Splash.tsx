import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate("/home"), 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-8 text-white"
      style={{ background: "linear-gradient(160deg, #3845f5 0%, #1a2080 100%)" }}
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <img src="/logo_uy.png" alt="UY Score" className="h-16 w-auto brightness-0 invert" />

        <div>
          <h1 className="text-4xl font-satoshi font-black leading-tight mb-3">
            Tu progreso<br />financiero cuenta.
          </h1>
          <p className="text-white/70 font-satoshi font-medium text-base">
            Construí tu score con tus hábitos de cada día.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 w-full max-w-xs">
          <button
            onClick={() => navigate("/home")}
            className="w-full py-4 rounded-2xl bg-white text-uy-primary font-satoshi font-black text-base"
          >
            Empezar
          </button>
          <button className="text-white/60 font-satoshi font-medium text-sm">
            Ya tengo cuenta · Ingresar
          </button>
        </div>
      </div>
    </div>
  )
}
