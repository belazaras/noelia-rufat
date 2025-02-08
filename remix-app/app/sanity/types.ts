import type {PortableTextBlock} from '@portabletext/types'
import type {ImageAsset, Slug} from '@sanity/types'

export interface Actor {
  _type: 'actor'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  gallery?: ImageAsset[]
  body: PortableTextBlock[]
}
