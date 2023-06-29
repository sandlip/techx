import React from 'react';
import NavBar from '../components/Navbar';


const UpcomingEvent = () => {
  return (
    <>
      <NavBar />
      
      <div className='overflow-hidden'>
        <section className='w-screen h-screen relative' style={{ background:"url('/img/heroImg.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}>
          <div className='absolute top-0 w-full h-screen bg-black/70 text-white flex items-center'>

            <section className="parent-size space-y-20 sm:space-y-16">
              <div className="space-y-16">
                <div className="subHeading-text">
                  <h1 className="sm:text-8xl">TECH eXperience</h1>
                  <h1 className="">Taraba</h1>
                </div>

                <div className="">
                  <a href='/register' className="bg-[#FE7A67] py-3 px-4 sm:py-3.5 rounded-md text-base text-white font-medium">Reserve Your Spot</a>
                </div>
              </div>

              <div className="flex items-center sm:gap-x-10 gap-x-5">
                <section className="flex items-center gap-x-2 text-base">
                  <div className="border h-7 w-7 flex items-center justify-center rounded-full"> <i className="text-sm bi bi-calendar3"></i> </div>
                  <h2 className="font-medium">July 29, 2023</h2>
                </section>

                <section className="flex items-center gap-x-2 text-base">
                  <div className="border h-7 w-7 flex items-center justify-center rounded-full"> <i className="text-sm bi bi-geo-alt-fill"></i> </div>
                  <h2 className="font-medium">TBD</h2>
                </section>
              </div>
            </section>
          </div>
        </section>

      

        <section className="py-24 relative parent-size grid grid-cols-12 gap-y-10 sm:gap-y-20">
          <aside className="col-span-12 sm:col-span-7 relative">
            <img src="/img/joinUs.jpg" alt="" className="rounded-md w-full max-w-xl" />

            <div className="absolute top-0 w-full max-w-xl h-full bg-black/25 rounded-md"></div>

            <div className="absolute -top-6 left-4 shadow-top sm:w-[12rem] rounded-md bg-white px-5 pb-3 font-bold">
              <h6 className="gradient-text text-7xl">1</h6>
              <h6 className="text-base">Impactful Day</h6> 
            </div>
          </aside>

          <aside className="col-span-12 sm:col-span-5 p-2">
            <h2 className="subHeading-text">Join Tech eXperience Taraba</h2>
            <h2 className="subHeading-text">2023</h2>
          </aside>
          

          <aside className="col-span-12 sm:col-span-7 flex flex-col gap-y-14 sm:gap-y-0 order-4 sm:order-3 mt-14 sm:mt-0">
            <article className="sm:flex-1 w-full max-w-xl">
              Connect with like-minded individuals, professionals, and community leaders. This event offers a platform for meaningful conversations and collaborations, fostering a stronger and more vibrant community. Don't miss out on this incredible event! Mark your calendars, spread the word, and get ready to join us for a day of connection, celebration, and community building. We can't wait to see you there!
            </article>

            <div className="">
              <a href='/register' className="bg-[#003380] py-4 px-6 sm:py-3.5 rounded-md text-lg text-white font-medium">Reserve Your Spot</a>
            </div>
          </aside>

          <aside className="col-span-12 sm:col-span-5 relative max-w-sm mx-auto order-3 sm:order-4">
            <img src="/img/joinUs.jpg" alt="" className="sm:rounded-md" />

            <div className="absolute -bottom-6 right-4 shadow-2xl rounded-md bg-white pb-3 px-5 font-bold">
              <h6 className="gradient-text text-7xl">3</h6>
              <h6 className="text-base mt-2">Experienced Speakers</h6> 
            </div>
          </aside>
        </section>
      </div>
    </>
  )
}

export default UpcomingEvent
