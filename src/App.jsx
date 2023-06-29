import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Footer from './components/Footer';
import LandingPage from './page/LandingPage';
import UpcomingEvent from './page/UpcomingEvent';
import RegisterPage from "./page/RegisterPage";


const MySwal = withReactContent(Swal)


function App() {
  const [registrantInfo, setRegistrantInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    expectation: "",
  })
  const [formIsSubmitting, setFormIsSubmitting] = useState(false)



  


  const postNewEntry = async () => {
    setFormIsSubmitting(true)

    const userInfo = [ `${registrantInfo.firstName} ${registrantInfo.lastName}`, registrantInfo.email, registrantInfo.phone, registrantInfo.expectation ]

    if (!registrantInfo.firstName) {
        setFormIsSubmitting(false)
        MySwal.fire({ icon: 'info', text: "Please provide first name", color: "#000000", confirmButtonColor: "#003380" })
        return
    } else if (!registrantInfo.lastName) {
        setFormIsSubmitting(false)
        MySwal.fire({ icon: 'info', text: "Please provide last name", color: "#000000", confirmButtonColor: "#003380" })
        return
    } else if (!registrantInfo.phone) {
        setFormIsSubmitting(false)
        MySwal.fire({ icon: 'info', text: "Please provide your phone number", color: "#000000", confirmButtonColor: "#003380" })
        return
    }
    

    await axios.get(process.env.REACT_APP_DB_URL)
    .then(participants => {
      const attendeeExists = checkIfAttendeeExists(participants.data.attendees)
      const sponsorExists = checkIfSponsorExists(participants.data.sponsors)

      if (attendeeExists.value === true) {
        setFormIsSubmitting(false)
        MySwal.fire({ icon: 'info', text: attendeeExists.message, color: "#000000", confirmButtonColor: "#003380" })
        return
      }

      if (sponsorExists.value === true) {
        setFormIsSubmitting(false)
        MySwal.fire({ icon: 'info', text: sponsorExists.message, color: "#000000", confirmButtonColor: "#003380" })
        return
      }



      axios.post(process.env.REACT_APP_DB_URL, { userInfo }, { headers: {'Content-Type': null} })
      .then(response => {
        // console.log(response.data);
        showSWAL('Your spot is reserved!')
        setFormIsSubmitting(false)
        setRegistrantInfo({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          expectation: "",
        });
      })
      .catch(postEntryError => {
        console.log("postEntryError", postEntryError);
        setFormIsSubmitting(false);
      })
    })
    .catch(fetchRegisteredParticipantsError => {
      console.log('fetchRegisteredParticipantsError', fetchRegisteredParticipantsError.message);
      setFormIsSubmitting(false)
    })
  }





  const checkIfAttendeeExists = (arrayToLoop) => {
    const attendeeEmailExists = arrayToLoop.find(({ Email }) => Email === registrantInfo.email);
    const attendeePhoneExists = arrayToLoop.find(({ Phone }) => Phone === registrantInfo.phone);


    if (attendeeEmailExists) {
      return { value:true, message: `${registrantInfo.email} is already registered to an attendee`}
    } else if (attendeePhoneExists) {
      return { value:true, message: `${registrantInfo.phone} is already registered to an attendee`}
    } else {
      return { value:false, message: ""}
    }
  }





  const checkIfSponsorExists = (arrayToLoop) => {
    const sponsorEmailExists = arrayToLoop.find(({ Email }) => Email === registrantInfo.email);
    const sponsorPhoneExists = arrayToLoop.find(({ Phone }) => Phone === registrantInfo.phone);


    if (sponsorEmailExists) {
      return { value:true, message: `${registrantInfo.email} is already registered to a sponsor`}
    } else if (sponsorPhoneExists) {
      return { value:true, message: `${registrantInfo.phone} is already registered to a sponsor`}
    } else {
      return { value:false, message: ""}
    }
  }





  const showSWAL = (messageText) => {
    MySwal.fire({
      text: messageText,
      titleText: "Real MVP",
      color: "#000000",
      confirmButtonText: "Done",
      confirmButtonColor: "#003380",
      background: '#fff url(/img/logo/sandlip-A.png) no-repeat left center / contain',
      backdrop: `
        rgba(0,0,0,0.7)
        url("https://i.gifer.com/origin/03/03270abe66b1c66ef8832c57aa6da0c1.gif")
        center bottom
        no-repeat
      `
    })
  }






  return (
    <div className="text-xl">
      <BrowserRouter>
        <Routes>
          
          <Route
            path="/upcoming"
            element={<LandingPage />}
          />
          
          <Route
            path="/"
            element={<UpcomingEvent />}
          />
          
          <Route
            path="/register"
            element={<RegisterPage
              registrantInfo={registrantInfo}
              setRegistrantInfo={setRegistrantInfo}
              postNewEntry={postNewEntry}
              formIsSubmitting={formIsSubmitting}
            />}
          />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}


export default App;
