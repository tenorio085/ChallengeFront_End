import type {
  Integrante,
  Funcionalidade,
  Passo,
  Pilar,
  ItemFAQ,
  DadoEstatistica,
  Depoimento,
  OpcaoAssunto,
} from '../types'

import fotoJapa from '../assets/japa.jpeg'
import fotoPantera from '../assets/pantera.jpeg'
import fotoJota from '../assets/jota.jpeg'
import fotoTenorio from '../assets/tenorio.jpeg'

export const integrantes: Integrante[] = [
  {
    id: 1,
    nome: 'Thiago Motitsuki Tan',
    rm: '570760',
    github: 'https://github.com/ThiagoTan',
    linkedin: 'https://www.linkedin.com/in/thiago-tan',
    foto: fotoJapa,
    turma: '1TDSPI',
  },
  {
    id: 2,
    nome: 'Arthur Netto Barbosa',
    rm: '569982',
    github: 'https://github.com/arthurnetto08',
    linkedin: 'https://www.linkedin.com/in/arthur-barbosa-8654353bb',
    foto: fotoPantera,
    turma: '1TDSPI',
  },
  {
    id: 3,
    nome: 'Joao Pedro Rodrigues Siqueira',
    rm: '571316',
    github: 'https://github.com/JoaoSiqueira12',
    linkedin: 'https://www.linkedin.com/in/joão-siqueira-25a055410',
    foto: fotoJota,
    turma: '1TDSPI',
  },
  {
    id: 4,
    nome: 'Felipe Tenorio Diniz',
    rm: '568828',
    github: 'https://github.com/tenorio085',
    linkedin: '#',
    foto: fotoTenorio,
    turma: '1TDSPI',
  },
]

export const funcionalidades: Funcionalidade[] = [
  {
    id: 1,
    icone: '🌍',
    titulo: 'Eco-World & Eco-Vila',
    descricao:
      'Seu universo virtual sustentável evolui conforme você adota hábitos verdes no mundo real.',
  },
  {
    id: 2,
    icone: '🎮',
    titulo: 'Eco-Quest RPG',
    descricao:
      'Missões diárias e semanais transformam metas de sustentabilidade em uma jornada gamificada.',
  },
  {
    id: 3,
    icone: '🏆',
    titulo: 'Ranking Semanal',
    descricao:
      'Competição saudável com reset semanal, garantindo chances iguais para todos.',
  },
  {
    id: 4,
    icone: '📱',
    titulo: 'Treen-Stops AR',
    descricao:
      'Explore o mundo físico e colete Treen-Tokens em pontos estratégicos usando Realidade Aumentada.',
  },
]

export const passos: Passo[] = [
  {
    numero: 1,
    titulo: 'Adote Hábitos Sustentáveis',
    descricao:
      'Reduza o consumo de energia, recicle corretamente e adote práticas ecológicas no dia a dia.',
  },
  {
    numero: 2,
    titulo: 'Complete as Eco-Quests',
    descricao:
      'Realize missões de conhecimento e ação prática para ganhar XP e Treen-Tokens.',
  },
  {
    numero: 3,
    titulo: 'Evolua sua Eco-Vila',
    descricao:
      'Veja seu mundo virtual se transformar com árvores, painéis solares e uma atmosfera limpa.',
  },
  {
    numero: 4,
    titulo: 'Troque por Recompensas',
    descricao:
      'Use seus Treen-Tokens para vouchers de desconto e abatimento na conta de luz.',
  },
]

export const pilares: Pilar[] = [
  {
    numero: 1,
    titulo: 'Eco-World e Eco-Vila',
    descricao:
      'O hub central interativo do usuário dentro do aplicativo. Trata-se de um universo virtual onde cada colaborador possui e gerencia sua própria Eco-Vila. No início, a Eco-Vila reflete um cenário cinzento e poluído. À medida que o usuário adota práticas sustentáveis no mundo real, a Eco-Vila evolui visualmente, ganhando árvores, painéis solares e uma atmosfera limpa.',
  },
  {
    numero: 2,
    titulo: 'Eco-Quest RPG',
    descricao:
      'Para ditar o ritmo de engajamento diário, a TreenUp adota o modelo Eco-Quest RPG, transformando metas de sustentabilidade em missões clássicas de jogos de interpretação de papéis. Os usuários recebem missões diárias e semanais baseadas em hábitos reais e consumo consciente.',
  },
  {
    numero: 3,
    titulo: 'Sistema de Ranking Semanal',
    descricao:
      'Substituindo a antiga ideia de duelos diretos, a TreenUp implementa o Ranking Semanal como seu principal motor de competitividade saudável e retenção a longo prazo. Os pontos acumulados alimentam uma tabela de classificação corporativa dinâmica com ciclo rígido de 7 dias.',
  },
  {
    numero: 4,
    titulo: 'Realidade Aumentada (Treen-Stops)',
    descricao:
      'Para uma dinâmica mais realista, a plataforma espalha "Eco-Stops" virtuais pelo mapa do mundo real, posicionados estrategicamente em lixeiras de coleta seletiva, pontos de descarte tecnológico da empresa, parques e totens de parceiros comerciais. Os colaboradores devem se deslocar fisicamente até esses pontos e usar a câmera do smartphone para interagir com o ambiente em Realidade Aumentada.',
  },
]

