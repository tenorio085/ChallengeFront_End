import { useEffect, useState } from 'react'
import { depoimentos } from '../data'
import CartaoRevelavel from './CartaoRevelavel'

export default function SecaoDepoimentos() {
  const [indiceAtivo, setIndiceAtivo] = useState(0)
  const total = depoimentos.length

  useEffect(() => {
    const id = setInterval(() => {
      setIndiceAtivo((anterior) => (anterior + 1) % total)
    }, 6500)
    return () => clearInterval(id)
  }, [total])

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-5">
        <CartaoRevelavel>
          <h2 className="text-3xl md:text-4xl text-center mb-2.5 font-bold">
            O que estão falando da gente 💚
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-lg">
            Histórias reais de colaboradores e empresas transformadas pela TreenUp
          </p>
        </CartaoRevelavel>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${indiceAtivo * 100}%)` }}
            >
              {depoimentos.map((d) => (
                <div key={d.id} className="w-full flex-shrink-0 p-8 md:p-12 bg-white dark:bg-slate-800">
                  <div className="text-5xl text-verde-suave mb-4 opacity-60">&ldquo;</div>
                  <p className="text-lg md:text-xl leading-8 text-gray-700 dark:text-gray-200 mb-6 italic">
                    {d.texto}
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-100 dark:border-slate-700 pt-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-verde-claro to-verde-principal flex items-center justify-center text-3xl shadow-md">
                      {d.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-gray-100 text-base">
                        {d.nome}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{d.cargo}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5 text-amarelo-sol text-lg">
                      {Array.from({ length: d.nota }).map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndiceAtivo(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === indiceAtivo
                    ? 'bg-verde-principal w-10'
                    : 'bg-gray-300 w-2 hover:bg-verde-suave'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
