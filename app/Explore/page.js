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
                     <img className="lg:h-72 md:h-60 sm:h-48 w-full object-cover object-center pr-1"
                        src="/coral.jpg" alt='"corals-waikiki-beach' />
                        <div className='p-3'>
                        <h1 className="text-xl font-semibold mb-1 text-left text-green-800">Riding Waves</h1>
                        <h2 className="text-base font-medium text-indigo-300 mb-1 text-left">Queen's | Sandy | Waikiki beaches</h2>
                      <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">Riding the waves at Queen's Beach, Sandy Beach,
                         and Waikiki Beach offers an exhilarating experience for water enthusiasts of all levels. With its gentle breaks and consistent swells,
                         Queen's Beach is ideal for beginners looking to catch their first wave, while Sandy Beach's powerful shore break provides a thrilling
                         challenge for experienced surfers and boogie boarders alike.
                      </p>
                      <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">Waikiki Beach, steeped in historic surfing traditions,
                         holds a special place in the hearts of surfers worldwide. Named after Duke Kahanamoku, the legendary Hawaiian waterman and Olympic swimmer
                         , Waikiki Beach embodies the spirit of aloha and the essence of surfing culture. From its iconic statue of Duke overlooking the ocean to its
                         vibrant surfing community, Waikiki pays homage to Duke's values of respect, humility, and love for the ocean.
                      </p>
                     </div>
                  </div>

                  <div className=' p-2 bg-green-50 hover:bg-green-100 h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                     <img className="lg:h-72 md:h-60 sm:h-48 w-full object-cover object-center pr-1"
                        src="/event1.jpg" alt='hula-dancing-event' />
                        <div className='p-3'>
                        <h1 className="text-xl font-semibold mb-1 text-left text-green-800">Dancing</h1>
                        <h2 className="text-base font-medium text-indigo-300 mb-1 text-left"> Polynesian cultural Center | Waikiki Beach Walk | Kuhio Beach Hula Show </h2>
                      <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">In Waikiki, the vibrant energy of the beach blends seamlessly with
                         the rhythmic sway of hula dancers, creating an enchanting atmosphere that reflects the essence of Hawaii's cultural heritage. At Queen's Beach,
                         nestled along the scenic shoreline of Oahu's south shore, visitors can witness the dynamic artistry of fire dancing against the backdrop of the
                         setting sun. As the sky transforms into a canvas of vibrant hues, fire dancers mesmerize onlookers with their skillful manipulation of flames,
                         weaving a mesmerizing tapestry of light and movement.
                      </p>
                      <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">For a deeper immersion into Hawaiian culture, traditional cultural
                         centers such as the Polynesian Cultural Center offer authentic experiences where visitors can learn about the history and significance of hula
                         and fire dancing. Through live performances, interactive exhibits, and hands-on activities, guests gain insight into the rich traditions and
                         cultural practices that have shaped Hawaii's identity for generations.
                      </p>
                     </div>
                     </div>
            </div>

             <div className='py-5 p-2 bg-green-50 hover:bg-green-100 flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <img className="lg:h-96 md:h-72 sm:h-60 w-full object-cover object-center pr-1"
                   src="/locomoco.jpg" alt='locomoco' />
                <img className="lg:h-96 md:h-72 sm:h-60 w-full object-cover object-center pr-1"
                   src="/poi.jpg" alt='oysters-seafood' />
                  <div className='p-3'>
                   <h1 className="text-xl font-semibold mb-1 text-left text-green-800">From Ocean to Plate</h1>
                   <h2 className="text-base font-medium text-indigo-300 mb-1 text-left"> Oysterhale by Crush | Haleiwa Joe's | Ono Hawaiian Foods </h2>
                   <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">Hawaiian cuisine is a vibrant tapestry of flavors,
                      blending indigenous ingredients with influences from various cultures that have shaped the islands' culinary landscape. From
                      fresh seafood to tropical fruits and traditional staples like taro, Hawaiian cuisine offers a diverse array of dishes that
                      tantalize the taste buds and reflect the unique spirit of the islands.
                   </p>
                   <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">One of the iconic delicacies of Hawaiian
                      cuisine is <strong className='text-green-600 text-2xl'>poke</strong>, a flavorful dish made with chunks of raw fish, typically ahi tuna or salmon, marinated in soy sauce,
                      sesame oil, and other seasonings. <strong className='text-green-600 text-2xl'>Taro</strong>
                      , known locally as kalo, holds a special place in Hawaiian culture and cuisine. This starchy root vegetable is used
                      to make poi, a traditional Hawaiian dish that is made by mashing cooked taro until it reaches a smooth, pudding-like
                      consistency.Other Hawaiian culinary delights include <strong className='text-green-600 text-2xl'>laulau</strong> , a traditional dish made with pork, fish, or chicken wrapped
                      in taro leaves and steamed to perfection, as well as loco moco, a hearty meal consisting of white rice topped with a
                      hamburger patty, fried egg, and brown gravy. </p>
                </div>
             </div>

             < div className='py-5 lg:flex md:flex-row sm:flex-col '>
                     <div className='p-2 bg-green-50 hover:bg-green-100 h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img className="lg:h-72 md:h-60 sm:h-48 w-full object-cover object-center pr-1"
                           src="/water.jpg" alt='underwater-corals-fish' />
                           <div className='p-3'>
                           <h1 className="text-xl font-semibold mb-1 text-left text-green-800">Underwater exploration</h1>
                           <h2 className="text-base font-medium text-indigo-300 mb-1 text-left"> Hanauma Bay | Shark's Cove | Sea Tiger Shipwreck </h2>
                      <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">Explore the vibrant coral reefs of Hanauma Bay,
                         encountering an array of marine life amidst its crystal-clear waters. Glide alongside graceful sea turtles at Turtle Bay and
                         marvel at the rich biodiversity of Shark's Cove. Dive deep into the mysteries of the Sea Tiger Shipwreck off Waikiki's coast,
                         and discover an underwater playground teeming with marine creatures. For adrenaline seekers, Electric Beach offers thrilling
                         encounters with majestic manta rays and other pelagic species. Each location promises unparalleled snorkeling and diving
                         experiences, immersing visitors in the captivating beauty of Hawaii's underwater realm.
                                    </p>
                        </div>
                     </div>

                     <div className='p-2 bg-green-50 hover:bg-green-100 h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img className="lg:h-72 md:h-60 sm:h-48 w-full object-cover object-center pr-1"
                           src="/temple.jpg" alt='temple-buddhist-Byodo-In' />
                           <div className='p-3'>
                           <h1 className="text-xl font-semibold mb-1 text-left text-green-800">Byodo-In Temple</h1>
                           <h2 className="text-base font-medium text-indigo-300 mb-1 text-left"> architectural | architectural | Buddhism </h2>
                      <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">Nestled amidst the lush landscapes of Hawaii,
                         the Byodo-In Temple stands as a serene sanctuary embodying the essence of Buddhism. Modeled after the historic Byodo-In
                         Temple in Japan, this architectural masterpiece exudes tranquility and spiritual reverence. Visitors are invited to explore
                         the temple's intricately adorned grounds, adorned with traditional Japanese gardens, koi ponds, and towering pagodas.
                         Set against the backdrop of majestic mountains, the temple offers a place for contemplation and inner peace, serving as
                         a symbol of harmony and spiritual enlightenment in the heart of Hawaii.
                      </p>
                        </div>
                     </div>
             </div>

             <div className=' p-2 bg-green-50 hover:bg-green-100 flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <img className="lg:h-72 md:h-60 sm:h-48 w-full object-cover object-center pr-1"
                   src="/koko.jpg" alt='koko-crater' />
                <img className="lg:h-72 md:h-60 sm:h-48 w-full object-cover object-center pr-1"
                   src="/Waikiki.jpg" alt='koko-crater' />
                  <div className='p-3'>
                   <h1 className="text-xl font-semibold mb-1 text-left text-green-800">Koko Head | Diamond Head </h1>
                   <h2 className="text-base font-medium text-indigo-300 mb-1 text-left"> Hiking | Photography </h2>
                   <p className="leading-relaxed mb-2 text-justify lg:text-xl md:text-xl sm:text-md">Koko Crater and Diamond
                      Head Crater offer captivating hiking experiences in Hawaii, combining exercise with breathtaking scenery.
                      Koko Crater boasts a challenging ascent along a historic railway track, rewarding hikers with panoramic
                      views of the surrounding landscapes and the Pacific Ocean. Meanwhile, Diamond Head Crater features a
                      moderately strenuous hike culminating in sweeping vistas of Waikiki Beach and Honolulu. Both trails offer
                      opportunities to immerse oneself in the island's natural beauty while enjoying invigorating outdoor activities.
                      Whether ascending the rugged slopes of Koko Crater or traversing the iconic crater rim of Diamond Head, hikers
                      are treated to unforgettable adventures amidst Hawaii's stunning terrain.
                      </p>
                </div>
             </div>
          </div>
      </div>
       );
}

export default page;