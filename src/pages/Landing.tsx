import { useNavigate, useLocation, Link } from "react-router-dom"
import { ShieldCheck, BarChart2, Wallet, ChevronRight, CheckCircle2, Zap, Users, Settings, TrendingUp, Lock } from "lucide-react"
import heroImg from "../assets/hero.png"

function TabSwitcher() {
  const { pathname } = useLocation()
  const isB2B = pathname === "/instituciones"

  return (
    <div className="inline-flex bg-white/10 rounded-2xl p-1 gap-1">
      <Link
        to="/"
        className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
          !isB2B ? "bg-white text-uy-primary shadow-sm" : "text-white/70 hover:text-white"
        }`}
      >
        Para usuarios
      </Link>
      <Link
        to="/instituciones"
        className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
          isB2B ? "bg-white text-uy-primary shadow-sm" : "text-white/70 hover:text-white"
        }`}
      >
        Para instituciones
      </Link>
    </div>
  )
}

function UserLanding({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #3845f5 0%, #1a2080 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-center">
          <TabSwitcher />
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-20 md:pb-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <ShieldCheck size={14} className="text-uy-mint" />
              <span className="text-white/80 text-sm font-medium">Certificado en Avalanche C-Chain</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Tu reputación<br />financiera,<br />en tus manos.
            </h1>
            <p className="text-white/70 text-lg font-medium mb-8 max-w-lg mx-auto md:mx-0">
              Sin banco, sin historial tradicional. Solo tus hábitos reales convertidos en un score portable que abre puertas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={() => navigate("/home")}
                className="bg-uy-lemon text-uy-ink font-black text-base px-8 py-4 rounded-2xl"
              >
                Probá el demo
              </button>
              <a href="#como-funciona" className="border border-white/30 text-white font-bold text-base px-8 py-4 rounded-2xl text-center">
                Cómo funciona ↓
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-shrink-0 justify-center">
            <img src={heroImg} alt="UY Score app" className="h-[460px] w-auto" />
          </div>
        </div>
      </section>

      {/* ¿Para quién? */}
      <section id="como-funciona" className="py-20 bg-uy-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-uy-primary font-bold text-sm uppercase tracking-widest">Dos perfiles</span>
            <h2 className="text-4xl font-black text-uy-ink mt-2">¿Quién puede usar UY Score?</h2>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              No importa si tu dinero es fiat o crypto. UY Score lo convierte en reputación verificable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-uy-lemon/30 flex items-center justify-center mb-5">
                <Users size={22} className="text-uy-ink" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Economía informal</span>
              <h3 className="text-2xl font-black text-uy-ink mt-2 mb-3">Trabajadores informales</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Vendés en feria, tenés un emprendimiento, trabajás por tu cuenta. Pagás luz, agua, arriendo, impuestos — ese historial tiene valor. UY lo convierte en score crediticio portable.
              </p>
              <div className="flex flex-col gap-2.5">
                {["Pagos de servicios básicos", "Facturas y comprobantes", "Extractos bancarios", "Historial de pagos puntuales"].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-uy-mint shrink-0" />
                    <span className="text-uy-ink text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-uy-primary/10 flex items-center justify-center mb-5">
                <Wallet size={22} className="text-uy-primary" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Economía digital</span>
              <h3 className="text-2xl font-black text-uy-ink mt-2 mb-3">Freelancers y nómadas digitales</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Cobrás en USDT, usás exchanges o tu propia wallet. Tu historial on-chain ya existe — UY lo lee y lo convierte en score sin que subas nada.
              </p>
              <div className="flex flex-col gap-2.5">
                {["Historial de wallet on-chain", "Actividad en exchanges y fintechs", "Frecuencia y volumen de ingresos", "Certificación inmutable en Avalanche"].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-uy-primary shrink-0" />
                    <span className="text-uy-ink text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona el score */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-uy-primary font-bold text-sm uppercase tracking-widest">El score</span>
            <h2 className="text-4xl font-black text-uy-ink mt-2">Tu reputación crece con vos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Registrás tus hábitos", desc: "Cargás tus pagos de servicios, facturas, o conectás tu wallet. UY pondera cada dato.", color: "bg-uy-primary/10", text: "text-uy-primary" },
              { step: "02", title: "Construís tu score", desc: "UY genera tu score en base al 80% de datos verificables y 20% de comportamiento financiero.", color: "bg-uy-lemon/30", text: "text-uy-ink" },
              { step: "03", title: "Certificás en Avalanche", desc: "Tu score queda registrado on-chain. Es tuyo, nadie puede modificarlo, lo llevás a cualquier institución.", color: "bg-uy-mint/10", text: "text-uy-mint" },
            ].map(s => (
              <div key={s.step} className="bg-uy-bg rounded-3xl p-7">
                <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                  <span className={`font-black text-sm ${s.text}`}>{s.step}</span>
                </div>
                <h3 className="font-black text-uy-ink text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantías */}
      <section className="py-20 bg-uy-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-uy-ink">Tu score, tus reglas.</h2>
            <p className="text-gray-400 mt-3 text-lg max-w-xl mx-auto">Lo que hace a UY diferente de cualquier buró de crédito tradicional.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🔒", title: "Inmutable", desc: "Cada certificación queda en Avalanche. Ninguna institución puede alterar tu historial." },
              { icon: "✈️", title: "Portable", desc: "Tu score es tuyo. Lo llevás a cualquier entidad que use UY — no queda atado a ningún banco." },
              { icon: "🪪", title: "Verificado", desc: "Identidad validada con estándar KYC reconocido por instituciones financieras reguladas." },
            ].map(f => (
              <div key={f.title} className="bg-white rounded-3xl p-7 shadow-sm text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-black text-uy-ink text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ background: "linear-gradient(135deg, #3845f5 0%, #1a2080 100%)" }} className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Tu reputación ya existe.<br />Solo falta certificarla.
          </h2>
          <p className="text-white/60 text-lg mb-8">Probá el demo y certificá tu primer score en Avalanche.</p>
          <button
            onClick={() => navigate("/home")}
            className="bg-uy-lemon text-uy-ink font-black text-lg px-10 py-5 rounded-2xl inline-flex items-center gap-2"
          >
            Empezar ahora <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </>
  )
}

function B2BLanding({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0a0a14 0%, #1a2080 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-center">
          <TabSwitcher />
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <ShieldCheck size={14} className="text-uy-mint" />
              <span className="text-white/80 text-sm font-medium">Motor de scoring B2B para instituciones financieras</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Expandí tu base<br />de clientes.
            </h1>
            <p className="text-white/70 text-lg font-medium mb-8 max-w-2xl mx-auto">
              Millones de personas en LATAM no entran en el sistema crediticio tradicional — no porque sean riesgosas, sino porque no hay datos para evaluarlas. UY Score cambia eso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate("/b2b")}
                className="bg-uy-lemon text-uy-ink font-black text-base px-8 py-4 rounded-2xl"
              >
                Ver demo institucional
              </button>
              <a href="#como-funciona-b2b" className="border border-white/30 text-white font-bold text-base px-8 py-4 rounded-2xl text-center">
                Ver capacidades ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* El problema */}
      <section className="py-20 bg-uy-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-uy-coral font-bold text-sm uppercase tracking-widest">El problema</span>
              <h2 className="text-4xl font-black text-uy-ink mt-2 mb-4">Un mercado enorme sin acceso a crédito.</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                El 60% de la población económicamente activa de LATAM trabaja en la informalidad. Pagan sus servicios, tienen ingresos reales, manejan finanzas responsablemente — pero no pueden demostrarlo ante ninguna institución financiera.
              </p>
              <p className="text-gray-400 leading-relaxed">
                UY Score es el puente entre ese mercado y vos. Datos verificables, identidad validada, historial on-chain inmutable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "60%", label: "trabaja en economía informal en LATAM" },
                { value: "0", label: "historial crediticio en el sistema tradicional" },
                { value: "100%", label: "de sus datos son verificables con UY Score" },
                { value: "3–6m", label: "vigencia del score, renovable automáticamente" },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-black text-uy-primary mb-1">{s.value}</p>
                  <p className="text-gray-400 text-xs leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capacidades */}
      <section id="como-funciona-b2b" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-uy-primary font-bold text-sm uppercase tracking-widest">Capacidades</span>
            <h2 className="text-4xl font-black text-uy-ink mt-2">Configurás el motor a tu medida.</h2>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
              UY Score no es un score genérico. Tu institución define las reglas para su contexto y sus productos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Settings size={20} className="text-uy-primary" />,
                bg: "bg-uy-primary/10",
                title: "Pesos configurables por categoría",
                desc: "Definís qué variables importan más para tu evaluación. Servicios básicos, ingresos, historial de deuda, frecuencia de pagos — cada categoría tiene su peso relativo.",
                tags: ["Servicios", "Ingresos", "Deuda", "Frecuencia"],
              },
              {
                icon: <Zap size={20} className="text-uy-ink" />,
                bg: "bg-uy-lemon/40",
                title: "Multiplicadores por producto propio",
                desc: "Incentivá el uso de tus productos. Ofrecé ×3 si el usuario paga con tu banca móvil, ×5 si usa tu tarjeta. Los usuarios optimizan su score usando lo que mejor les conviene.",
                tags: ["×3 banca móvil", "×5 tarjeta", "×2 débito"],
              },
              {
                icon: <TrendingUp size={20} className="text-uy-mint" />,
                bg: "bg-uy-mint/10",
                title: "Umbrales de habilitación crediticia",
                desc: "Definís los cortes de score para cada producto: microcrédito, crédito personal, crédito productivo. Cada umbral es tuyo y se actualiza sin intervención de UY.",
                tags: ["Microcrédito 550+", "Personal 700+", "Productivo 800+"],
              },
              {
                icon: <Lock size={20} className="text-uy-coral" />,
                bg: "bg-uy-coral/10",
                title: "Historial de rotaciones on-chain",
                desc: "Cada certificación del score queda registrada en Avalanche. Podés auditar el historial completo del usuario — cuántos créditos obtuvo, cuánto subió su score, cuándo certificó.",
                tags: ["Inmutable", "Auditable", "On-chain"],
              },
            ].map(card => (
              <div key={card.title} className="bg-uy-bg rounded-3xl p-7">
                <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center shadow-sm mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-black text-uy-ink text-lg mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map(t => (
                    <span key={t} className="bg-white text-uy-ink text-xs font-semibold rounded-full px-3 py-1 shadow-sm">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplo en vivo */}
      <section className="py-20 bg-uy-ink">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-uy-mint font-bold text-sm uppercase tracking-widest">Ejemplo real</span>
            <h2 className="text-4xl font-black text-white mt-2">Así compiten las instituciones por los usuarios.</h2>
            <p className="text-white/50 mt-3 text-lg max-w-2xl mx-auto">
              El usuario no se casa con ningún banco. Optimiza su score usando lo mejor de cada uno — y vos ganás comportamiento.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-3">
              {[
                { label: "Arriendo", bank: "Banco Unión · banca móvil", mult: "×3", pts: "+9 pts", color: "bg-uy-primary/30" },
                { label: "Impuestos", bank: "Banco FIE · tarjeta de débito", mult: "×5", pts: "+25 pts", color: "bg-uy-mint/20" },
                { label: "Agua", bank: "Banco FIE · débito automático", mult: "×2", pts: "+6 pts", color: "bg-uy-mint/20" },
                { label: "Luz", bank: "Sin institución asociada", mult: "×1", pts: "+3 pts", color: "bg-white/10" },
              ].map(r => (
                <div key={r.label} className={`${r.color} rounded-2xl px-5 py-4 flex items-center justify-between`}>
                  <div>
                    <span className="text-white font-bold text-sm">{r.label}</span>
                    <p className="text-white/50 text-xs mt-0.5">{r.bank}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-white/20 text-white text-xs font-bold rounded-full px-2.5 py-1">{r.mult}</span>
                    <span className="text-uy-mint font-black text-sm">{r.pts}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-white mb-4">El resultado</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                El usuario acumula más puntos usando los productos de las instituciones que ofrecen mejores multiplicadores. Vos ganás transacciones, el usuario gana score, UY garantiza la integridad del sistema.
              </p>
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Score total del ejemplo</p>
                <p className="text-5xl font-black text-uy-lemon">+43 pts</p>
                <p className="text-white/40 text-sm mt-1">en un solo mes, con 4 pagos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KYC + confianza */}
      <section className="py-20 bg-uy-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-uy-primary font-bold text-sm uppercase tracking-widest">Confianza y compliance</span>
            <h2 className="text-4xl font-black text-uy-ink mt-2">Construido para instituciones reguladas.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🪪", title: "KYC Web2 integrado", desc: "Verificación de identidad con screening GAFI/FATF incluido. El estándar que los bancos ya conocen y las regulaciones exigen." },
              { icon: "⛓️", title: "Evidencia on-chain", desc: "Cada score está respaldado por un hash criptográfico registrado en Avalanche. Auditable por cualquier parte, en cualquier momento." },
              { icon: "🚫", title: "Lista negra integrada", desc: "Usuarios en listas GAFI, PEPs, o fichados por tu institución quedan bloqueados permanentemente, sin importar su score." },
            ].map(f => (
              <div key={f.title} className="bg-white rounded-3xl p-7 shadow-sm text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-black text-uy-ink text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ background: "linear-gradient(135deg, #0a0a14 0%, #1a2080 100%)" }} className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            ¿Listo para llegar<br />a nuevos clientes?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Contanos sobre tu institución y te mostramos cómo UY Score se integra a tu flujo de crédito.
          </p>
          <button
            onClick={() => navigate("/b2b")}
            className="bg-uy-lemon text-uy-ink font-black text-lg px-10 py-5 rounded-2xl inline-flex items-center gap-2"
          >
            Ver demo institucional <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </>
  )
}

export function Landing() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isB2B = pathname === "/instituciones"

  return (
    <div className="min-h-screen bg-white font-satoshi">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/logo_uy.png" alt="UY Score" className="h-8 w-auto" />
          {isB2B ? (
            <button
              onClick={() => navigate("/b2b")}
              className="bg-uy-ink text-white font-bold text-sm px-5 py-2.5 rounded-xl"
            >
              Ver demo →
            </button>
          ) : (
            <button
              onClick={() => navigate("/home")}
              className="bg-uy-primary text-white font-bold text-sm px-5 py-2.5 rounded-xl"
            >
              Ver demo →
            </button>
          )}
        </div>
      </nav>

      {isB2B ? <B2BLanding navigate={navigate} /> : <UserLanding navigate={navigate} />}

      {/* Footer */}
      <footer className="bg-uy-ink py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/logo_uy.png" alt="UY Score" className="h-7 w-auto brightness-0 invert opacity-50" />
          <p className="text-white/30 text-sm text-center">© 2026 UY Score · Todos los derechos reservados</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">Usuarios</Link>
            <Link to="/instituciones" className="text-white/40 hover:text-white/70 text-sm transition-colors">Instituciones</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
