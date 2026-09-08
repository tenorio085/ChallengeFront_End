import { useState } from 'react'
import SecaoCabecalho from '../components/SecaoCabecalho'
import { faqItens } from '../data'

export default function FAQ() {
  const [itemAtivo, setItemAtivo] = useState<number | null>(null)

  function toggleItem(id: number) {
    setItemAtivo(itemAtivo === id ? null : id)
  }

  return (
    <div>
      <SecaoCabecalho
        titulo="Perguntas Frequentes"
        subtitulo="Tire suas dúvidas sobre o TreenUp"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="max-w-3xl mx-auto">
            {faqItens.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl mb-4 shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 bg-transparent border-none text-left text-lg font-semibold cursor-pointer flex justify-between items-center transition-colors duration-300 hover:bg-gray-50"
                >
                  <span>{item.pergunta}</span>
                  <span
                    className={`text-2xl text-verde-principal transition-transform duration-300 ${
                      itemAtivo === item.id ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    itemAtivo === item.id ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-gray-700 leading-7">{item.resposta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
