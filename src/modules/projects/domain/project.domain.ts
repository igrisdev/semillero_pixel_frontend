export interface IProject {
  title_project: string
  image_project: string
  link_github: string
  description_project: string
  technology_project: ITechnologyProject[]
  article_content_project: string
  person_name_article_publisher_project: string
  members: string[]
  date_deploy_project: string
  slug: string
  publication: string
}

export interface ITechnologyProject {
  title_technology_project: string
  link_page_technology_project: string
}
