import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AlternadorTema from './AlternadorTema'

const linksMenu = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/equipe', label: 'Equipe' },
  { to: '/solucao', label: 'Solução' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contato', label: 'Contato' },
]

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolouPagina, setRolouPagina] = useState(false)
  const localizacao = useLocation()

  useEffect(() => {
    setMenuAberto(false)
  }, [localizacao.pathname])

  useEffect(() => {
    function aoRolar() {
      setRolouPagina(window.scrollY > 24)
    }
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        rolouPagina
          ? 'bg-white/90 dark:bg-slate-900/90 shadow-md'
          : 'bg-white/70 dark:bg-slate-900/70'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-5 max-w-7xl relative">
        <Link
          to="/"
          className="flex items-center gap-2.5 no-underline text-verde-principal font-extrabold text-2xl transition-transform duration-300 hover:scale-105"
        >
          <span className="text-3xl inline-block animate-pulso-suave">🌳</span>
          <span className="bg-gradient-to-r from-verde-claro to-verde-principal bg-clip-text text-transparent">
            TreenUp
          </span>
        </Link>

        <ul
          className={`flex flex-col gap-0 list-none bg-white dark:bg-slate-800 w-full text-center transition-all duration-300 shadow-2xl p-5 md:p-0 fixed left-0 md:static md:flex-row md:gap-8 md:shadow-none md:translate-x-0 md:w-auto md:bg-transparent ${
            menuAberto ? 'translate-x-0 top-[70px]' : '-translate-x-full md:translate-x-0'
          }`}
        >
          {linksMenu.map((link) => {
            const estaAtivo = localizacao.pathname === link.to
            return (
              <li key={link.to} className="py-3 md:py-0">
                <Link
                  to={link.to}
                  className={`no-underline font-medium transition-all duration-300 relative py-1 inline-block ${
                    estaAtivo
                      ? 'text-verde-principal'
                      : 'text-gray-700 dark:text-gray-200 hover:text-verde-principal'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-verde-principal transition-all duration-300 rounded-full ${
                      estaAtivo ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3 ml-auto md:ml-0">
          <AlternadorTema />

          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="flex flex-col gap-1.5 bg-transparent border-none cursor-pointer md:hidden w-10 h-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          >
            <span
              className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 ${
                menuAberto ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 ${
                menuAberto ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 ${
                menuAberto ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>
    </header>
  )
}
