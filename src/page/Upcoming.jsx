import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

function Upcoming() {
  return (
    <>
    <NavBar />

    <section className="bg-gradient-to-r from-[#003380] via-gray-900 to-[#3fff00] text-white h-[35vh] flex justify-center items-center">
      <div className="px-4">
        <h1 className="text-6xl" > &lt;MODE&I Taraba Hackathon 2023/&gt; </h1>

        <p className="text-right italic pr-8"> Season 1 </p>
      </div>
    </section>

    <section className="parent-size py-10 space-y-10">
      <section className="space-y-3">
        <h2 className="text-4xl font-semibold">Welcome to the MODE&I Taraba Hackathon 2023 Team Registration Page!</h2>

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

          <ul className="list-disc px-10 space-y-3 sm:space-y-2">
            <li>Start by naming your team. This is the first step towards creating your unique identity in the hackathon.</li>
            <li>Ensure you have the names of all your team members ready. We want to know who's on board!</li>
          </ul>
        </div>

        <div className="px-4">
          <h2 className="font-semibold">Step 2:  Idea Presentation</h2>

          <ul className="list-disc px-10 space-y-3 sm:space-y-2">
            <li>You'll need to provide a short and captivating description of your innovative idea. Think of it as your elevator pitch – why should your idea be showcased at the hackathon?</li>
            <li>Your idea should address a real-world problem or challenge, and your description should convey its potential impact and importance.</li>
          </ul>
        </div>

        <div className="px-4">
          <h2 className="font-semibold">Step 3:  2-Minute Video</h2>

          <ul className="list-disc px-10 space-y-3 sm:space-y-2">
            <li>Now comes the fun part! Create a 2-minute video introducing your idea. Be creative, persuasive, and engaging.</li>
            <li>Your video should explain your concept, its relevance, and why it deserves a spot in our hackathon.</li>
            <li>Share your passion and enthusiasm – this is your chance to shine!</li>
          </ul>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Submission Deadline: November 10, 2023</h2>

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

    <section className="parent-size pb-24 pt-5">
      <a href="/cr8_registration" className="bg-[#003380] px-20 py-4 rounded-md text-white font-medium">Register Here</a>
    </section>

    <Footer />
    </> 
  )
}

export default Upcoming