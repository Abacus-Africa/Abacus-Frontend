import React from 'react'
import Logo from '../../assets/images/logo.png';

const Nav = () => {
  return (
    <div className="flex justify-between items-center  mx-10 headings">
                {/* <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Docs
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Examples
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Blog
            </a>
            </div>
            <div>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div>
        </div>
        </nav> */}
        <div>
        <a href="/">
            <img src={Logo} alt="abacus logo"></img>
        </a>
        </div>

        <div class="hidden">
            <button class="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-pviolet hover:border-pviolet">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>

    
        <nav className="flex p-3 space-x-6 font-medium">
            {[
            ["Home", "/"],
            ["Support", "/"],
            ["Blog", "https://abacusafrica.hashnode.dev/"],
            ["Pricing", "/"]
            ].map(([title, url]) => (
            <a
                href={url}
                //when active class is added to the link, the color of the link changes to red
                // className={`${
                // window.location.pathname === url
                //     ? " linkStyles "
                //     : " linkStyles "
                // }`}
            >
                {title}
            </a>
            ))}
        </nav>
            
        <div className="flex space-x-4 font-medium text-center p-3">
            {[
            ["Log In", "/", "text-slate-700 border border-black rounded w-20 py-2"],
            ["Sign Up", "/", "text-pviolet border border-pviolet rounded w-32 py-2"]
            ].map(([title, url, style]) => (
            <a
                href={url}
                className={style}
            >
                {title}
            </a>
            ))}
        </div>   
    </div>
  )
}

export default Nav