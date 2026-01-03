import type { IProject } from './project.domain'

export interface ProjectRepository {
  getAllProjects(): Promise<IProject[]>

  getProjectBySlug(slug: string): Promise<IProject | null>
}
