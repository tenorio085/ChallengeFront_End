import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type VarianteBotao = 'primario' | 'secundario' | 'fantasma' | 'sombra'
type TamanhoBotao = 'pequeno' | 'normal' | 'grande'

interface BaseProps {
  children: ReactNode
  variante?: VarianteBotao
  tamanho?: TamanhoBotao
  icone?: ReactNode
  classNameExtra?: string
  alvo?: string
}

interface PropsBotao extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>, BaseProps {}
interface PropsLink extends BaseProps {
  rota: string
  tipo?: never
}
interface PropsAncora extends BaseProps {
  href: string
}

type Props = PropsBotao | PropsLink | PropsAncora

function ehPropsLink(props: Props): props is PropsLink {
  return (props as PropsLink).rota !== undefined
}
function ehPropsAncora(props: Props): props is PropsAncora {
  return (props as PropsAncora).href !== undefined
}

const classesBase =
  'group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ease-out cursor-pointer border-none no-underline select-none active:scale-95'

const estilosVariante: Record<VarianteBotao, string> = {
  primario:
    'bg-white text-verde-principal hover:bg-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1',
  secundario:
    'bg-transparent text-white border-2 border-white hover:bg-white hover:text-verde-principal',
  fantasma:
    'bg-transparent text-verde-principal hover:bg-verde-claro/10 hover:-translate-y-0.5',
  sombra:
    'bg-verde-principal text-white hover:bg-verde-claro shadow-lg shadow-verde-principal/30 hover:shadow-xl hover:shadow-verde-principal/40 hover:-translate-y-1',
}

const estilosTamanho: Record<TamanhoBotao, string> = {
  pequeno: 'px-4 py-2 text-sm',
  normal: 'px-7 py-3 text-base',
  grande: 'px-10 py-4 text-lg',
}

export default function Botao(props: Props) {
  const {
    variante = 'primario',
    tamanho = 'normal',
    icone,
    classNameExtra = '',
  } = props

  const classes = `${classesBase} ${estilosVariante[variante]} ${estilosTamanho[tamanho]} ${classNameExtra}`

  const conteudoInterno = (
    <>
      {icone && (
        <span className="transition-transform duration-300 group-hover:scale-110">
          {icone}
        </span>
      )}
      {props.children}
    </>
  )

  if (ehPropsLink(props)) {
    return (
      <Link to={props.rota} target={props.alvo} className={classes}>
        {conteudoInterno}
      </Link>
    )
  }

  if (ehPropsAncora(props)) {
    return (
      <a href={props.href} target={props.alvo} className={classes} rel="noreferrer noopener">
        {conteudoInterno}
      </a>
    )
  }

  const { variante: _v, tamanho: _t, icone: _i, classNameExtra: _c, alvo: _a, rota: _r, href: _h, ...resto } =
    props as PropsBotao & Partial<PropsLink> & Partial<PropsAncora>
  return (
    <button {...resto} className={classes}>
      {conteudoInterno}
    </button>
  )
}
