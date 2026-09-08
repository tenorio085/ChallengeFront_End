import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
  const localizacao = useLocation()

  useEffect(() => {
    setMenuAberto(false)
  }, [localizacao.pathname])

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-5 max-w-7xl">
        <Link to="/" className="flex items-center gap-2.5 no-underline text-verde-principal font-bold text-2xl">
          <span className="text-3xl">🌳</span>
          <span>TreenUp</span>
        </Link>

        <ul
          className={`flex flex-col gap-0 list-none bg-white w-full text-center transition-all duration-300 shadow-2xl p-5 md:p-0 fixed left-0 md:static md:flex-row md:gap-8 md:shadow-none md:translate-x-0 ${
            menuAberto ? 'translate-x-0 top-[70px]' : '-translate-x-full md:translate-x-0'
          }`}
        >
          {linksMenu.map((link) => (
            <li key={link.to} className="py-3 md:py-0">
              <Link
                to={link.to}
                className={`no-underline font-medium transition-colors duration-300 ${
                  localizacao.pathname === link.to
                    ? 'text-verde-principal'
                    : 'text-gray-700 hover:text-verde-principal'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex flex-col gap-1.5 bg-transparent border-none cursor-pointer md:hidden"
          aria-label="Abrir menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
              menuAberto ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
              menuAberto ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
              menuAberto ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>
    </header>
  )
}
