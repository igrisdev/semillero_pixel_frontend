import type { Project } from '@modules/projects/domain/projects.domain'

export interface ProjectRepository {
  getAllProjects(): Promise<Project[]>

  getProjectBySlug(slug: string): Promise<Project | null>
}
