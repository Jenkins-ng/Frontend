import React, { useState, useRef, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Logo from '../Landing page/Header/Logo'
import Preloader from '../eventhive/Preloader'
import notifyError from '../../utils/notifyError'
import api from '../../utils/api'
import Modal from '../../utils/Modal'
import useAuth from '../../Hooks/useAuth'
import notifySuccess from '../../utils/notifySuccess'

const email_regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/

const Signupform = () => {
  //////////////////////////////// Terms and condition modal //////////////////////////////
  const [openModal, setOpenModal] = useState()
  const [showTerms, setShowTerms] = useState(false)

  /////////////////////////////// Other States ///////////////////////////////////
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')
  const [confirmPswd, setConfirmPswd] = useState('')
  const [formErrors, setFormErrors] = useState({})
  const [isChecked, setIsChecked] = useState(false)
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { isAuth } = useAuth()
  const [display, setdisplay] = useState(true)
  const [icon, setIcon] = useState('visibility')

  //  reset formErrors when input changes
  useEffect(() => {
    setFormErrors({})
  }, [name, email, pswd, confirmPswd])

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const pswdRef = useRef(null)
  const confirmPswdRef = useRef(null)

  const navigate = useNavigate()

  const validateInputs = () => {
    const err = {}

    if (confirmPswd !== pswd) {
      confirmPswdRef.current.focus()
      err.confirmPswd = 'password does not match'
    }
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
    if (name.length < 4) {
      nameRef.current.focus()
      err.name = 'name should atleast four letters'
    }
    if (!name) {
      nameRef.current.focus()
      err.name = 'name is required'
    }
    setFormErrors(err)
    return err
  }

  const SetTerms = (e) => {
    e.preventDefault()

    setShowTerms((prev) => !showTerms)
    setOpenModal('dismissible')
  }

  const showPassword = (e) => {
    setdisplay((prevstate) => !display)
    e.preventDefault()
    if (display) {
      setIcon('visibility_off')
    } else {
      setIcon('visibility')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    validateInputs()
    const result = validateInputs()
    if (!Object.keys(result).length) {
      setIsLoading(true)
      const data = {
        name,
        email,
        password: pswd,
        password_confirm: confirmPswd,
      }
      // submit to api
      try {
        const response = await api.post('/register', data)
        notifySuccess(response.data.status)
        navigate('/signin')
      } catch (error) {
        notifyError(
          error.response ? error.response.data.message : error.message
        )
      } finally {
        setIsLoading(false)
      }
    }
  }

  // go back to home if user is logged in
  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <div className="md:w-1/3 w-full">
      <form onSubmit={handleSubmit}>
        <div className="md:hidden block text-center my-3">
          <Logo />
        </div>
        <h1 className="sm:text-4xl text-3xl text-blue-400 font-bold tracking-wide uppercase sm:capitalize">
          Create account
        </h1>
        <p className="text-slate-300 font-semibold text-sm mb-5">
          Get started with JENKINS.NG by creating an account
        </p>
        <div className="grid gap-3">
          {/* name */}
          <div>
            <label
              className="block text-base font-bold text-slate-500"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              className="sm:px-4 text-base py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full mt-[3px]"
              placeholder="Enter your name"
              ref={nameRef}
            />
            <p className="text-xs text-red-600">{formErrors.name}</p>
          </div>
          {/* email */}
          <div>
            <label
              className="block text-base font-bold text-slate-500"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              className="sm:px-4 text-base py-[4px] border-slate-500 mt-[3px] outline-none border-2 rounded-xl text-slate-500 w-full"
              placeholder="Enter your email"
              ref={emailRef}
            />
            <p className="text-xs text-red-600">{formErrors.email}</p>
          </div>
          {/* password */}
          <div>
            <label
              className="block text-base font-bold text-slate-500"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={display ? 'password' : 'text'}
                id="password"
                onChange={(e) => setPswd(e.target.value)}
                className="sm:px-4 text-base py-[4px] border-slate-500 mt-[3px] outline-none border-2 rounded-xl text-slate-500 w-full"
                placeholder="Enter your password"
                ref={pswdRef}
              />{' '}
              <span
                className="material-symbols-outlined absolute right-3 bottom-1"
                onClick={showPassword}
              >
                {icon}
              </span>
            </div>
            <p className="text-xs text-red-600">{formErrors.pswd}</p>
          </div>
          {/* confirm password */}
          <div>
            <label
              className="block text-base font-bold text-slate-500"
              htmlFor="confirm"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={display ? 'password' : 'text'}
                id="confirm"
                onChange={(e) => setConfirmPswd(e.target.value)}
                className="sm:px-4 text-base py-[4px] border-slate-500 mt-[3px] outline-none border-2 rounded-xl text-slate-500 w-full"
                placeholder="Enter your password"
                ref={confirmPswdRef}
              />
              <span
                className="material-symbols-outlined absolute right-3 bottom-1"
                onClick={showPassword}
              >
                {icon}
              </span>
            </div>
            <p className="text-xs text-red-600">{formErrors.confirmPswd}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <input
            type="checkbox"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <p>
            I've read and I accept the{' '}
            <Link
              href=""
              className="text-blue-400 font-bold"
              onClick={SetTerms}
            >
              Terms Of Service
            </Link>
            {showTerms ? (
              <Modal openModal={openModal} setOpenModal={setOpenModal} />
            ) : (
              ''
            )}
          </p>
        </div>
        <button
          disabled={!isChecked ? true : false}
          className="disabled:bg-slate-100 bg-blue-400 w-full my-3 text-white font-bold rounded-xl mt-6 py-[4px]"
          type="submit"
        >
          CREATE ACCOUNT
        </button>
        <p className="text-center mt-3">
          Already created an account?{' '}
          <Link to="/signin" className="text-blue-400 font-bold">
            Log in
          </Link>
        </p>
      </form>
      {isLoading && <Preloader />}
    </div>
  )
}

export default Signupform
