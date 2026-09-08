import SecaoCabecalho from '../components/SecaoCabecalho'
import { pilares } from '../data'

export default function Sobre() {
  return (
    <div>
      <SecaoCabecalho
        titulo="Sobre o TreenUp"
        subtitulo="Conheça nossa história, missão e como transformamos sustentabilidade em jornada"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid gap-16 items-center md:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl mb-5 text-verde-principal font-bold">
                O Problema que Resolvemos
              </h2>
              <p className="mb-4 text-gray-700 leading-8">
                O mercado corporativo enfrenta uma cobrança severa pela implementação de
                métricas ESG (ambientais, sociais e de governança) reais e auditáveis. Contudo,
                os times de gestão de pessoas e sustentabilidade esbarram em um obstáculo
                crítico: a desconexão prática e a crônica falta de engajamento contínuo por
                parte de seus colaboradores em hábitos ecológicos cotidianos.
              </p>
              <p className="mb-4 text-gray-700 leading-8">
                Campanhas tradicionais de conscientização interna, como a semana do meio
                ambiente, gincanas esporádicas ou palestras passivas, costumam gerar apenas
                picos momentâneos e artificiais de interesse que desaparecem em poucos dias,
                deixando as empresas sem dados robustos, contínuos e auditáveis sobre a real
                mudança comportamental de suas equipes de trabalho.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="text-8xl bg-verde-suave w-52 h-52 rounded-full flex items-center justify-center">
                🌍
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid gap-16 items-center md:grid-cols-2 md:flex-row-reverse">
            <div>
              <h2 className="text-2xl md:text-3xl mb-5 text-verde-principal font-bold">
                Nossa Solução
              </h2>
              <p className="mb-4 text-gray-700 leading-8">
                A TreenUp soluciona esse problema por meio de uma plataforma digital
                corporativa integrada ao ecossistema da SoulUp e Prospera. A solução atua
                como uma ponte que transforma o esforço individual de economia e preservação
                em uma jornada interativa e visualmente recompensadora, gerando dados de
                impacto socioambiental precisos para as organizações corporativas e
                benefícios financeiros tangíveis (como abatimento na conta de luz) para os
                usuários.
              </p>
            </div>
            <div className="flex justify-center order-first md:order-last">
              <div className="text-8xl bg-verde-suave w-52 h-52 rounded-full flex items-center justify-center">
                💡
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-5">
          <h2 className="text-3xl md:text-4xl text-center mb-2.5 font-bold">
            Os 4 Pilares da TreenUp
          </h2>
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            {pilares.map((pilar) => (
              <div key={pilar.numero} className="bg-white p-9 rounded-2xl shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-verde-claro to-verde-principal text-white rounded-full flex items-center justify-center text-xl font-bold mb-5">
                  {pilar.numero}
                </div>
                <h3 className="text-xl mb-4 text-verde-principal font-semibold">
                  {pilar.titulo}
                </h3>
                <p className="text-gray-700 leading-7">{pilar.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold">
            Tipo de Inovação
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="mb-5 text-gray-700 leading-8 text-lg">
              A TreenUp caracteriza-se como uma{' '}
              <strong>Inovação de Processo e de Modelo de Negócio</strong>, combinando
              conceitos de inovação nas esferas dos softwares corporativos de metas de
              sustentabilidade na reestruturação dos parceiros de benefícios do trabalhador
              por meio de gamificação urbana.
            </p>
            <p className="mb-5 text-gray-700 leading-8 text-lg">
              A solução apoia-se na fusão de setores que raramente dialogam no mercado
              corporativo: a gamificação interativa, a geolocalização imersiva promovida, o
              monitoramento de dados de infraestrutura e a economia verde digital baseada
              nos Treen-Tokens, que diferente dos pontos do ranking, serão permanentemente
              acumulados na carteira digital do usuário. Esses servem como saldo financeiro
              para serem trocados por recompensas reais dentro do ecossistema Prospera/SoulUp,
              incluindo: vouchers de desconto em parceiros eco-friendly, benefícios
              corporativos e o abatimento ou subsídio direto de faturas de energia elétrica.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
