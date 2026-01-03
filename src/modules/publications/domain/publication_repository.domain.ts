import type { IPublication } from "./publication.domain";

export interface PublicationRepository {
  getAllPublications(): Promise<IPublication[]>
}