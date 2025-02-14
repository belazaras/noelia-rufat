import {useLoaderData, type MetaFunction} from '@remix-run/react'
import { Hero } from '~/components';
import { HeroFaces } from '~/components';

export const meta: MetaFunction = () => {
  return [
    {title: 'Noelia Rufat'},
    {property: "og:image", content: "https://cdn.sanity.io/images/8s9mg3nu/production/60798c66496733c8e24d3b20917a72484e1bec6c-925x380.png"},
    {property: "og:description", content: "Representaciones"}
  ]
}

export default function Index() {
  return (
    <>
      {/* <Hero top loading="lazy" title="NOELIA RUFAT" byline="Representaciones" /> */}
      <HeroFaces/>
    </>
  )
}
