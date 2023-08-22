import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

function Upcoming() {
  return (
    <>
    <NavBar />
    <section className="h-screen">
      <div className="flex justify-center">
				<h2 className="text-3xl">CR8 HACKATHON</h2>
			</div>
      <div className='flex justify-center'>
				<h2 className="">Coming soon</h2>
			</div>
    </section>
    <Footer />
    </>
  )
}

export default Upcoming