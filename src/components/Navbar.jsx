import { useEffect, useState } from "react";





const NavBar = () => {
  
  const [showNavBar, setShowNavBar] = useState(false),
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
      <div className={`parent-size py-4 flex items-center justify-between gap-x-6`}>
        <a href="/" className="">
          <img src={`${(isScrolled || window.location.pathname !== "/") ? "/img/logo/logo-black.png" : "/img/logo/logo-white.png"}`} alt="SANDLIP" className="h-14" />
        </a>
        

        {/* <a href="/sponsor" className={`${isScrolled ? "bg-black text-white" : "bg-white text-black" } px-2.5 sm:px-3 py-2.5 sm:py-3 rounded-md text-sm font-medium`}>Become a Partner</a> */}
      </div>
    </div>
  )
}

export default NavBar