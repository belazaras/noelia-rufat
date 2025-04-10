import { Section, Heading } from '~/components';
import {PortableText} from '@portabletext/react'
import {useLoaderData} from '@remix-run/react'
import {loadQuery} from '~/sanity/loader.server'
import {useQuery} from '@sanity/react-loader'
import {ABOUT_QUERY} from '~/sanity/queries'
import {urlFor} from '~/sanity/image'

export const loader = async ({params}: LoaderFunctionArgs) => {
  const initial = await loadQuery<About>(ABOUT_QUERY, params)

  return {initial, query: ABOUT_QUERY, params}
}

export default function About() {
  const {initial, query, params} = useLoaderData<typeof loader>()
  const {data, loading, error, encodeDataAttribute} = useQuery<typeof initial.data>(query, params, {
    initial,
  });

  return (
    <Section padding="" className="px-6 md:px-8 lg:px-5 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:mt-8">
        <img
          className="flex-shrink-0 max-h-[520px] object-cover aspect-square"
          src={urlFor(data.image).url()}
          alt=""
        />
        <div>
          <Heading as="h1" className="whitespace-normal text-3xl m-2">
            ABOUT
          </Heading>
          <div className="[&_p]:min-h-4 text-sm/7 mx-2">
            <PortableText value={data.body} />
          </div>
        </div>
      </div>
    </Section>
  )
}
