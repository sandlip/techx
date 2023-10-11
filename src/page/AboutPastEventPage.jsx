import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutPastEventPage = () => {


  return (
    <>
      <NavBar />
      
      <div className="min-h-screen overflow-hidden space-y-8">
        <section className="grid grid-cols-12">
          <aside className="col-span-12 sm:col-span-9 h-screen" style={{ background:"url('https://lh3.googleusercontent.com/pw/ADCreHf2GxM0XVjxw9YlBynkpYYHcPp-uqUWs8M2ofVxM1ziZFram1pkE1nJpcTgZ3nM4NzF8pmxGPdMqRIFxt9wkmXPbWSOMoAou6s_-nZAd1EN1NnODGM=w2400')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}></aside>

          <aside className="col-span-12 sm:col-span-3 h-full flex items-center">
            <div className="px-4 space-y-4">
              <h1 className="text-6xl">Tech eXperience</h1>

              <div className="space-y-1">
                <h6 className="">July 29, 2023</h6>
                <h6 className="leading-tight">DSK Foundation, beside Fidelity Bank, Jalingo, Taraba State</h6>
              </div>
            </div>
          </aside>
        </section>

        <section className="px-4">
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
              <h2 className="subHeading-text">Tech Expose Taraba</h2>
              <h2 className="subHeading-text">2023</h2>
            </aside>
            

            <aside className="col-span-12 sm:col-span-7 flex flex-col gap-y-14 sm:gap-y-0 order-4 sm:order-3 mt-14 sm:mt-0">
              <article className="sm:flex-1 w-full max-w-xl">
                Connect with like-minded individuals, professionals, and community leaders. This event offers a platform for meaningful conversations and collaborations, fostering a stronger and more vibrant community. Don't miss out on this incredible event! Mark your calendars, spread the word, and get ready to join us for a day of connection, celebration, and community building. We can't wait to see you there!
              </article>
            </aside>

            <aside className="col-span-12 sm:col-span-5 relative max-w-sm mx-auto order-3 sm:order-4">
              <img src="/img/joinUs.jpg" alt="" className="sm:rounded-md" />

              <div className="absolute -bottom-6 right-4 shadow-2xl rounded-md bg-white pb-3 px-5 font-bold">
                <h6 className="gradient-text text-7xl">3</h6>
                <h6 className="text-base text-black mt-2">Experienced Speakers</h6> 
              </div>
            </aside>
          </section>
        
          <div className="w-full max-w-5xl mx-auto space-y-14 pb-24">
            <h4 className="digitalFont subHeading-text">3 SPEAKERS</h4>

            <div className="grid grid-cols-12 gap-y-8 sm:gap-x-8">
              <aside className="col-span-12 sm:col-span-4 bg-white rounded-md overflow-hidden">
                <section className="h-96 overflow-hidden">
                  <div className="w-full h-96" style={{ background: "url('/img/Gideon Nonso.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                </section>

                <div className="p-4 text-black">
                  <h1 className="text-2xl font-semibold">Gideon Nonso</h1>
                  <h6 className="text-base leading-none">Taraba State Commissioner of Digital Economy and Innovation</h6>
                </div>
              </aside>
              
              <aside className="col-span-12 sm:col-span-4 bg-white rounded-md overflow-hidden">
                <section className="h-96 overflow-hidden">
                  <div className="w-full h-96" style={{ background: "url(https://i.quotev.com/2kr3itdgaaaa.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                </section>

                <div className="p-4 text-black">
                  <h1 className="text-2xl font-semibold">Penelope</h1>
                  <h6 className="text-base leading-none">AI voiceover character from Revoicer</h6>
                </div>
              </aside>
              
              <aside className="col-span-12 sm:col-span-4 bg-white rounded-md overflow-hidden">
                <section className="h-96 overflow-hidden">
                  <div className="w-full h-96" style={{ background: "url('/img/team/jon.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                </section>

                <div className="p-4 text-black">
                  <h1 className="text-2xl font-semibold">John Okeke</h1>
                  <h6 className="text-base leading-none">Founder, Sandlip Digital Consulting</h6>
                </div>
              </aside>
            </div>
            {/* <div className="grid grid-cols-12 gap-y-8 sm:gap-x-8">
              <aside className="col-span-12 sm:col-span-4 bg-white rounded-md overflow-hidden">
                <section className="h-96 overflow-hidden">
                  <div className="w-full h-96" style={{ background: "url('/img/Lucky.jpeg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                </section>

                <div className="py-4 text-black">
                  <h1 className="text-2xl font-semibold">Lucky Hassan Joseph</h1>
                  <h6 className="text-base leading-none">Student, Mobile Developer and Tech Enthusiast</h6>
                </div>
              </aside>

              <aside className="col-span-12 sm:col-span-4 bg-white rounded-md overflow-hidden">
                <section className="h-96 overflow-hidden">
                  <div className="w-full h-96" style={{ background: "url('/img/Tasiu.jpeg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "top" }}></div>
                </section>

                <div className="py-4 text-black">
                  <h1 className="text-2xl font-semibold">Tasiu Ibrahim</h1>
                  <h6 className="text-base leading-none">Frontend Web Developer, and Community Builder</h6>
                </div>
              </aside>
              
              <aside className="col-span-12 sm:col-span-4 bg-white rounded-md overflow-hidden">
                <section className="h-96 overflow-hidden">
                  <div className="w-full h-96" style={{ background: "url('/img/team/jon.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "top" }}></div>
                </section>

                <div className="py-4 text-black">
                  <h1 className="text-2xl font-semibold">John Okeke</h1>
                  <h6 className="text-base leading-none">Founder, Sandlip Digital Consulting</h6>
                </div>
              </aside>
            </div> */}
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}

export default AboutPastEventPage