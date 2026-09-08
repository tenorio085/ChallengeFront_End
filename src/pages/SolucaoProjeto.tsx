import SecaoCabecalho from '../components/SecaoCabecalho'

export default function SolucaoProjeto() {
  const blocosBMC = [
    {
      titulo: 'PARCERIAS CHAVE',
      itens: [
        "ONG's ambientais / sustentáveis",
        'Empresas de reciclagem',
        'Processadores de Pagamento',
        'Provedores de IA e TTS',
      ],
    },
    {
      titulo: 'ATIVIDADES CHAVE',
      itens: [
        'Desenvolvimento e evolução contínua do App TreenUp',
        'Análise de dados de impacto ambiental mensurável',
        'Engenharia de gamificação (ranks, recompensas)',
      ],
    },
    {
      titulo: 'PROPOSTA DE VALOR',
      itens: [
        'Impacto Real Visualizado',
        'Acessibilidade Universal',
        'Gamificação de Status Social',
        'Recompensas Exclusivas',
        'Educação ecológica prática',
      ],
    },
    {
      titulo: 'RELACIONAMENTO',
      itens: [
        'Ranking Semanal',
        'Aprendizado automatizado',
        'Eventos Globais (físicos)',
        'Suporte Técnico',
      ],
    },
    {
      titulo: 'SEGMENTO DE CLIENTES',
      itens: [
        'Usuários que buscam aprofundar a Educação Ambiental',
        'Entusiastas Outdoor',
        'Empresas ESG Gamificado',
      ],
    },
    {
      titulo: 'RECURSOS CHAVES',
      itens: [
        'Engine de AR',
        'Plataforma Tecnológica',
        'Ativos físicos (parceiros, totens de reciclagem)',
        'Algoritmo de IA (Validação)',
      ],
    },
    {
      titulo: 'CANAIS',
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

  return (
    <div>
      <SecaoCabecalho
        titulo="Solução do Projeto"
        subtitulo="Entenda em detalhes o modelo de negócio e a proposta da TreenUp"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <h2 className="text-3xl md:text-4xl text-center mb-2.5 font-bold">
            Business Model Canvas
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            Modelo de negócios completo da TreenUp
          </p>

          <div className="grid gap-4 md:grid-cols-5 border-4 border-verde-principal rounded-2xl overflow-hidden bg-white shadow-2xl">
            <div className="md:col-span-1 p-6 border-r border-gray-200 bg-gradient-to-b from-green-100 to-white">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                {blocosBMC[0].titulo}
              </h3>
              <ul className="space-y-3">
                {blocosBMC[0].itens.map((item, i) => (
                  <li
                    key={i}
                    className="bg-verde-claro/20 p-3 rounded-lg text-sm text-gray-800 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1 p-6 border-r border-gray-200 bg-gradient-to-b from-green-50 to-white">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                {blocosBMC[1].titulo}
              </h3>
              <ul className="space-y-3">
                {blocosBMC[1].itens.map((item, i) => (
                  <li
                    key={i}
                    className="bg-verde-claro/20 p-3 rounded-lg text-sm text-gray-800 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1 p-6 border-r border-gray-200 bg-gradient-to-b from-green-200 to-white">
              <div className="text-center mb-4">
                <span className="text-4xl">🌳</span>
              </div>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4 text-center">
                {blocosBMC[2].titulo}
              </h3>
              <ul className="space-y-3">
                {blocosBMC[2].itens.map((item, i) => (
                  <li
                    key={i}
                    className="bg-verde-principal/20 p-3 rounded-lg text-sm text-gray-800 shadow-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1 p-6 border-r border-gray-200 bg-gradient-to-b from-green-50 to-white">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                {blocosBMC[3].titulo}
              </h3>
              <ul className="space-y-3">
                {blocosBMC[3].itens.map((item, i) => (
                  <li
                    key={i}
                    className="bg-verde-claro/20 p-3 rounded-lg text-sm text-gray-800 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                  {blocosBMC[6].titulo}
                </h3>
                <ul className="space-y-3">
                  {blocosBMC[6].itens.map((item, i) => (
                    <li
                      key={i}
                      className="bg-verde-claro/20 p-3 rounded-lg text-sm text-gray-800 shadow-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-1 p-6 bg-gradient-to-b from-green-100 to-white">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                {blocosBMC[4].titulo}
              </h3>
              <ul className="space-y-3">
                {blocosBMC[4].itens.map((item, i) => (
                  <li
                    key={i}
                    className="bg-verde-claro/20 p-3 rounded-lg text-sm text-gray-800 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1 p-6 border-r border-gray-200 bg-gradient-to-b from-green-50 to-white hidden md:block">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                {blocosBMC[5].titulo}
              </h3>
              <ul className="space-y-3">
                {blocosBMC[5].itens.map((item, i) => (
                  <li
                    key={i}
                    className="bg-verde-claro/20 p-3 rounded-lg text-sm text-gray-800 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-6 bg-verde-principal/10 rounded-xl border-2 border-verde-principal/30">
              <h3 className="text-sm font-bold text-verde-principal uppercase tracking-wide mb-4">
                ESTRUTURA DE CUSTOS
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {estruturaCustos.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-3 rounded-lg text-sm text-gray-800 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-verde-claro/10 rounded-xl border-2 border-verde-claro/30">
              <h3 className="text-sm font-bold text-verde-principal uppercase tracking-wide mb-4">
                FONTES DE RECEITA
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {fontesReceita.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-3 rounded-lg text-sm text-gray-800 shadow-sm text-center font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
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
              acumulados na carteira digital do usuário.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
