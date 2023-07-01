import React from 'react'

const HeroSection = () => {
  return (
    <section className='w-screen h-screen relative' style={{ background:"url('/img/heroImg.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}>
      <div className='absolute top-0 w-full h-screen bg-black/80 text-white flex flex-col justify-center'>

        <section className="h-[80vh] parent-size flex items-center">
          <div className="grid grid-cols-12 gap-y-3 subHeading-text digitalFont font-light w-full">
            <div className="col-span-12 sm:col-span-9 order-2 sm:order-1">
              <h1 className="sm:text-9xl">TECH</h1>
              <h1 className="sm:text-9xl">eXperience</h1>
              <h1 className="">Taraba 2023</h1>
            </div>
            
            <div className="col-span-12 sm:col-span-3 order-1 sm:order-2 sm:flex sm:items-end">
              <p className="text-xxs leading-normal max-w-xxs sm:max-w-fit ml-auto sm:ml-0">
                {/* Ignite Innovation! Unleash the future at our immersive tech event. Connect, explore, and shape tomorrow with industry leaders */}
                Activate Tomorrow! Join us for an interactive technology event where you can meet, discover, and build the future with industry experts.
              </p>
            </div>
          </div>
        </section>


        <div className="h-[10vh] digitalFont">
          <a href='/register' className="bg-[#000] w-48 py-3 rounded-r-md text-base text-white uppercase flex items-center justify-center gap-x-2">
            <span className="">Jalingo</span>
            <span className="text-2xl text-[#3fff00] font-normal">29</span>
            <span className="">July</span>
          </a>
          {/* <a href='/register' className="bg-[#3FFF00] px-4 py-4 rounded-r-md text-base text-white font-medium">Reserve Your Spot</a> */}
        </div>
      </div>
    </section>
  )
}

export default HeroSection