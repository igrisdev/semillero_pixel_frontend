import ImageUniAprende from '@assets/projects/uniaprende.png'
import ImageSisReport from '@assets/projects/sisreport.jpg'

export interface Project {
  title_project: string
  image_project: string
  link_github: string
  description_project: string
  technology_project: TechnologyProject[]
  article_content_project: string
  person_name_article_publisher_project: string
  members: string[]
  date_deploy_project: string
  slug: string
  publication: string
}

export interface TechnologyProject {
  title_technology_project: string
  link_page_technology_project: string
}

export const PROJECTS: Project[] = [
  {
    title_project: 'UniAprende',
    image_project: ImageUniAprende.src,
    link_github: 'https://github.com/igrisdev/uniaprende.git',
    description_project:
      'En la educación superior, el acceso y la organización eficiente de material educativo es crucial para un aprendizaje efectivo, especialmente en la estadística. Los recursos educativos disponibles en línea a menudo son variados y no siempre se ajustan a las necesidades específicas de los estudiantes, lo que dificulta su aprendizaje. Por ello se propone desarrollar un repositorio que agrupe estos recursos de manera coherente y optimice su accesibilidad y usabilidad. Se implementarán principios de arquitectura de la información y se priorizan las necesidades del usuario, esto incluye, una interfaz intuitiva y mecanismos de búsqueda eficientes. Este enfoque proporciona una herramienta adecuada para el aprendizaje de la estadística. La evaluación del sistema se realizará desde la experiencia de usuario, con la participación de estudiantes, docentes y expertos en usabilidad, verificando la relevancia y efectividad del repositorio.',
    technology_project: [
      {
        title_technology_project: 'Astro',
        link_page_technology_project: 'https://astro.build/',
      },
      {
        title_technology_project: 'Starlight',
        link_page_technology_project: 'https://starlight.astro.build/',
      },
      {
        title_technology_project: 'TypeScript',
        link_page_technology_project: 'https://www.typescriptlang.org/',
      },
    ],
    article_content_project:
      'En la educación superior, el acceso y la organización eficiente de material educativo es crucial para un aprendizaje efectivo, especialmente en la estadística. Los recursos educativos disponibles en línea a menudo son variados y no siempre se ajustan a las necesidades específicas de los estudiantes, lo que dificulta su aprendizaje. Por ello se propone desarrollar un repositorio que agrupe estos recursos de manera coherente y optimice su accesibilidad y usabilidad. Se implementarán principios de arquitectura de la información y se priorizan las necesidades del usuario, esto incluye, una interfaz intuitiva y mecanismos de búsqueda eficientes. Este enfoque proporciona una herramienta adecuada para el aprendizaje de la estadística. La evaluación del sistema se realizará desde la experiencia de usuario, con la participación de estudiantes, docentes y expertos en usabilidad, verificando la relevancia y efectividad del repositorio.',
    person_name_article_publisher_project: 'Marta Cecilia Camacho Ojeda',
    members: [
      'Johan Manuel Alvarez Pinta',
      'Juan Diego Eraso Muñoz',
      'Maria Isabel Garcia Fajardo',
      'Marta Cecilia Camacho Ojeda',
      'Mateo Jesus Cadena Cabrera',
      'Miguel Angel Llanten Llanten',
    ],
    date_deploy_project: '2025-01-01',
    slug: 'uniaprende',
    publication:
      'Arquitectura de la información aplicada en el diseño de un repositorio de recursos educativos de estadística',
  },

  {
    title_project: 'SisReport',
    image_project: ImageSisReport.src, // falta
    link_github: 'https://github.com/igrisdev/sisreportnextjs.git',
    description_project:
      'El objetivo de este proyecto fue desarrollar un aplicativo web que permita notificar sobre equipos dañados en la Institución Universitaria Colegio Mayor del Cauca. Esta aplicación web permitirá a los estudiantes y docentes de la institución reportar cualquier equipo que esté dañado o necesite mantenimiento, con el fin de que el personal encargado pueda solucionar el problema de manera eficiente y rápida. La aplicación web tendrá un formulario en el que los usuarios podrán ingresar la información del equipo dañado, como su ubicación, descripción del problema y cualquier otra información relevante. Además, la aplicación web incluirá un panel de administración para el personal encargado de la reparación de equipos. Este panel permitirá a los administradores asignar solicitudes a los técnicos correspondientes, así como realizar un seguimiento del estado de las solicitudes y generar reportes sobre el mantenimiento de los equipos. En resumen, este proyecto tiene como objetivo desarrollar una aplicación web que simplifique y optimice el proceso de reporte y reparación de equipos dañados en la Institución Universitaria Colegio Mayor del Cauca, lo que permitirá una gestión más eficiente y rápida del mantenimiento de los equipos.',
    technology_project: [
      {
        title_technology_project: 'Next.js',
        link_page_technology_project: 'https://nextjs.org/',
      },
      {
        title_technology_project: 'MongoDB',
        link_page_technology_project: 'https://www.mongodb.com/',
      },
    ],
    article_content_project:
      'El objetivo de este proyecto fue desarrollar un aplicativo web que permita notificar sobre equipos dañados en la Institución Universitaria Colegio Mayor del Cauca. Esta aplicación web permitirá a los estudiantes y docentes de la institución reportar cualquier equipo que esté dañado o necesite mantenimiento, con el fin de que el personal encargado pueda solucionar el problema de manera eficiente y rápida. La aplicación web tendrá un formulario en el que los usuarios podrán ingresar la información del equipo dañado, como su ubicación, descripción del problema y cualquier otra información relevante. Además, la aplicación web incluirá un panel de administración para el personal encargado de la reparación de equipos. Este panel permitirá a los administradores asignar solicitudes a los técnicos correspondientes, así como realizar un seguimiento del estado de las solicitudes y generar reportes sobre el mantenimiento de los equipos. En resumen, este proyecto tiene como objetivo desarrollar una aplicación web que simplifique y optimice el proceso de reporte y reparación de equipos dañados en la Institución Universitaria Colegio Mayor del Cauca, lo que permitirá una gestión más eficiente y rápida del mantenimiento de los equipos.',
    person_name_article_publisher_project: 'Marta Cecilia Camacho Ojeda',
    members: ['Johan Manuel Alvarez Pinta', 'Juan Manuel Quijano Quijano'],
    date_deploy_project: '2024-01-01',
    slug: 'sisreport',
    publication:
      'Sistema de reporte de fallas en las salas de cómputo de una Institución de Educación Superior',
  },
]
