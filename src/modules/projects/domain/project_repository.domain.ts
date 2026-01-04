import type { IProject } from './project.domain'

export interface IProjectRepository {
  getAllProjects(): Promise<IProject[]>

  getProjectBySlug(slug: string): Promise<IProject | null>
}
