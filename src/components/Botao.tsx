import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primario' | 'secundario'
  tamanho?: 'normal' | 'grande'
  children: ReactNode
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primario' | 'secundario'
  tamanho?: 'normal' | 'grande'
  children: ReactNode
  to?: string
}

type Props = ButtonProps | LinkProps

function isLinkProps(props: Props): props is LinkProps {
  return (props as LinkProps).to !== undefined
}

export default function Botao(props: Props) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer border-none no-underline'

  const variantClasses = {
    primario:
      'bg-white text-verde-principal hover:bg-gray-100 hover:-translate-y-0.5 shadow-md',
    secundario:
      'bg-transparent text-white border-2 border-white hover:bg-white hover:text-verde-principal',
  }

  const tamanhoClasses = {
    normal: 'px-7 py-3 text-base',
    grande: 'px-10 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[props.variant || 'primario']} ${tamanhoClasses[props.tamanho || 'normal']}`

  if (isLinkProps(props)) {
    const { variant, tamanho, children, to, ...rest } = props
    if (to) {
      return (
        <Link to={to} className={classes} {...rest}>
          {children}
        </Link>
      )
    }
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const { variant, tamanho, children, ...rest } = props
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
