import { BrowserRouter, Routes, Route, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom"
import { BottomNav } from "./components/BottomNav"
import { Landing } from "./pages/Landing"
import { B2BDashboard } from "./pages/B2BDashboard"
import { Home } from "./pages/Home"
import { Payments } from "./pages/Payments"
import { Score } from "./pages/Score"
import { Certify } from "./pages/Certify"

const NAV_LINKS = [
  { to: "/home", label: "Hoy" },
  { to: "/score", label: "Score" },
  { to: "/payments", label: "Pagos" },
  { to: "/certify", label: "Certificar" },
]

function AppLayout() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-uy-bg font-satoshi">
      {/* Desktop top nav */}
      <nav className="hidden md:flex sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto w-full px-8 py-4 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center">
            <img src="/logo_uy.png" alt="UY Score" className="h-7 w-auto" />
          </button>
          <div className="flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                    isActive ? "bg-uy-primary text-white" : "text-gray-400 hover:text-uy-ink"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <div className="w-9 h-9 rounded-full bg-uy-primary flex items-center justify-center text-white font-black text-sm">
            MV
          </div>
        </div>
      </nav>

      {/* Page content */}
      <div className="pb-20 md:pb-0 md:max-w-5xl md:mx-auto md:px-8 md:py-8">
        <Outlet />
      </div>

      <BottomNav />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/instituciones" element={<Landing />} />
        <Route path="/b2b" element={<B2BDashboard />} />
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/score" element={<Score />} />
          <Route path="/certify" element={<Certify />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
