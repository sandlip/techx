import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import LandingPage from './page/LandingPage';
import RegisterPage from "./page/RegisterPage";
import Upcoming from "./page/Upcoming";
import TermsCondition from './page/TermsCondition';
import AboutPastEventPage from './page/AboutPastEventPage';
import axios from 'axios';
import SplashPage from "./page/SplashPage";



const MySwal = withReactContent(Swal)




function App() {
  const [allEvents, setAllEvents] = useState([])
  const [eventsCoverImages, setEventsCoverImages] = useState([])
  const [pageIsLoading, setPageIsLoading] = useState(true)





  useEffect(() => {
    fetchAllEvents()
  }, [])
  





  const fetchAllEvents = async () => {
    return axios.get(process.env.REACT_APP_DB_URL, {
      headers: {'Content-Type': null},
      params: {eventType: "getEventEntries"}
    })
    .then(response => {
      // console.log('axios response', response.data);
      const sortedEvents = sortEventsInAscOrder(response.data);

      const heroImages = [...sortedEvents].map(eventItem => eventItem.heroImage)
      setAllEvents(sortedEvents)
      setEventsCoverImages(heroImages)
      setPageIsLoading(false)
    })
    .catch(axiosFetchAllEventsError => {
      console.log('axiosFetchAllEventsError', axiosFetchAllEventsError);
      setPageIsLoading(false)
    })
  }


  const sortEventsInAscOrder = (eventsArray) => {
    const sortedArrayOfEvents = [...eventsArray].sort((currentEvent, nextEvent) => nextEvent?.eventStartDate - currentEvent?.eventStartDate);

    console.log('sortedArrayOfEvents', sortedArrayOfEvents);
    return sortedArrayOfEvents;
  }









  return (
    pageIsLoading === true ?
      <SplashPage />
    :
      <div className="text-lg">
        <BrowserRouter>
          <Routes>
            
            <Route
              path="/"
              element={<LandingPage
                allEvents={allEvents}
                eventsCoverImages={eventsCoverImages}
              />}
            />
            
            <Route
              path="/event/past/:eventTitle"
              element={<AboutPastEventPage
                allEvents={allEvents}
              />}
            />

            <Route 
              path="/event/upcoming" 
              element={<Upcoming />}
            />

            <Route
              path="/cr8_registration"
              element={<RegisterPage
                MySwal={MySwal}
              />}
            />

            <Route 
              path="/termscondition"
              element={<TermsCondition />}
              />

          </Routes>
        </BrowserRouter>
      </div>
  );
}


export default App;
