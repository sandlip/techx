import React from 'react';


const UpcomingEvent = () => {
  return (
    <div className='space-y-20 py-2 overflow-hidden'>
      <div className='w-full h-screen relative' 
        style={{ background:"url('/img/heroImg.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}>
        <div className='absolute top-0 w-full h-screen bg-gradient-to-br from-[#003380]/60 via-[#003380]/60 to-[#3fff00]/80 flex items-center'>
            <section className="font-bold bg-gray-900/25 p-5 w-full max-w-sm mx-auto uppercase">
              <div className="text-white flex justify-center flex-col items-center">
                <h2 className="text-4xl">taraba tech</h2>
                <h2 className='text-4xl'>expose</h2>
              </div> 
              <div className="bg-white flex justify-center shadow-lg rounded-sm">
                <h2 className="bg-gradient-to-r from-[#3fff00] to-[#003380] text-transparent bg-clip-text">July 29, 2023</h2>
              </div>
              <div className="flex justify-center">
                <h2 className="text-white font-bold text-6xl">2023</h2>
              </div>
            </section>
        </div>
      </div>
      <section className="py-5 space-y-5 sm:space-y-20 relative">
        <div className="grid grid-cols-12 text-base">
          <div className="col-span-12 sm:col-span-6 max-w-lg mx-auto">
            <img src="/img/joinUs.jpg" alt="" className="sm:rounded-md" />
            <div className="absolute top-3 left-2 sm:top-3 sm:left-40 shadow-lg rounded-md bg-white px-5 pb-3">
              <h2 className="bg-gradient-to-b from-[#3fff00] to-[#003380] text-transparent bg-clip-text font-bold text-4xl">1</h2>
              <h2 className="">impactful Day</h2> 
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 p-2 sm:max-w-lg sm:mx-auto">
            <h2 className="sm:text-6xl font-bold">Be A Part Of The Taraba Tech Expose 2023</h2>
          </div>
        </div>
        <div className="grid grid-cols-12 text-base">
          <div className="col-span-12 sm:col-span-6 space-y-5 sm:space-y-28 max-w-lg mx-auto p-2 sm:p-0">
            <h2 className="text-lg">Connect with like-minded individuals, professionals, and community leaders. This event offers a platform for meaningful conversations and collaborations, fostering a stronger and more vibrant community. Don't miss out on this incredible event! Mark your calendars, spread the word, and get ready to join us for a day of connection, celebration, and community building. We can't wait to see you there!</h2>
            <button className="flex justify-center items-center bg-gradient-to-r from-[#3fff00] to-[#003380] p-3 rounded-md text-white">Reserve Your Spot</button>
          </div>
          <div className="col-span-12 sm:col-span-6 relative max-w-lg mx-auto">
          <img src="/img/joinUs.jpg" alt="" className="sm:rounded-md" />
            <div className="absolute bottom-0 left-56 sm:top-[76%] sm:left-[70%] shadow-2xl rounded-md bg-white px-5">
              <h2 className="bg-gradient-to-b from-[#3fff00] to-[#003380] text-transparent bg-clip-text font-bold text-4xl">3</h2>
              <h2 className="w-min">Experienced Speakers</h2> 
            </div>
          </div>
        </div>
      </section>
   </div>
  )
}

export default UpcomingEvent
