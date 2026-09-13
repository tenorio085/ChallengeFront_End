import { useState } from 'react'
import SecaoCabecalho from '../components/SecaoCabecalho'
import { itensFAQ } from '../data'
import CartaoRevelavel from '../components/CartaoRevelavel'
import ItemFAQ from '../components/ItemFAQ'
import Badge from '../components/Badge'

export default function FAQ() {
  const [itemAtivo, setItemAtivo] = useState<number | null>(1)

  function alternarItem(id: number) {
    setItemAtivo((anterior) => (anterior === id ? null : id))
  }

  return (
    <div>
      <SecaoCabecalho
        icone="❓"
        titulo="Perguntas Frequentes"
        subtitulo="Tire suas dúvidas sobre o TreenUp"
      />

      <section className="py-20 bg-white dark:bg-cinza-fundo-escuro transition-colors">
        <div className="container mx-auto max-w-7xl px-5">
          <CartaoRevelavel direcao="cima">
            <div className="max-w-3xl mx-auto mb-12 text-center flex flex-col items-center gap-4">
              <Badge variante="claro" icone="💡">
                {itensFAQ.length} perguntas respondidas
              </Badge>
              <p className="text-lg text-gray-600 dark:text-cinza-claro">
                Não encontrou o que procurava? Fale com nossa equipe.
              </p>
            </div>
          </CartaoRevelavel>

          <div className="max-w-3xl mx-auto">
            {itensFAQ.map((item, i) => (
              <CartaoRevelavel
                key={item.id}
                direcao="baixo"
                atrasoMs={i * 60}
              >
                <ItemFAQ
                  item={item}
                  aberto={itemAtivo === item.id}
                  aoAlternar={alternarItem}
                />
              </CartaoRevelavel>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
