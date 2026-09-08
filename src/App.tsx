import { Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Equipe from './pages/Equipe'
import FAQ from './pages/FAQ'
import Contato from './pages/Contato'
import SolucaoProjeto from './pages/SolucaoProjeto'

function PaginaNaoEncontrada() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-6xl font-bold text-verde-principal mb-5">404</h1>
      <p className="text-xl text-gray-600 mb-8">Página não encontrada</p>
      <Link
        to="/"
        className="inline-block px-8 py-3 bg-verde-principal text-white rounded-lg font-semibold hover:bg-verde-claro transition-colors no-underline"
      >
        Voltar para Início
      </Link>
    </div>
  )
}

function PaginaDetalheFuncionalidade() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    setCarregando(true)
    const timer = setTimeout(() => setCarregando(false), 300)
    return () => clearTimeout(timer)
  }, [id])

  const funcionalidadesDetalhes: Record<string, { titulo: string; descricao: string }> = {
    '1': {
      titulo: 'Eco-World & Eco-Vila',
      descricao:
        'O Eco-World é o hub central interativo do usuário dentro do aplicativo. Trata-se de um universo virtual onde cada colaborador possui e gerencia sua própria Eco-Vila. No início da jornada, a Eco-Vila reflete um cenário cinzento e poluído. À medida que o usuário adota práticas sustentáveis no mundo real — validadas pela integração com a API de telemetria da SoulUp (como a redução real do consumo de KWh de energia) —, a Eco-Vila evolui visualmente, ganhando árvores, painéis solares, sistemas de coleta de água da chuva e uma atmosfera limpa. Essa mecânica transforma dados abstratos de economia de energia e pegada de carbono em uma representação visual clara, gerando um sentimento psicológico de propriedade e progresso sobre o próprio impacto ambiental.',
    },
    '2': {
      titulo: 'Eco-Quest RPG',
      descricao:
        'Para ditar o ritmo de engajamento diário, a TreenUp adota o modelo Eco-Quest RPG, transformando metas de sustentabilidade em missões clássicas de jogos de interpretação de papéis. Os usuários recebem missões diárias e semanais baseadas em hábitos reais e consumo consciente. Há "Quests de Conhecimento" (completar trilhas educacionais de microlearning e responder a quizzes sobre eficiência energética) e "Quests de Ação Prática" (como registrar o descarte correto de materiais recicláveis em postos parceiros). Ao completar as Eco-Quests, o usuário ganha Pontos de Experiência (XP) para subir o nível do seu perfil, desbloquear novos elementos decorativos e construções avançadas para sua Eco-Vila, além de coletar moedas de troca.',
    },
    '3': {
      titulo: 'Ranking Semanal',
      descricao:
        'Substituindo a antiga ideia de duelos diretos, a TreenUp implementa o Ranking Semanal como seu principal motor de competitividade saudável e retenção a longo prazo. Os pontos acumulados através da conclusão das Eco-Quests e da evolução da Eco-Vila alimentam uma tabela de classificação corporativa dinâmica. Esse ranking possui um ciclo rígido de 7 dias, sendo resetado de forma automática todo domingo às 23:59. O reset semanal garante que novos usuários ou colaboradores que tiveram uma semana menos ativa tenham oportunidades idênticas de disputar o topo no ciclo seguinte, eliminando a desmotivação comum de rankings permanentes dominados por usuários antigos. O líder do ranking da semana recebe premiações de destaque e bônus especiais.',
    },
    '4': {
      titulo: 'Treen-Stops AR',
      descricao:
        'Para uma dinâmica mais realista, a plataforma espalha "Eco-Stops" virtuais pelo mapa do mundo real, posicionados estrategicamente em lixeiras de coleta seletiva, pontos de descarte tecnológico da empresa, parques e totens de parceiros comerciais. Os colaboradores devem se deslocar fisicamente até esses pontos e usar a câmera do smartphone para interagir com o ambiente em Realidade Aumentada. Ao fazer o "check-in" e limpar digitalmente aquela coordenada, eles coletam diretamente os Treen-Tokens, nossa moeda única, que diferente dos pontos do ranking, são permanentemente acumulados na carteira digital do usuário e servem como saldo financeiro para recompensas reais.',
    },
  }

  const detalhe = funcionalidadesDetalhes[id || '1']

  if (carregando) {
    return (
      <div className="py-20 text-center">
        <p className="text-xl text-gray-500">Carregando...</p>
      </div>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-4xl px-5">
        <button
          onClick={() => navigate('/')}
          className="mb-8 px-5 py-2.5 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2 cursor-pointer border-none"
        >
          ← Voltar para Início
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-verde-principal mb-5">
          {detalhe?.titulo || 'Funcionalidade não encontrada'}
        </h1>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <p className="text-gray-700 leading-8 text-lg">
            {detalhe?.descricao}
          </p>
        </div>
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
