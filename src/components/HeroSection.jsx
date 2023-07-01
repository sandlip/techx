import { useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger)







const HeroSection = () => {

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

          <div className="w-full max-w-3xl mx-auto border-8 border-white rounded-lg h-[30rem]" style={{ background: "url(/img/joinUs.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
        </section>


        <section className="min-h-screen flex items-center py-24">
          <div className="parent-size space-y-14">
            <h4 className="digitalFont subHeading-text">3 SPEAKERS</h4>

            <div className="grid grid-cols-12 gap-6">
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
      </section>
    </section>
  )
}

export default HeroSection