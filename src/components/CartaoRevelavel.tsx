import type { ReactNode } from 'react'
import useRevelarScroll from '../hooks/useRevelarScroll'

interface CartaoRevelavelProps {
  children: ReactNode
  direcao?: 'cima' | 'baixo' | 'esquerda' | 'direita' | 'nenhuma'
  atrasoMs?: number
  classNameExtra?: string
}

export default function CartaoRevelavel({
  children,
  direcao = 'baixo',
  atrasoMs = 0,
  classNameExtra = '',
}: CartaoRevelavelProps) {
  const { referencia, estaVisivel } = useRevelarScroll(0.1)

  const classesTransicao = {
    cima: estaVisivel
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 -translate-y-6',
    baixo: estaVisivel
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-6',
    esquerda: estaVisivel
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 -translate-x-6',
    direita: estaVisivel
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 translate-x-6',
    nenhuma: estaVisivel ? 'opacity-100' : 'opacity-0',
  }[direcao]

  return (
    <div
      ref={referencia}
      style={{ transitionDelay: `${atrasoMs}ms` }}
      className={`transition-all duration-700 ease-out ${classesTransicao} ${classNameExtra}`}
    >
      {children}
    </div>
  )
}
