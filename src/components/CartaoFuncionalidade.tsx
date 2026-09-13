import { Link } from 'react-router-dom'
import type { Funcionalidade } from '../types'

interface PropsCartaoFuncionalidade {
  funcionalidade: Funcionalidade
}

export default function CartaoFuncionalidade({
  funcionalidade,
}: PropsCartaoFuncionalidade) {
  return (
    <Link
      to={`/funcionalidade/${funcionalidade.id}`}
      className="h-full bg-white dark:bg-slate-800 p-8 rounded-2xl text-center shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group cartao-3d block no-underline"
    >
      <div className="text-5xl mb-5 inline-block transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
        {funcionalidade.icone}
      </div>
      <h3 className="text-xl mb-4 text-verde-principal font-bold">
        {funcionalidade.titulo}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 leading-7">
        {funcionalidade.descricao}
      </p>
      <div className="mt-5 text-sm font-semibold text-verde-principal opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1.5">
        Ver detalhes <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  )
}
