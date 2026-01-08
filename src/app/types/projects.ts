export interface Project {
  id: string

  title: string
  slug: string
  category: string

  short_description: string | null
  description: string | null

  cover_image: string | null
  gallery: string[] | null

  location: string | null
  year: string | null
  client: string | null

  published: boolean
  created_at: string
}
