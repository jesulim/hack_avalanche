import { useState } from "react"
import { useAccount, useConnect, useSwitchChain, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { avalancheFuji } from "wagmi/chains"
import { keccak256, toHex } from "viem"
import { ShieldCheck, ExternalLink, Loader2, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { CONTRACT_ADDRESS, UY_SCORE_ABI } from "../lib/contract"
import { MOCK_SCORE } from "../lib/mock-data"

export function Certify() {
  const navigate = useNavigate()
  const { address, isConnected, chainId } = useAccount()
  const { connect, connectors } = useConnect()
  const { switchChain } = useSwitchChain()
  const { writeContractAsync, isPending } = useWriteContract()

  const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined)
  const [certifyError, setCertifyError] = useState<string | undefined>(undefined)

  const { isLoading: isConfirming, isSuccess: isCertified } = useWaitForTransactionReceipt({ hash: txHash })

  const isWrongNetwork = isConnected && chainId !== avalancheFuji.id
  const isBusy = isPending || isConfirming

  const handleCertify = async () => {
    if (!address) return
    setCertifyError(undefined)
    try {
      const scoreHash = keccak256(toHex(`uy-score-${address}-${MOCK_SCORE.value}`))
      const hash = await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: UY_SCORE_ABI,
        functionName: "certifyScore",
        args: [BigInt(MOCK_SCORE.value), scoreHash],
      })
      setTxHash(hash)
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Error al certificar"
      setCertifyError(msg.length > 120 ? msg.slice(0, 120) + "…" : msg)
    }
  }

  const now = new Date()
  const dateStr = `${now.getDate()} may · ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`

  // ─── SUCCESS STATE ────────────────────────────────────────────────────────────
  if (isCertified && txHash) {
    return (
      <div className="flex flex-col min-h-[80vh] bg-uy-bg font-satoshi items-center justify-center px-5 text-center">
        <div className="relative w-32 h-32 mb-6">
          <div className="absolute inset-0 rounded-full bg-uy-mint/10 animate-ping" />
          <div className="absolute inset-2 rounded-full bg-uy-mint/20" />
          <div className="absolute inset-4 rounded-full bg-uy-mint flex items-center justify-center">
            <ShieldCheck size={36} className="text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-black text-uy-ink mb-2">Tu reputación quedó protegida.</h2>
        <p className="text-gray-400 text-sm mb-8">Es tuya, es portable, nadie puede cambiarla.</p>

        <div className="w-full max-w-sm bg-uy-card rounded-3xl p-5 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Score Certificado</p>
            <div className="flex items-center gap-1 bg-uy-mint/15 rounded-full px-2 py-0.5">
              <span className="text-uy-mint text-[10px] font-bold">✓ válido</span>
            </div>
          </div>
          <p className="text-5xl font-black text-uy-ink mb-1">{MOCK_SCORE.value}</p>
          <p className="text-gray-400 text-xs font-mono mb-3">{dateStr}</p>
          <div className="bg-uy-bg rounded-xl px-3 py-2">
            <p className="text-[10px] text-gray-400 mb-1">On-chain ID</p>
            <p className="font-mono text-xs text-uy-ink break-all">
              {txHash.slice(0, 18)}...{txHash.slice(-8)}
            </p>
          </div>
        </div>

        <a
          href={`https://testnet.snowtrace.io/tx/${txHash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-uy-primary font-bold text-sm mb-4"
        >
          Ver en Snowtrace <ExternalLink size={14} />
        </a>

        <p className="text-gray-300 text-[10px] font-mono">protegido por avalanche · invisible para vos</p>
      </div>
    )
  }

  // ─── PRE-CERTIFICATION STATE ──────────────────────────────────────────────────
  return (
    <div className="bg-uy-bg font-satoshi">
      {/* Mobile header */}
      <div className="md:hidden flex items-center gap-3 px-5 pt-12 pb-6">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-uy-card flex items-center justify-center shadow-sm">
          <ArrowLeft size={18} className="text-uy-ink" />
        </button>
        <h1 className="text-xl font-black text-uy-ink">Certificar reputación</h1>
      </div>

      {/* Desktop header */}
      <div className="hidden md:block mb-6">
        <h1 className="text-3xl font-black text-uy-ink">Certificar reputación</h1>
        <p className="text-gray-400 text-sm mt-1">Tu score queda guardado en Avalanche — inmutable y portable para siempre.</p>
      </div>

      {/* 2-col on desktop */}
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start">

        {/* Left: score + avalanche info */}
        <div className="flex flex-col gap-5">
          <div className="mx-5 md:mx-0 bg-uy-card rounded-3xl p-6 shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Score a certificar</p>
            <p className="text-6xl font-black text-uy-ink mb-1">{MOCK_SCORE.value}</p>
            <p className="text-gray-400 text-sm">nivel · {MOCK_SCORE.level}</p>
          </div>

          <div className="mx-5 md:mx-0 bg-uy-primary/5 border border-uy-primary/20 rounded-2xl px-4 py-4">
            <div className="flex items-start gap-3">
              <ShieldCheck size={18} className="text-uy-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-uy-primary font-bold text-sm">Protegido por Avalanche Fuji</p>
                <p className="text-uy-primary/60 text-xs mt-0.5">
                  Tu score quedará guardado en la blockchain, inmutable y portable para siempre.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: wallet + action */}
        <div className="px-5 md:px-0 mt-0 mb-4 md:mb-0 flex flex-col gap-3">
          {!isConnected ? (
            <>
              <p className="text-center text-gray-400 text-sm">Conectá tu wallet para certificar</p>
              <button
                onClick={() => connectors[0] && connect({ connector: connectors[0] })}
                className="w-full py-4 rounded-2xl font-black text-uy-ink text-base bg-uy-lemon"
              >
                Conectar Wallet
              </button>
            </>
          ) : isWrongNetwork ? (
            <>
              <p className="text-center text-uy-coral text-sm font-semibold">Red incorrecta — necesitás Avalanche Fuji</p>
              <button
                onClick={() => switchChain({ chainId: avalancheFuji.id })}
                className="w-full py-4 rounded-2xl font-black text-white text-base bg-uy-coral"
              >
                Cambiar a Fuji Testnet
              </button>
            </>
          ) : (
            <>
              <div className="bg-uy-card rounded-2xl px-4 py-3 flex items-center justify-between">
                <p className="text-xs text-gray-400">Wallet conectada</p>
                <p className="font-mono text-xs text-uy-ink">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </p>
              </div>
              {certifyError && (
                <div className="bg-uy-coral/10 rounded-2xl px-4 py-3">
                  <p className="text-uy-coral text-xs font-medium">{certifyError}</p>
                </div>
              )}
              <button
                onClick={handleCertify}
                disabled={isBusy}
                className="w-full py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #3845f5 0%, #1e2fa0 100%)" }}
              >
                {isBusy ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {isPending ? "Confirmá en tu wallet…" : "Registrando en Avalanche…"}
                  </>
                ) : (
                  "Certificar en Avalanche"
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
