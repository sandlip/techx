


const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <section className='w-full h-screen relative' style={{ background:"url('/img/heroImg.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover" }}>
        <div className='absolute top-0 w-full h-full bg-gradient-to-br from-[#003380] via-[#003380]/90 to-[#3fff00]/80 flex items-center'>
          
          <section className="font-bold text-white bg-black/60 px-4 sm:px-12 py-10 w-full max-w-xl mx-auto text-center space-y-6">
            <h1 className="subHeading-text font-bold w-full max-w-sm mx-auto">TECH eXperience</h1>

            <div className="space-y-3">
              <div className="bg-white rounded-sm py-1">
                <h2 className="bg-gradient-to-r from-[#3fff00] to-[#003380] text-transparent bg-clip-text">July 29, 2023</h2>
              </div>

              <h2 className="text-6xl">Taraba</h2>
            </div>
          </section>

        </div>
      </section>
      LandingPage
    </div>
  )
}

export default LandingPage