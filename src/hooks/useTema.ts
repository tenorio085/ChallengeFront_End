import { useCallback, useEffect, useState } from 'react'

type Tema = 'claro' | 'escuro'
const CHAVE_ARMAZENAMENTO = 'treenup_tema'

/**
 * Hook customizado para gerenciar tema claro/escuro do site.
 * Salva escolha no localStorage e aplica via atributo `class`.
 */
export default function useTema() {
  const [tema, setTema] = useState<Tema>('claro')
  const [temaInicializado, setTemaInicializado] = useState(false)

  const aplicarTema = useCallback((novoTema: Tema) => {
    const raiz = document.documentElement
    if (novoTema === 'escuro') {
      raiz.classList.add('dark')
    } else {
      raiz.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    const temaSalvo = localStorage.getItem(CHAVE_ARMAZENAMENTO) as Tema | null
    const prefereEscuro = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    const temaInicial: Tema = temaSalvo ?? (prefereEscuro ? 'escuro' : 'claro')
    setTema(temaInicial)
    aplicarTema(temaInicial)
    setTemaInicializado(true)
  }, [aplicarTema])

  const alternarTema = useCallback(() => {
    setTema((temaAnterior) => {
      const novoTema: Tema = temaAnterior === 'claro' ? 'escuro' : 'claro'
      localStorage.setItem(CHAVE_ARMAZENAMENTO, novoTema)
      aplicarTema(novoTema)
      return novoTema
    })
  }, [aplicarTema])

  return {
    tema,
    alternarTema,
    estaCarregando: !temaInicializado,
  }
}
