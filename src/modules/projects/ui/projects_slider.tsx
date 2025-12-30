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

  // useGSAP(() => {
  //   gsap.registerPlugin(SplitText)

  //   // const splitSliderTitle = SplitText()

  //   gsap.from('.slider-title', {
  //     y: '-100%',
  //     opacity: 0,
  //     duration: 0.5,
  //     ease: 'power2.out',
  //   })
  // }, [currentProject])
  return (
    <section
      className="mx-auto mt-20 grid max-w-7xl grid-cols-4 gap-4 px-4"
      id="projects"
    >
      {/* --- COLUMNA IZQUIERDA --- */}
      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <div>
            <span className="font-micro5 rounded-sm border px-2 text-2xl text-orange-600 uppercase">
              Proyecto
            </span>
          </div>

          <h2 className="slider slider-title text-2xl font-semibold">
            {activeProject.title_project}
          </h2>

          <div
            className="h-40 overflow-y-auto border-r-2 border-transparent pr-2 transition-colors hover:border-gray-200"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <p className="text-sm">{activeProject.description_project}</p>
          </div>
        </div>

        <div>
          <hr />
          <a href="/" className="flex items-center gap-2 py-4">
            <img
              src="/logo_small.png"
              alt="logo de GitHub"
              className="size-6 rounded-full object-cover"
            />
            <span className="text-xs">GitHub</span>
          </a>

          <div className="flex flex-wrap gap-1">
            {activeProject.technology_project.map((technology, index) => (
              <span
                key={`${technology.title_technology_project}-${index}`}
                className="rounded-sm border px-1 text-xs"
              >
                {technology.title_technology_project}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- COLUMNA CENTRAL (IMAGEN) --- */}
      <div className="col-span-2 aspect-video bg-orange-600">
        <img
          src={activeProject.image_project || ImageSisReport.src}
          alt={activeProject.title_project}
          className="h-full w-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* --- COLUMNA DERECHA (CONTROLES) --- */}
      <div className="relative grid place-content-center place-items-center gap-4">
        <div className="text-8xl font-semibold">
          <span className="inline-block -translate-y-8">
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
