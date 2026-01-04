import type { IEvent } from "../domain/event.domain"
import { eventRepository } from "../infrastructure"

export const getEventsForHome = async (): Promise<IEvent[]> => {
  const projects = await eventRepository.getAllEvents()

  return projects.slice(0, 8)
}
