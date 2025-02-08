import {useLoaderData, type MetaFunction} from '@remix-run/react'
import {useQuery} from '@sanity/react-loader'
import Welcome from '~/components/Welcome'
import {loadQuery} from '~/sanity/loader.server'
import {ACTRESSES_QUERY} from '~/sanity/queries'
import {Actor} from '~/sanity/types'
import { Hero, ActorCard, Grid, Section } from '~/components';

export const meta: MetaFunction = () => {
  return [{title: 'Women'}]
}

export const loader = async () => {
  const initial = await loadQuery<Actor[]>(ACTRESSES_QUERY)
  return {initial, query: ACTRESSES_QUERY, params: {}}
}

export default function Women() {
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
    <Section className="max-w-[1380px] mx-auto px-4" padding='desktop'>
      <Grid layout="products">
        {data?.length && (
          data.map((actor, i) => (
            <ActorCard key={actor._id} actor={actor} encodeDataAttribute={encodeDataAttribute.scope([i])} />
          ))
        )}
      </Grid>
    </Section>
  )
}
