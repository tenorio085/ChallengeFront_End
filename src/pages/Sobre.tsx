import SecaoCabecalho from '../components/SecaoCabecalho'
import { pilares } from '../data'
import CartaoRevelavel from '../components/CartaoRevelavel'

export default function Sobre() {
  return (
    <div>
      <SecaoCabecalho
        icone="📚"
        titulo="Sobre o TreenUp"
        subtitulo="Conheça nossa história, missão e como transformamos sustentabilidade em jornada"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid gap-16 items-center md:grid-cols-2">
            <CartaoRevelavel direcao="esquerda">
              <h2 className="text-3xl md:text-4xl mb-5 text-verde-principal font-extrabold">
                O Problema que Resolvemos
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-8 text-lg">
                O mercado corporativo enfrenta uma cobrança severa pela implementação de
                métricas ESG (ambientais, sociais e de governança) reais e auditáveis. Contudo,
                os times de gestão de pessoas e sustentabilidade esbarram em um obstáculo
                crítico: a desconexão prática e a crônica falta de engajamento contínuo.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-8 text-lg">
                Campanhas tradicionais como a semana do meio ambiente, gincanas esporádicas ou
                palestras passivas geram apenas picos momentâneos e artificiais de interesse
                que desaparecem em poucos dias, deixando empresas sem dados robustos sobre a
                real mudança comportamental de suas equipes.
              </p>
            </CartaoRevelavel>
            <CartaoRevelavel direcao="direita" atrasoMs={200}>
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="bg-gradient-to-br from-verde-suave via-verde-claro to-verde-principal w-64 h-64 md:w-72 md:h-72 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl cartao-3d">
                    <span className="text-[9rem] drop-shadow-lg">🌍</span>
                  </div>
                  <div className="absolute bottom-0 -left-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-4 py-3 text-xs md:text-sm rotate-[-5deg] border">
                    <p className="font-bold text-red-500">⚠️ 15% engajamento</p>
                    <p className="text-gray-500">Antes da TreenUp</p>
                  </div>
                </div>
              </div>
            </CartaoRevelavel>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-slate-800/40">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid gap-16 items-center md:grid-cols-2 md:flex-row-reverse">
            <CartaoRevelavel direcao="direita">
              <h2 className="text-3xl md:text-4xl mb-5 text-verde-principal font-extrabold">
                Nossa Solução
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-8 text-lg">
                A TreenUp soluciona esse problema por meio de uma plataforma digital
                corporativa integrada ao ecossistema da SoulUp e Prospera.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-8 text-lg">
                A solução atua como uma ponte que transforma o esforço individual de economia
                e preservação em uma jornada interativa e visualmente recompensadora, gerando
                dados de impacto socioambiental precisos para as empresas e benefícios
                financeiros tangíveis (como abatimento na conta de luz) para os usuários.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {['Gamificação', 'Dados Auditáveis', 'Recompensas', 'AR + Geo'].map((t, i) => (
                  <div
                    key={t}
                    className="bg-white dark:bg-slate-800 p-3 rounded-xl text-center text-sm font-bold text-verde-principal shadow-sm border border-gray-100 dark:border-slate-700"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    ✅ {t}
                  </div>
                ))}
              </div>
            </CartaoRevelavel>
            <CartaoRevelavel direcao="esquerda" atrasoMs={200}>
              <div className="flex justify-center order-first md:order-last">
                <div className="relative w-full max-w-sm">
                  <div className="bg-gradient-to-br from-yellow-300 via-amarelo-sol to-orange-400 w-64 h-64 md:w-72 md:h-72 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl cartao-3d">
                    <span className="text-[9rem] drop-shadow-lg">💡</span>
                  </div>
                  <div className="absolute bottom-0 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-4 py-3 text-xs md:text-sm rotate-[5deg] border">
                    <p className="font-bold text-verde-principal">✅ 82% engajamento</p>
                    <p className="text-gray-500">Depois da TreenUp</p>
                  </div>
                </div>
              </div>
            </CartaoRevelavel>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-slate-800/40">
        <div className="container mx-auto max-w-7xl px-5">
          <CartaoRevelavel>
            <h2 className="text-3xl md:text-4xl text-center mb-2.5 font-extrabold tracking-tight">
              Os 4 Pilares da TreenUp
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-lg">
              Conheça cada coluna que sustenta nossa plataforma
            </p>
          </CartaoRevelavel>
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            {pilares.map((pilar, i) => (
              <CartaoRevelavel
                key={pilar.numero}
                direcao={i % 2 === 0 ? 'esquerda' : 'direita'}
                atrasoMs={i * 120}
              >
                <div className="h-full bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-slate-700 cartao-3d">
                  <div className="w-14 h-14 bg-gradient-to-br from-verde-claro to-verde-principal text-white rounded-2xl flex items-center justify-center text-xl font-black mb-5 shadow-lg shadow-verde-principal/20">
                    {pilar.numero}
                  </div>
                  <h3 className="text-2xl mb-4 text-verde-principal font-extrabold">
                    {pilar.titulo}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-7">{pilar.descricao}</p>
                </div>
              </CartaoRevelavel>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <CartaoRevelavel>
            <h2 className="text-3xl md:text-4xl text-center mb-12 font-extrabold tracking-tight">
              Tipo de Inovação
            </h2>
          </CartaoRevelavel>
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
            <CartaoRevelavel direcao="esquerda">
              <div className="h-full bg-gradient-to-br from-verde-claro/10 to-verde-principal/10 dark:from-verde-claro/5 dark:to-verde-principal/5 p-8 rounded-2xl border-2 border-verde-principal/20">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-extrabold mb-2">
                  Inovação de Processo e Modelo de Negócio
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-8 text-base">
                  Combinamos conceitos de inovação nas esferas dos softwares corporativos de
                  metas de sustentabilidade na reestruturação dos parceiros de benefícios do
                  trabalhador por meio de gamificação urbana.
                </p>
              </div>
            </CartaoRevelavel>
            <CartaoRevelavel direcao="direita" atrasoMs={200}>
              <div className="h-full bg-gradient-to-br from-teal-destaque/10 to-azul-ceu/10 dark:from-teal-destaque/5 dark:to-azul-ceu/5 p-8 rounded-2xl border-2 border-teal-destaque/20">
                <div className="text-5xl mb-4">🧩</div>
                <h3 className="text-xl font-extrabold mb-2">Fusão de Setores</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-8 text-base">
                  Gamificação interativa, geolocalização imersiva, monitoramento de dados e a
                  economia verde digital baseada nos Treen-Tokens: acumulados permanentemente
                  na carteira digital do usuário para vouchers, benefícios corporativos e
                  abatimento direto de faturas de energia elétrica.
                </p>
              </div>
            </CartaoRevelavel>
          </div>
        </div>
      </section>
    </div>
  )
}
