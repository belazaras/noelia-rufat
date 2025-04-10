import {useLoaderData, type MetaFunction} from '@remix-run/react'
import {useQuery} from '@sanity/react-loader'
import {loadQuery} from '~/sanity/loader.server'
import {PERSONS_QUERY} from '~/sanity/queries'
import { Hero } from '~/components';
import { HeroFaces } from '~/components';

export const meta: MetaFunction = () => {
  return [
    {title: 'Noelia Rufat'},
    {property: "og:image", content: "https://cdn.sanity.io/images/8s9mg3nu/production/60798c66496733c8e24d3b20917a72484e1bec6c-925x380.png"},
    {property: "og:description", content: "Representaciones"}
  ]
}

export const loader = async () => {
  const initial = await loadQuery<Actor[]>(PERSONS_QUERY)
  return {initial, query: PERSONS_QUERY, params: {}}
}

export default function Index() {
  const {initial, query, params} = useLoaderData<typeof loader>()
  const {data, loading, error, encodeDataAttribute} = useQuery<typeof initial.data>(query, params, {
    initial,
  })

  if (error) {
    throw error
  } else if (loading && !data) {
    return <div>Loading...</div>
  }

  return (
    <>
      {/* <Hero top loading="lazy" title="NOELIA RUFAT" byline="Representaciones" /> */}
      <HeroFaces data={data}/>
    </>
  )
}
