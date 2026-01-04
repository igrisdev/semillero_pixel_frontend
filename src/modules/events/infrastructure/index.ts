import type { IEventRepository } from '../domain/event_repository.domain'
import { MockEventRepository } from './mock_event_repository.infractruture'

const USE_MOCK = import.meta.env.USE_MOCK === 'true'

let repository: IEventRepository

// if (USE_MOCK) {
repository = new MockEventRepository()
//   console.log('⚠️ Usando Repositorio MOCK para Proyectos');
// } else {
//   repository = new NotionProjectRepository();
//   console.log('✅ Usando Repositorio NOTION para Proyectos');
// }

// Exportamos la instancia ya inicializada
export const eventRepository = repository
