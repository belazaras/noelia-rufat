import {PortableText} from '@portabletext/react'
import {type LoaderFunctionArgs} from '@remix-run/node'
import {useLoaderData} from '@remix-run/react'
import {useQuery} from '@sanity/react-loader'
import {formatDate} from '~/utils/formatDate'
import {urlFor} from '~/sanity/image'
import {loadQuery} from '~/sanity/loader.server'
import {ACTOR_QUERY} from '~/sanity/queries'
import {Actor} from '~/sanity/types'
import { Section, Heading } from '~/components';
import ReactPlayer from 'react-player';
const Player = ReactPlayer.default

export const meta: MetaFunction = () => {
  return [{title: 'Actors'}]
}

export const loader = async ({params}: LoaderFunctionArgs) => {
  const initial = await loadQuery<Actor>(ACTOR_QUERY, params)

  return {initial, query: ACTOR_QUERY, params}
}

export default function ActorRoute() {
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
    <Section padding="" className="px-6 md:px-8 lg:px-5 max-w-screen-2xl mx-auto" data-sanity={encodeDataAttribute('slug')}>
      <Heading as="h1" className="whitespace-normal text-2xl my-2 md:hidden">
        {data?.name}
      </Heading>
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <div className="md:flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none md:animate-infinite-scroll">
          {data?.mainImage && (
            <img
              data-sanity={encodeDataAttribute('mainImage')}
              className="flex-shrink-0 max-h-[620px] object-cover w-full md:w-fit"
              src={urlFor(data.mainImage).url()}
              alt=""
            />
          )}
          {data?.gallery?.length && (
            data.gallery.map((img, i) => (
              <img
                key={i}
                data-sanity={encodeDataAttribute('img')}
                className="flex-shrink-0 h-[620px] object-cover w-full md:w-fit"
                src={urlFor(img).url()}
                alt=""
              />
            ))
          )}
        </div>
        <div className="hidden md:flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"  aria-hidden="true">
          {data?.mainImage && (
            <img
              data-sanity={encodeDataAttribute('mainImage')}
              className="flex-shrink-0 max-h-[620px] object-cover w-full md:w-fit"
              src={urlFor(data.mainImage).url()}
              alt=""
            />
          )}
          {data?.gallery?.length && (
            data.gallery.map((img, i) => (
              <img
                key={i}
                data-sanity={encodeDataAttribute('img')}
                className="flex-shrink-0 h-[620px] object-cover w-full md:w-fit"
                src={urlFor(img).url()}
                alt=""
              />
            ))
          )}
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4 mx-auto">
        {data?.videos?.length && (
          data.videos.map((url, i) => (
            <Player key={i} url={url} controls width="100%"/>
          ))
        )}
      </div>
      <div className="">
        <Heading as="h1" size="heading" className="whitespace-normal mb-2 hidden md:block">
          {data?.name}
        </Heading>
        {/* {data?._createdAt && <p className="post__date">{formatDate(data._createdAt)}</p>} */}
        {data?.body && (
          <div className="">
            <PortableText value={data.body} />
          </div>
        )}
      </div>
    </Section>
  )
}
