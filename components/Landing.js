import React from 'react'

export default function Landing() {
  return (
    <div className='relative h-screen overflow-hidden'>
      <video src={require('../public/Waikiki_beach_small.mp4')}
        autoPlay muted loop className='object-cover w-full h-full lg:mt-[1px] md:mt-[2px] sm:mt-[1px]' />
      <div className="absolute inset-0 bg-blue-100 opacity-10"></div>
    </div>
  )
}
