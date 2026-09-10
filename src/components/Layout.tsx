import type { ReactNode } from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-300">
      <Cabecalho />
      <main className="flex-1">{children}</main>
      <Rodape />
    </div>
  )
}
