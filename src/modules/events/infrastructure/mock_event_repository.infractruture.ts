import { EVENTS } from 'src/mockups/events.mockup'
import type { IEvent } from '../domain/event.domain'
import type { IEventRepository } from '../domain/event_repository.domain'

export class MockEventRepository implements IEventRepository {
  private events: IEvent[] = EVENTS

  async getAllEvents(): Promise<IEvent[]> {
    return this.events
  }
}
