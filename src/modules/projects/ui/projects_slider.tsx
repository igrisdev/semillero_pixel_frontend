import { useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap'

import type { Project } from '../domain/projects.domain'

import ImageSisReport from '@assets/projects/sisreport.jpg'

interface Props {
  initialProjects: Project[]
}

export const ProjectsSlider = ({ initialProjects }: Props) => {
  // Lógica para que funcione el slider
  const projects = initialProjects

  const [currentProject, setCurrentProject] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  useEffect(() => {
    if (!projects || projects.length === 0) return
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentProject((prevIndex) => {
        if (prevIndex === projects.length - 1) {
          return 0
        }
        return prevIndex + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [currentProject, projects.length, isPaused])

  if (!projects || projects.length === 0) {
    return null
  }

  const activeProject = projects[currentProject]

  function handleNextProject() {
    if (currentProject < projects.length - 1) {
      setCurrentProject((prev) => prev + 1)
    }
  }

  function handlePreviousProject() {
    if (currentProject > 0) {
      setCurrentProject((prev) => prev - 1)
    }
  }

  const isFirst = currentProject === 0
  const isLast = currentProject === projects.length - 1

  // Lógica de las animaciones
  useGSAP(() => {
    gsap.registerPlugin(SplitText)

    const tl = gsap.timeline()

    // Animación de la información del proyecto
    tl.from('.slider-project', {
      opacity: 0,
      x: '100%',
      duration: 0.6,
    })

    tl.from(
      '.slider',
      {
        y: '-100%',
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.2,
      },
      '-=0.4'
    )

    tl.from(
      '.slider-description',
      {
        opacity: 0,
        y: '50%',
        duration: 0.6,
      },
      '-=0.4'
    )

    tl.from(
      '.slider-github',
      {
        opacity: 0,
        scale: 1.1,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.4'
    )

    tl.from(
      '.slider-technology',
      {
        opacity: 0,
        scale: 0.5,
        y: '50%',
        duration: 0.5,
        ease: 'back.out(2)',
        stagger: 0.1,
      },
      '<'
    )

    // Animación de la imagen
    gsap.from('.slider-image', {
      filter: 'blur(10px)',
      scale: 1.2,
      duration: 0.5,
    })

    gsap.from('.control-current-number', {
      y: '-100%',
      opacity: 1,
      duration: 0.5,
    })

    // animación de los controles
  }, [currentProject])

  return (
    <section
      className="mx-auto mt-20 grid max-w-7xl grid-cols-4 gap-4 px-4"
      id="projects"
    >
      {/* --- COLUMNA IZQUIERDA --- */}
      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <div className="overflow-hidden">
            <div className="slider-project inline-block">
              <span className="font-micro5 rounded-sm border px-2 text-2xl text-orange-600 uppercase">
                Proyecto
              </span>
            </div>
          </div>

          <div className="overflow-hidden">
            <h2 className="slider text-2xl font-semibold">
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
            <p className="slider-description text-sm">
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
                className="slider-technology rounded-sm border px-1 text-xs"
              >
                {technology.title_technology_project}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- COLUMNA CENTRAL (IMAGEN) --- */}
      <div className="col-span-2 aspect-video overflow-hidden">
        <img
          key={activeProject.image_project}
          src={activeProject.image_project || ImageSisReport.src}
          alt={activeProject.title_project}
          className="slider-image h-full w-full object-cover"
        />
      </div>

      {/* --- COLUMNA DERECHA (CONTROLES) --- */}
      <div className="relative grid place-content-center place-items-center gap-4">
        <div className="text-8xl font-semibold">
          <span className="control-current-number inline-block -translate-y-8">
            {currentProject + 1}
          </span>
          /<span className="inline-block translate-y-8">{projects.length}</span>
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
