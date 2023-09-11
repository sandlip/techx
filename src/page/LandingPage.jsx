import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


const LandingPage = () => {
  return (
    <>
      <NavBar />
      
      <div className='overflow-hidden'>
        <section className="w-full flex flex-col justify-center" style={{ background:"url('/img/heroImg.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}>
          <section className="bg-black/90 py-20">
            <section className="flex items-center p-5">
              <div className="sm:col-span-2 text-gray-400 sm:text-white subHeading-text mt-10">
                <h1 className="sm:text-9xl text-3xl">EVENT</h1>
                <div className="flex justify-start items-center">
                  <i class="bi bi-arrow-right sm:text-9xl hidden sm:block"></i>
                 <h1 className="sm:text-9xl text-3xl">LISTING</h1>
                 <i class="bi bi-arrow-down sm:text-9xl sm:hidden text-3xl"></i>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-12 text-white p-5 gap-y-8 space-y-6 sm:space-y-0">
              <div className="col-span-12 sm:col-span-4 space-y-2 px-2 sm:px-10">

                  <div className="">
                    <h6 className="text-base"> 29.04.23 </h6>
                    <h1 className="text-3xl">TECH EXPOSE</h1>


                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h6 className="">TARABA</h6>
                    </div>
                  </div>

                  <article className="text-base">
                    Providing a platform for attendees to learn about emerging trends and strategies for staying competitive in the tech industry.
                  </article>
              </div>

              <div className="col-span-12 sm:col-span-4 space-y-2 px-2 sm:px-10">

                  <div className="">
                    <h6 className="text-base"> 29.07.23 </h6>
                    <h1 className="text-3xl">TECH eXperience</h1>

                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h6 className="">TARABA</h6>
                    </div>
                  </div>

                  <article className="text-base">
                    Showcasing the latest advancements in technology, including Artificial Intelligence, digitalization, and the opportunity to network.
                  </article>
              </div>
              
              <div className="col-span-12 sm:col-span-4 space-y-2 px-2 sm:px-10">

                  <div className="">
                    <h6 className="text-base"> 09-11.11.23 </h6>
                    <h5 className="text-3xl">CR8 HACKATHON</h5>


                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h6 className="">TARABA</h6>
                    </div>
                  </div>

                  <article className="text-base">
                    Leveraging problem-based learning practices to solve problems creatively and collaboratively.
                  </article>
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
              <a href="/techExpose" className="">
                <img src="/img/joinUs.jpg" alt="" className="hover:opacity-80" />
                <div className="space-y-2">
                  <div className="sm:text-3xl">
                    <h5 className="">TECH EXPOSE</h5>
                    
                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h5 className="">TARABA</h5>
                    </div>
                  </div>

                  <article className="text-base">
                    A dive into the latest trends and advancements, showcasing the transformative power of technology. Connect with like-minded individuals for growth and collaboration.
                  </article>
                </div>
              </a>
            </div>
           
            <div className="col-span-3">
              <a href="/techX" className="">
                <img src="/img/TechX-1.JPG" alt="" className="hover:opacity-80" />
                
                <div className="space-y-2">
                  <div className="sm:text-3xl">
                    <h5 className="">TECH eXperience</h5>
                    
                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h5 className="">TARABA</h5>
                    </div>
                  </div>

                  <article className="text-base">
                    A gathering of industry leaders, experts, and enthusiasts to explore the latest advancements and opportunities in the realm of technology.
                  </article>
                </div>
              </a>
            </div>
            <div className="col-span-3">
              <a href="/upcoming" className="">
                <img src="/img/hackathon.jpg" alt="" className="hover:opacity-80" />
                <div className="space-y-2">
                  <div className="sm:text-3xl">
                    <h1 className="">CR8 Taraba</h1>
                    <div className="flex justify-start items-center">
                      <i class="bi bi-arrow-right text-3xl"></i>
                      <h1 className="">Hackathon</h1>
                    </div>
                  </div>
                  <div className="text-base">
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
        
    