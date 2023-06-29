import NavBar from "../components/Navbar"



const RegisterPage = ({ registrantInfo, setRegistrantInfo, postNewEntry, formIsSubmitting }) => {




  const updateField = (e) => {
    setRegistrantInfo(previousState => ({
      ...previousState,
      [e.target.name]: e.target.value
    }))
  }








  return (
    <>
      <NavBar />

      <div className="min-h-screen flex items-center justify-center px-4 py-24">
        <section className="w-full max-w-xl mx-auto border border-gray-300 rounded-lg shadow-lg py-10 sm:px-8 px-4 font-medium space-y-6">
          <div className="">
            <input type="text" name="firstName" className={`focus:outline-[#003380] border border-gray-300 rounded py-3 px-4 w-full`} placeholder="First Name"
              value={registrantInfo.firstName}
              onChange={updateField}
            />
            {/* <p className={`text-xs text-red-600 h-4 overflow-hidden`}>Error message</p> */}
          </div>
          
          <div className="">
            <input type="text" name="lastName" className={`focus:outline-[#003380] border border-gray-300 rounded py-3 px-4 w-full`} placeholder="Last Name"
              value={registrantInfo.lastName}
              onChange={updateField}
            />
            {/* <p className={`text-xs text-red-600 h-4 overflow-hidden`}>Error message</p> */}
          </div>
          
          <div className="">
            <input type="email" name="email" className={`focus:outline-[#003380] border border-gray-300 rounded py-3 px-4 w-full`} placeholder="Email"
              value={registrantInfo.email}
              onChange={updateField}
            />
            {/* <p className={`text-xs text-red-600 h-4 overflow-hidden`}>Error message</p> */}
          </div>
          
          <div className="">
            <input type="text" name="phone" className={`focus:outline-[#003380] border border-gray-300 rounded py-3 px-4 w-full`} placeholder="Phone"
              value={registrantInfo.phone}
              onChange={updateField}
            />
            {/* <p className={`text-xs text-red-600 h-4 overflow-hidden`}>Error message</p> */}
          </div>
          
          <div className="">
            <textarea name="expectation" rows="3" className={`focus:outline-[#003380] border border-gray-300 rounded py-3 px-4 w-full`} placeholder="Expectation"
              value={registrantInfo.expectation}
              onChange={updateField}
            ></textarea>
            {/* <p className={`text-xs text-red-600 h-4 overflow-hidden`}>Error message</p> */}
          </div>
          
          <div className="text-right">
            <button className={`bg-[#003380] text-white py-3 px-8 rounded ${formIsSubmitting === true && "opacity-50 pointer-events-none"}`} onClick={postNewEntry}>Reserve Spot</button>
          </div>
        </section>



        {/* <section className="w-full max-w-3xl mx-auto bg-gray-100 shadow-lg py-10 sm:px-8 px-4 font-medium space-y-4">
          <div className="flex items-center bg-gray-50 w-full">
            <div className="bg-white py-3 text-center w-1/3 sm:w-3/12 shadow-md rounded-r-full">First Name</div>
            <input type="text" name="firstName" className="focus:outline-none bg-gr-50 gray-300 rounded-3 px-4 w-2/3 sm:w-9/12" placeholder=""
              value={registrantInfo.firstName}
              onChange={updateField}
            />
          </div>
          
          <div className="flex items-center bg-gray-50 w-full">
            <div className="bg-white py-3 text-center w-1/3 sm:w-3/12 shadow-md rounded-r-full">Last Name</div>
            <input type="text" name="lastName" className="focus:outline-none bg-gr-50 gray-300 rounded-3 px-4 w-2/3 sm:w-9/12" placeholder=""
              value={registrantInfo.lastName}
              onChange={updateField}
            />
          </div>
          
          <div className="flex items-center bg-gray-50 w-full">
            <div className="bg-white py-3 text-center w-1/3 sm:w-3/12 shadow-md rounded-r-full">Email</div>
            <input type="email" name="email" className="focus:outline-none bg-gr-50 gray-300 rounded-3 px-4 w-2/3 sm:w-9/12" placeholder=""
              value={registrantInfo.email}
              onChange={updateField}
            />
          </div>
          
          <div className="flex items-center bg-gray-50 w-full">
            <div className="bg-white py-3 text-center w-1/3 sm:w-3/12 shadow-md rounded-r-full">Phone</div>
            <input type="text" name="phone" className="focus:outline-none bg-gr-50 gray-300 rounded-3 px-4 w-2/3 sm:w-9/12" placeholder=""
              value={registrantInfo.phone}
              onChange={updateField}
            />
          </div>
          
          <div className="flex items-center bg-gray-50 w-full">
            <div className="bg-white py-8 text-center w-1/3 sm:w-3/12 shadow-md rounded-r-full">Expectations</div>
            <textarea name="expectation" rows="3" className="focus:outline-none bg-gr-50 gray-300 rounded-3 px-4 w-2/3 sm:w-9/12" placeholder=""
              value={registrantInfo.expectation}
              onChange={updateField}
            ></textarea>
          </div>
        </section> */}
      </div>
    </>
  )
}

export default RegisterPage