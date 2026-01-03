import type { IPublication } from '../domain/publication.domain'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { ContentPDF } from '@components/ContentPDF'
import { useState } from 'react'

interface Props {
  initialPublications: IPublication[]
}

export const RecentPublications = ({ initialPublications }: Props) => {
  const [currentPublication, setCurrentPublication] = useState<number>(0)

  function handleSwitchPublication(position: number) {
    setCurrentPublication((prev) => position)
  }

  const publications = initialPublications

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animación del título principal
    gsap.from('.publication-section-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    })

    // Animación de la lista
    gsap.from('.publication-title', {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.publication-list',
        start: 'top 90%',
        end: 'bottom bottom',
        toggleActions: 'play none none reset',
      },
    })
  }, [])

  return (
    <section className="mx-auto mt-30 max-w-7xl px-4">
      <div className="publication-section-title flex items-center gap-2">
        <div className="h-2 flex-1 border-y-2 border-dashed border-orange-600"></div>

        <h2 className="font-micro5 text-8xl text-orange-600 uppercase">
          Ultimas Publicaciones
        </h2>
      </div>

      <div className="mt-20 grid grid-cols-3 border">
        <section className="col-span-1 border-r">
          <ul className="publication-list">
            {publications.map((publication, index) => (
              <li
                key={publication.slug}
                className={`border-b p-2 ${index === currentPublication && 'bg-orange-200'}`}
              >
                <button
                  onMouseEnter={() => handleSwitchPublication(index)}
                  className="publication-title text-left hover:underline"
                >
                  {publication.title}
                </button>
              </li>
            ))}

            <li className="border-b py-4 text-center">
              <a href="/" className="publication-title font-semibold">
                Más Publicaciones
              </a>
            </li>
          </ul>
        </section>

        <section className="col-span-2 h-screen overflow-hidden">
          <div className="grid h-[20vh] grid-cols-3 gap-4 overflow-y-auto p-2 text-sm">
            <div>
              <h4 className="font-bold uppercase">Equipo</h4>
              <ul>
                {publications[currentPublication].work_done_bies.map(
                  (work_done_bie, index) => (
                    <li key={work_done_bie}>
                      <span>{work_done_bie}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {publications[currentPublication].name_event && (
              <div>
                <h4 className="font-bold uppercase">Evento</h4>

                <p>{publications[currentPublication].name_event}</p>
              </div>
            )}

            {publications[currentPublication].name_project && (
              <div>
                <h4 className="mb-2 font-bold uppercase">Proyecto</h4>
                {publications[currentPublication].name_project}
              </div>
            )}

            {publications[currentPublication].type_publications && (
              <div>
                <h4 className="font-bold uppercase">Tipo</h4>
                {publications[currentPublication].type_publications}
              </div>
            )}
          </div>

          {publications[currentPublication].pdf && (
            <ContentPDF PDF={publications[currentPublication].pdf} />
          )}
        </section>
      </div>
    </section>
  )
}
