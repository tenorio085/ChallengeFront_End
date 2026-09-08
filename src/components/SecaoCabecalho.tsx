interface SecaoCabecalhoProps {
  titulo: string
  subtitulo?: string
}

export default function SecaoCabecalho({ titulo, subtitulo }: SecaoCabecalhoProps) {
  return (
    <section className="bg-gradient-to-br from-verde-claro to-verde-principal text-white py-16 text-center px-5">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl mb-2.5 font-bold md:text-5xl">{titulo}</h1>
        {subtitulo && <p className="text-xl opacity-95 font-light">{subtitulo}</p>}
      </div>
    </section>
  )
}
