import type { ItemFAQ as TipoItemFAQ } from '../types'

interface PropsItemFAQ {
  item: TipoItemFAQ
  aberto: boolean
  aoAlternar: (id: number) => void
}

export default function ItemFAQ({ item, aberto, aoAlternar }: PropsItemFAQ) {
  return (
    <div
      className={`mb-4 rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl border ${
        aberto
          ? 'border-verde-principal/40 bg-white dark:bg-slate-800'
          : 'border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800'
      }`}
    >
      <button
        onClick={() => aoAlternar(item.id)}
        aria-expanded={aberto}
        className="w-full p-5 md:p-6 bg-transparent border-none text-left cursor-pointer flex justify-between items-center transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-slate-700/40"
      >
        <span className="font-bold text-base md:text-lg text-gray-900 dark:text-gray-100 pr-3 text-left">
          {item.pergunta}
        </span>
        <span
          className={`text-2xl md:text-3xl flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            aberto
              ? 'bg-verde-principal text-white rotate-45'
              : 'bg-gray-100 dark:bg-slate-700 text-verde-principal'
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          aberto ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 md:px-6 pb-6 pt-1 text-gray-700 dark:text-gray-300 leading-8 text-base">
          <div className="border-t border-gray-100 dark:border-slate-700 pt-4">
            {item.resposta}
          </div>
        </div>
      </div>
    </div>
  )
}
