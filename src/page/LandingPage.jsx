import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import NavBar from "../components/Navbar"



const LandingPage = () => {
  return (
    <>
      <NavBar />
      
      <div className='overflow-hidden'>
        <HeroSection />


        <section className="min-h-screen parent-size flex items-center">
          <p className="w-full max-w-sm ml-auto uppercase font-normal text-sm">
            Keynote Speeches, Interactive Sessions, Emerging Technologies Showcase, Networking Opportunities, Tech Talks, Competitions, Startup Showcase, Tech Ethics and Impact Discussions, Tech Expo, Industry Insights
          </p>
        </section>


        <section className="min-h-screen parent-size space-y-8">
          <h4 className="digitalFont subHeading-text">INSIGHT</h4>

          <div className="w-full max-w-3xl mx-auto border-8 border-white rounded-lg h-[30rem]" style={{ background: "url(/img/joinUs.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
        </section>


        <section className="min-h-screen flex items-center">
          <div className="parent-size space-y-14">
            <h4 className="digitalFont subHeading-text">3 SPEAKERS</h4>

            <div className="grid grid-cols-12 gap-x-6">
              <aside className="col-span-12 sm:col-span-4">
                <div className="w-full h-96" style={{ background: "url(https://www.baps.org.uk/content/uploads/2020/05/mystery-person.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                {/* <img src="/img/joinUs.jpg" alt="" className="w-full max-w-xl" /> */}
              </aside>
              
              <aside className="col-span-12 sm:col-span-4">
                <div className="w-full h-96" style={{ background: "url(https://i.quotev.com/2kr3itdgaaaa.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                {/* <img src="https://www.baps.org.uk/content/uploads/2020/05/mystery-person.jpg" alt="" className="w-full max-w-lg" /> */}
              </aside>
              
              <aside className="col-span-12 sm:col-span-4">
                <div className="w-full h-96" style={{ background: "url(https://www.baps.org.uk/content/uploads/2020/05/mystery-person.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                {/* <img src="/img/joinUs.jpg" alt="" className="w-full max-w-xl" /> */}
              </aside>
            </div>
          </div>
        </section>

      

        <section className="py-24 relative parent-size grid grid-cols-12 gap-y-10 sm:gap-y-20">
          <aside className="col-span-12 sm:col-span-7 relative">
            <img src="/img/joinUs.jpg" alt="" className="rounded-md w-full max-w-xl" />

            <div className="absolute top-0 w-full max-w-xl h-full bg-black/25 rounded-md"></div>

            <div className="absolute -top-6 left-4 shadow-top sm:w-[12rem] rounded-md bg-white px-5 pb-3 font-bold">
              <h6 className="gradient-text text-7xl">1</h6>
              <h6 className="text-base text-black">Impactful Day</h6> 
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
              <h6 className="text-base text-black mt-2">Experienced Speakers</h6> 
            </div>
          </aside>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default LandingPage