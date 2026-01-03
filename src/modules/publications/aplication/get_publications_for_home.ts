import type { IPublication } from '../domain/publication.domain'
import { publicationRepository } from '../infrastructure'

export const getPublicationsForHome = async (): Promise<IPublication[]> => {
  const publications = await publicationRepository.getAllPublications()

  return publications.slice(0, 8)
}
