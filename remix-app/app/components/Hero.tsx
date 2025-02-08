import clsx from 'clsx';
import { Heading, Text, Slider } from '~/components';
import { useParams, Link } from '@remix-run/react';
import { useEffect, useState } from 'react';

export function Hero({
  byline,
  cta,
  media,
  media_mobile,
  handle,
  heading,
  title,
  height,
  loading,
  top,
  country,
}) {

  const params = useParams();
  media = [{test: 1}]

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 3500)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= media.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  return (
    <section
      className={clsx(
        'relative justify-center flex flex-col w-full',
        top && '-mt-[30%] md:-mt-[4em]',
        height === 'full'
          ? 'h-screen'
          : 'aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[6/2]',
      )}
    >
      <div className="relative flex">
        <div className="w-full">
          <div className="h-[102vh]">
            <Slider activeIndex={activeIndex}>
              {media.map((asset, index) => {
                return (
                  <img
                    key={index}
                    className="block object-cover w-full h-full"
                    src="https://skims-sanity.imgix.net/images/hfqi0zm0/production/8f43ebb4aad58c01dd42e94a561c5dc8bf93dcce-3000x1298.png?auto=format&q=95&ixlib=react-9.10.0"
                    alt=""
                  />
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="w-full absolute flex flex-col justify-end h-[80%] px-6 sm:px-8 md:px-12 text-white uppercase">
          <Heading format as="h2" size="heading" className="max-w-[7em] text-5xl">
            {heading?.value || title}
          </Heading>
          {byline && (
            <Text format width="narrow" as="p" size="hero" className="text-md mb-0 md:!text-base">
              {byline}
            </Text>
          )}
          {/* <div className="max-w-[205px] mt-4 mb-1 md:!mt-6 md:!mb-2 text-center"> */}
          {/*   <Link */}
          {/*     to="/men" */}
          {/*     className="bg-white p-2 relative flex items-center justify-center text-black" */}
          {/*   > */}
          {/*     {cta?.value || 'Shop Now'} */}
          {/*   </Link> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
