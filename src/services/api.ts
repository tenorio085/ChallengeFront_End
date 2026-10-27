export const API_URL = (import.meta.env.VITE_API_URL || 'https://sprint4-java-e7d9.onrender.com').replace(/\/$/, '')

export interface Usuario {
  id: number
  nome: string
  email: string
  cidade: string
  pontuacaoTotal: number
  xpTotal: number
  saldoTokens: number
  criadoEm?: string
  nivel?: string
}

export interface AcaoSustentavel {
  id: number
  descricao: string
  quantidade: number
  unidade: string
  data: string
  categoria: 'ENERGIA' | 'RECICLAGEM' | string
  pontos: number
  xpGerado: number
  tokensGerados: number
  usuario?: Usuario
}

async function requisicao<T>(caminho: string, opcoes?: RequestInit): Promise<T> {
  const resposta = await fetch(`${API_URL}${caminho}`, {
    ...opcoes,
    headers: {
      ...(opcoes?.body ? { 'Content-Type': 'application/json' } : {}),
      ...opcoes?.headers,
    },
  })

  if (!resposta.ok) {
    const detalhe = await resposta.text()
    throw new Error(detalhe || `Erro HTTP ${resposta.status}`)
  }

  if (resposta.status === 204) return undefined as T
  const texto = await resposta.text()
  return (texto ? JSON.parse(texto) : undefined) as T
}

export const api = {
  listarUsuarios: () => requisicao<Usuario[]>('/api/usuarios'),
  buscarUsuario: (id: number) => requisicao<Usuario>(`/api/usuarios/${id}`),
  listarAcoes: () => requisicao<AcaoSustentavel[]>('/api/acoes'),
  buscarAcao: (id: number) => requisicao<AcaoSustentavel>(`/api/acoes/${id}`),
  criarAcao: (usuarioId: number, dados: Pick<AcaoSustentavel, 'descricao' | 'quantidade' | 'unidade' | 'data' | 'categoria'>) =>
    requisicao<AcaoSustentavel>(`/api/acoes?usuarioId=${usuarioId}`, {
      method: 'POST',
      body: JSON.stringify(dados),
    }),
  enviarContato: (dados: { nome: string; email: string; assunto: string; mensagem: string }) =>
    requisicao<void>('/api/contatos', {
      method: 'POST',
      body: JSON.stringify(dados),
    }),
}