export const itensFAQ: ItemFAQ[] = [
  {
    id: 1,
    pergunta: 'O que é o TreenUp?',
    resposta:
      'O TreenUp é uma plataforma digital corporativa que transforma sustentabilidade em uma jornada gamificada. Conectamos ações ecológicas reais a recompensas tangíveis através do Eco-World, Eco-Quest RPG e Treen-Stops de Realidade Aumentada.',
  },
  {
    id: 2,
    pergunta: 'Como funciona a Eco-Vila?',
    resposta:
      'A Eco-Vila é seu universo virtual sustentável. No início, ela reflete um cenário cinzento e poluído. À medida que você adota práticas sustentáveis no mundo real (validadas pela integração com a API de telemetria da SoulUp), sua Eco-Vila evolui visualmente, ganhando árvores, painéis solares, sistemas de coleta de água da chuva e uma atmosfera limpa.',
  },
  {
    id: 3,
    pergunta: 'O que são as Eco-Quests?',
    resposta:
      'As Eco-Quests são missões diárias e semanais baseadas em hábitos reais e consumo consciente. Há "Quests de Conhecimento" (completar trilhas educacionais de microlearning e responder a quizzes sobre eficiência energética) e "Quests de Ação Prática" (como registrar o descarte correto de materiais recicláveis em postos parceiros). Ao completar as Eco-Quests, você ganha Pontos de Experiência (XP) para subir o nível do seu perfil.',
  },
  {
    id: 4,
    pergunta: 'Como funciona o Ranking Semanal?',
    resposta:
      'Os pontos acumulados através da conclusão das Eco-Quests e da evolução da Eco-Vila alimentam uma tabela de classificação corporativa dinâmica. Esse ranking possui um ciclo rígido de 7 dias, sendo resetado de forma automática todo dia às 23:59. O reset semanal garante que novos usuários ou colaboradores que tiveram uma semana menos ativa tenham oportunidades idênticas de disputar o topo no ciclo seguinte. O líder do ranking da semana recebe premiações de destaque e bônus especiais.',
  },
  {
    id: 5,
    pergunta: 'O que são os Treen-Stops?',
    resposta:
      'Os Treen-Stops são pontos virtuais espalhados pelo mapa do mundo real, posicionados estrategicamente em lixeiras de coleta seletiva, pontos de descarte tecnológico da empresa, parques e totens de parceiros comerciais. Os colaboradores devem se deslocar fisicamente até esses pontos e usar a câmera do smartphone para interagir com o ambiente em Realidade Aumentada. Ao fazer o "check-in" e limpar digitalmente aquela coordenada, eles coletam diretamente os Treen-Tokens, nossa moeda única.',
  },
  {
    id: 6,
    pergunta: 'O que posso fazer com os Treen-Tokens?',
    resposta:
      'Os Treen-Tokens são permanentemente acumulados na carteira digital do usuário e servem como saldo financeiro para serem trocados por recompensas reais dentro do ecossistema Prospera/SoulUp, incluindo: vouchers de desconto em parceiros eco-friendly, benefícios corporativos e abatimento ou subsídio direto de faturas de energia elétrica.',
  },
  {
    id: 7,
    pergunta: 'Como minha empresa pode adotar o TreenUp?',
    resposta:
      'Para adotar o TreenUp na sua empresa, entre em contato conosco através da página de Contato. Nossa equipe irá apresentar uma proposta personalizada de acordo com o tamanho e necessidades da sua organização.',
  },
]

export const opcoesAssunto: OpcaoAssunto[] = [
  { value: 'duvida', label: 'Dúvida' },
  { value: 'parceria', label: 'Parceria' },
  { value: 'empresa', label: 'Solução para Empresa' },
  { value: 'outro', label: 'Outro' },
]

export const estatisticas: DadoEstatistica[] = [
  {
    id: 1,
    valor: 125,
    sufixo: '+',
    rotulo: 'Empresas Parceiras',
    icone: '🏢',
    cor: 'from-verde-claro to-verde-principal',
  },
  {
    id: 2,
    valor: 50000,
    sufixo: '+',
    rotulo: 'Colaboradores Engajados',
    icone: '👥',
    cor: 'from-teal-500 to-teal-destaque',
  },
  {
    id: 3,
    valor: 850,
    sufixo: 't',
    rotulo: 'CO₂ Reduzido',
    icone: '🌱',
    cor: 'from-amarelo-sol to-amber-600',
  },
  {
    id: 4,
    valor: 2,
    sufixo: 'M',
    rotulo: 'Treen-Tokens Gerados',
    icone: '🪙',
    cor: 'from-azul-ceu to-blue-700',
  },
]

export const depoimentos: Depoimento[] = [
  {
    id: 1,
    nome: 'Mariana Costa',
    cargo: 'Gestora de RH, TechCorp',
    texto:
      'O engajamento da equipe decolou! Antes tínhamos 15% de participação nas ações verdes, agora estamos em 82%. O ranking semanal motiva todo mundo.',
    avatar: '👩‍💼',
    nota: 5,
  },
  {
    id: 2,
    nome: 'Carlos Ribeiro',
    cargo: 'Analista de Sustentabilidade',
    texto:
      'Finalmente temos dados auditáveis de ESG. A integração com a SoulUp entrega relatórios reais de economia de KWh. Mudou completamente nosso relatório anual.',
    avatar: '👨‍💻',
    nota: 5,
  },
  {
    id: 3,
    nome: 'Juliana Martins',
    cargo: 'Colaboradora, Nível 42',
    texto:
      'Abati R$ 120 na minha conta de luz só no último mês usando Treen-Tokens! Eu reciclo, vou aos Treen-Stops no parque, e minha Eco-Vila está linda. Viciada!',
    avatar: '👩‍🎓',
    nota: 5,
  },
]
