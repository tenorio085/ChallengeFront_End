import { Link } from 'react-router-dom'

export default function Rodape() {
  const anoAtual = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 dark:bg-slate-950 text-white pt-14 pb-0 mt-auto border-t border-gray-700 dark:border-slate-800">
      <div className="container mx-auto max-w-7xl px-5 grid gap-10 md:grid-cols-3 pb-10">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2.5 text-2xl font-extrabold mb-3.5 no-underline text-white hover:scale-105 transition-transform w-fit"
          >
            <span className="text-3xl">🌳</span>
            <span className="bg-gradient-to-r from-verde-suave to-verde-claro bg-clip-text text-transparent">
              TreenUp
            </span>
          </Link>
          <p className="text-gray-400 leading-7">
            Transformando sustentabilidade em uma jornada gamificada e recompensadora.
          </p>
          <div className="flex gap-2 mt-5">
            {['📘', '📷', '🐦', '💼'].map((ico, i) => (
              <span
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-verde-principal hover:-translate-y-0.5 transition-all cursor-pointer text-lg"
              >
                {ico}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg mb-5 font-semibold text-verde-suave">Links Rápidos</h4>
          <ul className="list-none space-y-2">
            {[
              { t: 'Início', r: '/' },
              { t: 'Sobre', r: '/sobre' },
              { t: 'Equipe', r: '/equipe' },
              { t: 'Solução', r: '/solucao' },
              { t: 'FAQ', r: '/faq' },
              { t: 'Contato', r: '/contato' },
            ].map((l) => (
              <li key={l.r}>
                <Link
                  to={l.r}
                  className="text-gray-400 no-underline transition-all duration-300 hover:text-verde-suave hover:translate-x-1 inline-block"
                >
                  → {l.t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg mb-5 font-semibold text-verde-suave">Entre em contato</h4>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-2.5">
              <span>📧</span>
              <Link
                to="/contato"
                className="text-gray-400 no-underline transition-colors duration-300 hover:text-verde-suave"
              >
                Formulário de Contato
              </Link>
            </li>
            <li className="flex items-start gap-2.5">
              <span>💬</span>
              <span className="text-gray-400">contato@treenup.com.br</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span>📍</span>
              <span className="text-gray-400">São Paulo, SP - Brasil</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700/60 dark:border-slate-800 py-5 text-center text-sm text-gray-500">
        © {anoAtual} TreenUp. Feito com 💚 para um planeta melhor.
      </div>
    </footer>
  )
}
