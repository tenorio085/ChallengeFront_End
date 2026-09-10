import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Equipe from './pages/Equipe'
import FAQ from './pages/FAQ'
import Contato from './pages/Contato'
import SolucaoProjeto from './pages/SolucaoProjeto'
import Botao from './components/Botao'
import CartaoRevelavel from './components/CartaoRevelavel'

function PaginaNaoEncontrada() {
  return (
    <section className="py-24 min-h-[60vh] flex items-center justify-center bg-white dark:bg-cinza-fundo-escuro transition-colors">
      <div className="container mx-auto max-w-2xl px-5 text-center">
        <CartaoRevelavel direcao="cima">
          <div className="text-[10rem] leading-none font-black text-verde-principal/20 select-none mb-[-2rem]">
            404
          </div>
          <h1 className="text-5xl font-bold text-verde-principal mb-5 relative">
            Ops! Página perdida
          </h1>
          <p className="text-xl text-gray-600 dark:text-cinza-claro mb-10 leading-relaxed">
            A página que você está procurando não existe ou foi movida para outro endereço.
            Que tal voltar para a página inicial e continuar sua jornada sustentável? 🌱
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Botao rota="/" variante="primario" tamanho="grande">
              ← Voltar para Início
            </Botao>
            <Botao rota="/contato" variante="sombra" tamanho="grande">
              Fale Conosco
            </Botao>
          </div>
        </CartaoRevelavel>
      </div>
    </section>
  )
}

