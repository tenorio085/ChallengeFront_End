import { Link } from 'react-router-dom'

export default function Rodape() {
  return (
    <footer className="bg-gray-800 text-white pt-14 pb-0 mt-auto">
      <div className="container mx-auto max-w-7xl px-5 grid gap-10 md:grid-cols-3 pb-10">
        <div>
          <div className="flex items-center gap-2.5 text-2xl font-bold mb-3.5">
            <span>🌳</span>
            <span>TreenUp</span>
          </div>
          <p className="text-gray-400 leading-7">
            Transformando sustentabilidade em uma jornada gamificada e recompensadora.
          </p>
        </div>

        <div>
          <h4 className="text-xl mb-5 font-semibold">Links Rápidos</h4>
          <ul className="list-none">
            {['/', '/sobre', '/equipe', '/faq'].map((to) => (
              <li key={to} className="mb-2.5">
                <Link
                  to={to}
                  className="text-gray-400 no-underline transition-colors duration-300 hover:text-verde-suave"
                >
                  {to === '/' ? 'Início' : to.replace('/', '')[0].toUpperCase() + to.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl mb-5 font-semibold">Contato</h4>
          <ul className="list-none">
            <li className="mb-2.5">
              <Link
                to="/contato"
                className="text-gray-400 no-underline transition-colors duration-300 hover:text-verde-suave"
              >
                Formulário de Contato
              </Link>
            </li>
            <li className="mb-2.5 text-gray-400">contato@treenup.com.br</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
