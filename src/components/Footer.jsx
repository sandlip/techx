

const Footer = () => {
  return (
    <div className='bg-black text-white px-4'>
      <section className='grid grid-cols-12 gap-y-8 sm:gap-x-8'>
        <section className="col-span-12 sm:col-span-3 py-4">
          <img src="/img/logo/sandlip-A.png" alt="Sandlip Digital Consulting" className="" />
        </section>

        <section className="col-span-12 sm:col-span-9 space-y-14 self-center w-full max-w-4xl">
          <div className="space-y-2">
            <h5 className="uppercase text-3xl font-semibold">Take ownership of your brand</h5>
            <h6 className="font-medium opacity-50">Simplify your operations with us - your trusted partner for stress-free solutions.</h6>
          </div>

          <div className="space-y-3">
            <section className="flex flex-col sm:flex-row items-center gap-x-2">
              <div className="w-full sm:w-6/12 -space-y-1">
                <h5 className="uppercase font-bold text-2xl">We always respond</h5>
                {/* <h5 className="text-sm">Say something to us</h5> */}
                {/* <h5 className="text-sm">Start a conversation</h5> */}
                {/* <h5 className="text-sm">One more step to your business growth</h5> */}
                {/* <h5 className="text-sm">We really want to hear from you</h5> */}
              </div>
              <div className="border-b-4 w-full"></div>
            </section>

            <section className="grid grid-cols-12 w-full max-w-3xl">
              <div className="col-span-12 sm:col-span-4 grid grid-cols-12 p-2 items-center">
                <div className="col-span-2 h-8 w-8 rounded-full border text-xl flex items-center justify-center">
                  <i className="bi bi-envelope-at"></i>
                </div>
                <h6 className="text-sm"> info@sandlip.com </h6>
              </div>

              <div className="col-span-12 sm:col-span-4 grid grid-cols-12 p-2 items-center">
                <div className="col-span-2 h-8 w-8 rounded-full border text-xl flex items-center justify-center">
                  <i className="bi bi-telephone-plus"></i>
                </div>
                <div className="col-span-10">
                  <h6 className="text-sm text-left"> +234 (0) 802-363-7416 </h6>
                  <h6 className="text-sm text-left"> +234 (0) 916-168-8902 </h6>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-4 grid grid-cols-12 p-2 items-center">
                <div className="col-span-2 h-8 w-8 rounded-full border text-xl flex items-center justify-center">
                  <i class="bi bi-geo-alt"></i>
                </div>

                <div className="text-sm text-left col-span-10">
                  No. 57 Arc. Darius D. Ishaku Way, Mayo Dassa, Jalingo, Taraba State
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>

      <section className="flex flex-col-reverse sm:flex-row items-center justify-between py-10 px-6">
        <h6 className="py-2 text-sm"> &copy; {new Date().getFullYear()} - Sandlip Digital Consulting </h6>

        <div className="flex items-center justify-center gap-x-6">
          {/* <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-[#4267B2]">
            <i className="bi bi-facebook-f"></i>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-2xl bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976]">
            <i className="bi bi-instagram"></i>
          </a> */}

          <a href="https://www.linkedin.com/company/sandlip/" target="_blank" rel="noreferrer" className="text-2xl hover:text-[#0077b5]">
            <i className="bi bi-linkedin"></i>
          </a>

          <a href="https://twitter.com/sandlipConsult" target="_blank" rel="noreferrer" className="text-2xl hover:text-[#1DA1F2]">
            <i className="bi bi-twitter"></i>
          </a>
          
          {/* <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-2xl hover:text-[#FF0000]">
            <i className="bi bi-youtube"></i>
          </a> */}
        </div>
      </section>
    </div>
  )
}

export default Footer