function PaginaDetalheFuncionalidade() {
  const { id } = useParams<{ id: string }>()
  const navegar = useNavigate()
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    setCarregando(true)
    const temporizador = setTimeout(() => setCarregando(false), 350)
    return () => clearTimeout(temporizador)
  }, [id])

  const detalhesFuncionalidades: Record<string, { titulo: string; icone: string; descricao: string; beneficios: string[] }> = {
    '1': {
      titulo: 'Eco-World & Eco-Vila',
      icone: '🏡',
      beneficios: [
        'Sensação de propriedade e progresso',
        'Visualização clara do impacto ambiental',
        'Engajamento emocional com a causa',
        'Evolução desbloqueável de elementos',
      ],
      descricao:
        'O Eco-World é o hub central interativo do usuário dentro do aplicativo. Trata-se de um universo virtual onde cada colaborador possui e gerencia sua própria Eco-Vila. No início da jornada, a Eco-Vila reflete um cenário cinzento e poluído. À medida que o usuário adota práticas sustentáveis no mundo real — validadas pela integração com a API de telemetria da SoulUp (como a redução real do consumo de KWh de energia) —, a Eco-Vila evolui visualmente, ganhando árvores, painéis solares, sistemas de coleta de água da chuva e uma atmosfera limpa. Essa mecânica transforma dados abstratos de economia de energia e pegada de carbono em uma representação visual clara, gerando um sentimento psicológico de propriedade e progresso sobre o próprio impacto ambiental.',
    },
    '2': {
      titulo: 'Eco-Quest RPG',
      icone: '⚔️',
      beneficios: [
        'Ritmo de engajamento diário garantido',
        'Aprendizado gamificado e divertido',
        'Sistema de XP e níveis progressivos',
        'Recompensas tangíveis por hábitos verdes',
      ],
      descricao:
        'Para ditar o ritmo de engajamento diário, a TreenUp adota o modelo Eco-Quest RPG, transformando metas de sustentabilidade em missões clássicas de jogos de interpretação de papéis. Os usuários recebem missões diárias e semanais baseadas em hábitos reais e consumo consciente. Há "Quests de Conhecimento" (completar trilhas educacionais de microlearning e responder a quizzes sobre eficiência energética) e "Quests de Ação Prática" (como registrar o descarte correto de materiais recicláveis em postos parceiros). Ao completar as Eco-Quests, o usuário ganha Pontos de Experiência (XP) para subir o nível do seu perfil, desbloquear novos elementos decorativos e construções avançadas para sua Eco-Vila, além de coletar moedas de troca.',
    },
    '3': {
      titulo: 'Ranking Semanal',
      icone: '🏆',
      beneficios: [
        'Competição saudável e inclusiva',
        'Reset semanal = oportunidades iguais',
        'Premiações de destaque para líderes',
        'Retenção de longo prazo garantida',
      ],
      descricao:
        'Substituindo a antiga ideia de duelos diretos, a TreenUp implementa o Ranking Semanal como seu principal motor de competitividade saudável e retenção a longo prazo. Os pontos acumulados através da conclusão das Eco-Quests e da evolução da Eco-Vila alimentam uma tabela de classificação corporativa dinâmica. Esse ranking possui um ciclo rígido de 7 dias, sendo resetado de forma automática todo domingo às 23:59. O reset semanal garante que novos usuários ou colaboradores que tiveram uma semana menos ativa tenham oportunidades idênticas de disputar o topo no ciclo seguinte, eliminando a desmotivação comum de rankings permanentes dominados por usuários antigos. O líder do ranking da semana recebe premiações de destaque e bônus especiais.',
    },
    '4': {
      titulo: 'Treen-Stops AR',
      icone: '📍',
      beneficios: [
        'Integração mundo físico + digital',
        'Experiência imersiva em Realidade Aumentada',
        'Coleta direta de Treen-Tokens',
        'Parcerias estratégicas com pontos físicos',
      ],
      descricao:
        'Para uma dinâmica mais realista, a plataforma espalha "Eco-Stops" virtuais pelo mapa do mundo real, posicionados estrategicamente em lixeiras de coleta seletiva, pontos de descarte tecnológico da empresa, parques e totens de parceiros comerciais. Os colaboradores devem se deslocar fisicamente até esses pontos e usar a câmera do smartphone para interagir com o ambiente em Realidade Aumentada. Ao fazer o "check-in" e limpar digitalmente aquela coordenada, eles coletam diretamente os Treen-Tokens, nossa moeda única, que diferente dos pontos do ranking, são permanentemente acumulados na carteira digital do usuário e servem como saldo financeiro para recompensas reais.',
    },
  }

  const detalheAtual = detalhesFuncionalidades[id || '1']

  if (carregando) {
    return (
      <section className="py-24 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-verde-principal border-t-transparent rounded-full animate-girar mx-auto mb-5"></div>
          <p className="text-xl text-gray-500 dark:text-cinza-claro font-medium">
            Carregando funcionalidade...
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-cinza-fundo-escuro min-h-screen transition-colors">
      <div className="container mx-auto max-w-5xl px-5">
        <button
          onClick={() => navegar('/')}
          className="mb-10 px-5 py-2.5 bg-white dark:bg-cinza-cartao-escuro text-gray-800 dark:text-cinza-texto-escuro rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-cinza-meio-escuro transition-all inline-flex items-center gap-2 cursor-pointer border-none shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Voltar para Início
        </button>

        {detalheAtual ? (
          <>
            <CartaoRevelavel direcao="cima">
              <div className="bg-gradient-to-br from-verde-principal via-verde-claro to-verde-escuro text-white rounded-3xl p-10 mb-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[20rem] opacity-10 -translate-y-20 translate-x-20 select-none">
                  {detalheAtual.icone}
                </div>
                <div className="relative z-10">
                  <div className="text-7xl mb-5 animate-pulso-suave inline-block">
                    {detalheAtual.icone}
                  </div>
                  <h1 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
                    {detalheAtual.titulo}
                  </h1>
                  <p className="text-lg md:text-xl opacity-90 font-medium">
                    Funcionalidade exclusiva da plataforma TreenUp
                  </p>
                </div>
              </div>
            </CartaoRevelavel>

            <div className="grid md:grid-cols-3 gap-8">
              <CartaoRevelavel direcao="esquerda" atrasoMs={150}>
                <div className="md:col-span-2 bg-white dark:bg-cinza-cartao-escuro rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 dark:border-cinza-borda-escuro transition-all hover:shadow-xl">
                  <h2 className="text-2xl font-bold text-cinza-escuro dark:text-branco mb-6 flex items-center gap-3">
                    <span className="text-3xl">📖</span>
                    Como funciona?
                  </h2>
                  <p className="text-gray-700 dark:text-cinza-texto-escuro leading-9 text-lg">
                    {detalheAtual.descricao}
                  </p>
                </div>
              </CartaoRevelavel>

              <CartaoRevelavel direcao="direita" atrasoMs={250}>
                <div className="bg-gradient-to-b from-verde-claro/20 to-verde-principal/10 dark:from-verde-claro/20 dark:to-verde-principal/15 rounded-2xl shadow-lg p-8 border-2 border-verde-claro/30">
                  <h2 className="text-xl font-bold text-verde-principal mb-6 flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    Principais Benefícios
                  </h2>
                  <ul className="space-y-4">
                    {detalheAtual.beneficios.map((beneficio, indice) => (
                      <li
                        key={indice}
                        className="flex items-start gap-3 text-gray-800 dark:text-cinza-texto-escuro"
                      >
                        <span className="mt-1 text-verde-principal text-xl flex-shrink-0">✓</span>
                        <span className="font-medium leading-relaxed">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-verde-principal/20">
                    <Botao
                      rota="/contato"
                      variante="sombra"
                      tamanho="normal"
                      classNameExtra="w-full justify-center"
                    >
                      Quero testar →
                    </Botao>
                  </div>
                </div>
              </CartaoRevelavel>
            </div>
          </>
        ) : (
          <PaginaNaoEncontrada />
        )}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/solucao" element={<SolucaoProjeto />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/funcionalidade/:id" element={<PaginaDetalheFuncionalidade />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </Layout>
  )
}
