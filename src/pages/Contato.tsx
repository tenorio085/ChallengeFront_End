import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import SecaoCabecalho from '../components/SecaoCabecalho'
import { opcoesAssunto } from '../data'
import type { FormularioContato } from '../types'

const schemaContato = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').nonempty('Nome é obrigatório'),
  email: z.string().email('E-mail inválido').nonempty('E-mail é obrigatório'),
  assunto: z.string().nonempty('Selecione um assunto'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').nonempty('Mensagem é obrigatória'),
})

type FormularioDados = z.infer<typeof schemaContato>

export default function Contato() {
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormularioDados>({
    resolver: zodResolver(schemaContato),
    defaultValues: {
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    },
  })

  useEffect(() => {
    const dadosStr = localStorage.getItem('contato_dados')
    if (dadosStr) {
      try {
        const dados = JSON.parse(dadosStr)
        reset(dados)
      } catch (e) {
        console.error('Erro ao carregar dados:', e)
      }
    }
  }, [reset])

  function onSubmit(data: FormularioContato) {
    setEnviando(true)
    localStorage.setItem('contato_dados', JSON.stringify(data))

    setTimeout(() => {
      console.log('Dados do formulário:', data)
      setEnviando(false)
      setEnviado(true)
    }, 1500)
  }

  function exibirErro(campo: keyof FormularioDados) {
    const erro = errors[campo]
    if (!erro) return null
    return (
      <span className="text-red-500 text-sm min-h-5 block mt-1">
        {erro.message}
      </span>
    )
  }

  return (
    <div>
      <SecaoCabecalho
        titulo="Entre em Contato"
        subtitulo="Tem dúvidas ou quer saber mais sobre o TreenUp? Fale conosco!"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <h2 className="text-2xl md:text-3xl mb-8 text-verde-principal font-bold">
                Informações de Contato
              </h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <span className="text-3xl flex-shrink-0">📧</span>
                  <div>
                    <h3 className="text-lg mb-1 font-semibold">E-mail</h3>
                    <p className="text-gray-700">contato@treenup.com.br</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <span className="text-3xl flex-shrink-0">📍</span>
                  <div>
                    <h3 className="text-lg mb-1 font-semibold">Endereço</h3>
                    <p className="text-gray-700">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl mb-8 text-verde-principal font-bold">
                Envie uma Mensagem
              </h2>

              {enviado ? (
                <div className="bg-verde-suave/40 text-verde-principal p-5 rounded-xl text-center shadow-md">
                  <span className="text-3xl block mb-2.5">✅</span>
                  <p className="font-medium">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="nome"
                      className="block mb-2 font-medium text-gray-900"
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      {...register('nome')}
                      className={`w-full px-4 py-3 border-2 rounded-lg text-base font-['Poppins'] transition-colors duration-300 focus:outline-none focus:border-verde-principal ${
                        errors.nome ? 'border-red-500' : 'border-gray-100'
                      }`}
                    />
                    {exibirErro('nome')}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-medium text-gray-900"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className={`w-full px-4 py-3 border-2 rounded-lg text-base font-['Poppins'] transition-colors duration-300 focus:outline-none focus:border-verde-principal ${
                        errors.email ? 'border-red-500' : 'border-gray-100'
                      }`}
                    />
                    {exibirErro('email')}
                  </div>

                  <div>
                    <label
                      htmlFor="assunto"
                      className="block mb-2 font-medium text-gray-900"
                    >
                      Assunto *
                    </label>
                    <select
                      id="assunto"
                      {...register('assunto')}
                      className={`w-full px-4 py-3 border-2 rounded-lg text-base font-['Poppins'] transition-colors duration-300 focus:outline-none focus:border-verde-principal ${
                        errors.assunto ? 'border-red-500' : 'border-gray-100'
                      }`}
                    >
                      <option value="">Selecione um assunto</option>
                      {opcoesAssunto.map((opcao) => (
                        <option key={opcao.value} value={opcao.value}>
                          {opcao.label}
                        </option>
                      ))}
                    </select>
                    {exibirErro('assunto')}
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block mb-2 font-medium text-gray-900"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      rows={5}
                      {...register('mensagem')}
                      className={`w-full px-4 py-3 border-2 rounded-lg text-base font-['Poppins'] transition-colors duration-300 focus:outline-none focus:border-verde-principal resize-y ${
                        errors.mensagem ? 'border-red-500' : 'border-gray-100'
                      }`}
                    />
                    {exibirErro('mensagem')}
                  </div>

                  <button
                    type="submit"
                    disabled={enviando}
                    className="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer border-none bg-verde-principal text-white hover:bg-verde-claro hover:-translate-y-0.5 shadow-md px-10 py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-2"
                  >
                    {enviando ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export type { FormularioContato }
