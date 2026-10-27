import Botao from '../components/Botao'
import { funcionalidades, passos } from '../data'
import CartaoRevelavel from '../components/CartaoRevelavel'
import SecaoEstatisticas from '../components/SecaoEstatisticas'
import SecaoDepoimentos from '../components/SecaoDepoimentos'
import CartaoFuncionalidade from '../components/CartaoFuncionalidade'
import Badge from '../components/Badge'
import imagem1 from '../assets/imagem1.jpg'
import imagem2 from '../assets/imagem2.jpg'
import imagem3 from '../assets/imagem3.jpg'

const galeriaImagens = [imagem1, imagem2, imagem3]

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-verde-claro to-verde-principal text-white py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 30%, #fff 0 2px, transparent 2px), radial-gradient(circle at 75% 80%, #fff 0 2px, transparent 2px)',
            backgroundSize: '50px 50px, 70px 70px',
          }}
        />
        <div className="container mx-auto max-w-7xl px-5 grid gap-16 items-center md:grid-cols-2 text-center md:text-left relative z-10">
          <CartaoRevelavel direcao="esquerda">
            <Badge variante="branco" icone="🌱" classNameExtra="mb-6">
              Gamificação + ESG + Recompensas reais
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5 tracking-tight">
              Transformando{' '}
              <span className="bg-gradient-to-r from-amarelo-sol to-amber-300 bg-clip-text text-transparent">
                Sustentabilidade
              </span>{' '}
              em Jornada
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">
              Conecte ações ecológicas reais a recompensas tangíveis. Eco-World virtual,
              missões gamificadas, ranking semanal e Treen-Stops de Realidade Aumentada.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <Botao rota="/sobre" variante="primario" tamanho="grande" icone="💡">
                Conheça a Solução
              </Botao>
              <Botao rota="/contato" variante="secundario" tamanho="grande" icone="💬">
                Entre em Contato
              </Botao>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg mx-auto md:mx-0">
              {[
                { n: '+125', l: 'Empresas' },
                { n: '+50k', l: 'Usuários' },
                { n: '2M TT', l: 'Tokens' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3"
                >
                  <p className="text-2xl font-black">{s.n}</p>
                  <p className="text-xs opacity-90">{s.l}</p>
                </div>
              ))}
            </div>
          </CartaoRevelavel>

          <CartaoRevelavel direcao="direita" atrasoMs={200}>
            <div className="relative mx-auto max-w-sm">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 md:p-10 text-center border border-white/20 shadow-2xl cartao-3d">
                <div className="flex flex-col items-center gap-4">
                  <div className="text-8xl inline-block animate-balanco origin-bottom">🏡</div>
                  <div className="text-6xl">🌲🌳🌴</div>
                  <div className="text-5xl">☀️</div>
                  <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-white/20 rounded-full text-sm font-semibold border border-white/30">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-ping absolute -ml-24 opacity-75" />
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Eco-Vila Nível 24
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-amarelo-sol text-verde-principal rounded-full px-4 py-2 text-xs font-black rotate-6 shadow-xl">
                +120 XP!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-verde-principal rounded-2xl px-4 py-2 text-sm font-bold rotate-[-6deg] shadow-xl flex items-center gap-1.5">
                🪙 850 Tokens
              </div>
            </div>
          </CartaoRevelavel>
        </div>
      </section>

      <SecaoEstatisticas />

      <section className="py-20 bg-gray-50 dark:bg-slate-800/40 transition-colors">
        <div className="container mx-auto max-w-7xl px-5">
          <CartaoRevelavel direcao="cima">
            <div className="text-center mb-12 flex flex-col items-center gap-4">
              <Badge variante="claro" icone="⚡">
                {funcionalidades.length} funcionalidades principais
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Nossas Funcionalidades
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
                Uma plataforma completa para engajamento sustentável
              </p>
            </div>
          </CartaoRevelavel>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {funcionalidades.map((func, i) => (
              <CartaoRevelavel key={func.id} direcao="baixo" atrasoMs={i * 100}>
                <CartaoFuncionalidade funcionalidade={func} />
              </CartaoRevelavel>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-cinza-fundo-escuro transition-colors">
        <div className="container mx-auto max-w-7xl px-5">
          <CartaoRevelavel direcao="cima">
            <div className="text-center mb-12 flex flex-col items-center gap-4">
              <Badge variante="verde" icone="📸">
                Galeria exclusiva
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Nossa Jornada em Imagens
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Conheça um pouco mais sobre o TreenUp através de nossas imagens
              </p>
            </div>
          </CartaoRevelavel>
          <div className="grid gap-8 md:grid-cols-3 mt-10">
            {galeriaImagens.map((imagem, index) => (
              <CartaoRevelavel
                key={index}
                direcao={index === 0 ? 'esquerda' : index === 1 ? 'baixo' : 'direita'}
                atrasoMs={index * 150}
              >
                <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
                  <img
                    src={imagem}
                    alt={`Imagem ${index + 1} do TreenUp`}
                    className="w-full h-64 md:h-72 object-cover block transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-verde-principal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div className="text-white">
                      <p className="font-bold text-lg">Ação #{index + 1}</p>
                      <p className="text-sm opacity-90">Impacto real gerado</p>
                    </div>
                  </div>
                </div>
              </CartaoRevelavel>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-slate-800/40 transition-colors">
        <div className="container mx-auto max-w-7xl px-5">
          <CartaoRevelavel direcao="cima">
            <div className="text-center mb-12 flex flex-col items-center gap-4">
              <Badge variante="amarelo" icone="📍">
                {passos.length} passos simples
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Como Funciona
              </h2>
            </div>
          </CartaoRevelavel>
          <div className="flex flex-col gap-10 max-w-4xl mx-auto">
            {passos.map((passo, i) => (
              <CartaoRevelavel
                key={passo.numero}
                direcao={i % 2 === 0 ? 'esquerda' : 'direita'}
                atrasoMs={i * 100}
              >
                <div className="flex gap-8 items-start flex-col md:flex-row text-center md:text-left bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-slate-700">
                  <div className="w-16 h-16 bg-gradient-to-br from-verde-claro to-verde-principal text-white rounded-2xl flex items-center justify-center text-2xl font-black flex-shrink-0 mx-auto md:mx-0 shadow-lg shadow-verde-principal/20">
                    {passo.numero}
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl mb-2.5 font-bold text-gray-900 dark:text-white">
                      {passo.titulo}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-7">
                      {passo.descricao}
                    </p>
                  </div>
                </div>
              </CartaoRevelavel>
            ))}
          </div>
        </div>
      </section>

      <SecaoDepoimentos />

      <section className="relative overflow-hidden bg-verde-principal py-20 md:py-24 text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 50%, #fff 0 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto max-w-7xl px-5 text-center relative z-10">
          <CartaoRevelavel direcao="cima">
            <div className="text-7xl mb-4 inline-block animate-balanco origin-bottom">🌍</div>
            <h2 className="text-3xl md:text-5xl mb-4 font-black tracking-tight">
              Pronto para começar sua jornada sustentável?
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
              Junte-se à TreenUp e transforme o mundo, um hábito de cada vez.
            </p>
            <Botao rota="/contato" variante="sombra" tamanho="grande" icone="🚀">
              Fale com nossa equipe
            </Botao>
          </CartaoRevelavel>
        </div>
      </section>
    </div>
  )
}
