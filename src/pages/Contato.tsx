import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import SecaoCabecalho from '../components/SecaoCabecalho'
import CartaoRevelavel from '../components/CartaoRevelavel'
import { opcoesAssunto } from '../data'
import type { DadosFormularioContato } from '../types'

const esquemaFormulario = z.object({
  nome: z
    .string({ required_error: 'Nome é obrigatório' })
    .trim()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .nonempty('Nome é obrigatório'),
  email: z
    .string({ required_error: 'E-mail é obrigatório' })
    .trim()
    .email('Por favor, informe um e-mail válido')
    .nonempty('E-mail é obrigatório'),
  assunto: z
    .string({ required_error: 'Selecione um assunto' })
    .nonempty('Selecione um assunto'),
  mensagem: z
    .string({ required_error: 'Mensagem é obrigatória' })
    .trim()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .nonempty('Mensagem é obrigatória'),
})

type DadosForm = z.infer<typeof esquemaFormulario>
const CHAVE_ARMAZENAMENTO = 'treenup_form_contato'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<DadosForm>({
    resolver: zodResolver(esquemaFormulario),
    mode: 'onChange',
    defaultValues: {
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    },
  })

  const valoresAssistidos = watch()

  useEffect(() => {
    try {
      const salva = localStorage.getItem(CHAVE_ARMAZENAMENTO)
      if (salva) {
        const dados: DadosFormularioContato = JSON.parse(salva)
        reset(dados)
      }
    } catch (e) {
      console.log('Dados salvos ainda não existem')
    }
  }, [reset])

  useEffect(() => {
    const temAlgumValor = Object.values(valoresAssistidos).some((v) => v && v.length > 0)
    if (temAlgumValor && isValid && !enviado) {
      localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(valoresAssistidos))
    }
  }, [valoresAssistidos, isValid, enviado])

  function aoSubmeter(_: DadosForm) {
    setEnviando(true)
    setTimeout(() => {
      setEnviando(false)
      setEnviado(true)
      localStorage.removeItem(CHAVE_ARMAZENAMENTO)
    }, 1600)
  }

  function exibirErro(campo: keyof DadosForm) {
    const erro = errors[campo]
    if (!erro) return null
    return (
      <span className="text-red-500 text-sm min-h-5 block mt-1.5 flex items-center gap-1 animate-fade-in-baixo">
        <span>⚠️</span>
        {erro.message}
      </span>
    )
  }

  return (
    <div>
      <SecaoCabecalho
        icone="💌"
        titulo="Entre em Contato"
        subtitulo="Tem dúvidas ou quer saber mais sobre o TreenUp? Fale conosco!"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr]">
            <CartaoRevelavel direcao="esquerda">
              <div>
                <h2 className="text-2xl md:text-3xl mb-8 text-verde-principal font-extrabold">
                  Informações de Contato
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      ico: '📧',
                      titulo: 'E-mail',
                      desc: 'contato@treenup.com.br',
                      extra: 'Resposta em até 24h úteis',
                    },
                    {
                      ico: '📍',
                      titulo: 'Endereço',
                      desc: 'São Paulo, SP - Brasil',
                      extra: 'Atendemos todo o país',
                    },
                    {
                      ico: '⏱️',
                      titulo: 'Horário',
                      desc: 'Seg a Sex: 9h às 18h',
                      extra: 'Equipe de suporte online',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-5 bg-gray-50 dark:bg-slate-800 p-5 rounded-2xl border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all"
                    >
                      <span className="text-3xl flex-shrink-0">{item.ico}</span>
                      <div>
                        <h3 className="text-lg mb-1 font-bold">{item.titulo}</h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{item.desc}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {item.extra}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-br from-verde-claro to-verde-principal text-white p-6 rounded-2xl shadow-lg">
                  <p className="text-2xl font-black mb-2">💚 +125 empresas</p>
                  <p className="opacity-95">já transformaram sua cultura ESG com a TreenUp.</p>
                </div>
              </div>
            </CartaoRevelavel>

            <CartaoRevelavel direcao="direita" atrasoMs={200}>
              <div>
                <h2 className="text-2xl md:text-3xl mb-8 text-verde-principal font-extrabold">
                  Envie uma Mensagem
                </h2>

                {enviado ? (
                  <div className="animate-fade-in-baixo">
                    <div className="bg-verde-suave/30 text-verde-principal p-8 md:p-10 rounded-2xl text-center shadow-md border-2 border-verde-principal/30">
                      <span className="text-6xl block mb-4 inline-block animate-pulso-suave">
                        ✅
                      </span>
                      <p className="font-bold text-xl md:text-2xl mb-2">
                        Mensagem enviada com sucesso!
                      </p>
                      <p className="opacity-90">
                        Entraremos em contato em breve no seu e-mail. Obrigado! 💚
                      </p>
                      <button
                        onClick={() => {
                          setEnviado(false)
                          reset()
                        }}
                        className="mt-6 px-6 py-3 bg-verde-principal text-white rounded-xl font-bold hover:bg-verde-claro transition-all cursor-pointer border-none"
                      >
                        Enviar outra mensagem
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(aoSubmeter)}
                    className="flex flex-col gap-5"
                    noValidate
                  >
                    <div>
                      <label htmlFor="nome" className="block mb-2 font-bold text-gray-900 dark:text-gray-100">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        placeholder="Ex: Maria Silva"
                        {...register('nome')}
                        onChange={(e) => {
                          register('nome').onChange(e)
                          if (e.target.value.trim()) clearErrors('nome')
                        }}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl text-base font-['Poppins'] transition-all duration-300 focus:outline-none focus:shadow-md dark:bg-slate-800 dark:text-gray-100 ${
                          errors.nome
                            ? 'border-red-500 focus:border-red-500 bg-red-50 dark:bg-red-950/20'
                            : 'border-gray-200 dark:border-slate-700 focus:border-verde-principal'
                        }`}
                      />
                      {exibirErro('nome')}
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 font-bold text-gray-900 dark:text-gray-100">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="voce@email.com"
                        {...register('email')}
                        onChange={(e) => {
                          register('email').onChange(e)
                          if (e.target.value.includes('@')) clearErrors('email')
                        }}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl text-base font-['Poppins'] transition-all duration-300 focus:outline-none focus:shadow-md dark:bg-slate-800 dark:text-gray-100 ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500 bg-red-50 dark:bg-red-950/20'
                            : 'border-gray-200 dark:border-slate-700 focus:border-verde-principal'
                        }`}
                      />
                      {exibirErro('email')}
                    </div>

                    <div>
                      <label htmlFor="assunto" className="block mb-2 font-bold text-gray-900 dark:text-gray-100">
                        Assunto *
                      </label>
                      <select
                        id="assunto"
                        {...register('assunto')}
                        onChange={(e) => {
                          register('assunto').onChange(e)
                          if (e.target.value) clearErrors('assunto')
                        }}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl text-base font-['Poppins'] transition-all duration-300 focus:outline-none focus:shadow-md dark:bg-slate-800 dark:text-gray-100 ${
                          errors.assunto
                            ? 'border-red-500 focus:border-red-500 bg-red-50 dark:bg-red-950/20'
                            : 'border-gray-200 dark:border-slate-700 focus:border-verde-principal'
                        }`}
                      >
                        <option value="">Selecione um assunto</option>
                        {opcoesAssunto.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      {exibirErro('assunto')}
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block mb-2 font-bold text-gray-900 dark:text-gray-100">
                        Mensagem *
                      </label>
                      <textarea
                        id="mensagem"
                        rows={5}
                        placeholder="Conte-nos mais sobre sua dúvida ou interesse..."
                        {...register('mensagem')}
                        onChange={(e) => {
                          register('mensagem').onChange(e)
                          if (e.target.value.trim().length >= 5) clearErrors('mensagem')
                        }}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl text-base font-['Poppins'] transition-all duration-300 focus:outline-none focus:shadow-md resize-y min-h-[140px] dark:bg-slate-800 dark:text-gray-100 ${
                          errors.mensagem
                            ? 'border-red-500 focus:border-red-500 bg-red-50 dark:bg-red-950/20'
                            : 'border-gray-200 dark:border-slate-700 focus:border-verde-principal'
                        }`}
                      />
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1.5 px-1">
                        <span>Mínimo 10 caracteres</span>
                        <span>{valoresAssistidos.mensagem?.length || 0} caracteres</span>
                      </div>
                      {exibirErro('mensagem')}
                    </div>

                    <button
                      type="submit"
                      disabled={enviando}
                      className="group inline-flex items-center justify-center gap-3 mt-3 rounded-2xl font-bold transition-all duration-300 ease-out cursor-pointer border-none bg-verde-principal text-white hover:bg-verde-claro shadow-lg shadow-verde-principal/30 hover:shadow-xl hover:shadow-verde-principal/40 hover:-translate-y-1 px-10 py-4 text-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {enviando ? (
                        <>
                          <span className="inline-block w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-girar" />
                          Enviando sua mensagem...
                        </>
                      ) : (
                        <>
                          <span className="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                            🚀
                          </span>
                          Enviar Mensagem
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </CartaoRevelavel>
          </div>
        </div>
      </section>
    </div>
  )
}

export type { DadosFormularioContato }
