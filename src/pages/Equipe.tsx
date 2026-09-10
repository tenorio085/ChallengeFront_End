import SecaoCabecalho from '../components/SecaoCabecalho'
import { integrantes } from '../data'
import CartaoRevelavel from '../components/CartaoRevelavel'

export default function Equipe() {
  return (
    <div>
      <SecaoCabecalho
        icone="👥"
        titulo="Nossa Equipe"
        subtitulo="Conheça os integrantes que fazem o TreenUp acontecer"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {integrantes.map((inte, i) => (
              <CartaoRevelavel
                key={inte.id}
                direcao="baixo"
                atrasoMs={i * 150}
              >
                <div className="h-full bg-white dark:bg-slate-800 p-10 rounded-3xl text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700 group cartao-3d">
                  <div className="relative inline-block mb-6">
                    <div className="w-28 h-28 rounded-[2rem] bg-gradient-to-br from-verde-claro to-verde-principal flex items-center justify-center text-6xl shadow-xl shadow-verde-principal/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                      👤
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-amarelo-sol text-verde-principal font-black text-sm flex items-center justify-center shadow-md">
                      #{i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1.5 tracking-tight">{inte.nome}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-5 font-medium">
                    RM: {inte.rm}
                  </p>
                  <div className="flex justify-center gap-3 flex-wrap pt-3 border-t border-gray-100 dark:border-slate-700">
                    <a
                      href={inte.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-gray-700 transition-all duration-300 hover:-translate-y-0.5 no-underline shadow-md"
                    >
                      <span>📦</span> GitHub
                    </a>
                    <a
                      href={inte.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 no-underline shadow-md"
                    >
                      <span>💼</span> LinkedIn
                    </a>
                  </div>
                </div>
              </CartaoRevelavel>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
