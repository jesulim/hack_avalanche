import { useState } from "react";
import { Link, Triangle, ShieldCheck, Coins, ArrowRight, Activity, Users, Shield, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function App() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="min-h-screen text-slate-800 font-sans relative">
      {/* Animated Ambient Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-brand-light pointer-events-none">
        {/* Glowing Orbs using brand colors */}
        <div className="absolute top-[-15%] left-[-10%] w-[40rem] h-[40rem] bg-brand-green/50 rounded-full blur-[120px] mix-blend-multiply opacity-60"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-brand-yellow/30 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-brand-blue/10 rounded-full blur-[130px] mix-blend-multiply opacity-60"></div>
        
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-4 mb-8">
          <div className="text-2xl font-extrabold text-brand-blue flex items-center gap-2">
            UY
            <span className="bg-brand-yellow text-brand-blue px-2 py-0.5 rounded-md">Score</span>
          </div>
          <Button 
            className="bg-brand-blue text-white hover:bg-brand-blue/90 font-semibold"
            onClick={() => setConnected(!connected)}
          >
            {connected ? '0x8A...3F1' : 'Conectar Wallet'}
          </Button>
        </nav>

        <main>
          {/* Hero Section */}
          <section className="text-center py-20 bg-white/50 rounded-3xl mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-60"></div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-extrabold text-brand-blue mb-6 leading-tight tracking-tight">
                Construí tu futuro<br />financiero OnChain.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Democratizamos el acceso al crédito usando la red Avalanche. 
                Tu historial es tuyo: inmutable, privado y sin intermediarios burocráticos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-brand-blue text-white hover:bg-brand-blue/90 text-lg px-8 py-6 rounded-xl font-bold shadow-lg shadow-brand-blue/20">
                  Ver mi Score Crediticio
                </Button>
                <Button className="bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90 text-lg px-8 py-6 rounded-xl font-bold shadow-lg shadow-brand-yellow/40 flex items-center gap-2">
                  Conocer más <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </section>

          {/* Social Proof / Stats */}
          <section className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-16 p-8 bg-white rounded-3xl shadow-xl shadow-brand-blue/5">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-brand-blue flex items-center justify-center gap-2 mb-2">
                <Users className="text-brand-yellow" size={32} /> +15k
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Perfiles Creados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-brand-blue flex items-center justify-center gap-2 mb-2">
                <Activity className="text-brand-green" size={32} /> 0.1s
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Velocidad de Análisis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-brand-blue flex items-center justify-center gap-2 mb-2">
                <Shield className="text-brand-blue" size={32} /> 100%
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Control de Datos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-brand-blue flex items-center justify-center gap-2 mb-2">
                <Server className="text-red-500" size={32} /> AVAX
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Red Nativa</div>
            </div>
          </section>

          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-blue mb-12 tracking-tight">El poder de las finanzas abiertas</h2>

          {/* Bento Grid Features */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <Card className="md:col-span-2 border-2 border-transparent hover:border-brand-green transition-all duration-300 shadow-lg hover:shadow-xl shadow-brand-blue/5 bg-white">
              <CardHeader>
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-4">
                  <Link size={28} className="text-brand-blue" />
                </div>
                <CardTitle className="text-2xl text-brand-blue font-bold">Historial 100% Inmutable</CardTitle>
                <CardDescription className="text-base text-slate-600 mt-2 leading-relaxed">
                  A diferencia de los burós de crédito tradicionales, tu comportamiento de pago se registra mediante Smart Contracts. Es una reputación transparente que nadie te puede quitar, alterar ni ocultar. Construís confianza a cada paso.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-transparent hover:border-brand-green transition-all duration-300 shadow-lg hover:shadow-xl shadow-brand-blue/5 bg-white">
              <CardHeader>
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-4">
                  <Triangle size={28} className="text-red-500" fill="currentColor" />
                </div>
                <CardTitle className="text-2xl text-brand-blue font-bold">Powered by Avalanche</CardTitle>
                <CardDescription className="text-base text-slate-600 mt-2 leading-relaxed">
                  Aprovechamos la finalidad casi instantánea y las bajas comisiones de Avalanche para que consultar tu score no te cueste una fortuna.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-transparent hover:border-brand-green transition-all duration-300 shadow-lg hover:shadow-xl shadow-brand-blue/5 bg-white">
              <CardHeader>
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheck size={28} className="text-brand-blue" />
                </div>
                <CardTitle className="text-2xl text-brand-blue font-bold">Privacidad Garantizada</CardTitle>
                <CardDescription className="text-base text-slate-600 mt-2 leading-relaxed">
                  La soberanía de los datos vuelve a vos. Mediante pruebas criptográficas, demostrás tu solvencia sin tener que regalar todos tus datos personales a empresas centralizadas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="md:col-span-2 border-2 border-transparent hover:border-brand-green transition-all duration-300 shadow-lg hover:shadow-xl shadow-brand-blue/5 bg-white">
              <CardHeader>
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-4">
                  <Coins size={28} className="text-brand-yellow" />
                </div>
                <CardTitle className="text-2xl text-brand-blue font-bold">Acceso Inmediato a DeFi y TradFi</CardTitle>
                <CardDescription className="text-base text-slate-600 mt-2 leading-relaxed">
                  Tu score UY sirve como un pasaporte financiero. Usalo para acceder a préstamos con tasas preferenciales en protocolos descentralizados, o compartilo con instituciones tradicionales en Uruguay.
                </CardDescription>
              </CardHeader>
            </Card>
          </section>

          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-blue mb-12 tracking-tight">¿Cómo funciona UY?</h2>

          {/* How it works */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <Card className="border-none shadow-md bg-white relative pt-8">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-green text-brand-blue rounded-full flex items-center justify-center text-xl font-extrabold shadow-lg shadow-brand-green/40">1</div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-brand-blue font-bold">Conectá tu Wallet</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600">
                Vinculá tu billetera de Avalanche (Core, MetaMask). Es tu identidad digital única y segura.
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white relative pt-8">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-green text-brand-blue rounded-full flex items-center justify-center text-xl font-extrabold shadow-lg shadow-brand-green/40">2</div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-brand-blue font-bold">Análisis OnChain</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600">
                Nuestros algoritmos evalúan tu historial de transacciones, liquidez y comportamiento de forma anónima.
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white relative pt-8">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-green text-brand-blue rounded-full flex items-center justify-center text-xl font-extrabold shadow-lg shadow-brand-green/40">3</div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-brand-blue font-bold">Desbloqueá Crédito</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600">
                Obtené tu NFT de Score Crediticio y accedé a mejores oportunidades financieras al instante.
              </CardContent>
            </Card>
          </section>

          {/* Bottom CTA */}
          <section className="bg-brand-blue rounded-3xl p-12 md:p-16 text-center relative overflow-hidden mb-16 shadow-2xl shadow-brand-blue/20">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-[radial-gradient(circle,_rgba(167,243,208,0.1)_0%,_transparent_60%)]"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">¿Listo para tomar el control de tu historial?</h2>
              <p className="text-xl text-brand-light mb-10 max-w-2xl mx-auto opacity-90">
                Sumate a la revolución de los datos financieros en Uruguay. Tu primer score es completamente gratuito.
              </p>
              <Button className="bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90 text-lg px-8 py-6 rounded-xl font-bold shadow-xl shadow-brand-yellow/20">
                Crear mi perfil ahora
              </Button>
            </div>
          </section>
        </main>

        <footer className="text-center py-8 border-t border-brand-blue/10 text-brand-blue font-medium">
          <p>&copy; {new Date().getFullYear()} UY Score - Avalanche Hackathon. Diseñado con confianza.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
