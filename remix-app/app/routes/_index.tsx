import {useLoaderData, type MetaFunction} from '@remix-run/react'
import { Hero } from '~/components';
import { HeroFaces } from '~/components';

export const meta: MetaFunction = () => {
  return [{title: 'Noelia Rufat'}]
}

export default function Index() {
  return (
    <>
      {/* <Hero top loading="lazy" title="NOELIA RUFAT" byline="Representaciones" /> */}
      <HeroFaces/>
    </>
  )
}
