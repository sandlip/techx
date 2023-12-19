import { useEffect, useState } from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

const AboutPastEventPage = ({ allEvents }) => {

  const [eventInfo, setEventInfo] = useState({})
  const urlParam = useParams('eventTitle')





  useEffect(() => {
    const formattedURL = (urlParam.eventTitle).replace(/-/g, ' ').toLowerCase()
    const eventObj = allEvents.find(eventObj => (eventObj.eventTitle).toLowerCase() === formattedURL)

    setEventInfo(eventObj)
  }, [urlParam, allEvents])





  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate
  }




  const calculateNumberOfDaysForEvent = (startDate, endDate) => {
    // Calculate the time difference in milliseconds
    const timeDifference = Math.abs(endDate - startDate);

    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const daysDifference = timeDifference / (24 * 60 * 60 * 1000);

    return daysDifference < 1 ? 1 : daysDifference + 1;
  }
  







  return (
    <>
      <NavBar />
      
      <div className="min-h-screen space-y-8 overflow-hidden">
        <section className="grid grid-cols-12">
          {/* <aside className="h-screen col-span-12 sm:col-span-9" style={{ background:`url('https://lh3.googleusercontent.com/pw/ADCreHf2GxM0XVjxw9YlBynkpYYHcPp-uqUWs8M2ofVxM1ziZFram1pkE1nJpcTgZ3nM4NzF8pmxGPdMqRIFxt9wkmXPbWSOMoAou6s_-nZAd1EN1NnODGM=w2400')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></aside> */}
          <aside className="min-h-screen col-span-12 bg-no-repeat bg-cover sm:col-span-9" style={{ background:`url('${eventInfo?.heroImage}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></aside>

          <aside className="flex items-center h-full col-span-12 sm:col-span-3">
            <div className="px-4 space-y-4">
              <h1 className="text-6xl">{eventInfo.eventTitle}</h1>

              <div className="space-y-1">
                <h6 className="">{ formatDate(eventInfo.eventStartDate) }</h6>
                <h6 className="leading-tight">{ eventInfo.eventLocation }</h6>
              </div>
            </div>
          </aside>
        </section>

        <section className="px-4">
          <section className="relative grid grid-cols-12 py-24 parent-size gap-y-10 sm:gap-y-20">
            <aside className="relative col-span-12 sm:col-span-7">
              <img src={eventInfo?.highLightImage} alt="" className="w-full max-w-xl rounded-md" />

              <div className="absolute -top-6 left-4 shadow-top sm:w-[12rem] rounded-md bg-white px-5 pb-3 font-bold">
                <h6 className="gradient-text text-7xl">{ calculateNumberOfDaysForEvent(eventInfo?.eventStartDate, eventInfo?.eventEndDate) }</h6>
                <h6 className="text-base text-black">Impactful Day</h6> 
              </div>
            </aside>

            <aside className="col-span-12 p-2 sm:col-span-5">
              <h2 className="subHeading-text">{ eventInfo?.eventTitle } Taraba</h2>
              <h2 className="subHeading-text">{ formatDate(eventInfo?.eventStartDate).split(',')[1] }</h2>
            </aside>
            

            <aside className="flex flex-col order-4 col-span-12 sm:col-span-7 gap-y-14 sm:gap-y-0 sm:order-3 mt-14 sm:mt-0">
              <article className="w-full max-w-xl sm:flex-1">
                Connect with like-minded individuals, professionals, and community leaders. This event offers a platform for meaningful conversations and collaborations, fostering a stronger and more vibrant community. Don't miss out on this incredible event! Mark your calendars, spread the word, and get ready to join us for a day of connection, celebration, and community building. We can't wait to see you there!
              </article>
            </aside>

            <aside className="relative order-3 max-w-sm col-span-12 mx-auto sm:col-span-5 sm:order-4">
              <img src={eventInfo?.teamImage} alt="" className="sm:rounded-md" />

              <div className="absolute px-5 pb-3 font-bold bg-white rounded-md shadow-2xl -bottom-6 right-4">
                <h6 className="gradient-text text-7xl">{ (eventInfo?.eventSpeakers)?.length }</h6>
                <h6 className="mt-2 text-base text-black">Experienced Speakers</h6> 
              </div>
            </aside>
          </section>
        
          <div className="w-full max-w-5xl pb-24 mx-auto space-y-14">
            <h4 className="digitalFont subHeading-text">{ (eventInfo?.eventSpeakers)?.length } SPEAKERS</h4>

            <div className="grid grid-cols-12 gap-y-8 sm:gap-x-8">
              {(eventInfo?.eventSpeakers)?.map((eventSpeaker, index) => (
                <aside key={index} className="col-span-12 overflow-hidden bg-white rounded-md sm:col-span-4">
                  <section className="overflow-hidden h-96">
                    <div className="w-full h-96" style={{ background: `url('${eventSpeaker?.image}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                  </section>

                  <div className="py-4 text-black">
                    <h1 className="text-2xl font-semibold">{eventSpeaker.name}</h1>
                    <h6 className="text-base leading-none">{eventSpeaker.office}</h6>
                  </div>
                </aside>
              ))}
            </div>
          </div>
        </section>

        <a href={eventInfo.eventReport} target='_blank' rel="noreferrer" className="fixed bottom-10 right-0 tiny-text font-medium bg-[#003380] text-white px-2 py-2 rounded-full">Download Report</a>
      </div>
      
      <Footer />
    </>
  )
}

export default AboutPastEventPage