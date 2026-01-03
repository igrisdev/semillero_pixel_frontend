import PDFArquitecturaDeLaInformacionAplicadaEnElDisenoDeUnRepositorioDeRecursosEducativosDeEstatistica from '@assets/pdf/publications/Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística.pdf'
import PDFSistemaDeReporteDeFallasEnLasSalasDeComputoDeUnaInstitucionDeEducacionSuperior from '@assets/pdf/publications/Sistema de reporte de fallas en las salas de cómputo de una Institución de Educación Superior.pdf'
import type { IPublication } from '@modules/publications/domain/publication.domain'

export const PUBLICATIONS: IPublication[] = [
  {
    title:
      'Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística',
    work_done_bies: [
      'Johan Manuel Alvarez Pinta',
      'Juan Diego Eraso Muñoz',
      'Marta Cecilia Camacho Ojeda',
      'Mateo Jesus Cadena Cabrera',
      'Miguel Angel Rodriguez',
    ],
    date_publication: '2024-10-24',
    description:
      'En la educación superior, el acceso y la organización eficiente de material educativo es crucial para un aprendizaje efectivo, especialmente en la estadística. Los recursos educativos disponibles en línea a menudo son variados y no siempre se ajustan a las necesidades específicas de los estudiantes, lo que dificulta su aprendizaje. Por ello se propone desarrollar un repositorio que agrupe estos recursos de manera coherente y optimice su accesibilidad y usabilidad. Se implementarán principios de arquitectura de la información y se priorizan las necesidades del usuario, esto incluye, una interfaz intuitiva y mecanismos de búsqueda eficientes. Este enfoque proporciona una herramienta adecuada para el aprendizaje de la estadística. La evaluación del sistema se realizará desde la experiencia de usuario, con la participación de estudiantes, docentes y expertos en usabilidad, verificando la relevancia y efectividad del repositorio.',
    slug: 'arquitectura-de-la-información-aplicada-en-el-diseño-de-un-repositorio-de-recursos educativos-de-estadística',
    pdf: PDFArquitecturaDeLaInformacionAplicadaEnElDisenoDeUnRepositorioDeRecursosEducativosDeEstatistica,
    type_publications: 'Articulo Largo',
    name_event: 'V Encuentro internacional 2022',
  },
  {
    title:
      'Sistema de reporte de fallas en las salas de cómputo de una Institución de Educación Superior',
    work_done_bies: [
      'Johan Manuel Alvarez Pinta',
      'Juan Diego Eraso Muñoz',
      'Marta Cecilia Camacho Ojeda',
      'Mateo Jesus Cadena Cabrera',
      'Miguel Angel Rodriguez',
      'Brayan Fabian Meza',
      'Juan Manuel Quijano Quijano',
    ],
    date_publication: '2023-08-10',
    description:
      'Las salas de computación son espacios esenciales en las instituciones de educación superior. Ya que se utilizan para clases, laboratorios y sesiones de práctica relacionadas con los diversos programas académicos. Para que los estudiantes puedan usar el equipo del laboratorio de computación sin ningún problema, debe estar en perfecto estado de funcionamiento. Sin embargo, el equipo puede experimentar fallas de funcionamiento como resultado de un uso excesivo o inadecuado. Por ello, es fundamental que estas fallas sean descubiertas y comunicadas con prontitud para que puedan ser resueltas por los responsables del mantenimiento de los equipos. Es en este punto donde se implementa SisReport una plataforma que permite a los estudiantes afectados por las falencias de los dispositivos, realizar un reporte directo al área de mantenimiento. El sistema será evaluado desde el punto de vista de la experiencia del usuario. En la evaluación de la primera versión participaron estudiantes, docentes y el equipo TIC de la Universidad Colegio Mayor del Cauca. Los hallazgos de la evaluación evidenció que el sistema propuesto es efectivo para detectar y comunicar errores en las salas de computación comparado con el manera manual actual.El sistema descrito en este artículo puede ser utilizado por otras instituciones de educación superior para facilitar que los estudiantes tengan acceso al equipo de cómputo en condiciones óptimas para sus estudios.',
    slug: 'sistema-de-reporte-de-fallas-en-las-salas-de-cómputo-de-una-institución-de-educación-superior',
    pdf: PDFSistemaDeReporteDeFallasEnLasSalasDeComputoDeUnaInstitucionDeEducacionSuperior,
    type_publications: 'Articulo Largo',
    name_event:
      'V Encuentro internacional de semilleros de investigación Prexia 2024',
    name_project: 'SisReport',
  },
]
