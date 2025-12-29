import type { Member } from 'src/types/data.types'

// Imagen de miembros
import ImageJohanManuelAlvarezPinta from '@assets/images/members/johan-manuel-alvarez-pinta.jpg'
import ImageJuanDiegoErasoMuñoz from '@assets/images/members/juan-diego-eraso-muñoz.png'
import ImageMartaCeciliaCamachoOjeda from '@assets/images/members/marta-cecilia-camacho-ojeda.jpg'

// Imagen de redes sociales
import ImageGithub from '@assets/images/socials/github.svg'
import ImageLinkedIn from '@assets/images/socials/linkedIn.svg'

export const MEMBERS: Member[] = [
  {
    image: ImageMartaCeciliaCamachoOjeda.src,
    name: 'Marta Cecilia Camacho Ojeda',
    orcid: 'https://orcid.org/0009-0008-0696-5942',
    rol: 'Docente Encargada',
    career: 'Magister en Ingeniería Informática',
    state: true,
    date_init: '2022-01-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/igrisdev',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'https://www.linkedin.com/in/johan-alvarez-pinta/',
      },
    ],
  },
  {
    image: ImageJohanManuelAlvarezPinta.src,
    name: 'Johan Manuel Alvarez Pinta',
    orcid: 'https://orcid.org/0009-0008-0696-5942',
    rol: 'Líder de Proyectos - Programador',
    career: 'Ingeniera Informática',
    state: true,
    date_init: '2022-01-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/igrisdev',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'https://www.linkedin.com/in/johan-alvarez-pinta/',
      },
    ],
  },
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Mateo Jesús Cadena Cabrera',
    orcid: 'https://orcid.org/0009-0000-2508-1394',
    rol: 'Investigador - Desarrollador',
    career: 'Ingeniera Informática',
    state: true,
    date_init: '2022-01-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/gitcadena',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'https://www.linkedin.com/in/mateo-jesus-cadena-cabrera-b389532b9/',
      },
    ],
  },
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Miguel Angel Llanten Llanten',
    orcid: 'https://orcid.org/0009-0009-9353-9681',
    rol: 'Analista - Desarrollador',
    career: 'Ingeniera Informática',
    state: true,
    date_init: '2022-01-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/filollan',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'http://www.linkedin.com/in/miguel-%C3%A1ngel-llant%C3%A9n-62005a245',
      },
    ],
  },
  {
    image: ImageJuanDiegoErasoMuñoz.src,
    name: 'Juan Diego Eraso Muñoz',
    orcid: 'https://orcid.org/0009-0007-6917-1034',
    rol: 'Investigador - Desarrollador',
    career: 'Ingeniera Informática',
    state: true,
    date_init: '2023-01-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/Boli27',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'https://www.linkedin.com/in/juan-eraso-485468287/',
      },
    ],
  },
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Angie Nicol Hurtado Minota',
    orcid: 'https://orcid.org/',
    rol: 'Analista - Desarrollador',
    career: 'Ingeniera Informática',
    state: true,
    date_init: '2024-01-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media: 'https://www.linkedin.com/',
      },
    ],
  },
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Gabriela Orozco Vasquez',
    orcid: 'https://orcid.org/=0009-0008-0357-0590',
    rol: 'Líder de Proyectos - Desarrollador',
    career: 'Tecnología de desarrollo de software',
    state: true,
    date_init: '2024-08-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/gabi-vasquez',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'https://www.linkedin.com/in/gabriela-orozco-vasquez-57622736b/',
      },
    ],
  },
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Santiago Torres Morocho',
    orcid: 'https://orcid.org/=0009-0008-1846-1063',
    rol: 'Desarrollador',
    career: 'Tecnología de desarrollo de software',
    state: true,
    date_init: '2024-08-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/Xhall1',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'https://www.linkedin.com/in/santiago-torres-morocho-665011326/',
      },
    ],
  },
  {
    image: 'https://images6.alphacoders.com/105/thumb-1920-1050408.jpg',
    name: 'Jesús David León Chito',
    orcid: 'https://orcid.org/0009-0008-1572-8295',
    rol: 'Desarrollador',
    career: 'Tecnología de desarrollo de software',
    state: true,
    date_init: '2024-08-01',
    date_end: '',
    social_media: [
      {
        logo_red_social: ImageGithub.src,
        name_social_media: 'GitHub',
        link_red_social_media: 'https://github.com/davidleonmayor/',
      },
      {
        logo_red_social: ImageLinkedIn.src,
        name_social_media: 'LinkedIn',
        link_red_social_media:
          'https://www.linkedin.com/in/jes%C3%BAs-david-le%C3%B3n-chito-19a30b250/',
      },
    ],
  },
]
