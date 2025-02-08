import {Link} from '@remix-run/react'
import type {EncodeDataAttributeCallback} from '@sanity/react-loader'
import {formatDate} from '~/utils/formatDate'
import {urlFor} from '~/sanity/image'
import type {Actor} from '~/sanity/types'

export function ActorCard({
  actor,
  encodeDataAttribute,
}: {
  actor: Actor
  encodeDataAttribute: EncodeDataAttributeCallback
}) {
  return (
    <Link data-sanity={encodeDataAttribute('slug')} className="" to={actor.slug?.current ? `/actor/${actor.slug.current}` : '/'}>
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center justify-center overflow-hidden rounded-sm">
          {actor.mainImage ? (
            <img
              data-sanity={encodeDataAttribute('mainImage')}
              className="aspect-square object-contain w-full"
              src={urlFor(actor.mainImage).width(500).height(500).url()}
              alt=""
            />
          ) : (
            <div className="card__cover--none" />
          )}
        </div>
        <div className="text-center">
          <h3 className="">{actor.name}</h3>
        </div>
      </div>
    </Link>
  )
}
