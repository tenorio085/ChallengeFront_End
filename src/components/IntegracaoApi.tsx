import { FormEvent, useCallback, useEffect, useState } from 'react'
import { API_URL, AcaoSustentavel, api, Usuario } from '../services/api'

const campo = 'w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-gray-800 dark:text-gray-100 outline-none focus:ring-2 focus:ring-verde-principal'
const botao = 'rounded-xl px-4 py-2.5 font-semibold transition disabled:cursor-not-allowed disabled:opacity-50'

export default function IntegracaoApi() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [acoes, setAcoes] = useState<AcaoSustentavel[]>([])
  const [carregando, setCarregando] = useState(true)
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [acaoSelecionada, setAcaoSelecionada] = useState<AcaoSustentavel | null>(null)
  const [usuarioId, setUsuarioId] = useState('')
  const [descricao, setDescricao] = useState('')
  const [quantidade, setQuantidade] = useState('1')
  const [unidade, setUnidade] = useState('kg')
  const [data, setData] = useState(new Date().toISOString().slice(0, 10))
  const [categoria, setCategoria] = useState<'RECICLAGEM' | 'ENERGIA'>('RECICLAGEM')

  const carregarDados = useCallback(async () => {
    setCarregando(true)
    setErro('')
    try {
      const [listaUsuarios, listaAcoes] = await Promise.all([api.listarUsuarios(), api.listarAcoes()])
      setUsuarios(listaUsuarios)
      setAcoes(listaAcoes)
      setUsuarioId((atual) => atual || (listaUsuarios[0] ? String(listaUsuarios[0].id) : ''))
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Não foi possível carregar os dados da API.')
    } finally {
      setCarregando(false)
    }
  }, [])

  useEffect(() => { void carregarDados() }, [carregarDados])

  async function verDetalhes(id: number) {
    setErro('')
    setMensagem('')
    try {
      const detalhe = await api.buscarAcao(id)
      setAcaoSelecionada(detalhe)
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Não foi possível carregar os detalhes.')
    }
  }

  async function cadastrarAcao(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    setErro('')
    setMensagem('')
    if (!usuarioId) {
      setErro('Cadastre um usuário pela API antes de registrar uma ação.')
      return
    }
    setEnviando(true)
    try {
      const criada = await api.criarAcao(Number(usuarioId), {
        descricao: descricao.trim(),
        quantidade: Number(quantidade),
        unidade,
        data,
        categoria,
      })
      setMensagem(`Ação cadastrada com sucesso${criada?.id ? ` (ID ${criada.id})` : ''}!`)
      setDescricao('')
      await carregarDados()
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Não foi possível cadastrar a ação.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-cinza-fundo-escuro transition-colors">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-verde-principal/10 px-4 py-2 text-sm font-bold text-verde-principal">🔗 Integração REST em tempo real</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-cinza-escuro dark:text-branco">Painel TreenUp conectado à API</h2>
          <p className="mt-3 text-gray-600 dark:text-cinza-claro">Os dados abaixo vêm do back-end Java publicado no Render. Cadastre uma ação para testar a integração.</p>
          <p className="mt-2 break-all text-xs text-gray-500">API: {API_URL}</p>
        </div>

        <div className="mb-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-cinza-cartao-escuro p-6 shadow-md"><p className="text-sm text-gray-500 dark:text-cinza-claro">Usuários recebidos da API</p><p className="mt-2 text-3xl font-black text-verde-principal">{carregando ? '…' : usuarios.length}</p></div>
          <div className="rounded-2xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-cinza-cartao-escuro p-6 shadow-md"><p className="text-sm text-gray-500 dark:text-cinza-claro">Ações cadastradas</p><p className="mt-2 text-3xl font-black text-verde-principal">{carregando ? '…' : acoes.length}</p></div>
          <div className="rounded-2xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-cinza-cartao-escuro p-6 shadow-md"><p className="text-sm text-gray-500 dark:text-cinza-claro">Status da conexão</p><p className="mt-2 text-xl font-bold">{carregando ? 'Conectando…' : erro ? 'Verificar conexão' : 'API respondendo'}</p></div>
        </div>

        {erro && <div role="alert" className="mb-6 rounded-xl border border-red-300 bg-red-50 p-4 text-red-800">Não foi possível concluir a operação: {erro}<p className="mt-1 text-sm">Se estiver executando localmente, confira se a API do Render está disponível e se o CORS permite a origem do front-end.</p></div>}
        {mensagem && <div role="status" className="mb-6 rounded-xl border border-green-300 bg-green-50 p-4 text-green-800">{mensagem}</div>}

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-cinza-cartao-escuro p-5 md:p-7 shadow-lg">
            <div className="mb-5 flex items-center justify-between gap-3"><h3 className="text-xl font-bold text-cinza-escuro dark:text-branco">Ações sustentáveis</h3><button type="button" className={`${botao} bg-verde-principal text-white hover:bg-verde-escuro`} onClick={() => void carregarDados()} disabled={carregando}>Atualizar</button></div>
            {carregando ? <p className="py-8 text-center text-gray-500">Carregando dados da API…</p> : acoes.length === 0 ? <p className="rounded-xl bg-gray-50 dark:bg-slate-800 p-5 text-gray-600 dark:text-gray-300">Nenhuma ação encontrada. Use o formulário para cadastrar a primeira.</p> : <div className="space-y-3">{acoes.map((acao) => <button key={acao.id} type="button" onClick={() => void verDetalhes(acao.id)} className="w-full rounded-xl border border-gray-200 dark:border-slate-600 p-4 text-left transition hover:border-verde-principal hover:bg-verde-principal/5"><div className="flex flex-wrap items-center justify-between gap-2"><strong className="text-cinza-escuro dark:text-branco">{acao.descricao}</strong><span className="rounded-full bg-verde-principal/10 px-3 py-1 text-xs font-bold text-verde-principal">{acao.categoria}</span></div><p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{acao.quantidade} {acao.unidade} · {acao.data}</p><p className="mt-2 text-sm font-semibold text-verde-principal">{acao.pontos} pontos · {acao.xpGerado} XP · {acao.tokensGerados} tokens</p><span className="mt-2 inline-block text-xs text-gray-500">Clique para ver detalhes · ID {acao.id}</span></button>)}</div>}
            {acaoSelecionada && <div className="mt-5 rounded-xl border-2 border-verde-principal/40 bg-verde-principal/5 p-4"><div className="flex items-center justify-between gap-3"><h4 className="font-bold text-cinza-escuro dark:text-branco">Detalhes da ação #{acaoSelecionada.id}</h4><button type="button" className="text-sm font-semibold text-verde-principal" onClick={() => setAcaoSelecionada(null)}>Fechar</button></div><p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{acaoSelecionada.descricao} — {acaoSelecionada.quantidade} {acaoSelecionada.unidade} em {acaoSelecionada.data}.</p><p className="mt-1 text-sm text-gray-700 dark:text-gray-200">Categoria: {acaoSelecionada.categoria}. Recompensas: {acaoSelecionada.pontos} pontos, {acaoSelecionada.xpGerado} XP e {acaoSelecionada.tokensGerados} tokens.</p><p className="mt-1 text-sm text-gray-700 dark:text-gray-200">Usuário: {acaoSelecionada.usuario?.nome || 'Informação não retornada pela API'}</p></div>}
          </div>

          <div className="rounded-2xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-cinza-cartao-escuro p-5 md:p-7 shadow-lg">
            <h3 className="mb-2 text-xl font-bold text-cinza-escuro dark:text-branco">Registrar ação sustentável</h3><p className="mb-5 text-sm text-gray-600 dark:text-cinza-claro">Este formulário envia um POST para a API Java.</p>
            <form onSubmit={cadastrarAcao} className="space-y-4">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Usuário<select className={`${campo} mt-1`} value={usuarioId} onChange={(e) => setUsuarioId(e.target.value)} required><option value="">Selecione um usuário</option>{usuarios.map((usuario) => <option key={usuario.id} value={usuario.id}>{usuario.nome} (ID {usuario.id})</option>)}</select></label>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Descrição<input className={`${campo} mt-1`} value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Ex.: Reciclagem de papel" required maxLength={150} /></label>
              <div className="grid grid-cols-2 gap-3"><label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Quantidade<input className={`${campo} mt-1`} type="number" min="0.01" step="0.01" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} required /></label><label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Unidade<input className={`${campo} mt-1`} value={unidade} onChange={(e) => setUnidade(e.target.value)} required maxLength={20} /></label></div>
              <div className="grid grid-cols-2 gap-3"><label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Data<input className={`${campo} mt-1`} type="date" value={data} onChange={(e) => setData(e.target.value)} required /></label><label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Categoria<select className={`${campo} mt-1`} value={categoria} onChange={(e) => setCategoria(e.target.value as 'RECICLAGEM' | 'ENERGIA')}><option value="RECICLAGEM">Reciclagem</option><option value="ENERGIA">Energia</option></select></label></div>
              <button type="submit" disabled={enviando || carregando || usuarios.length === 0} className={`${botao} w-full bg-verde-principal py-3 text-white hover:bg-verde-escuro`}>{enviando ? 'Enviando para a API…' : 'Cadastrar ação'}</button>
              {usuarios.length === 0 && !carregando && <p className="text-sm text-amber-700">É necessário existir pelo menos um usuário para cadastrar uma ação.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
