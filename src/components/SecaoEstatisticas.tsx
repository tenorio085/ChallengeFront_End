import useContador from '../hooks/useContador'
import useRevelarScroll from '../hooks/useRevelarScroll'
import { estatisticas } from '../data'

export default function SecaoEstatisticas() {
  const { referencia, estaVisivel } = useRevelarScroll(0.2)

  return (
    <section ref={referencia} className="py-20 bg-gradient-to-br from-verde-claro to-verde-principal text-white">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {estatisticas.map((item, indice) => (
            <CartaoEstatistica
              key={item.id}
              item={item}
              animar={estaVisivel}
              atraso={indice * 120}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface PropsCartao {
  item: (typeof estatisticas)[number]
  animar: boolean
  atraso: number
}

function CartaoEstatistica({ item, animar, atraso }: PropsCartao) {
  const valorContado = useContador(item.valor, 1800 + atraso, animar)

  return (
    <div
      style={{ transitionDelay: `${atraso}ms` }}
      className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center transition-all duration-700 ${
        animar ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
      } hover:bg-white/20 hover:-translate-y-1`}
    >
      <div className="text-5xl mb-3 inline-block animate-balanco origin-bottom">{item.icone}</div>
      <div className="text-4xl md:text-5xl font-black leading-none mb-2">
        {valorContado.toLocaleString('pt-BR')}
        <span className="text-3xl md:text-4xl">{item.sufixo ?? ''}</span>
      </div>
      <p className="text-sm md:text-base opacity-95 mt-1 font-medium tracking-wide">
        {item.rotulo}
      </p>
    </div>
  )
}
