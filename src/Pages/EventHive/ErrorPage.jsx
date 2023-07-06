import Navbar from '../../components/eventhive/Navbar'
import Footer from '../../components/eventhive/Footer'
import errorImg from '../../assets/event_images/404.svg'
import { Link } from 'react-router-dom'
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoYoutube,
} from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <main className="py-20 w-9/12 max-w-2xl mx-auto text-center">
        <img src={errorImg} alt="404" />
        <h2 className="mt-20 mb-10">Oops!</h2>
        <p className="text-grey600 text-2xl">
          We can’t seem to find the page you are looking for
        </p>
        <Link
          to="/eventhive"
          className="text-lg font-bold text-white bg-primary py-3 px-5 rounded-[30px] my-20 block w-max mx-auto"
        >
          Back to Homepage
        </Link>
        <p className="text-lg">Follow us on</p>
        <div className="flex justify-center gap-5 pt-5">
          <a
            className="w-16 h-16 bg-[#ece7f974] rounded-[20px] text-3xl grid place-content-center text-primary"
            href="#"
          >
            <AiFillInstagram />
          </a>
          <a
            className="w-16 h-16 bg-[#ece7f974] rounded-[20px] text-3xl grid place-content-center text-primary"
            href="#"
          >
            <BiLogoFacebook />
          </a>
          <a
            className="w-16 h-16 bg-[#ece7f974] rounded-[20px] text-3xl grid place-content-center text-primary"
            href="#"
          >
            <BiLogoLinkedin />
          </a>
          <a
            className="w-16 h-16 bg-[#ece7f974] rounded-[20px] text-3xl grid place-content-center text-primary"
            href="#"
          >
            <BiLogoTwitter />
          </a>
          <a
            className="w-16 h-16 bg-[#ece7f974] rounded-[20px] text-3xl grid place-content-center text-primary"
            href="#"
          >
            <BiLogoYoutube />
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ErrorPage
