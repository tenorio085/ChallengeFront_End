import type { ReactNode } from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Cabecalho />
      <main className="flex-1">{children}</main>
      <Rodape />
    </div>
  )
}
