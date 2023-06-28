import NavBar from "../components/Navbar"



const RegisterPage = () => {
  return (
    <>
      <NavBar />

      <div className="min-h-screen flex items-center justify-center">
        <section className="w-full max-w-3xl mx-auto bg-gray-300 shadow-lg py-10 sm:px-8 px-4 font-medium">
          <div className="flex items-center bg-gray-100 w-full">
            <div className="bg-white py-2 text-center w-1/3 sm:w-3/12 shadow-md rounded-r-full">First Name</div>
            <input type="text" name="firstName" id="" className="focus:outline-none bg-gray-100 py-2 px-4 w-2/3 sm:w-9/12" />
          </div>

          RegisterPage
        </section>
      </div>
    </>
  )
}

export default RegisterPage