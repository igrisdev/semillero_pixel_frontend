import { PUBLICATIONS } from 'src/mockups/publications.mockup'
import type { IPublication } from '../domain/publication.domain'
import type { IPublicationRepository } from '../domain/publication_repository.domain'

export class MockPublicationRepository implements IPublicationRepository {
  private publications: IPublication[] = PUBLICATIONS

  async getAllPublications(): Promise<IPublication[]> {
    return this.publications
  }
}
