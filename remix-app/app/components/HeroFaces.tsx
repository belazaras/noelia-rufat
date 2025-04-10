import { Heading, Text } from '~/components';
import {urlFor} from '~/sanity/image'
import {Link} from '@remix-run/react'
import {shuffleArray} from '~/lib/utils'

export function HeroFaces({data}) {
  shuffleArray(data);
  return (
    <>
      {/* <div className="absolute inset-0 flex items-center justify-center z-20 animate-spin"> */}
      {/*   <img src="https://cdn.sanity.io/images/8s9mg3nu/production/bfad833f57351d1273defa1c4d1531e53537d52c-465x465.png?w=2000&fit=max&auto=format&dpr=2" /> */}
      {/* </div> */}
      <div className="z-20 absolute flex flex-col bottom-[10%] md:bottom-[14%] pl-6 sm:pl-8 md:pl-12 text-white uppercase">
        <img className="w-36 h-36 animate-slow-spin" src="https://cdn.sanity.io/images/8s9mg3nu/production/bfad833f57351d1273defa1c4d1531e53537d52c-465x465.png?w=2000&fit=max&auto=format&dpr=2" />
        <h1 className="font-semibold text-6xl max-w-[4em] drop-shadow-lg">
          Noelia Rufat
        </h1>
        <p className="text-2xl text-md mb-0 md:!text-base drop-shadow-lg">
          Representaciones
        </p>
      </div>
      <div className="flex flex-col -mt-[30%] md:-mt-[4em] [&_img]:max-w-[315px] [&_img]:md:max-w-[340px] [&_img]:grayscale [&_img]:hover:grayscale-0 [&_img]:transition [&_img]:duration-250 [&_img]:brightness-50 [&_img]:hover:brightness-100">
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
            {data?.length && (
              data.slice(0,10).map((actor, i) => (
                <li key={actor._id}><Link to={actor.slug?.current ? `/actor/${actor.slug.current}` : '/'}><img src={urlFor(actor.mainImage).width(500).height(500).url()} alt=""/></Link></li>
              ))
            )}
          </ul>
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll" aria-hidden="true">
            {data?.length && (
              data.slice(0,10).map((actor, i) => (
                <li key={actor._id}><Link to={actor.slug?.current ? `/actor/${actor.slug.current}` : '/'}><img src={urlFor(actor.mainImage).width(500).height(500).url()} alt=""/></Link></li>
              ))
            )}
          </ul>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul className="flex items-center justify-center md:justify-start -translate-x-[100%] animate-infinite-scroll-reverse">
            {data?.length && (
              data.slice(10,20).map((actor, i) => (
                <li key={actor._id}><Link to={actor.slug?.current ? `/actor/${actor.slug.current}` : '/'}><img src={urlFor(actor.mainImage).width(500).height(500).url()} alt=""/></Link></li>
              ))
            )}
          </ul>
          <ul className="flex items-center justify-center md:justify-start -translate-x-[100%] animate-infinite-scroll-reverse" aria-hidden="true">
            {data?.length && (
              data.slice(10,20).map((actor, i) => (
                <li key={actor._id}><Link to={actor.slug?.current ? `/actor/${actor.slug.current}` : '/'}><img src={urlFor(actor.mainImage).width(500).height(500).url()} alt=""/></Link></li>
              ))
            )}
          </ul>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
            {data?.length && (
              data.slice(20,30).map((actor, i) => (
                <li key={actor._id}><Link to={actor.slug?.current ? `/actor/${actor.slug.current}` : '/'}><img src={urlFor(actor.mainImage).width(500).height(500).url()} alt=""/></Link></li>
              ))
            )}
          </ul>
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll" aria-hidden="true">
            {data?.length && (
              data.slice(20,30).map((actor, i) => (
                <li key={actor._id}><Link to={actor.slug?.current ? `/actor/${actor.slug.current}` : '/'}><img src={urlFor(actor.mainImage).width(500).height(500).url()} alt=""/></Link></li>
              ))
            )}
          </ul>
        </div>
        <div className="w-full hidden md:inline-flex flex-nowrap overflow-hidden">
          <ul className="flex items-center justify-center md:justify-start -translate-x-[100%] animate-infinite-scroll-reverse">
            {data?.length && (
              data.slice(5,15).map((actor, i) => (
                <li key={actor._id}><Link to={actor.slug?.current ? `/actor/${actor.slug.current}` : '/'}><img src={urlFor(actor.mainImage).width(500).height(500).url()} alt=""/></Link></li>
              ))
            )}
          </ul>
          <ul className="flex items-center justify-center md:justify-start -translate-x-[100%] animate-infinite-scroll-reverse" aria-hidden="true">
            {data?.length && (
              data.slice(5,15).map((actor, i) => (
                <li key={actor._id}><Link to={actor.slug?.current ? `/actor/${actor.slug.current}` : '/'}><img src={urlFor(actor.mainImage).width(500).height(500).url()} alt=""/></Link></li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
)}
