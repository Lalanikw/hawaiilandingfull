"use client"

import React from 'react';
import koko from "../../public/Kokocrater.jpg";
import underwater from "../../public/water.jpg";
import event1 from "../../public/event1.jpg";
import oy1 from "../../public/oy1.jpg";
import temple from "../../public/temple.jpg";
import './page.css'

const page = () => {

    return (
      <div className="text-3xl md:text-2xl sm:text-xl font-semibold text-center mt-36 bg-white ">
          <h1 className='text-green-500 pt-4 sm:text-xl'>Paradise Unveiled</h1>
          <h5 className="text-base md:text-lg sm:text-lg text-indigo-300 mb-4 mt-5 text-center"> History | Beaches | Water Sports | Culture | Cousine </h5>
          
         <p className='leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md p-1'>Exploring Hawaii is an odyssey that goes beyond the surface, inviting travelers to connect with nature, immerse themselves in culture, and embrace the Aloha spirit. Whether you're hiking to hidden waterfalls, savoring local delicacies, or simply soaking in the beauty of a sunset, Hawaii's allure is an invitation to experience paradise on Earth—a realm where dreams become reality and memories are etched forever.
          </p>
          
          <div className='py-5 m-2'>
             
             <div className='lg:flex md:flex-row sm:flex-col py-5'>
                  <div className='p-2  bg-green-50 hover:bg-green-100 h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                     <img className="lg:h-60 md:h-48 sm:h-48 w-full object-cover object-center pr-1"
                        src="/coral.jpg" alt='"corals-waikiki-beach' />
                        <div className='p-3'>
                        <h1 className="text-xl font-semibold mb-1 text-left text-green-800">Riding Waves</h1>
                        <h2 className="text-base font-medium text-indigo-300 mb-1 text-left">Queen's | Sandy | Waikiki beaches</h2>
                           <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">Boogie boarding invites you to ride the ocean's waves with unmatched excitement. Queen's Beach boasts gentle yet playful waves that make it an ideal destination for boogie boarding beginners and experts alike. For a thrilling boogie boarding experience, don't miss the opportunity to ride the waves at 
                              </p>
                     </div>
                  </div>

                  <div className=' p-2 bg-green-50 hover:bg-green-100 h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                     <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                        src="/event1.jpg" alt='hula-dancing-event' />
                        <div className='p-3'>
                        <h1 className="text-xl font-semibold mb-1 text-left text-green-800">Dancing</h1>
                        <h2 className="text-base font-medium text-indigo-300 mb-1 text-left"> Polynesian cultural Center | Waikiki Beach Walk | Kuhio Beach Hula Show </h2>
                        <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">Hula, a mesmerizing form of storytelling that reflects the island's history, legands and connection to the land.
                           As performers sway gracefully to the rhythm of the music, they share narratives of ancient Hawaii, celebrating the land, sea, and deities.
                           Some places to watch Hula dance performance in Oahu
                                 </p>
                     </div>
                     </div>
            </div>

             <div className='py-5 p-2 bg-green-50 hover:bg-green-100 flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                   src="/oy1.jpg" alt='oysters-seafood' />
                  <div className='p-3'>
                   <h1 className="text-xl font-semibold mb-1 text-left text-green-800">From Ocean to Plate</h1>
                   <h2 className="text-base font-medium text-indigo-300 mb-1 text-left"> Oysterhale by Crush | Haleiwa Joe's | Ono Hawaiian Foods </h2>
                   <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">In Hawaii, enjoying oysters is more than just a meal—it's a cultural experience that connects you to the ocean and the land.
                      Here are some of the top restaurants to try for seafood and native Hawaiian food
                             </p>
                </div>
             </div>

             < div className='py-5 lg:flex md:flex-row sm:flex-col '>
                     <div className='p-2 bg-green-50 hover:bg-green-100 h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                           src="/water.jpg" alt='underwater-corals-fish' />
                           <div className='p-3'>
                           <h1 className="text-xl font-semibold mb-1 text-left text-green-800">Underwater exploration</h1>
                           <h2 className="text-base font-medium text-indigo-300 mb-1 text-left"> Hanauma Bay | Shark's Cove | Sea Tiger Shipwreck </h2>
                           <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">As you immerse yourself in the ocean's embrace, you become part of a vibrant ecosystem that hums with life and energy. Whether you're discovering the vivid tapestry of coral reefs or gazing into the abyss's mysteries, each moment beneath the surface unveils a universe that enriches your understanding of our planet's intricate interconnectedness.
                           Some of the best spot to snorkel and diving are below.
                                    </p>
                        </div>
                     </div>

                     <div className='p-2 bg-green-50 hover:bg-green-100 h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                           src="/temple.jpg" alt='temple-buddhist-Byodo-In' />
                           <div className='p-3'>
                           <h1 className="text-xl font-semibold mb-1 text-left text-green-800">Byodo-In Temple</h1>
                           <h2 className="text-base font-medium text-indigo-300 mb-1 text-left"> architectural | architectural | Buddhism </h2>
                           <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">Byodo-In Temple is a replica of a 950-year-old temple in Uji, Japan, renowned for its architectural and spiritual significance. The temple's name, "Byodo-In," translates to "Temple of Equality," reflecting its mission to inspire harmony and understanding among all living beings.
                              </p>
                        </div>
                     </div>
             </div>

             <div className=' p-2 bg-green-50 hover:bg-green-100 flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                   src="/koko.jpg" alt='koko-crater' />
                  <div className='p-3'>
                   <h1 className="text-xl font-semibold mb-1 text-left text-green-800">Koko Crater</h1>
                   <h2 className="text-base font-medium text-indigo-300 mb-1 text-left"> koko crater | DiamondHead </h2>
                   <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">Reaching the summit of Koko Crater is a reward in itself. From this vantage point, you're treated to panoramic views that stretch across Oahu's stunning landscape. The turquoise waters of Hanauma Bay glisten in the distance, while the Pacific Ocean extends to the horizon.
                      The sight of Diamond Head and the lush coastal terrain reminds you of the island's unique beauty.
                      </p>
                </div>
             </div>
          </div>
      </div>
       );
}

export default page;