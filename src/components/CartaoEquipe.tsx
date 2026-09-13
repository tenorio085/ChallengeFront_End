import type { Integrante } from '../types'

interface PropsCartaoEquipe {
  integrante: Integrante
  posicao: number
}

const corPosicao = [
  'from-yellow-300 to-amber-500 text-amber-900',
  'from-slate-200 to-slate-400 text-slate-800',
  'from-orange-300 to-orange-500 text-orange-950',
]

export default function CartaoEquipe({
  integrante,
  posicao,
}: PropsCartaoEquipe) {
  return (
    <div className="h-full bg-white dark:bg-slate-800 p-10 rounded-3xl text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700 group cartao-3d">
      <div className="relative inline-block mb-6">
        <img
          src={integrante.foto}
          alt={`Foto de ${integrante.nome}`}
          className="w-28 h-28 rounded-[2rem] object-cover shadow-xl shadow-verde-principal/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
        />
        <div
          className={`absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-gradient-to-br font-black text-sm flex items-center justify-center shadow-md ${
            corPosicao[posicao - 1] ?? corPosicao[2]
          }`}
        >
          #{posicao}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-1.5 tracking-tight text-gray-900 dark:text-white">
        {integrante.nome}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-5 font-medium">
        RM: {integrante.rm}
      </p>
      <div className="flex justify-center gap-3 flex-wrap pt-3 border-t border-gray-100 dark:border-slate-700">
        <a
          href={integrante.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-gray-700 transition-all duration-300 hover:-translate-y-0.5 no-underline shadow-md"
        >
          <span>📦</span> GitHub
        </a>
        <a
          href={integrante.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 no-underline shadow-md"
        >
          <span>💼</span> LinkedIn
        </a>
      </div>
    </div>
  )
}
