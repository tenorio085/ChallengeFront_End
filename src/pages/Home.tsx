import Botao from '../components/Botao'
import { funcionalidades, passos } from '../data'
import imagem1 from '../assets/imagem1.jpg'
import imagem2 from '../assets/imagem2.jpg'
import imagem3 from '../assets/imagem3.jpg'

const galeriaImagens = [imagem1, imagem2, imagem3]

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-verde-claro to-verde-principal text-white py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-5 grid gap-16 items-center md:grid-cols-2 text-center md:text-left">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Transformando Sustentabilidade em uma Jornada Gamificada
            </h1>
            <p className="text-lg mb-8 opacity-95">
              Conecte ações ecológicas reais a recompensas tangíveis através do Eco-World,
              Eco-Quest RPG e Treen-Stops de Realidade Aumentada.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <Botao to="/sobre" variant="primario">
                Conheça a Solução
              </Botao>
              <Botao to="/contato" variant="secundario">
                Entre em Contato
              </Botao>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl py-16 px-10 text-center text-7xl">
              <div className="flex flex-col items-center gap-4">
                <span>🏡</span>
                <span>🌲🌳🌴</span>
                <span>☀️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-5">
          <h2 className="text-3xl md:text-4xl text-center mb-2.5 font-bold">
            Nossas Funcionalidades
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            Uma plataforma completa para engajamento sustentável
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {funcionalidades.map((funcionalidade) => (
              <div
                key={funcionalidade.id}
                className="bg-white p-10 rounded-2xl text-center shadow-lg hover:-translate-y-2.5 transition-transform duration-300"
              >
                <div className="text-5xl mb-5">{funcionalidade.icone}</div>
                <h3 className="text-xl mb-4 text-verde-principal font-semibold">
                  {funcionalidade.titulo}
                </h3>
                <p className="text-gray-700 leading-7">{funcionalidade.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-5">
          <h2 className="text-3xl md:text-4xl text-center mb-2.5 font-bold">
            Nossa Jornada em Imagens
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            Conheça um pouco mais sobre o TreenUp através de nossas imagens
          </p>
          <div className="grid gap-8 md:grid-cols-3 mt-10">
            {galeriaImagens.map((imagem, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2.5 transition-transform duration-300"
              >
                <img
                  src={imagem}
                  alt={`Imagem ${index + 1} do TreenUp`}
                  className="w-full h-64 object-cover block"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5">
          <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold">
            Como Funciona
          </h2>
          <div className="flex flex-col gap-10 max-w-4xl mx-auto">
            {passos.map((passo) => (
              <div
                key={passo.numero}
                className="flex gap-8 items-start flex-col md:flex-row text-center md:text-left"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-verde-claro to-verde-principal text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 mx-auto md:mx-0">
                  {passo.numero}
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-xl mb-2.5 font-semibold">{passo.titulo}</h3>
                  <p className="text-gray-700">{passo.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-verde-principal py-20 text-white">
        <div className="container mx-auto max-w-7xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">
            Pronto para começar sua jornada sustentável?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Junte-se à TreenUp e transforme o mundo, um hábito de cada vez.
          </p>
          <Botao to="/contato" variant="primario" tamanho="grande">
            Entre em Contato
          </Botao>
        </div>
      </section>
    </div>
  )
}
