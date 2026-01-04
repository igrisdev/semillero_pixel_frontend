import type { IPublication } from "./publication.domain";

export interface IPublicationRepository {
  getAllPublications(): Promise<IPublication[]>
}