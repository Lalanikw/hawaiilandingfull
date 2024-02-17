"use client"

import Landing from "../components/Landing";
import LandingBottom from "../components/LandingBottom"

export default function Home() {
  return (
    <main >
      <Landing />

      <div className="bg-gray-200 shadow-md hover:bg-gray-300 p-2 mt-3">
          <div className="bg-gray-200">
              <h1 className="bg-gray-200 text-center text-green-600 lg:text-4xl md:text-2xl sm:text-lg ">Excape to Hawaii, where paradise meets the adventure &#127802; </h1>
              <h3 className="bg-gray-200 text-justify lg:text-xl md:text-lg sm:text-md p-2 m-2">Picture yourself on sun-kissed beaches, the soft, golden sand between your toes, and the
                soothing sound of waves in the background.
                Explore lush rainforests, hike to breathtaking viewpoints, and discover vibrant marine life while snorkeling in crystal
                  clear waters. Immerse yourself in the captavating hula performance and relish the island's unique cuisine.</h3>
                
              <div>
                  {/* <Link to="/Explore">
                    <button to="/Explore.js" className='Plan-button'> Explore Hawaii &#10132; </button>
                  </Link> */}
                </div>    
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
