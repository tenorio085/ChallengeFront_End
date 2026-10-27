import type { ReactNode } from 'react'

interface PropsBlocoBMC {
  titulo: string
  itens: string[]
  icone?: ReactNode
  blocoAtivo: boolean
  id: string
  aoEntrar: (id: string) => void
  aoSair: () => void
  classesFundo?: string
  prioridade?: boolean
  classeListaItem?: string
  colspan?: '1' | '2' | '3' | '4' | '5' | '6'
  rowspan?: '1' | '2' | '3'
}

export default function BlocoBMC({
  titulo,
  itens,
  icone,
  blocoAtivo,
  id,
  aoEntrar,
  aoSair,
  classesFundo = '',
  prioridade = false,
  classeListaItem = 'bg-verde-claro/20 dark:bg-verde-principal/15',
  colspan = '1',
  rowspan = '1',
}: PropsBlocoBMC) {
  const mapaColspan: Record<NonNullable<PropsBlocoBMC['colspan']>, string> = {
    '1': 'col-span-1',
    '2': 'col-span-2',
    '3': 'col-span-3',
    '4': 'col-span-4',
    '5': 'col-span-5',
    '6': 'col-span-6',
  }
  const mapaRowspan: Record<NonNullable<PropsBlocoBMC['rowspan']>, string> = {
    '1': 'row-span-1',
    '2': 'row-span-2',
    '3': 'row-span-3',
  }

  const estiloDestaque = `transition-all duration-300 ${
    blocoAtivo
      ? 'z-10 shadow-2xl ring-2 ring-verde-principal shadow-verde-principal/30'
      : 'hover:shadow-lg'
  }`

  return (
    <div
      onMouseEnter={() => aoEntrar(id)}
      onMouseLeave={aoSair}
      className={`${mapaColspan[colspan]} ${mapaRowspan[rowspan]} p-5 md:p-6 border border-verde-principal/30 dark:border-verde-principal/30 ${classesFundo} ${estiloDestaque} flex flex-col`}
    >
      {icone && (
        <div className="text-center mb-3">
          <span
            className={`${prioridade ? 'text-4xl animate-pulso-suave' : 'text-3xl'}`}
          >
            {icone}
          </span>
        </div>
      )}
      <h3
        className={`text-sm font-bold text-gray-700 dark:text-branco uppercase tracking-wide mb-4 ${prioridade ? 'text-center text-base' : ''}`}
      >
        {titulo}
      </h3>
      <ul className={`space-y-3 ${prioridade ? 'flex flex-col gap-3 items-stretch' : ''}`}>
        {itens.map((item, i) => (
          <li
            key={i}
            className={`${classeListaItem} p-3 rounded-lg text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm ${prioridade ? 'font-medium text-center' : ''}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
