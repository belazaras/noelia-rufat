import { Heading, Text } from '~/components';

export function HeroFaces({}) {
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
            <li><img src="https://picsum.photos/500?random=1" alt="Random person"/></li>
            <li><img src="https://picsum.photos/500?random=2" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=3" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=4" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=5" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=6" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=7" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=8" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=9" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=10" alt="Random person" /></li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll" aria-hidden="true">
            <li><img src="https://picsum.photos/500?random=1" alt="Random person"/></li>
            <li><img src="https://picsum.photos/500?random=2" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=3" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=4" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=5" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=6" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=7" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=8" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=9" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=10" alt="Random person" /></li>
          </ul>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul className="flex items-center justify-center md:justify-start -translate-x-[100%] animate-infinite-scroll-reverse">
            <li><img src="https://picsum.photos/500?random=11" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=12" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=13" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=14" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=15" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=16" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=17" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=18" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=19" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=20" alt="Random person" /></li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start -translate-x-[100%] animate-infinite-scroll-reverse" aria-hidden="true">
            <li><img src="https://picsum.photos/500?random=11" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=12" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=13" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=14" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=15" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=16" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=17" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=18" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=19" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=20" alt="Random person" /></li>
          </ul>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
            <li><img src="https://picsum.photos/500?random=21" alt="Random person"/></li>
            <li><img src="https://picsum.photos/500?random=22" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=23" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=24" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=25" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=26" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=27" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=28" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=29" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=30" alt="Random person" /></li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll" aria-hidden="true">
            <li><img src="https://picsum.photos/500?random=21" alt="Random person"/></li>
            <li><img src="https://picsum.photos/500?random=22" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=23" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=24" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=25" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=26" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=27" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=28" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=29" alt="Random person" /></li>
            <li><img src="https://picsum.photos/500?random=30" alt="Random person" /></li>
          </ul>
        </div>
      </div>
    </>
)}
