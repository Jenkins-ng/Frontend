import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../components/eventhive/Logo'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../utils/api'
import Preloader from '../../components/eventhive/Preloader'
import notifyError from '../../utils/notifyError'
import ScrollToTop from '../../components/eventhive/ScrollToTop'

const email_regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/

const Login = () => {
  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')
  const [formErrors, setFormErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const emailRef = useRef(null)
  const pswdRef = useRef(null)

  // reset formErrors when input changes
  useEffect(() => {
    setFormErrors({})
  }, [email, pswd])

  const navigate = useNavigate()

  const validateInputs = () => {
    const err = {}
    if (pswd.length < 8) {
      pswdRef.current.focus()
      err.pswd = 'password should atleast 8 characters'
    }
    if (!pswd) {
      pswdRef.current.focus()
      err.pswd = 'password is required'
    }
    if (!email_regex.test(email)) {
      emailRef.current.focus()
      err.email = 'email is invalid'
    }
    if (!email) {
      emailRef.current.focus()
      err.email = 'email is required'
    }

    setFormErrors(err)
    return err
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    validateInputs()
    const result = validateInputs()
    if (Object.keys(result).length === 0) {
      const data = { email, password: pswd }
      // submit to api
      try {
        setIsLoading(true)
        const response = await api.post('/login', data)
        navigate('/eventhive/register')
      } catch (error) {
        notifyError(
          error.response ? error.response.data.message : error.message
        )
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div>
      <ScrollToTop />
      <main className="px-40 absolute w-2/3 pt-[7%] pb-5 inline-block">
        <div className="text-center">
          <Logo size="text-2xl" />
          <h2 className="mt-10">Sign In to Event Hive</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 py-14">
          {/* email */}
          <div>
            <label className="block" htmlFor="email">
              YOUR EMAIL
            </label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-[10px] mt-2 rounded-md text-lg"
              placeholder="Enter your mail"
              ref={emailRef}
            />
            <p className="text-xs text-red-600">{formErrors.email}</p>
          </div>
          {/* password */}
          <div>
            <div className="flex justify-between">
              <label htmlFor="password">PASSWORD</label>
              <Link className="text-grey600">Forgot Password?</Link>
            </div>
            <input
              type="password"
              id="password"
              onChange={(e) => setPswd(e.target.value)}
              className="w-full px-5 py-[10px] mt-2 rounded-md text-lg"
              placeholder="Enter your password"
              ref={pswdRef}
            />
            <p className="text-xs text-red-600">{formErrors.pswd}</p>
          </div>
          {/* buttons */}
          <button className="rounded-md text-white text-lg bg-primary w-72 mx-auto text-center py-2">
            Sign In
          </button>
          <span className="mx-auto">Or</span>
          <button
            type="button"
            className="bg-white w-96 mx-auto flex items-center justify-center gap-7 text-lg rounded-md border border-solid border-[#eaeaea] py-2"
          >
            <FcGoogle size={24} /> Sign up with Google
          </button>
        </form>
      </main>
      <aside className="h-screen fixed top-0 right-0 w-1/3 before:absolute before:h-full before:w-full before:-z-20 before:bg-[url(/src/assets/event_images/loginbanner.png)] before:bg-no-repeat before:bg-cover after:absolute after:bg-[url(/src/assets/event_images/overlay.png)] after:top-0 after:left-0 after:h-full after:w-full after:-z-10 bg-cover flex justify-center items-center">
        <div className="flex flex-col gap-10 text-white text-center">
          <h1>Hello Friend</h1>
          <p>To keep connected with us provide us with your information</p>
          <Link
            to="/eventhive/signup"
            className="bg-[#ffffff66] w-32 mx-auto py-3 rounded-md"
          >
            Sign Up
          </Link>
        </div>
      </aside>
      {isLoading && <Preloader />}
    </div>
  )
}

export default Login
