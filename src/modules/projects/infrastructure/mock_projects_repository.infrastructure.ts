import { PROJECTS } from 'src/mockups/projects.mockup'

import type { ProjectRepository } from '../domain/project_repository.domain'
import type { Project } from '../domain/projects.domain'

export class MockProjectRepository implements ProjectRepository {
  private projects: Project[] = PROJECTS

  async getAllProjects(): Promise<Project[]> {
    return this.projects
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    return this.projects.find((p) => p.slug === slug) || null
  }
}
