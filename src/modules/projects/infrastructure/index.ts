import type { ProjectRepository } from '../domain/project_repository.domain'
import { MockProjectRepository } from './mock_projects_repository.infrastructure'

const USE_MOCK = import.meta.env.USE_MOCK === 'true'

let repository: ProjectRepository

// if (USE_MOCK) {
repository = new MockProjectRepository()
//   console.log('⚠️ Usando Repositorio MOCK para Proyectos');
// } else {
//   repository = new NotionProjectRepository();
//   console.log('✅ Usando Repositorio NOTION para Proyectos');
// }

// Exportamos la instancia ya inicializada
export const projectRepository = repository
