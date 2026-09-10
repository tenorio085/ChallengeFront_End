import { useState } from 'react'
import SecaoCabecalho from '../components/SecaoCabecalho'
import CartaoRevelavel from '../components/CartaoRevelavel'

type BlocoBMC = {
  id: string
  titulo: string
  itens: string[]
  icone?: string
}

export default function SolucaoProjeto() {
  const [blocoAtivo, setBlocoAtivo] = useState<string | null>(null)

  const blocosBMC: BlocoBMC[] = [
    {
      id: 'parcerias',
      titulo: 'PARCERIAS CHAVE',
      icone: '🤝',
      itens: [
        "ONG's ambientais / sustentáveis",
        'Empresas de reciclagem',
        'Processadores de Pagamento',
        'Provedores de IA e TTS',
      ],
    },
    {
      id: 'atividades',
      titulo: 'ATIVIDADES CHAVE',
      icone: '⚙️',
      itens: [
        'Desenvolvimento e evolução contínua do App TreenUp',
        'Análise de dados de impacto ambiental mensurável',
        'Engenharia de gamificação (ranks, recompensas)',
      ],
    },
    {
      id: 'proposta',
      titulo: 'PROPOSTA DE VALOR',
      icone: '💎',
      itens: [
        'Impacto Real Visualizado',
        'Acessibilidade Universal',
        'Gamificação de Status Social',
        'Recompensas Exclusivas',
        'Educação ecológica prática',
      ],
    },
    {
      id: 'relacionamento',
      titulo: 'RELACIONAMENTO',
      icone: '💬',
      itens: [
        'Ranking Semanal',
        'Aprendizado automatizado',
        'Eventos Globais (físicos)',
        'Suporte Técnico',
      ],
    },
    {
      id: 'clientes',
      titulo: 'SEGMENTO DE CLIENTES',
      icone: '👥',
      itens: [
        'Usuários que buscam aprofundar a Educação Ambiental',
        'Entusiastas Outdoor',
        'Empresas ESG Gamificado',
      ],
    },
    {
      id: 'recursos',
      titulo: 'RECURSOS CHAVES',
      icone: '🔧',
      itens: [
        'Engine de AR',
        'Plataforma Tecnológica',
        'Ativos físicos (parceiros, totens de reciclagem)',
        'Algoritmo de IA (Validação)',
      ],
    },
    {
      id: 'canais',
      titulo: 'CANAIS',
      icone: '📢',
      itens: [
        'App TreenUP',
        'Redes Sociais',
        'Canais parceiros',
        'Site Treenup',
      ],
    },
  ]

  const estruturaCustos = [
    'Desenvolvimento de Software e AR',
    'Hospedagem em Nuvem',
    'Colaboradores',
    'Aquisição de Usuários (CAC)',
  ]

  const fontesReceita = [
    'Assinatura TreenUp Plus',
    'Marketplace de Itens Digitais',
    'Parcerias B2B',
  ]

  const obterEstiloBloco = (id: string) => {
    const estaAtivo = blocoAtivo === id
    return `transition-all duration-300 transform ${
      estaAtivo
        ? 'scale-[1.03] z-10 shadow-2xl ring-2 ring-verde-principal shadow-verde-principal/30'
        : 'hover:scale-[1.01] hover:shadow-lg'
    }`
  }

  return (
    <div>
      <SecaoCabecalho
        titulo="Solução do Projeto"
        subtitulo="Entenda em detalhes o modelo de negócio e a proposta da TreenUp"
        icone="📋"
      />

      <section className="py-20 bg-white dark:bg-cinza-fundo-escuro transition-colors">
        <div className="container mx-auto max-w-7xl px-5">
          <CartaoRevelavel direcao="cima">
            <h2 className="text-3xl md:text-4xl text-center mb-2.5 font-bold text-cinza-escuro dark:text-branco">
              Business Model Canvas
            </h2>
            <p className="text-center text-gray-500 dark:text-cinza-claro mb-12 text-lg">
              Passe o mouse sobre os blocos para destacar o modelo de negócios completo da TreenUp
            </p>
          </CartaoRevelavel>

          <CartaoRevelavel direcao="cima" atrasoMs={150}>
            <div className="grid gap-4 md:grid-cols-5 border-4 border-verde-principal rounded-2xl overflow-hidden bg-white dark:bg-cinza-cartao-escuro shadow-2xl transition-colors">
              <div
                onMouseEnter={() => setBlocoAtivo('parcerias')}
                onMouseLeave={() => setBlocoAtivo(null)}
                className={`md:col-span-1 p-6 border-r border-gray-200 dark:border-cinza-borda-escuro bg-gradient-to-b from-green-100 to-white dark:from-verde-principal/10 dark:to-cinza-cartao-escuro ${obterEstiloBloco('parcerias')}`}
              >
                <div className="text-center mb-3">
                  <span className="text-3xl">{blocosBMC[0].icone}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-700 dark:text-branco uppercase tracking-wide mb-4">
                  {blocosBMC[0].titulo}
                </h3>
                <ul className="space-y-3">
                  {blocosBMC[0].itens.map((item, i) => (
                    <li
                      key={i}
                      className="bg-verde-claro/20 dark:bg-verde-principal/15 p-3 rounded-lg text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                onMouseEnter={() => setBlocoAtivo('atividades')}
                onMouseLeave={() => setBlocoAtivo(null)}
                className={`md:col-span-1 p-6 border-r border-gray-200 dark:border-cinza-borda-escuro bg-gradient-to-b from-green-50 to-white dark:from-verde-claro/5 dark:to-cinza-cartao-escuro ${obterEstiloBloco('atividades')}`}
              >
                <div className="text-center mb-3">
                  <span className="text-3xl">{blocosBMC[1].icone}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-700 dark:text-branco uppercase tracking-wide mb-4">
                  {blocosBMC[1].titulo}
                </h3>
                <ul className="space-y-3">
                  {blocosBMC[1].itens.map((item, i) => (
                    <li
                      key={i}
                      className="bg-verde-claro/20 dark:bg-verde-principal/15 p-3 rounded-lg text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                onMouseEnter={() => setBlocoAtivo('proposta')}
                onMouseLeave={() => setBlocoAtivo(null)}
                className={`md:col-span-1 p-6 border-r border-gray-200 dark:border-cinza-borda-escuro bg-gradient-to-b from-green-200 to-white dark:from-verde-principal/20 dark:to-cinza-cartao-escuro ${obterEstiloBloco('proposta')}`}
              >
                <div className="text-center mb-4">
                  <span className="text-4xl animate-pulso-suave">{blocosBMC[2].icone}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-700 dark:text-branco uppercase tracking-wide mb-4 text-center">
                  {blocosBMC[2].titulo}
                </h3>
                <ul className="space-y-3">
                  {blocosBMC[2].itens.map((item, i) => (
                    <li
                      key={i}
                      className="bg-verde-principal/20 dark:bg-verde-principal/25 p-3 rounded-lg text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                onMouseEnter={() => setBlocoAtivo('relacionamento')}
                onMouseLeave={() => setBlocoAtivo(null)}
                className={`md:col-span-1 p-6 border-r border-gray-200 dark:border-cinza-borda-escuro bg-gradient-to-b from-green-50 to-white dark:from-verde-claro/5 dark:to-cinza-cartao-escuro ${obterEstiloBloco('relacionamento')}`}
              >
                <div className="text-center mb-3">
                  <span className="text-3xl">{blocosBMC[3].icone}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-700 dark:text-branco uppercase tracking-wide mb-4">
                  {blocosBMC[3].titulo}
                </h3>
                <ul className="space-y-3">
                  {blocosBMC[3].itens.map((item, i) => (
                    <li
                      key={i}
                      className="bg-verde-claro/20 dark:bg-verde-principal/15 p-3 rounded-lg text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  onMouseEnter={(e) => {
                    e.stopPropagation()
                    setBlocoAtivo('canais')
                  }}
                  onMouseLeave={() => setBlocoAtivo(null)}
                  className={`mt-6 pt-4 border-t border-gray-200 dark:border-cinza-borda-escuro ${obterEstiloBloco('canais')} rounded-lg`}
                >
                  <div className="text-center mb-3">
                    <span className="text-2xl">{blocosBMC[6].icone}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-700 dark:text-branco uppercase tracking-wide mb-4">
                    {blocosBMC[6].titulo}
                  </h3>
                  <ul className="space-y-3">
                    {blocosBMC[6].itens.map((item, i) => (
                      <li
                        key={i}
                        className="bg-verde-claro/20 dark:bg-verde-principal/15 p-3 rounded-lg text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                onMouseEnter={() => setBlocoAtivo('clientes')}
                onMouseLeave={() => setBlocoAtivo(null)}
                className={`md:col-span-1 p-6 bg-gradient-to-b from-green-100 to-white dark:from-verde-principal/10 dark:to-cinza-cartao-escuro ${obterEstiloBloco('clientes')}`}
              >
                <div className="text-center mb-3">
                  <span className="text-3xl">{blocosBMC[4].icone}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-700 dark:text-branco uppercase tracking-wide mb-4">
                  {blocosBMC[4].titulo}
                </h3>
                <ul className="space-y-3">
                  {blocosBMC[4].itens.map((item, i) => (
                    <li
                      key={i}
                      className="bg-verde-claro/20 dark:bg-verde-principal/15 p-3 rounded-lg text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                onMouseEnter={() => setBlocoAtivo('recursos')}
                onMouseLeave={() => setBlocoAtivo(null)}
                className={`md:col-span-1 p-6 border-r border-gray-200 dark:border-cinza-borda-escuro bg-gradient-to-b from-green-50 to-white dark:from-verde-claro/5 dark:to-cinza-cartao-escuro hidden md:block ${obterEstiloBloco('recursos')}`}
              >
                <div className="text-center mb-3">
                  <span className="text-3xl">{blocosBMC[5].icone}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-700 dark:text-branco uppercase tracking-wide mb-4">
                  {blocosBMC[5].titulo}
                </h3>
                <ul className="space-y-3">
                  {blocosBMC[5].itens.map((item, i) => (
                    <li
                      key={i}
                      className="bg-verde-claro/20 dark:bg-verde-principal/15 p-3 rounded-lg text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CartaoRevelavel>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <CartaoRevelavel direcao="esquerda" atrasoMs={250}>
              <div
                onMouseEnter={() => setBlocoAtivo('custos')}
                onMouseLeave={() => setBlocoAtivo(null)}
                className={`p-6 bg-verde-principal/10 dark:bg-verde-principal/15 rounded-xl border-2 border-verde-principal/30 transition-all duration-300 ${blocoAtivo === 'custos' ? 'scale-[1.02] shadow-xl ring-2 ring-verde-principal/60' : 'hover:shadow-lg'}`}
              >
                <h3 className="text-sm font-bold text-verde-principal uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="text-xl">💰</span>
                  ESTRUTURA DE CUSTOS
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {estruturaCustos.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-cinza-cartao-escuro p-3 rounded-lg text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CartaoRevelavel>

            <CartaoRevelavel direcao="direita" atrasoMs={350}>
              <div
                onMouseEnter={() => setBlocoAtivo('receitas')}
                onMouseLeave={() => setBlocoAtivo(null)}
                className={`p-6 bg-verde-claro/10 dark:bg-verde-claro/15 rounded-xl border-2 border-verde-claro/30 transition-all duration-300 ${blocoAtivo === 'receitas' ? 'scale-[1.02] shadow-xl ring-2 ring-verde-claro/60' : 'hover:shadow-lg'}`}
              >
                <h3 className="text-sm font-bold text-verde-principal uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="text-xl">📈</span>
                  FONTES DE RECEITA
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {fontesReceita.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-cinza-cartao-escuro p-3 rounded-lg text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm text-center font-medium transition-all hover:shadow-md hover:-translate-y-0.5"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </CartaoRevelavel>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-cinza-meio-escuro transition-colors">
        <div className="container mx-auto max-w-7xl px-5">
          <CartaoRevelavel direcao="cima" atrasoMs={200}>
            <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold text-cinza-escuro dark:text-branco">
              Tipo de Inovação
            </h2>
          </CartaoRevelavel>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <CartaoRevelavel direcao="esquerda" atrasoMs={300}>
              <div className="bg-white dark:bg-cinza-cartao-escuro p-8 rounded-2xl shadow-lg border-t-4 border-verde-principal transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="text-5xl mb-5">🔄</div>
              <h3 className="text-2xl font-bold text-verde-principal mb-4">Inovação de Processo</h3>
              <p className="text-gray-700 dark:text-cinza-texto-escuro leading-8 text-lg">
                A TreenUp caracteriza-se como uma{' '}
                <strong className="text-cinza-escuro dark:text-branco">Inovação de Processo e de Modelo de Negócio</strong>,
                combinando conceitos de inovação nas esferas dos softwares corporativos de metas de
                sustentabilidade na reestruturação dos parceiros de benefícios do trabalhador
                por meio de gamificação urbana.
              </p>
            </div>
            </CartaoRevelavel>
            <CartaoRevelavel direcao="direita" atrasoMs={400}>
              <div className="bg-white dark:bg-cinza-cartao-escuro p-8 rounded-2xl shadow-lg border-t-4 border-verde-claro transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="text-5xl mb-5">🌍</div>
              <h3 className="text-2xl font-bold text-verde-principal mb-4">Fusão de Setores</h3>
              <p className="text-gray-700 dark:text-cinza-texto-escuro leading-8 text-lg">
                A solução apoia-se na fusão de setores que raramente dialogam no mercado
                corporativo: a gamificação interativa, a geolocalização imersiva promovida, o
                monitoramento de dados de infraestrutura e a economia verde digital baseada
                nos <strong className="text-cinza-escuro dark:text-branco">Treen-Tokens</strong>,
                que diferente dos pontos do ranking, serão permanentemente
                acumulados na carteira digital do usuário.
              </p>
            </div>
            </CartaoRevelavel>
          </div>
        </div>
      </section>
    </div>
  )
}
