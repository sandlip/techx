import { useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "../components/Footer"
import NavBar from "../components/Navbar"



gsap.registerPlugin(ScrollTrigger)










const TechX = () => {

  const containerRef = useRef(null)
  const contentRef = useRef(null)




  useLayoutEffect(() => {
    if (window.innerWidth > 768) {
      const timelineAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: `+=6000`
        }
      })

      timelineAnimation.to(contentRef.current, { y: "-75%" })

      return () => timelineAnimation.revert()
    }
  }, [])







  return (
    <>
      <NavBar />
      
      <div className='overflow-hidden'>
        <section ref={containerRef} className='w-screen h-screen sm:overscroll-y-auto overflow-hidden text-white flex flex-col justify-center relative' style={{ background:"url('/img/heroImg.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}>
      
          <section ref={contentRef} className="overflow-auto w-full bg-black/80 sm:absolute sm:top-0">
            <section className="min-h-screen">
              <section className="h-[85vh] parent-size flex items-center">
                <div className="grid grid-cols-12 gap-y-3 subHeading-text digitalFont font-light w-full">
                  <div className="col-span-12 sm:col-span-9 sm:row-span-3 order-2 sm:order-1">
                    <h1 className="sm:text-9xl">TECH</h1>
                    <h1 className="sm:text-9xl">eXperience</h1>
                    <h1 className="">Taraba 2023</h1>
                  </div>
                  
                  <div className="col-span-12 sm:col-span-3 sm:row-span-2 order-1 sm:order-2 sm:flex sm:items-end">
                    <p className="text-xxs leading-normal max-w-xxs sm:max-w-fit ml-auto sm:ml-0">
                      {/* Ignite Innovation! Unleash the future at our immersive tech event. Connect, explore, and shape tomorrow with industry leaders */}
                      Activate Tomorrow! Join us for an interactive technology event where you can meet, discover, and build the future with industry experts.
                    </p>
                  </div>
                  
                  <div className="col-span-12 sm:col-span-3 order-3 sm:flex sm:items-end">
                    <a href='/register' className="bg-[#003380] py-3 px-6 rounded-md text-lg text-white font-medium">Reserve Your Spot</a>
                  </div>
                </div>
              </section>


              <div className="h-[10vh] digitalFont">
                <h6 className="space-x-1">
                  <i className="bi bi-geo-alt"></i>
                  <span className="font-light">DSK Foundation, beside Fidelity Bank, Jalingo, Taraba State</span>
                </h6>
                
                <a href='/register' className="bg-[#000] w-48 py-3 rounded-r-md text-base text-white uppercase flex items-center justify-center gap-x-2">
                  <span className="">Jalingo</span>
                  <span className="text-2xl text-[#3fff00] font-normal">29</span>
                  <span className="">July</span>
                </a>
                {/* <a href='/register' className="bg-[#3FFF00] px-4 py-4 rounded-r-md text-base text-white font-medium">Reserve Your Spot</a> */}
              </div>
            </section>


            <section className="min-h-screen parent-size flex items-center">
              <p className="w-full max-w-sm ml-auto uppercase font-normal text-sm">
                Keynote Speeches, Interactive Sessions, Emerging Technologies Showcase, Networking Opportunities, Tech Talks, Competitions, Startup Showcase, Tech Ethics and Impact Discussions, Tech Expo, Industry Insights
              </p>
            </section>


            <section className="min-h-screen parent-size space-y-8">
              <h4 className="digitalFont subHeading-text">INSIGHT</h4>

              <div className="w-full max-w-3xl mx-auto border-8 border-white rounded-lg h-[30rem]" style={{ background: "url(/img/insight.gif)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
            </section>


            <section className="min-h-screen flex items-center py-24">
              <div className="parent-size space-y-14">
                <h4 className="digitalFont subHeading-text">3 SPEAKERS</h4>

                <div className="grid grid-cols-12 gap-8">
                  <aside className="col-span-12 sm:col-span-4 bg-white rounded-md overflow-hidden">
                    <section className="h-96 overflow-hidden">
                      <div className="w-full h-96" style={{ background: "url('/img/Gideon Nonso.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                    </section>

                    <div className="p-4 text-black">
                      <h1 className="text-2xl font-semibold">Gideon Nonso</h1>
                      <h6 className="text-base leading-none">Taraba State Commissioner of Digital Economy and Innovation</h6>
                    </div>
                    {/* <img src="/img/joinUs.jpg" alt="" className="w-full max-w-xl" /> */}
                  </aside>
                  
                  <aside className="col-span-12 sm:col-span-4 bg-white rounded-md overflow-hidden">
                    <section className="h-96 overflow-hidden">
                      <div className="w-full h-96" style={{ background: "url(https://i.quotev.com/2kr3itdgaaaa.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                    </section>

                    <div className="p-4 text-black">
                      <h1 className="text-2xl font-semibold">Penelope</h1>
                      <h6 className="text-base leading-none">AI voiceover character from Revoicer</h6>
                    </div>
                    {/* <img src="https://www.baps.org.uk/content/uploads/2020/05/mystery-person.jpg" alt="" className="w-full max-w-lg" /> */}
                  </aside>
                  
                  <aside className="col-span-12 sm:col-span-4 bg-white rounded-md overflow-hidden">
                    <section className="h-96 overflow-hidden">
                      <div className="w-full h-96" style={{ background: "url('/img/team/jon.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                    </section>

                    <div className="p-4 text-black">
                      <h1 className="text-2xl font-semibold">John Okeke</h1>
                      <h6 className="text-base leading-none">Founder, Sandlip Digital Consulting</h6>
                    </div>
                    {/* <img src="/img/joinUs.jpg" alt="" className="w-full max-w-xl" /> */}
                  </aside>
                </div>
              </div>
            </section>
          </section>
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
      <div className="flex p-2">
        <button className=" max-w-xs  ml-auto text-lg bg-[#003380] py-4 px-6 sm:py-3.5 rounded-md text-white font-medium">
        <a href="/upcoming" className="">Upcoming Event</a>
        </button>
      </div>

      <Footer />
    </>
  )
}

export default TechX
