import { PROJECTS } from 'src/mockups/projects.mockup'

import type { ProjectRepository } from '../domain/project_repository.domain'
import type { IProject } from '../domain/project.domain'

export class MockProjectRepository implements ProjectRepository {
  private projects: IProject[] = PROJECTS

  async getAllProjects(): Promise<IProject[]> {
    return this.projects
  }

  async getProjectBySlug(slug: string): Promise<IProject | null> {
    return this.projects.find((p) => p.slug === slug) || null
  }
}
