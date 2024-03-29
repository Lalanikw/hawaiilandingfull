"use client"

import Landing from "../components/Landing";
import LandingBottom from "../components/LandingBottom"

export default function Home() {
  return (
    <main >
      <Landing />

      <div className="bg-gray-200 shadow-md hover:bg-gray-300 p-2 mt-3">
          <div className="bg-gray-200">
          <h1 className="bg-gray-200 text-center text-green-600 lg:text-4xl md:text-2xl sm:text-lg ">
            Excape to Hawaii, where paradise meets the adventure &#127802; </h1>
          <h3 className="bg-gray-200 text-justify lg:text-xl md:text-lg sm:text-md p-2 m-2">Imagine yourself
            basking on sun-kissed beaches, with soft, golden sand gently caressing
            your toes while the soothing sound of waves serenades you in the background. Embark on an adventure
            through lush rainforests, where vibrant flora and fauna await, and hike
            to breathtaking viewpoints that offer panoramic vistas of paradise. Dive into crystal-clear waters
            to snorkel amidst vibrant marine life, immersing yourself in an underwater
            wonderland.
          </h3>
          <h3 className="bg-gray-200 text-justify lg:text-xl md:text-lg sm:text-md p-2 m-2">Indulge in the rich
            cultural tapestry of Hawaii by witnessing captivating hula performances
            that embody the spirit of the islands. Delight your taste buds with the unique and flavorful cuisine
            that reflects the diverse cultural influences of Hawaii, from traditional
            Hawaiian dishes to fusion creations that will tantalize your palate. Whether you're seeking relaxation,
            adventure, or cultural exploration, Hawaii offers an unparalleled experience that will leave you enchanted
            and rejuvenated.
          </h3>
          </div>
            
      </div>
      
      <div className='text-center'>
                      <h5 className="text-base md:text-lg text-green-400 mb-3 mt-8">  </h5>
                      <h1 className="text-3xl md:text-4xl text-gray-700 font-semibold"> Visit Hawaii</h1>
                      <h5 className="text-base md:text-lg text-green-600 mb-3 mt-5"> Surf | Snorkel | Site Visits | Watch Hula Dancing | Relax on the Beach | Eat Poke    </h5>
        <div className=''>
                        <LandingBottom/>
                    </div>
          </div>
      



    </main>
  );
}
