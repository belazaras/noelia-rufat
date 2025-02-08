import { useParams, Link, NavLink } from '@remix-run/react';
import { useIsHomePath } from '~/lib/utils';
import {urlFor} from '~/sanity/image'

export function Layout({ children, data }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Header logo={data.logoSmall}/>
        <main role="main" id="mainContent" className="flex-grow">
            {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

function Header({logo}) {
  const isHome = useIsHomePath();

  const menu = {
    items: [
      {id: "1", to: "/men", title: "MEN"},
      {id: "2", to: "/women", title: "WOMEN"},
      {id: "3", to: "/news", title: "NEWS"},
      {id: "4", to: "/about", title: "ABOUT"},
    ]
  }
  return (
    <>
      <DesktopHeader
        isHome={isHome}
        menu={menu}
        logo={logo}
      />
      {/* <MobileHeader */}
      {/*   isHome={isHome} */}
      {/*   title={title} */}
      {/*   openCart={openCart} */}
      {/*   openMenu={openMenu} */}
      {/* /> */}
    </>
  )
}

function DesktopHeader({ isHome, menu, logo }) {
  const params = useParams();
  return (
    <header
      role="banner"
      className={`
      ${isHome ? 'dark:bg-contrast/60 text-primary text-white' : 'text-primary backdrop-blur-lg lg:sticky shadow-darkHeader'}
       md:h-[3em] md:flex items-center transition duration-300 z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-4 md:py-8 font-light`}
    >
      <div className="flex gap-12 items-center mb-2 md:mb-0">
        <Link className="font-bold" to="/" prefetch="intent" className="mx-auto md:mx-0">
          <img src={urlFor(logo).url()} alt={logo} className="w-[110px]" />
        </Link>
      </div>
      <div className="flex items-center gap-1 justify-center">
        <nav className="flex gap-8 font-medium mt-1">
          {(menu?.items || []).map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              target={item.target}
              prefetch={!item.isExternal && 'intent'}
              className={({ isActive }) =>
                isActive
                  ? 'pb-1 border-b border-slate-600 -mb-px'
                  : 'pb-1 border-b border-transparent hover:border-black hover:border-slate-600'
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const isHome = useIsHomePath();

  return (
    <footer className="footer mt-4 mb-2">
      <p className="footer__text">
        Made with{' '}
        <svg
          datasanity-icon="heart-filled"
          width="1em"
          height="1em"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
          ></path>
        </svg>{' '}
        by <a href="mailto:belazaras@live.com" className="underline">Nicolas Belazaras</a>
      </p>
    </footer>
  );
}
