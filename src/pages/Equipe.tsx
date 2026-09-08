import SecaoCabecalho from '../components/SecaoCabecalho'
import { integrantes } from '../data'

export default function Equipe() {
  return (
    <div>
      <SecaoCabecalho
        titulo="Nossa Equipe"
        subtitulo="Conheça os integrantes que fazem o TreenUp acontecer"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {integrantes.map((integrante) => (
              <div
                key={integrante.id}
                className="bg-white p-10 rounded-2xl text-center shadow-lg hover:-translate-y-2.5 transition-transform duration-300"
              >
                <div className="mb-5 text-7xl">👤</div>
                <h3 className="text-xl mb-1.5 font-semibold">{integrante.nome}</h3>
                <p className="text-gray-500 mb-5">RM: {integrante.rm}</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href={integrante.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-verde-principal no-underline font-medium hover:text-teal-600 transition-colors duration-300"
                  >
                    <span>📦</span> GitHub
                  </a>
                  <a
                    href={integrante.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-verde-principal no-underline font-medium hover:text-teal-600 transition-colors duration-300"
                  >
                    <span>💼</span> LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
