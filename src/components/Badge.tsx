import type { ReactNode } from 'react'
import estilos from './Badge.module.css'

type VarianteBadge = 'verde' | 'claro' | 'amarelo' | 'cinza' | 'branco'

interface PropsBadge {
  children: ReactNode
  variante?: VarianteBadge
  icone?: ReactNode
  classNameExtra?: string
}

const mapaClassesVariante: Record<VarianteBadge, string> = {
  verde: estilos.badgeVerde,
  claro: estilos.badgeClaro,
  amarelo: estilos.badgeAmarelo,
  cinza: estilos.badgeCinza,
  branco: estilos.badgeBranco,
}

export default function Badge({
  children,
  variante = 'verde',
  icone,
  classNameExtra = '',
}: PropsBadge) {
  return (
    <span
      className={`${estilos.badge} ${mapaClassesVariante[variante]} ${classNameExtra}`}
    >
      {icone && <span className={estilos.icone}>{icone}</span>}
      {children}
    </span>
  )
}
