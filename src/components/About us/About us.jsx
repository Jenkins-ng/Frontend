import React from "react";
import { Link } from "react-router-dom";
import Loginbutton from "../Buttons/Loginbutton";
import AboutImage from "../../assets/images/about.jpg";
import Typewriter from "typewriter-effect";
// import Ctatext from "../Landing page/CTA/Ctatext";
// import Ctawrapper from "../Landing page/CTA/Ctawrapper";

const firstLine =
  "    Welcome to our tridimensional structure website, your ultimate destination for electronic ticketing, online shopping, and jobs recruitment. We are dedicated to providing you with a seamless and user-friendly platform that caters to your diverse needs.";

const secondLine =
  "   At our tridimensional structure website, we strive to provide you with a seamless and engaging experience across all our services. We are committed to delivering convenience, security, and efficiency, ensuring that you have the best possible experience when using our electronic ticketing system, online shopping platform, and job recruitment portal. Explore our website today and discover the possibilities that await you!";

const About = () => {
  return (
    <section className="w-10/12 m-auto grid md:flex justify-between items-center">
      <div className="grid">
        <img
          src={AboutImage}
          alt=""
          className="block w-full md:w-[90%] m-auto h-5/6 rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-left font-bold text-blue-400 text-3xl tracking-wider my-10 mb-8">
          ABOUT US
        </h2>
        <p className="text-slate-500 mb-2 md:text-[17px]">
          Welcome to our tridimensional structure website, your ultimate
          destination for electronic ticketing, online shopping, and jobs
          recruitment. We are dedicated to providing you with a seamless and
          user-friendly platform that caters to your diverse needs.
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(firstLine)
                .pauseFor(1000)
                // .deleteAll()
                // .typeString("Welcomes you")
                .start();
            }}
          /> */}
        </p>
        <p className="text-slate-500 mb-2 md:text-[17px]">
          At our tridimensional structure website, we strive to provide you with
          a seamless and engaging experience across all our services. We are
          committed to delivering convenience, security, and efficiency,
          ensuring that you have the best possible experience when using our
          electronic ticketing system, online shopping platform, and job
          recruitment portal. Explore our website today and discover the
          possibilities that await you!
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(secondLine)
                .pauseFor(1000)
                // .deleteAll()
                // .typeString("Welcomes you")
                .start();
            }}
          /> */}
        </p>
        <div className="text-right">
          <Link to="/about-us">
            <Loginbutton title="READ MORE" className="bg-blue-400 py-[4px]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
