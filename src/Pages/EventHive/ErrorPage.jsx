// import Navbar from '../../components/eventhive/Navbar'
// import Footer from '../../components/eventhive/Footer'
import Foot from "../../components/Landing page/Footer/foot";
import Head from "../../components/Landing page/Header/Head";
import errorImg from "../../assets/event_images/404.svg";
import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";

const ErrorPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Head />
      <main className="py-20 Hide w-9/12 max-w-2xl mx-auto text-center relative top-[70px] overflow-scroll h-[calc(100%-70px)]">
        <img src={errorImg} alt="404" />
        <h2 className="mt-20 mb-10 text-2xl sm:text-3xl tracking-wider font-bold">
          Oops!
        </h2>
        <p className="text-grey600 text-2xl">
          We can’t seem to find the page you are looking for
        </p>
        <Link
          to="/"
          className="text-lg font-bold text-white bg-primary py-3 px-5 rounded-[30px] my-10 block w-max mx-auto"
        >
          Back to Homepage
        </Link>
        <p className="text-lg">Follow us on</p>
        <div className="flex justify-center sm:gap-5 gap-3 pt-5">
          <a
            className="w-12 h-12 bg-[#ece7f974] rounded-[20px] text-3xl grid place-content-center text-primary"
            href="#"
          >
            <AiFillInstagram />
          </a>
          <a
            className="w-12 h-12 bg-[#ece7f974] rounded-[20px] text-3xl grid place-content-center text-primary"
            href="#"
          >
            <BiLogoFacebook />
          </a>
          <a
            className="w-12 h-12 bg-[#ece7f974] rounded-[20px] text-3xl grid place-content-center text-primary"
            href="#"
          >
            <BiLogoLinkedin />
          </a>
          <a
            className="w-12 h-12 bg-[#ece7f974] rounded-[20px] text-3xl grid place-content-center text-primary"
            href="#"
          >
            <BiLogoTwitter />
          </a>
          <a
            className="w-12 h-12 bg-[#ece7f974] rounded-[20px] text-3xl grid place-content-center text-primary"
            href="#"
          >
            <BiLogoYoutube />
          </a>
        </div>
      </main>
      {/* <Footer /> */}
      <Foot />
    </>
  );
};

export default ErrorPage;
