"use client"

import React from 'react'
import dynamic from 'next/dynamic';

export const images = [
  { title: "Waikiki Beach", subtitle: "Honolulu shoreline with gentle waves, ideal for beginners and sunbathers.", Image: '/beach.jpg' },
  { title: "Koko Crater", subtitle: "A challenging hike with rewarding panoramic views", Image: '/koko.jpg' },
  { title: "Waikiki Skyline", subtitle: "View of the Waikiki town from Diamon Head crater", Image: '/Waikiki.jpg' },
  { title: "Hanauma Bay", subtitle: "A perfect spot for Snorkeling, swimming, diving and sunbathing.", Image: '/hanauma.jpg' },
  { title: "Surfer", subtitle: "Waikiki draws surf enthusiasts from around the world.", Image: '/surf.jpg' }
];

const DynamicCarousel = dynamic(() => import('./Carousel'), { ssr: false });

function LandingBottom() {
  return (
    <div className='lg:flex-row md:flex-row sm:flex-col p-5'>
              <div className='p-5'>
                <DynamicCarousel images={images} />
              </div>
              <div className='bg-gray-200 shadow-md hover:bg-gray-300 p-2'>
                  <h1 className='bg-gray-200 text-green-600 lg:text-4xl md:text-2xl sm:text-lg '>Hawaii welcomes you with open arms &#127802; </h1>
                  <h3 className='bg-gray-200 lg:text-xl md:text-lg sm:text-md p-2 m-2'>We will take you on a journey through the enchanting islands of Hawaii, exploring its unique attractions,
                            must-visit locations, and insider tips to make the most of your trip. </h3>
                  <h3 className='bg-gray-200'>Contact us for iterinaries, inquiries about local events and tips. </h3>
                <div>
                        {/* <Link to="/Login">
                          <button to="/src/pages/Login.js" className='Plan-button'> Contact Us &#10132; </button>
                        </Link> */}
            </div>
            
                 </div>
    </div>
  )
}

export default LandingBottom
