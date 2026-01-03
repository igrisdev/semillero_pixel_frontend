import type { PublicationRepository } from '../domain/publication_repository.domain'
import { MockPublicationRepository } from './mock_publication_repository'

const USE_MOCK = import.meta.env.USE_MOCK === 'true'

let repository: PublicationRepository

// if (USE_MOCK) {
repository = new MockPublicationRepository()
//   console.log('⚠️ Usando Repositorio MOCK para Proyectos');
// } else {
//   repository = new NotionProjectRepository();
//   console.log('✅ Usando Repositorio NOTION para Proyectos');
// }

// Exportamos la instancia ya inicializada
export const publicationRepository = repository
