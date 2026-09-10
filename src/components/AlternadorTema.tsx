import useTema from '../hooks/useTema'

export default function AlternadorTema() {
  const { tema, alternarTema, estaCarregando } = useTema()

  return (
    <button
      onClick={alternarTema}
      disabled={estaCarregando}
      aria-label="Alternar tema claro/escuro"
      className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 shadow-sm"
    >
      <span
        className={`transition-all duration-500 inline-block ${
          tema === 'escuro' ? 'rotate-180' : ''
        }`}
      >
        {tema === 'escuro' ? '☀️' : '🌙'}
      </span>
    </button>
  )
}
