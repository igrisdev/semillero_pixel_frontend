import { projectRepository } from '../infrastructure'

export const getProjectsForHome = async () => {
  const projects = await projectRepository.getAllProjects()

  return projects.slice(0, 8)
}
