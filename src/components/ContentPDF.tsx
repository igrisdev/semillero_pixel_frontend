interface Props {
  PDF: any
}

export const ContentPDF = ({ PDF }: Props) => {
  return (
    <div className="relative h-[80vh] w-full">
      <object data={PDF} type="application/pdf" className="h-full w-full">
        <p>
          Tu navegador no soporta la visualización directa de PDF. Puedes
          descargar el PDF{' '}
          <a href={PDF} download className="text-green-200 underline">
            aquí
          </a>
          .
        </p>
      </object>
    </div>
  )
}
