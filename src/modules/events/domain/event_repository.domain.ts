import type { IEvent } from './event.domain'

export interface IEventRepository {
  getAllEvents(): Promise<IEvent[]>
}
