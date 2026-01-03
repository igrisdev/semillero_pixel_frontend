import type { IProject } from '../domain/project.domain'
import { projectRepository } from '../infrastructure'

export const getProjectsForHome = async (): Promise<IProject[]> => {
  const projects = await projectRepository.getAllProjects()

  return projects.slice(0, 8)
}
