import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


const LandingPage = () => {
  return (
    <>
      <NavBar />
      
      <div className='overflow-hidden'>
        <section className=" w-full flex flex-col justify-center" style={{ background:"url('/img/heroImg.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}>
          <section className="bg-black/80">
            <section className="flex items-center p-5 py-20">
              <div className="sm:col-span-2 text-white subHeading-text">
                <h1 className="sm:text-9xl text-3xl">EVENT</h1>
                <div className="flex justify-start items-center">
                  <i class="bi bi-arrow-right sm:text-9xl hidden sm:block"></i>
                 <h1 className="sm:text-9xl text-3xl">LISTING</h1>
                 <i class="bi bi-arrow-down sm:text-9xl sm:hidden text-3xl"></i>
                </div>
              </div>
            </section>
            <div className="sm:grid grid-cols-12 text-white p-5 gap-10 space-y-4 sm:space-y-0">
              <div className="col-span-4">
                <div className="space-y-4">
                  <div className="">
                    <p className="">29.04.23</p>
                  </div>
                  <div className="sm:text-3xl">
                    <h1 className="">TECH EXPOSE</h1>
                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h1 className="">TARABA</h1>
                    </div>
                  </div>
                  <div className="text-sm w-full sm:w-2/3">
                  Providing a platform for attendees to learn about emerging trends and strategies for staying competitive in the tech industry.
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="space-y-4">
                  <div className="">
                    <p className="">29.07.23</p>
                  </div>
                  <div className="sm:text-3xl">
                    <h1 className="">TECH eXperience</h1>
                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h1 className="">TARABA</h1>
                    </div>
                  </div>
                  <div className="text-sm w-full sm:w-2/3">
                  Showcasing the latest advancements in technology, including Artificial Intelligence, digitalization, and the opportunity to network.
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="space-y-4">
                  <div className="">
                    <p className="">09-11.11.23</p>
                  </div>
                  <div className="sm:text-3xl">
                    <h1 className="">CR8 TARABA</h1>
                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h1 className="">HACKATHON</h1>
                    </div>
                  </div>
                  <div className="text-sm w-full sm:w-2/3">
                  Leveraging problem-based learning practices to solve problems creatively and collaboratively.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="sm:space-y-4">
          <div className="flex justify-start items-center p-7">
            <i class="bi bi-arrow-right sm:text-9xl text-3xl"></i>
            <h2 className="sm:text-9xl text-3xl">PAST</h2>
          </div>

          <div className="sm:grid grid-cols-12 gap-10 p-7 space-y-10 sm:space-y-0">
            <div className="col-span-3" >
              <a href="/upcoming" className="">
                <img src="/img/joinUs.jpg" alt="" className="hover:opacity-80" />
                <div className="space-y-2">
                  <div className="sm:text-3xl">
                    <h1 className="">TECH EXPOSE</h1>
                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h1 className="">TARABA</h1>
                    </div>
                  </div>
                  <div className="text-sm">
                  A dive into the latest trends and advancements, showcasing the transformative power of technology. Connect with like-minded individuals for growth and collaboration.
                  </div>
                </div>
              </a>
            </div>
           
            <div className="col-span-3">
              <a href="/upcoming" className="">
                <img src="/img/TechX-1.JPG" alt="" className="hover:opacity-80" />
                <div className="space-y-2">
                  <div className="sm:text-3xl">
                    <h1 className="">TECH eXperience</h1>
                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h1 className="">TARABA</h1>
                    </div>
                  </div>
                  <div className="text-sm">
                  A gathering of industry leaders, experts, and enthusiasts to explore the latest advancements and opportunities in the realm of technology.
                  </div>
                </div>
              </a>
            </div>
            <div className="col-span-3">
              <a href="/upcoming" className="">
                <img src="/img/joinUs.jpg" alt="" className="hover:opacity-80" />
                <div className="space-y-2">
                  <div className="sm:text-3xl">
                    <h1 className="">CR8 Taraba</h1>
                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h1 className="">Hackathon</h1>
                    </div>
                  </div>
                  <div className="text-sm">
                  An event that brings together people from different backgrounds and skill sets to work collaboratively on solving problems and developing new ideas.
                  </div>
                </div>
              </a>
            </div>
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
      </div>
      <Footer />
    </>
  )
}

export default LandingPage
        
    