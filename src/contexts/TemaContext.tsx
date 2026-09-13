import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import type { Tema } from '../types'

interface ValorContextoTema {
  tema: Tema
  alternarTema: () => void
  definirTema: (novoTema: Tema) => void
  estaCarregando: boolean
}

const CHAVE_ARMAZENAMENTO = 'treenup_tema'

const ContextoTema = createContext<ValorContextoTema | undefined>(undefined)

function obterTemaInicial(): Tema {
  if (typeof window === 'undefined') return 'claro'
  const temaSalvo = localStorage.getItem(CHAVE_ARMAZENAMENTO) as Tema | null
  if (temaSalvo === 'claro' || temaSalvo === 'escuro') return temaSalvo
  const prefereEscuro = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  return prefereEscuro ? 'escuro' : 'claro'
}

export function ProvedorTema({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>('claro')
  const [estaCarregando, setEstaCarregando] = useState(true)

  useEffect(() => {
    const temaInicial = obterTemaInicial()
    setTema(temaInicial)
    setEstaCarregando(false)
  }, [])

  useEffect(() => {
    if (estaCarregando) return
    const raiz = document.documentElement
    if (tema === 'escuro') {
      raiz.classList.add('dark')
    } else {
      raiz.classList.remove('dark')
    }
    localStorage.setItem(CHAVE_ARMAZENAMENTO, tema)
  }, [tema, estaCarregando])

  useEffect(() => {
    if (estaCarregando) return
    const midia = window.matchMedia('(prefers-color-scheme: dark)')
    const aoMudarTemaSistema = (evento: MediaQueryListEvent) => {
      const temaSalvo = localStorage.getItem(CHAVE_ARMAZENAMENTO)
      if (!temaSalvo) {
        setTema(evento.matches ? 'escuro' : 'claro')
      }
    }
    midia.addEventListener('change', aoMudarTemaSistema)
    return () => midia.removeEventListener('change', aoMudarTemaSistema)
  }, [estaCarregando])

  function alternarTema() {
    setTema((temaAnterior) => (temaAnterior === 'claro' ? 'escuro' : 'claro'))
  }

  function definirTema(novoTema: Tema) {
    setTema(novoTema)
  }

  return (
    <ContextoTema.Provider
      value={{ tema, alternarTema, definirTema, estaCarregando }}
    >
      {children}
    </ContextoTema.Provider>
  )
}

export function useTema() {
  const contexto = useContext(ContextoTema)
  if (contexto === undefined) {
    throw new Error('useTema deve ser usado dentro de um ProvedorTema')
  }
  return contexto
}
