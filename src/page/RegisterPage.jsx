import { useParams } from "react-router-dom"




const RegisterPage = ({ registrantInfo, setRegistrantInfo, postNewEntry, formIsSubmitting }) => {

  const { registrationType } = useParams()


  const updateField = (e) => {
    setRegistrantInfo(previousState => ({
      ...previousState,
      [e.target.name]: e.target.value
    }))
  }








  return (
    <div className="sm:min-h-screen space-y-6 py-6">
      <section className="min-h-screen sm:min-h-fit flex items-center justify-center px-4">
        <div className="w-full max-w-lg mx-auto border border-gray-300 rounded-lg shadow-lg py-10 sm:px-8 px-4 font-medium space-y-6">
          <div className="w-fit mx-auto">
            <a href="/" className=""> <img src="/img/logo/logo-black.png" alt="SANDLIP" className="h-6" /> </a>
          </div>

          <aside className="relative">
            <input type="text" name="firstName"
              className={`focus:outline-[#003380] peer placeholder:opacity-0 bg-transparent border border-gray-300 rounded py-2 px-3 w-full`}
              placeholder="First Name"
              value={registrantInfo.firstName}
              onChange={updateField}
            />

            <label htmlFor=""
              className="absolute -top-2 left-3 text-xs text-gray-400 z-10 bg-white transition-all duration-300 px-1.5 py-0
              peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:z-10 peer-focus:bg-white peer-focus:text-[#003380]"
            >First Name</label>
          </aside>
          
          <aside className="relative">
            <input type="text" name="lastName"
              className={`focus:outline-[#003380] peer placeholder:opacity-0 bg-transparent border border-gray-300 rounded py-2 px-3 w-full`}
              placeholder="Last Name"
              value={registrantInfo.lastName}
              onChange={updateField}
            />

            <label htmlFor=""
              className="absolute -top-2 left-3 text-xs text-gray-400 z-10 bg-white transition-all duration-300 px-1.5 py-0
              peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:z-10 peer-focus:bg-white peer-focus:text-[#003380]"
            >Last Name</label>
          </aside>
          
          <aside className="relative">
            <input type="email" name="email"
              className={`focus:outline-[#003380] peer placeholder:opacity-0 bg-transparent border border-gray-300 rounded py-2 px-3 w-full`}
              placeholder="Email"
              value={registrantInfo.email}
              onChange={updateField}
            />

            <label htmlFor=""
              className="absolute -top-2 left-3 text-xs text-gray-400 z-10 bg-white transition-all duration-300 px-1.5 py-0
              peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:z-10 peer-focus:bg-white peer-focus:text-[#003380]"
            >Email</label>
          </aside>
          
          <aside className="relative">
            <input type="text" name="phone"
              className={`focus:outline-[#003380] peer placeholder:opacity-0 bg-transparent border border-gray-300 rounded py-2 px-3 w-full`}
              placeholder="Phone"
              value={registrantInfo.phone}
              onChange={updateField}
            />

            <label htmlFor=""
              className="absolute -top-2 left-3 text-xs text-gray-400 z-10 bg-white transition-all duration-300 px-1.5 py-0
              peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:z-10 peer-focus:bg-white peer-focus:text-[#003380]"
            >Phone</label>
          </aside>
          
          <aside className="relative">
            <textarea name="expectation" rows="2"
              className={`focus:outline-[#003380] peer placeholder:opacity-0 bg-transparent border border-gray-300 rounded py-2 px-3 w-full`}
              placeholder="Expectation"
              value={registrantInfo.expectation}
              onChange={updateField}
            ></textarea>

            <label htmlFor=""
              className="absolute -top-2 left-3 text-xs text-gray-400 z-10 bg-white transition-all duration-300 px-1.5 py-0
              peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:-z-10 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:z-10 peer-focus:bg-white peer-focus:text-[#003380]"
            >{registrationType === "register" ? "Expectation" : "How do you want to sponsor"}</label>
          </aside>
          
          <aside className="text-right">
            {registrationType === "register" ?
              <button className={`bg-[#003380] text-white text-base py-2.5 px-6 rounded ${formIsSubmitting === true && "opacity-50 pointer-events-none"}`} onClick={() => postNewEntry(registrationType)}>Reserve Spot</button>
            :
              <button className={`bg-[#003380] text-white text-base py-2.5 px-6 rounded ${formIsSubmitting === true && "opacity-50 pointer-events-none"}`} onClick={() => postNewEntry(registrationType)}>Submit Detail</button>
            }
          </aside>
        </div>
      </section>

      <section className="text-center text-sm">
        &copy; {new Date().getFullYear()} - <a href="https://sandlip.com" target="_blank" rel="noreferrer" className="underline underline-offset-2">Sandlip Digital Consulting</a>
      </section>
    </div>
  )
}

export default RegisterPage