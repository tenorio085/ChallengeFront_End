import { useEffect, useState } from 'react'

/**
 * Hook customizado para contagem progressiva de números.
 * Ótimo para cards de estatísticas.
 */
export default function useContador(
  valorAlvo: number,
  duracaoMs: number = 2000,
  iniciar: boolean = true
) {
  const [valorAtual, setValorAtual] = useState(0)

  useEffect(() => {
    if (!iniciar) {
      setValorAtual(0)
      return
    }

    let quadro: number
    let valorInicial = 0
    const inicioTempo = performance.now()

    function animar(tempoAtual: number) {
      const progresso = Math.min((tempoAtual - inicioTempo) / duracaoMs, 1)
      const facilitar = 1 - Math.pow(1 - progresso, 3)
      valorInicial = Math.round(valorAlvo * facilitar)
      setValorAtual(valorInicial)
      if (progresso < 1) quadro = requestAnimationFrame(animar)
    }

    quadro = requestAnimationFrame(animar)
    return () => cancelAnimationFrame(quadro)
  }, [valorAlvo, duracaoMs, iniciar])

  return valorAtual
}
