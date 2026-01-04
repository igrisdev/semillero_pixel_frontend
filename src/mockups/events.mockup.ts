import ImageVEncuentroInternacionalDeSemillerosDeInvestigacionPrexia2024_1 from '@assets/images/events/v-encuentro-internacional-de-semilleros-de-investigación-prexia-2024/1.jpg'
import Image17CongresoColombianoDeComputación_1 from '@assets/images/events/17-congreso-colombiano-de-computacion/1.jpg'
import type { IEvent } from '@modules/events/domain/event.domain'

export const EVENTS: IEvent[] = [
  {
    events: [
      {
        images_event: [
          ImageVEncuentroInternacionalDeSemillerosDeInvestigacionPrexia2024_1.src,
        ],
        date_init_event: '2024-10-24',
        date_end_event: '2024-10-25',
        title_event:
          'V Encuentro internacional de semilleros de investigación Prexia 2024',
        slug_event:
          'v-encuentro-internacional-de-semilleros-de-investigación-prexia-2024',
      },
    ],
    publication:
      'Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística',
  },
  {
    events: [
      {
        images_event: [Image17CongresoColombianoDeComputación_1.src],
        date_init_event: '2023-08-10',
        date_end_event: '2023-08-11',
        title_event: '17 Congreso Colombiano de Computación',
        slug_event: '17-congreso-colombiano-de-computación',
      },
    ],
    publication:
      'Sistema de reporte de fallas en las salas de cómputo de una Institución de Educación Superior',
  },
]
