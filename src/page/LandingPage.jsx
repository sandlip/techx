import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';



const eventsArray = [
  { title: 'MODE&I TARABA HACKATHON',
    date: '13-15.11.23',
    location: 'TARABA',
    link: '/event/upcoming',
    summary: 'Leveraging problem-based learning practices to solve problems creatively and collaboratively.',
  },

  { title: 'TECH eXperience',
    date: '29.07.23',
    location: 'TARABA',
    link: '/event/past/tech-experience',
    summary: 'Showcasing the latest advancements in technology, including Artificial Intelligence, digitalization, and the opportunity to network.',
  },

  { title: 'TECH EXPOSE',
    date: '29.04.23',
    location: 'TARABA',
    link: '/event/past/tech-expose',
    summary: 'Providing a platform for attendees to learn about emerging trends and strategies for staying competitive in the tech industry.',
  },
]






const LandingPage = ({ allEvents, eventsCoverImages }) => {
  return (
    <>
      <NavBar />
      
      <section className="w-full flex flex-col justify-centeroverflow-hidden" style={{ background:"url('/img/heroImg.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}>
        <div className="bg-black/90 py-20 text-white">
          <div className="parent-size space-y-14">
            <section className="massive-text tracking-wide sm:tracking-wider sm:-space-y-8">
              <h4 className="">EVENT</h4>

              <div className="flex justify-start items-center">
                <i class="bi bi-arrow-right-short -ml-3 sm:-ml-8"></i>
                <h4 className="">LISTING</h4>
              </div>
            </section>

            <section className="grid grid-cols-12 gap-y-8 space-y-6 sm:space-y-0">
              { eventsArray.slice(0, 3).map((eventObj, index) => (
                  <aside key={index} className="col-span-12 sm:col-span-4 space-y-2 w-full max-w-sm">
                    <a href={eventObj.link} className="">
                      <div className="">
                        <h6 className="text-base"> {eventObj.date} </h6>
                        <h5 className="text-3xl"> {eventObj.title} </h5>

                        <div className="flex justify-start items-center -mt-1">
                          <i class="bi bi-arrow-right-short text-3xl"></i>
                          <h6 className=""> {eventObj.location} </h6>
                        </div>
                      </div>

                      <article className="tiny-text leading-relaxed"> {eventObj.summary} </article>
                    </a>
                  </aside>
                ))
              }
            </section>
          </div>
        </div>
      </section>

      <section className="sm:space-y-4">
        <div className="flex justify-start items-center p-7">
          <i class="bi bi-arrow-right sm:text-9xl text-3xl"></i>
          <h2 className="sm:text-9xl text-3xl">PAST</h2>
        </div>

        <div className="sm:grid grid-cols-12 gap-10 p-7 space-y-10 sm:space-y-0">
          <aside className="col-span-3 group">
            <a href="/event/upcoming" className="">
              <img src="/img/hackathon.jpg" alt="CR8 HACKATHON" className="group-hover:opacity-80 h-56 w-full"/>

              <div className="space-y-2 flex flex-col">
                <div className="flex-1">
                  <h1 className="text-3xl">MODE&I TARABA HACKATHON</h1>

                  <div className="flex justify-start items-center -mt-1">
                    <i class="bi bi-arrow-right-short text-3xl"></i>
                    <h1 className="">TARABA</h1>
                  </div>
                </div>

                <div className="text-base line-clamp-4">
                  An event that brings together people from different backgrounds and skill sets to work collaboratively on solving problems and developing new ideas.
                </div>
              </div>
            </a>
          </aside>

          <aside className="col-span-3 group">
            <a href="/event/past/tech-experience" className="">
              <img src="/img/TechX-1.JPG" alt="TECH eXperience" className="group-hover:opacity-80 h-56 w-full"/>
              
              <div className="space-y-2 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-3xl">TECH eXperience</h5>
                  
                  <div className="flex justify-start items-center -mt-1">
                    <i class="bi bi-arrow-right-short text-3xl"></i>
                    <h5 className="">TARABA</h5>
                  </div>
                </div>

                <div className="text-base line-clamp-4">
                  A gathering of industry leaders, experts, and enthusiasts to explore the latest advancements and opportunities in the realm of technology.
                </div>
              </div>
            </a>
          </aside>

          <aside className="col-span-3 group">
            <a href="/event/past/tech-expose" className="">
              <img src="/img/joinUs.jpg" alt="TECH EXPOSE" className="group-hover:opacity-80 h-56 w-full"/>

              <div className="space-y-2 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-3xl">TECH EXPOSE</h5>
                  
                  <div className="flex justify-start items-center -mt-1">
                    <i class="bi bi-arrow-right-short text-3xl"></i>
                    <h5 className="">TARABA</h5>
                  </div>
                </div>

                <div className="text-base line-clamp-4">
                  A dive into the latest trends and advancements, showcasing the transformative power of technology. Connect with like-minded individuals for growth and collaboration.
                </div>
              </div>
            </a>
          </aside>
          
          <div className="col-span-3 flex flex-col items-center">
            <div className="">
              <img src="/img/joinUs.jpg" alt="" className="" />
            </div>
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" class="animate-bounce h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 3a1 1 0 0 1 .707.293l4 4a1 1 0 0 1-1.414 1.414L11 6.414V16a1 1 0 1 1-2 0V6.414L5.707 8.707A1 1 0 0 1 4.293 7.293l4-4A1 1 0 0 1 10 3z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default LandingPage
        
    