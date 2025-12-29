export interface TypePublication {
  title: string
  description: string
  color_type: string
  publications: string[]
}

export const TYPE_PUBLICATIONS: TypePublication[] = [
  {
    title: 'Articulo Largo',
    description:
      'Articulo largo de 10 páginas, con un estilo de escritura y diseño de alta calidad.',
    color_type: '#00FF00',
    publications: [
      'Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística',
      'Sistema de reporte de fallas en las salas de cómputo de una Institución de Educación Superior',
    ],
  },
  {
    title: 'Monografía',
    description:
      'Monografía de 10 páginas, con un estilo de escritura y diseño de alta calidad.',
    color_type: '#000FF7',
    publications: [],
  },
]
