import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import './Nav.css'

function Header() {

        const [toggle, setToggle] = useState(false);

  return (
        <nav className='flex justify-between p-5 px-3 '>
            <div className='flex gap-3'>
                          
                          <div className='p-3'>
                                  <Link href='/' passHref><h1 className='stroke-lime-300 lg:text-7xl md:text-4xl sm:text-2xl font-semibold hover:text-green-200'>Hawaii Landing </h1></Link>
                                  
                           </div>

            </div>
            <div className='hidden md:flex'>
                <ul className='flex gap-8 items-center'>
                        <li className='text-[20px] transition-all ease-in-out cursor-pointer
                         lg:text-3xl md:text-2xl sm:text-xl font-semibold hover:text-green-200' ><Link href='/'>Home</Link></li>
                        <li className='text-[20px] cursor-pointer lg:text-3xl md:text-2xl sm:text-xl font-semibold hover:text-green-200'
                            ><Link href='/Explore'>Explore-Hawaii</Link></li>
                        <li className='text-[20px] cursor-pointer lg:text-3xl md:text-2xl sm:text-xl font-semibold hover:text-green-200'
                        ><Link href='/ContactUs'> Contact Us</Link> </li>
                </ul>
                  </div>
                  <div className='md:hidden lg:hidden relative'>
                          {!toggle ? <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                  onClick={() => setToggle(true)} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                  className="w-8 h-8 cursor-pointer text-blue-800 float-right">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                          </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                          onClick={() => setToggle(false)} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                          className="w-8 h-8 cursor-pointer text-blue-800 float-right">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>}
                          {toggle ?
                        <ul className='gap-8 items-center mt-12 bg-gray-300 p-1 z-50 fixed top-5 right-0 w-50%' style={{zIndex: 1000}}>
                                <li className='p-3 text-[18px] font-semibold text-black-100 transition-all ease-in-out cursor-pointer hover:text-green-200 hover:text-2xl'
                                ><Link href='/'>Home</Link></li>
                                <li className='p-3 text-[18px] font-semibold text-black-100 cursor-pointer hover:text-green-200 hover:text-2xl'
                                ><Link href='/Explore'>Explore-Hawaii</Link></li>
                                
                                <li className='p-3 text-[18px] font-semibold text-black-100 cursor-pointer hover:text-green-200 hover:text-2xl'
                                ><Link href='/ContactUs'> Contact Us</Link> </li>
                         </ul> : null}
                  </div>
        </nav>
  )
}

export default Header
