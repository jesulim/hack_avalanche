import { NavLink, useLocation } from "react-router-dom"
import { Home, BarChart2, Plus, ShieldCheck, User } from "lucide-react"

export function BottomNav() {
  const { pathname } = useLocation()

  const linkClass = (path: string) =>
    `flex flex-col items-center gap-0.5 ${pathname === path ? "text-uy-primary" : "text-gray-400"}`

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-100 flex items-center justify-around px-2 py-2 z-50">
      {/* Hoy */}
      <NavLink to="/home" className={linkClass("/home")}>
        <Home size={22} />
        <span className="text-[10px] font-medium">Hoy</span>
      </NavLink>

      {/* Score */}
      <NavLink to="/score" className={linkClass("/score")}>
        <BarChart2 size={22} />
        <span className="text-[10px] font-medium">Score</span>
      </NavLink>

      {/* FAB */}
      <NavLink to="/payments" className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-uy-lemon flex items-center justify-center shadow-md -mt-3">
          <Plus size={24} className="text-uy-ink" />
        </div>
      </NavLink>

      {/* Certify */}
      <NavLink to="/certify" className={linkClass("/certify")}>
        <ShieldCheck size={22} />
        <span className="text-[10px] font-medium">Certificar</span>
      </NavLink>

      {/* Perfil — inactive */}
      <div className="flex flex-col items-center gap-0.5 text-gray-300">
        <User size={22} />
        <span className="text-[10px] font-medium">Perfil</span>
      </div>
    </nav>
  )
}
