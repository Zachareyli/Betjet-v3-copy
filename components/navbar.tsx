// "use client"
import React, { useState } from 'react'

export default function Navbar() {

    const [isClicked, setisClicked] = useState(false);
    const toggleNavbar = (): void => {
        setisClicked(!isClicked)
    }

  return (
   <>
   <nav className='bg-black'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="felx-shrink-0">
                    <a href="/" className='text-white'> 
                    <img src="https://central.bet.co.za/wp-content/uploads/2024/04/logo-Bet.co_.za-new.png" alt="Bet.co.za logo" />
                     </a>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-10 text-xl font-bold">
                    <a href="" className='text-white rounded-lg p-2 hover:text-[#509b65]'>
                    Home
                    </a>
                    <a href="" className='text-white rounded-lg p-2 hover:text-[#509b65]'>
                    Games
                    </a>
                    <a href="" className='text-white rounded-lg p-2 hover:text-[#509b65]'>
                    Contact Us
                    </a>
                    <a href="" className='text-white rounded-lg p-2 hover:text-[#509b65]'>
                    Bet.co.za Site
                    </a>
                </div>
            </div>
            <div className="md:hidden flex items-center">
                <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none
                focus:ring-2  focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                    {isClicked ? (
                        <svg  className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor" >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"/>
      </svg>
                    ) : (
                        <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
</svg>
                    
                    )}

                </button>
            </div>
        </div>
    </div>
    {isClicked && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-bold">
             <a href="" className='text-white block bg-black  rounded-lg p-2 m-1 hover:text-[#509b65]'>
                    - Home
                    </a>
                    <a href="" className='text-white block bg-black  rounded-lg p-2 m-1 hover:text-[#509b65]'>
                    - Games
                    </a>
                    <a href="" className='text-white block bg-black  rounded-lg p-2 m-1 hover:text-[#509b65]'>
                    - Contact Us
                    </a>
                    <a href="" className='text-white block bg-black  rounded-lg p-2 m-1 hover:text-[#509b65]'>
                    - Bet.co.za Site
                    </a>
        </div>
    )}
   </nav>
   </>
  )
}

