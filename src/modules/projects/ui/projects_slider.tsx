import { useState, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ImageSisReport from '@assets/projects/sisreport.jpg'
import type { IProject } from '../domain/project.domain'

interface Props {
  initialProjects: IProject[]
}

export const ProjectsSlider = ({ initialProjects }: Props) => {
  const projects = initialProjects
  const containerRef = useRef<HTMLElement>(null)

  const [currentProject, setCurrentProject] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  // --- Lógica del Timer ---
  useEffect(() => {
    if (!projects || projects.length === 0) return
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentProject((prevIndex) => {
        if (prevIndex === projects.length - 1) return 0
        return prevIndex + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [currentProject, projects.length, isPaused])

  if (!projects || projects.length === 0) return null

  const activeProject = projects[currentProject]
  const isFirst = currentProject === 0
  const isLast = currentProject === projects.length - 1

  function handleNextProject() {
    if (!isLast) setCurrentProject((prev) => prev + 1)
  }

  function handlePreviousProject() {
    if (!isFirst) setCurrentProject((prev) => prev - 1)
  }

  useGSAP(
    () => {
      if (!containerRef.current) return

      gsap.registerPlugin(SplitText)

      gsap.set(
        '.slider-project, .slider, .slider-description, .slider-github, .slider-technology, .control-current-number',
        {
          clearProps: 'all',
        }
      )

      const tl = gsap.timeline()

      // Etiqueta Proyecto
      tl.fromTo(
        '.slider-project',
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
      )

      // Título
      tl.fromTo(
        '.slider',
        { y: '-100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.2,
        },
        '-=0.4'
      )

      // Descripción
      tl.fromTo(
        '.slider-description',
        { y: '50%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.4'
      )

      // Github Button
      tl.fromTo(
        '.slider-github',
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.4'
      )

      // Tecnologías
      tl.fromTo(
        '.slider-technology',
        { scale: 0.5, y: '50%', opacity: 0 },
        {
          scale: 1,
          y: '0%',
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(2)',
          stagger: 0.1,
        },
        '<'
      )

      // Imagen (Blur Effect)
      gsap.fromTo(
        '.slider-image',
        { filter: 'blur(10px)', scale: 1.2, opacity: 0 },
        {
          filter: 'blur(0px)',
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        }
      )

      // Número
      gsap.fromTo(
        '.control-current-number',
        { y: -100, opacity: 0 },
        { y: -20, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      )
    },
    {
      scope: containerRef,
      dependencies: [currentProject],
      revertOnUpdate: true,
    }
  )

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      tl.to('.slider-column-left', {
        x: -200,
        opacity: 0,
        ease: 'none',
      })
        .to(
          '.slider-column-center',
          {
            y: -200,
            opacity: 0,
            ease: 'none',
          },
          '<'
        )
        .to(
          '.slider-column-right',
          {
            x: 200,
            opacity: 0,
            ease: 'none',
          },
          '<'
        )
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="mx-auto mt-20 grid max-w-7xl grid-cols-4 gap-4 px-4"
      id="projects"
    >
      {/* --- COLUMNA IZQUIERDA --- */}
      <div className="slider-column-left flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <div className="overflow-hidden">
            <div className="slider-project inline-block">
              <span className="font-micro5 rounded-sm border px-2 text-2xl text-orange-600 uppercase">
                Proyecto
              </span>
            </div>
          </div>

          <div className="overflow-hidden py-1">
            <h2 className="slider inline-block text-2xl font-semibold">
              {activeProject.title_project}
            </h2>
          </div>

          <div
            className="h-40 overflow-y-auto border-r-2 border-transparent pr-2 transition-colors hover:border-gray-200"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <p className="slider-description block text-sm">
              {activeProject.description_project}
            </p>
          </div>
        </div>

        <div>
          <hr />
          <div>
            <a
              href="/"
              className="slider-github flex w-max items-center gap-2 py-4"
            >
              <img
                src="/logo_small.png"
                alt="logo de GitHub"
                className="size-6 rounded-full object-cover"
              />
              <span className="text-xs">GitHub</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-1">
            {activeProject.technology_project.map((technology, index) => (
              <span
                key={`${technology.title_technology_project}-${index}`}
                className="slider-technology inline-block rounded-sm border bg-white px-1 text-xs"
              >
                {technology.title_technology_project}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- COLUMNA CENTRAL (IMAGEN) --- */}
      <div className="slider-column-center col-span-2 aspect-video overflow-hidden rounded-sm bg-gray-100">
        <img
          key={activeProject.image_project}
          src={activeProject.image_project || ImageSisReport.src}
          alt={activeProject.title_project}
          className="slider-image h-full w-full object-cover"
        />
      </div>

      {/* --- COLUMNA DERECHA (CONTROLES) --- */}
      <div className="slider-column-right relative grid place-content-center place-items-center gap-4">
        <div className="text-8xl font-semibold">
          <span className="control-current-number inline-block">
            {currentProject + 1}
          </span>
          <span>/</span>
          <span className="inline-block translate-y-10">{projects.length}</span>
        </div>

        <div className="absolute bottom-0 flex w-full gap-2">
          <button
            onClick={handlePreviousProject}
            disabled={isFirst}
            className={`w-full rounded-sm bg-amber-300 py-2 transition-all ${
              isFirst
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer hover:bg-amber-400'
            }`}
          >
            Anterior
          </button>

          <button
            onClick={handleNextProject}
            disabled={isLast}
            className={`w-full rounded-sm bg-amber-300 py-2 transition-all ${
              isLast
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer hover:bg-amber-400'
            }`}
          >
            Siguiente
          </button>
        </div>

        <a href="/" className="absolute top-0 right-0 font-semibold">
          Más proyectos
        </a>
      </div>
    </section>
  )
}
