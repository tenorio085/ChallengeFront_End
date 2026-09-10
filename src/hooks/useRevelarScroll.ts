import { useEffect, useRef, useState } from 'react'

/**
 * Hook customizado: quando o elemento entra em tela (viewport),
 * retorna `true` permitindo animações de "scroll reveal".
 */
export default function useRevelarScroll(limiar: number = 0.15) {
  const referencia = useRef<HTMLDivElement>(null)
  const [estaVisivel, setEstaVisivel] = useState(false)

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setEstaVisivel(true)
          observador.disconnect()
        }
      },
      { threshold: limiar }
    )

    if (referencia.current) {
      observador.observe(referencia.current)
    }

    return () => observador.disconnect()
  }, [limiar])

  return { referencia, estaVisivel }
}
