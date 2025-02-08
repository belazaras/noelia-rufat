import groq from 'groq'

export const ACTORS_QUERY = groq`*[_type == "actor" && defined(slug.current)] | order(publishedAt desc)`
export const ACTRESSES_QUERY = groq`*[_type == "actress" && defined(slug.current)] | order(publishedAt desc)`
export const ACTOR_QUERY = groq`*[_type in ["actor", "actress"] && slug.current == $slug][0]`
export const LOGO_QUERY = groq`*[_type == "logo" && slug.current == "main"][0]`
