import Navbar from '../../components/eventhive/Navbar'

const Register = () => {
  return (
    <>
      <Navbar />
      <form className="grid gap-8 w-7/12 max-w-3xl mx-auto pt-14">
        <h2 className="text-center">Registration</h2>
        <div>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            className="w-full mt-1 px-[10px] py-2"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            className="w-full mt-1 px-[10px] py-2"
            placeholder="Enter your mail"
          />
        </div>
      </form>
    </>
  )
}

export default Register
