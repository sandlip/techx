import { useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

import Footer from "../components/Footer"
import NavBar from "../components/Navbar"




const RegisterPage = ({ MySwal }) => {
  const [formIsSubmitting, setFormIsSubmitting] = useState(false),
        [ideaSector, setIdeaSector] = useState(''),
        [teamMembers, setTeamMembers] = useState(["", "", "", "", ""]),
        [registrantInfo, setRegistrantInfo] = useState({
          "Email": "",
          "Phone": "",
          "Name Of Team": "",
          "Idea Description": "",
          "Link To Video": "",
        }),
        { registrationType } = useParams()



  


  const postNewEntry = async (formType) => {
    // console.log(Object.values(registrantInfo));
    // setFormIsSubmitting(true)

    for (const [key, value] of Object.entries(registrantInfo)) {
      if (!value) {
        setFormIsSubmitting(false)
        MySwal.fire({ icon: 'info', text: `Please provide ${key}`, color: "#000000", confirmButtonColor: "#003380" })
        return
      }
    }

    if (!ideaSector) {
      setFormIsSubmitting(false)
      MySwal.fire({ icon: 'info', text: `Please select the sector your idea belongs to`, color: "#000000", confirmButtonColor: "#003380" })
      return
    }

    const listOfTeam = teamMembers.filter(member => member !== "")
    if (listOfTeam.length < 5) {
      setFormIsSubmitting(false)
      MySwal.fire({ icon: 'info', text: `You need minimum of 5 team members`, color: "#000000", confirmButtonColor: "#003380" })
      return
    }

    const applicantsInfo = [...Object.values(registrantInfo), ideaSector, JSON.stringify(teamMembers), new Date()]


    return axios.post(process.env.REACT_APP_DB_URL, { applicantsInfo }, { headers: {'Content-Type': null} })
    .then(response => {
      console.log(response.data);
      showSWAL(response.data.title, response.data.message)
      setFormIsSubmitting(false)
      setRegistrantInfo({
        "Email": "",
        "Phone": "",
        "Name Of Team": "",
        "Idea Description": "",
        "Link To Video": "",
      });

      setTeamMembers(["", "", "", "", ""])
    })
    .catch(postEntryError => {
      console.log("postEntryError", postEntryError);
      setFormIsSubmitting(false);
    })
    

    // axios.get(process.env.REACT_APP_DB_URL)
    // .then(participants => {
    //   const attendeeExists = checkIfTeamExists(participants.data.attendees)
    //   const sponsorExists = checkIfSponsorExists(participants.data.sponsors)

    //   if (attendeeExists.value === true) {
    //     setFormIsSubmitting(false)
    //     MySwal.fire({ icon: 'info', text: attendeeExists.message, color: "#000000", confirmButtonColor: "#003380" })
    //     return
    //   }

    //   if (sponsorExists.value === true) {
    //     setFormIsSubmitting(false)
    //     MySwal.fire({ icon: 'info', text: sponsorExists.message, color: "#000000", confirmButtonColor: "#003380" })
    //     return
    //   }


    //   if (formType === "register") {
    //     const attendeeInfo = [ `${registrantInfo.firstName} ${registrantInfo.lastName}`, registrantInfo.email, registrantInfo.phone, registrantInfo.expectation, new Date() ]

    //     return axios.post(process.env.REACT_APP_DB_URL, { attendeeInfo }, { headers: {'Content-Type': null} })
    //     .then(response => {
    //       // console.log(response.data);
    //       showSWAL(response.data.title, response.data.message)
    //       setFormIsSubmitting(false)
    //       setRegistrantInfo({
    //         "Email": "",
    //         "Phone": "",
    //         "Name Of Team": "",
    //         "Idea Description": "",
    //         "Link To Video": "",
    //       });
    //       setTeamMembers(["", "", "", "", ""])
    //     })
    //     .catch(postEntryError => {
    //       console.log("postEntryError", postEntryError);
    //       setFormIsSubmitting(false);
    //     })
    //   }


    //   const sponsorInfo = [ `${registrantInfo.firstName} ${registrantInfo.lastName}`, registrantInfo.email, registrantInfo.phone, registrantInfo.expectation, new Date() ]


    //   return axios.post(process.env.REACT_APP_DB_URL, { sponsorInfo }, { headers: {'Content-Type': null} })
    //   .then(response => {
    //     // console.log(response.data);
    //     showSWAL(response.data.title, response.data.message)
    //     setFormIsSubmitting(false)
    //     setRegistrantInfo({
    //       "Email": "",
    //       "Phone": "",
    //       "Name Of Team": "",
    //       "Idea Description": "",
    //       "Link To Video": "",
    //     });
    //     setTeamMembers(["", "", "", "", ""])
    //   })
    //   .catch(postEntryError => {
    //     console.log("postEntryError", postEntryError);
    //     setFormIsSubmitting(false);
    //   })
    // })
    // .catch(fetchRegisteredParticipantsError => {
    //   console.log('fetchRegisteredParticipantsError', fetchRegisteredParticipantsError.message);
    //   setFormIsSubmitting(false)
    // })
  }





  // const checkIfTeamExists = (arrayToLoop) => {
  //   const teamEmailExists = arrayToLoop.find(({ Email }) => Email === registrantInfo.Email);
  //   const teamPhoneExists = arrayToLoop.find(({ Phone }) => Phone === registrantInfo.Phone);
  //   const teamNameExists = arrayToLoop.find(({ Phone }) => Phone === registrantInfo["Name Of Team"]);


  //   if (teamEmailExists) {
  //     return { value:true, message: `${registrantInfo.Email} is already registered to an attendee`}
  //   } else if (teamPhoneExists) {
  //     return { value:true, message: `${registrantInfo.Phone} is already registered to an attendee`}
  //   } else if (teamNameExists) {
  //     return { value:true, message: `${registrantInfo["Name Of Team"]} is already registered to an attendee`}
  //   } else {
  //     return { value:false, message: ""}
  //   }
  // }





  // const checkIfSponsorExists = (arrayToLoop) => {
  //   const sponsorEmailExists = arrayToLoop.find(({ Email }) => Email === registrantInfo.email);
  //   const sponsorPhoneExists = arrayToLoop.find(({ Phone }) => Phone === registrantInfo.phone);


  //   if (sponsorEmailExists) {
  //     return { value:true, message: `${registrantInfo.email} is already registered to a sponsor`}
  //   } else if (sponsorPhoneExists) {
  //     return { value:true, message: `${registrantInfo.phone} is already registered to a sponsor`}
  //   } else {
  //     return { value:false, message: ""}
  //   }
  // }





  const showSWAL = (messageTitle, messageText) => {
    MySwal.fire({
      titleText: messageTitle,
      text: messageText,
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
  


  const updateField = (e) => {
    setRegistrantInfo(previousState => ({
      ...previousState,
      [e.target.name]: e.target.value
    }))
  }








  return (
    <>
      <NavBar />
      
      <section className="bg-gradient-to-r from-[#003380] via-gray-900 to-[#3fff00] text-white py-10 h-[35vh] flex justify-center items-center">
        <div className="px-4">
          <h1 className="text-4xl sm:text-6xl" > &lt;CR8 HACKATHON TARABA 2023/&gt; </h1>

          <p className="text-right italic pr-8"> Season 1 </p>
        </div>
      </section>

      <section className="parent-size py-10 space-y-10">
        <section className="space-y-3">
          <h2 className="text-4xl font-semibold">Welcome to the CR8 Hackathon Team Registration Page!</h2>

          <p className="">
            We are thrilled that you're gearing up to be a part of our exciting hackathon event. Get ready to unleash your creativity, innovation, and problem-solving skills as you embark on this incredible journey with us. Before we dive into the world of innovation and collaboration, let's make sure you're all set to register your team.
          </p>
        </section>

        <section className="">
          <h2 className="text-2xl font-semibold">Team Formation:</h2>

          <ul className="list-disc px-10 space-y-3 sm:space-y-2">
            <li>Each team can consist of a minimum of 5 and a maximum of 7 participants.</li>
            <li>Choose your team members wisely; they will be your partners in this adventure.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Registration Process:</h2>

          <div className="px-4">
            <h2 className="font-semibold">Step 1: Team Information</h2>

            <ul className="list-disc pl-6 sm:px-10 space-y-3 sm:space-y-2">
              <li>Start by naming your team. This is the first step towards creating your unique identity in the hackathon.</li>
              <li>Ensure you have the names of all your team members ready. We want to know who's on board!</li>
            </ul>
          </div>

          <div className="px-4">
            <h2 className="font-semibold">Step 2:  Idea Presentation</h2>

            <ul className="list-disc pl-6 sm:px-10 space-y-3 sm:space-y-2">
              <li>You'll need to provide a short and captivating description of your innovative idea. Think of it as your elevator pitch – why should your idea be showcased at the hackathon?</li>
              <li>Your idea should address a real-world problem or challenge, and your description should convey its potential impact and importance.</li>
            </ul>
          </div>

          <div className="px-4">
            <h2 className="font-semibold">Step 3:  2-Minute Video</h2>

            <ul className="list-disc pl-6 sm:px-10 space-y-3 sm:space-y-2">
              <li>Now comes the fun part! Create a 2-minute video introducing your idea. Be creative, persuasive, and engaging.</li>
              <li>Your video should explain your concept, its relevance, and why it deserves a spot in our hackathon.</li>
              <li>Share your passion and enthusiasm – this is your chance to shine!</li>
            </ul>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Submission Deadline: October 25, 2023</h2>

          <div className="space-y-5">
            <p className="">
              Once you have all these elements ready, simply fill out the registration form with your team details, idea description, and upload your video. Make sure everything is as compelling as possible – your registration is your opportunity to make a great first impression!
            </p>

            <p className="">
              We can't wait to see the incredible innovations and ideas that you and your team will bring to the table. Remember, it's not just about competing; it's about learning, growing, and making a difference.
            </p>

            <p className="">
              Let's push the boundaries of innovation together! If you have any questions or need assistance along the way, feel free to reach out to our support team.
            </p>
            
            <p className="">
              Get ready to hack the future!
            </p>
          </div>
        </section>
      </section>



      <section className="parent-size min-h-screen sm:px-4 py-20">
        <div className="w-full max-w-3xl font-medium space-y-6">
          <aside className="relative">
            <input type="email" name="Email"
              className={`focus:outline-[#003380] peer placeholder:opacity-0 bg-transparent border border-gray-400 rounded-sm py-2.5 px-3 w-full`}
              placeholder="Contact Email"
              value={registrantInfo.Email}
              onChange={updateField}
            />

            <label htmlFor=""
              className="absolute -top-2 left-3 text-xs text-gray-600 z-10 bg-white transition-all duration-300 px-1.5 py-0
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:z-10 peer-focus:bg-white peer-focus:text-[#003380]"
            >Contact Email</label>
          </aside>
          
          <aside className="relative">
            <input type="text" name="Phone"
              className={`focus:outline-[#003380] peer placeholder:opacity-0 bg-transparent border border-gray-400 rounded-sm py-2.5 px-3 w-full`}
              placeholder="Phone"
              value={registrantInfo.Phone}
              onChange={updateField}
            />

            <label htmlFor=""
              className="absolute -top-2 left-3 text-xs text-gray-600 z-10 bg-white transition-all duration-300 px-1.5 py-0
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:z-10 peer-focus:bg-white peer-focus:text-[#003380]"
            >Contact Phone</label>
          </aside>
          
          <aside className="relative">
            <input type="text" name="Name Of Team"
              className={`focus:outline-[#003380] peer placeholder:opacity-0 bg-transparent border border-gray-400 rounded-sm py-2.5 px-3 w-full`}
              placeholder="First Name"
              value={registrantInfo['Name Of Team']}
              onChange={updateField}
            />

            <label htmlFor=""
              className="absolute -top-2 left-3 text-xs text-gray-600 z-10 bg-white transition-all duration-300 px-1.5 py-0
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:z-10 peer-focus:bg-white peer-focus:text-[#003380]"
            >Name of Team</label>
          </aside>

          <aside className="relative border border-gray-400 p-4 space-y-5">
            <p className="">What sector is your idea directed at?</p>

            <section className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => setIdeaSector('Health')}>
                <div className="h-5 w-5 rounded-full border border-gray-400 group-hover:border-green-400 flex items-center justify-center">
                  <div className={`h-3 w-3 rounded-full bg-black ${ideaSector !== 'Health' && 'hidden'}`}></div>
                </div>

                <p className="">Health</p>
              </div>
              
              <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => setIdeaSector('Agriculture')}>
                <div className="h-5 w-5 rounded-full border border-gray-400 group-hover:border-green-400 flex items-center justify-center">
                  <div className={`h-3 w-3 rounded-full bg-black ${ideaSector !== 'Agriculture' && 'hidden'}`}></div>
                </div>

                <p className="">Agriculture</p>
              </div>
              
              <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => setIdeaSector('Education')}>
                <div className="h-5 w-5 rounded-full border border-gray-400 group-hover:border-green-400 flex items-center justify-center">
                  <div className={`h-3 w-3 rounded-full bg-black ${ideaSector !== 'Education' && 'hidden'}`}></div>
                </div>

                <p className="">Education</p>
              </div>
              
              <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => setIdeaSector('E-Commerce')}>
                <div className="h-5 w-5 rounded-full border border-gray-400 group-hover:border-green-400 flex items-center justify-center">
                  <div className={`h-3 w-3 rounded-full bg-black ${ideaSector !== 'E-Commerce' && 'hidden'}`}></div>
                </div>

                <p className="">E-Commerce</p>
              </div>
              
              <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => setIdeaSector('Others')}>
                <div className="h-5 w-5 rounded-full border border-gray-400 group-hover:border-green-400 flex items-center justify-center">
                  <div className={`h-3 w-3 rounded-full bg-black ${ideaSector !== 'Others' && 'hidden'}`}></div>
                </div>

                <p className="">Others</p>
              </div>
            </section>
          </aside>
          
          <aside className="relative">
            <textarea name="Idea Description" rows="4"
              className={`focus:outline-[#003380] peer placeholder:opacity-0 bg-transparent border border-gray-400 rounded-sm py-2.5 px-3 w-full`}
              placeholder="Describe your idea"
              value={registrantInfo['Idea Description']}
              onChange={updateField}
            ></textarea>

            <label htmlFor=""
              className="absolute -top-2 left-3 text-xs text-gray-600 z-10 bg-white transition-all duration-300 px-1.5 py-0
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:z-10 peer-focus:bg-white peer-focus:text-[#003380]"
            >Describe your idea</label>

            <div className="text-xs">Min 150 characters</div>
          </aside>
          
          <aside className="space-y-4">
            <p className="">Full Name of Team Members</p>
            
            {
              teamMembers.map((teamMember, index) => (
                <aside key={index} className="flex items-center gap-x-4">
                  <div className="relative flex-1">
                    <input type="text"
                      className={`focus:outline-[#003380] peer placeholder:opacity-0 bg-transparent border border-gray-400 rounded-sm py-2.5 px-3 w-full`}
                      placeholder={`Team Member ${index + 1}`}
                      value={teamMember}
                      onChange={(e) => {
                        const memberName = [...teamMembers]
                        memberName[index] = e.target.value

                        setTeamMembers(memberName)

                        if (index + 1 === teamMembers.length && teamMembers.length < 7) {
                          setTeamMembers(previousState => ([...previousState, ""]))
                        }
                      }}
                    />

                    <label htmlFor=""
                      className="absolute -top-2 left-3 text-xs text-gray-600 z-10 bg-white transition-all duration-300 px-1.5 py-0
                      peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base
                      peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:z-10 peer-focus:bg-white peer-focus:text-[#003380]"
                    >Team Member {index + 1}</label>
                  </div>

                  <div
                    className={`bg-red-600 text-white h-6 w-6 rounded-full flex items-center justify-center cursor-pointer shadow-sm shadow-black`}
                    onClick={() => {
                      if (teamMembers.length > 5) {
                        const updatedEntries = [...teamMembers]
                        updatedEntries.splice(index, 1);

                        setTeamMembers(updatedEntries)
                      }
                    }}
                  >
                    <i className="bi bi-dash"></i>
                  </div>
                </aside>
              ))
            }
          </aside>
          
          <aside className="relative">
            <input type="text" name="Link To Video"
              className={`focus:outline-[#003380] peer placeholder:opacity-0 bg-transparent border border-gray-400 rounded-sm py-2.5 px-3 w-full`}
              placeholder="Link to YouTube Video"
              value={registrantInfo['Link To Video']}
              onChange={updateField}
            />

            <label htmlFor=""
              className="absolute -top-2 left-3 text-xs text-gray-600 z-10 bg-white transition-all duration-300 px-1.5 py-0
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-2 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:z-10 peer-focus:bg-white peer-focus:text-[#003380]"
            >Link to YouTube Video</label>
          </aside>

          <aside className="text-base">
            By clicking "Submit Detail", you agree to the <a href="/#" className="text-[#3fff00]">terms and conditions</a> of the Cr8 Hackathon Taraba
          </aside>
          
          <aside className="">
            <button className={`bg-[#003380] text-white text-base w-60 py-3.5 rounded-sm ${formIsSubmitting === true && "opacity-50 pointer-events-none"}`} onClick={() => postNewEntry(registrationType)}>Submit Detail</button>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default RegisterPage