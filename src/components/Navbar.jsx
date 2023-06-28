import { useEffect, useState } from "react";





const NavBar = ({ additionalClass = "" }) => {
  
  const [openMenu, setOpenMenu] = useState(false),
        [showNavBar, setShowNavBar] = useState(false),
        [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    let defaultCoordinate = 0


    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageXOffset || document.documentElement.scrollTop

      if (scrollHeight > defaultCoordinate) {
        setShowNavBar(true)
      } else {
        setShowNavBar(false)
      }

      if (window.scrollY >= 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      defaultCoordinate =scrollHeight
    })
  }, [])



  
  
  return (
    <div className={`z-20 w-full transition-all duration-500 ${window.location.pathname === "/" ? "fixed" : "sticky"} ${isScrolled ? "bg-white text-white sm:text-black" : "bg-transparent text-white" } ${showNavBar ? "-top-40" : "top-0"}`}>
      <div className={`parent-size py-6 flex items-center justify-between gap-x-6`}>
        <a href="/" className="">
          <img src={`${(isScrolled && window.location.pathname === "/") ? "/img/logo/logo-black.png" : "/img/logo/logo-white.png"}`} alt="SANDLIP" className="h-8 sm:absolute top-4" />
        </a>

        <section className={`fixed top-0 left-0 sm:static bg-black/90 sm:bg-transparent w-screen sm:w-fit h-screen sm:h-fit transition-all duration-500 ${openMenu ? 'translate-y-0 translate-x-0' : '-translate-y-full -translate-x-full sm:translate-y-0 sm:translate-x-0'}`}>
          <div className="text-right p-8 sm:p-0 visible sm:invisible sm:absolute">
            <i className="bi bi-x-lg text-3xl" onClick={() => setOpenMenu(false)}></i>
          </div>

          <div className="sm:space-x-6 space-y-8 text-2xl sm:text-lg font-bold sm:font-normal">
            <a href="/#services" className="block sm:inline hover:underline hover:underline-offset-4 text-center sm:text-left py-4 sm:py-0" onClick={() => setOpenMenu(false)}>Services</a>
            <a href="/#about-us" className="block sm:inline hover:underline hover:underline-offset-4 text-center sm:text-left py-4 sm:py-0" onClick={() => setOpenMenu(false)}>About Us</a>
            {/* <a href="/#" className="block sm:inline hover:underline hover:underline-offset-4 text-center sm:text-left py-4 sm:py-0" onClick={() => setOpenMenu(false)}>Events</a> */}
            <a href="/#contact-us" className="block sm:inline hover:underline hover:underline-offset-4 text-center sm:text-left py-4 sm:py-0" onClick={() => setOpenMenu(false)}>Contact Us</a>
          </div>
        </section>

        <i class="bi bi-list text-3xl visible sm:invisible sm:absolute" onClick={() => setOpenMenu(true)}></i>
      </div>
    </div>
  )
}

export default NavBar