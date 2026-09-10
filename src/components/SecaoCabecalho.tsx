import CartaoRevelavel from './CartaoRevelavel'

interface SecaoCabecalhoProps {
  titulo: string
  subtitulo?: string
  icone?: string
}

export default function SecaoCabecalho({ titulo, subtitulo, icone }: SecaoCabecalhoProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-verde-claro to-verde-principal text-white py-20 text-center px-5">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #fff 0 2px, transparent 2px), radial-gradient(circle at 80% 60%, #fff 0 2px, transparent 2px)',
          backgroundSize: '40px 40px, 60px 60px',
        }}
      />
      <div className="container mx-auto max-w-7xl relative z-10">
        <CartaoRevelavel direcao="baixo">
          {icone && (
            <div className="text-6xl mb-3 inline-block animate-balanco origin-bottom">{icone}</div>
          )}
          <h1 className="text-4xl md:text-5xl mb-2.5 font-extrabold drop-shadow-md tracking-tight">
            {titulo}
          </h1>
          {subtitulo && (
            <p className="text-xl opacity-95 font-light max-w-2xl mx-auto leading-relaxed">
              {subtitulo}
            </p>
          )}
        </CartaoRevelavel>
      </div>
      <div className="absolute -bottom-1 left-0 right-0 h-16 bg-white dark:bg-slate-900 [clip-path:polygon(0_60%,_100%_0,_100%_100%,_0_100%)]" />
    </section>
  )
}
