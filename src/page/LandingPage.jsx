import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { format } from 'date-fns';







const LandingPage = ({ allEvents, eventsCoverImages }) => {
  return (
    <>
      <NavBar />
      
      <section className="flex flex-col w-full justify-centeroverflow-hidden" style={{ background:"url('/img/heroImg.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}>
        <div className="py-20 text-white bg-black/70">
          <div className="parent-size space-y-14">
            <section className="tracking-wide massive-text sm:tracking-wider sm:-space-y-8">
              <h4 className="">EVENT</h4>

              <div className="flex items-center justify-start">
                <i className="bi bi-arrow-right-short -ml-3 sm:-ml-8"></i>
                <h4 className="">LISTING</h4>
              </div>
            </section>

            <section className="grid grid-cols-12 space-y-6 gap-y-8 sm:space-y-0">
              { allEvents.map((eventObj, index) => (
                  <aside key={index} className="w-full max-w-sm col-span-12 space-y-2 sm:col-span-4">
                    <a href={`event/past/${encodeURIComponent(eventObj.eventTitle).replace(/%20/g, '-').toLowerCase()}`} className="">
                      <div className="">
                        <h6 className="text-base"> {format(new Date(eventObj.eventStartDate), 'dd.MM.yyyy')} </h6>
                        <h5 className="text-3xl"> {eventObj.eventTitle} </h5>

                        <div className="flex items-center justify-start -mt-1">
                          <i className="bi bi-arrow-right-short text-3xl"></i>
                          <h6 className=""> Taraba </h6>
                        </div>
                      </div>

                      <article className="leading-relaxed tiny-text"> {eventObj.eventSummary} </article>
                    </a>
                  </aside>
                ))
              }
            </section>
          </div>
        </div>
      </section>

      <section className="sm:space-y-4">
        <div className="flex items-center justify-start p-7">
          <i className="bi bi-arrow-right sm:text-9xl text-3xl"></i>
          <h2 className="text-3xl sm:text-9xl">PAST</h2>
        </div>

        <div className="grid-cols-12 gap-10 space-y-10 sm:grid p-7 sm:space-y-0">
          { allEvents.map((eventObj, index) => (
              <aside key={index} className="col-span-3 group">
                <a href={`event/past/${encodeURIComponent(eventObj.eventTitle).replace(/%20/g, '-').toLowerCase()}`} className="">
                  <img src={eventObj.heroImage} alt={eventObj.eventTitle} className="w-full group-hover:opacity-80"/>
    
                  <div className="flex flex-col space-y-2">
                    <div className="flex-1">
                      <h1 className="text-3xl"> {eventObj.eventTitle} </h1>
    
                      <div className="flex items-center justify-start -mt-1">
                        <i className="bi bi-arrow-right-short text-3xl"></i>
                        <h1 className="">TARABA</h1>
                      </div>
                    </div>
    
                    <div className="text-base line-clamp-4"> {eventObj.eventSummary} </div>
                  </div>
                </a>
              </aside>
            ))
          }
          
          <div className="flex flex-col items-center col-span-3">
            <div className="">
              <img src="/img/joinUs.jpg" alt="" className="" />
            </div>
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 0 1 .707.293l4 4a1 1 0 0 1-1.414 1.414L11 6.414V16a1 1 0 1 1-2 0V6.414L5.707 8.707A1 1 0 0 1 4.293 7.293l4-4A1 1 0 0 1 10 3z" clipRule="evenodd" />
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
        
    