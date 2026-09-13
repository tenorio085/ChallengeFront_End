import { useState } from 'react'
import SecaoCabecalho from '../components/SecaoCabecalho'
import CartaoRevelavel from '../components/CartaoRevelavel'
import BlocoBMC from '../components/BlocoBMC'
import Badge from '../components/Badge'

type DadoBlocoBMC = {
  id: string
  titulo: string
  itens: string[]
  icone: string
}

export default function SolucaoProjeto() {
  const [blocoAtivo, setBlocoAtivo] = useState<string | null>(null)

  const blocosBMC: DadoBlocoBMC[] = [
    {
      id: 'parcerias',
      titulo: 'Parcerias Chave',
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
      titulo: 'Atividades Chave',
      icone: '⚙️',
      itens: [
        'Desenvolvimento e evolução contínua do App TreenUp',
        'Análise de dados de impacto ambiental mensurável',
        'Engenharia de gamificação (ranks, recompensas)',
      ],
    },
    {
      id: 'proposta',
      titulo: 'Proposta de Valor',
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
      titulo: 'Relacionamento',
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
      titulo: 'Segmento de Clientes',
      icone: '👥',
      itens: [
        'Usuários que buscam aprofundar a Educação Ambiental',
        'Entusiastas Outdoor',
        'Empresas ESG Gamificado',
      ],
    },
    {
      id: 'recursos',
      titulo: 'Recursos Chaves',
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
      titulo: 'Canais',
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

  const fundoUniforme =
    'bg-white dark:bg-cinza-cartao-escuro'

  const classeProposta =
    'bg-verde-claro/25 dark:bg-verde-principal/20 p-3 rounded-lg text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm'

  function aoEntrar(id: string) {
    setBlocoAtivo(id)
  }

  function aoSair() {
    setBlocoAtivo(null)
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
            <div className="text-center mb-12 flex flex-col items-center gap-4">
              <Badge variante="verde" icone="🧠">
                Business Model Canvas
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-cinza-escuro dark:text-branco">
                Modelo de Negócios Completo
              </h2>
              <p className="text-gray-500 dark:text-cinza-claro text-lg max-w-2xl">
                Passe o mouse sobre os blocos para destacar cada parte do modelo
              </p>
            </div>
          </CartaoRevelavel>

          <CartaoRevelavel direcao="cima" atrasoMs={150}>
            <div className="rounded-3xl overflow-hidden border-4 border-verde-principal bg-white dark:bg-cinza-cartao-escuro shadow-2xl transition-colors divide-y-4 divide-verde-principal/70">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                <BlocoBMC
                  id={blocosBMC[0].id}
                  titulo={blocosBMC[0].titulo}
                  itens={blocosBMC[0].itens}
                  icone={blocosBMC[0].icone}
                  blocoAtivo={blocoAtivo === blocosBMC[0].id}
                  aoEntrar={aoEntrar}
                  aoSair={aoSair}
                  classesFundo={fundoUniforme}
                />

                <BlocoBMC
                  id={blocosBMC[1].id}
                  titulo={blocosBMC[1].titulo}
                  itens={blocosBMC[1].itens}
                  icone={blocosBMC[1].icone}
                  blocoAtivo={blocoAtivo === blocosBMC[1].id}
                  aoEntrar={aoEntrar}
                  aoSair={aoSair}
                  classesFundo={fundoUniforme}
                />

                <BlocoBMC
                  id={blocosBMC[2].id}
                  titulo={blocosBMC[2].titulo}
                  itens={blocosBMC[2].itens}
                  icone={blocosBMC[2].icone}
                  blocoAtivo={blocoAtivo === blocosBMC[2].id}
                  aoEntrar={aoEntrar}
                  aoSair={aoSair}
                  classesFundo={`${fundoUniforme} md:border-l-4 md:border-r-4 border-verde-principal/50 shadow-inner`}
                  prioridade={true}
                  classeListaItem={classeProposta}
                />

                <BlocoBMC
                  id={blocosBMC[3].id}
                  titulo={blocosBMC[3].titulo}
                  itens={blocosBMC[3].itens}
                  icone={blocosBMC[3].icone}
                  blocoAtivo={blocoAtivo === blocosBMC[3].id}
                  aoEntrar={aoEntrar}
                  aoSair={aoSair}
                  classesFundo={fundoUniforme}
                />

                <BlocoBMC
                  id={blocosBMC[4].id}
                  titulo={blocosBMC[4].titulo}
                  itens={blocosBMC[4].itens}
                  icone={blocosBMC[4].icone}
                  blocoAtivo={blocoAtivo === blocosBMC[4].id}
                  aoEntrar={aoEntrar}
                  aoSair={aoSair}
                  classesFundo={fundoUniforme}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <BlocoBMC
                  id={blocosBMC[5].id}
                  titulo={blocosBMC[5].titulo}
                  itens={blocosBMC[5].itens}
                  icone={blocosBMC[5].icone}
                  blocoAtivo={blocoAtivo === blocosBMC[5].id}
                  aoEntrar={aoEntrar}
                  aoSair={aoSair}
                  classesFundo={`${fundoUniforme} md:border-r-2 border-verde-principal/50 dark:border-verde-principal/50`}
                />

                <BlocoBMC
                  id={blocosBMC[6].id}
                  titulo={blocosBMC[6].titulo}
                  itens={blocosBMC[6].itens}
                  icone={blocosBMC[6].icone}
                  blocoAtivo={blocoAtivo === blocosBMC[6].id}
                  aoEntrar={aoEntrar}
                  aoSair={aoSair}
                  classesFundo={`${fundoUniforme} md:border-l-2 border-verde-principal/50 dark:border-verde-principal/50`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div
                  onMouseEnter={() => aoEntrar('custos')}
                  onMouseLeave={aoSair}
                  className={`p-5 md:p-6 md:border-r-2 border-verde-principal/50 dark:border-verde-principal/50 ${fundoUniforme} transition-all duration-300 ${
                    blocoAtivo === 'custos'
                      ? 'z-10 shadow-2xl ring-2 ring-verde-principal/70'
                      : 'hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 mb-5">
                    <Badge variante="cinza" icone="💰">
                      Estrutura de Custos
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {estruturaCustos.map((item, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 dark:bg-cinza-meio-escuro/60 p-3 rounded-xl text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm text-center font-medium transition-all hover:shadow-md hover:-translate-y-0.5 border border-verde-principal/30 dark:border-verde-principal/30"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  onMouseEnter={() => aoEntrar('receitas')}
                  onMouseLeave={aoSair}
                  className={`p-5 md:p-6 md:border-l-2 border-verde-principal/50 dark:border-verde-principal/50 ${fundoUniforme} transition-all duration-300 ${
                    blocoAtivo === 'receitas'
                      ? 'z-10 shadow-2xl ring-2 ring-verde-principal/70'
                      : 'hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 mb-5">
                    <Badge variante="amarelo" icone="📈">
                      Fontes de Receita
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {fontesReceita.map((item, i) => (
                      <div
                        key={i}
                        className="bg-amber-50 dark:bg-amber-900/15 p-3 rounded-xl text-sm text-gray-800 dark:text-cinza-texto-escuro shadow-sm text-center font-medium transition-all hover:shadow-md hover:-translate-y-0.5 border border-verde-principal/30 dark:border-verde-principal/30"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CartaoRevelavel>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-cinza-meio-escuro transition-colors">
        <div className="container mx-auto max-w-7xl px-5">
          <CartaoRevelavel direcao="cima" atrasoMs={200}>
            <div className="text-center mb-12 flex flex-col items-center gap-4">
              <Badge variante="claro" icone="💡">
                Classificação da Inovação
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-cinza-escuro dark:text-branco">
                Tipo de Inovação
              </h2>
              <p className="text-gray-500 dark:text-cinza-claro text-lg max-w-2xl">
                A TreenUp combina múltiplas frentes de inovação para criar uma solução única
              </p>
            </div>
          </CartaoRevelavel>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            <CartaoRevelavel direcao="esquerda" atrasoMs={300}>
              <div className="h-full bg-white dark:bg-cinza-cartao-escuro p-8 rounded-3xl shadow-xl border-t-4 border-verde-principal transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-verde-claro/20 dark:bg-verde-principal/20 flex items-center justify-center text-4xl">
                    🔄
                  </div>
                  <h3 className="text-2xl font-bold text-verde-principal">
                    Inovação de Processo
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-cinza-texto-escuro leading-8 text-base">
                  A TreenUp caracteriza-se como uma{' '}
                  <strong className="text-cinza-escuro dark:text-branco">
                    Inovação de Processo e de Modelo de Negócio
                  </strong>
                  , combinando conceitos de inovação nas esferas dos softwares corporativos de
                  metas de sustentabilidade na reestruturação dos parceiros de benefícios do
                  trabalhador por meio de gamificação urbana.
                </p>
              </div>
            </CartaoRevelavel>

            <CartaoRevelavel direcao="direita" atrasoMs={400}>
              <div className="h-full bg-white dark:bg-cinza-cartao-escuro p-8 rounded-3xl shadow-xl border-t-4 border-verde-claro transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-verde-principal/15 dark:bg-amber-500/15 flex items-center justify-center text-4xl">
                    🌍
                  </div>
                  <h3 className="text-2xl font-bold text-verde-principal">
                    Fusão de Setores
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-cinza-texto-escuro leading-8 text-base">
                  A solução apoia-se na fusão de setores que raramente dialogam no mercado
                  corporativo: a gamificação interativa, a geolocalização imersiva promovida, o
                  monitoramento de dados de infraestrutura e a economia verde digital baseada nos{' '}
                  <strong className="text-cinza-escuro dark:text-branco">Treen-Tokens</strong>,
                  que diferente dos pontos do ranking, serão permanentemente acumulados na
                  carteira digital do usuário.
                </p>
              </div>
            </CartaoRevelavel>
          </div>
        </div>
      </section>
    </div>
  )
}
