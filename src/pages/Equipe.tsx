import SecaoCabecalho from '../components/SecaoCabecalho'
import { integrantes } from '../data'
import CartaoRevelavel from '../components/CartaoRevelavel'
import CartaoEquipe from '../components/CartaoEquipe'
import Badge from '../components/Badge'

export default function Equipe() {
  return (
    <div>
      <SecaoCabecalho
        icone="👥"
        titulo="Nossa Equipe"
        subtitulo="Conheça os integrantes que fazem o TreenUp acontecer"
      />

      <section className="py-20 bg-white dark:bg-cinza-fundo-escuro transition-colors">
        <div className="container mx-auto max-w-7xl px-5">
          <CartaoRevelavel direcao="cima">
            <div className="text-center mb-14 flex flex-col items-center gap-4">
              <Badge variante="amarelo" icone="🏆">
                Equipe {integrantes.length} pessoas
              </Badge>
            </div>
          </CartaoRevelavel>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {integrantes.map((inte, i) => (
              <CartaoRevelavel
                key={inte.id}
                direcao="baixo"
                atrasoMs={i * 150}
              >
                <CartaoEquipe integrante={inte} posicao={i + 1} />
              </CartaoRevelavel>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
