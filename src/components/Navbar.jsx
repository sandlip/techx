import { useState } from "react";





const NavBar = () => {
  
  const [openMenu, setOpenMenu] = useState(false)



  
  
  return (
    <div className='parent-size py-6 flex items-center justify-between gap-x-6 relative z-20'>
      <a href="/" className="">
        <img src="/img/logo/logo-black.png" alt="SANDLIP" className="h-8 sm:absolute top-4" />
      </a>

      <section className={`fixed top-0 left-0 sm:static bg-black/90 sm:bg-transparent w-screen sm:w-fit h-screen sm:h-fit text-white sm:text-black transition-all duration-500 ${openMenu ? 'translate-y-0 translate-x-0' : '-translate-y-full -translate-x-full sm:translate-y-0 sm:translate-x-0'}`}>
        <div className="text-right p-8 sm:p-0 visible sm:invisible sm:absolute">
          <i className="fas fa-xmark text-3xl" onClick={() => setOpenMenu(false)}></i>
        </div>

        <div className="sm:space-x-6 space-y-8 text-2xl sm:text-lg font-bold sm:font-normal">
          <a href="/#services" className="block sm:inline hover:link-text text-center sm:text-left py-4 sm:py-0" onClick={() => setOpenMenu(false)}>Services</a>
          <a href="/#about-us" className="block sm:inline hover:link-text text-center sm:text-left py-4 sm:py-0" onClick={() => setOpenMenu(false)}>About Us</a>
          {/* <a href="/#" className="block sm:inline hover:link-text text-center sm:text-left py-4 sm:py-0" onClick={() => setOpenMenu(false)}>Events</a> */}
          <a href="/#contact-us" className="block sm:inline hover:link-text text-center sm:text-left py-4 sm:py-0" onClick={() => setOpenMenu(false)}>Contact Us</a>
        </div>
      </section>

      <i class="bi bi-list text-3xl visible sm:invisible sm:absolute" onClick={() => setOpenMenu(true)}></i>
    </div>
  )
}

export default NavBar