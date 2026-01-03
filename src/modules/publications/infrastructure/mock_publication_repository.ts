import { PUBLICATIONS } from 'src/mockups/publications.mockup'
import type { IPublication } from '../domain/publication.domain'

export class MockPublicationRepository {
  private publications: IPublication[] = PUBLICATIONS

  async getAllPublications(): Promise<IPublication[]> {
    return this.publications
  }
}
