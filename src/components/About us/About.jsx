import React from "react";
import Ctawrapper from "../Landing page/CTA/Ctawrapper";
import Head from "../Landing page/Header/Head";
import Typewriter from "typewriter-effect";
import CTAtextcomponent from "../Landing page/CTA/CTAtextcomponent";
import Foot from "../Landing page/Footer/foot";

const AboutUs = () => {
  return (
    <main>
      <Ctawrapper className="bg-about bg-neutral-800 background-blend-overlay">
        <Head />
        <CTAtextcomponent
          headline="Welcome to our tridimensional structure website!"
          tagword="At our tridimensional structure website, we strive to provide you
            with a seamless and engaging experience across all our services."
          title="LEARN MORE"
          to="/about-us#more"
        />
        {/* <p className="my-2 text-2xl text-blue-500 absolute z-10 w-4/5 h-1/2 items-center content-center grid  pl-20 translate-y-2/4">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to our tridimensional structure website! ")
                .pauseFor(3000)
                // .deleteAll()
                // .typeString("Welcomes you")
                .start();
            }}
          />
        </p> */}
      </Ctawrapper>
      <section className="text-slate-500 my-10 w-5/6 m-auto" id="more">
        <p className="md:text-3xl text-xl sm:text-2xl font-bold tracking-widest mb-5">
          WELCOME TO OUR TRIDIMENSIONAL STRUCTURE WEBSITE! <br />{" "}
        </p>
        <p>
          We are proud to offer you a range of innovative and convenient
          services, including an electronic ticketing system, online shopping,
          and a job recruitment portal. Here's more information about each of
          these features:
        </p>
        <div>
          <ul className="flex flex-col justify-between gap-10 mt-7">
            <li>
              <p className="font-bold text-lg uppercase mb-2">
                Electronic Ticketing System:
              </p>
              <p>
                Our electronic ticketing system is designed to make your event
                experiences seamless and hassle-free. Whether you're attending
                concerts, sports events, or conferences, you can easily browse
                and purchase tickets for your favorite events right from the
                comfort of your home.
              </p>
              <p>
                With our secure and user-friendly platform, you can select your
                preferred seats, make payments online, and receive electronic
                tickets directly to your email or mobile device. Say goodbye to
                the days of waiting in long queues – our electronic ticketing
                system is here to simplify your event ticketing process.
              </p>
            </li>
            <li>
              <p className="font-bold text-lg uppercase mb-2">
                Online Shopping:
              </p>
              <p>
                Discover the convenience of online shopping with our
                comprehensive e-commerce platform. We offer a wide range of
                products from various categories, including fashion,
                electronics, home goods, and more. With our user-friendly
                interface and robust search functionality, you can easily find
                the items you need and make purchases with just a few clicks.{" "}
              </p>
              <p>
                Enjoy the convenience of door-to-door delivery, secure payment
                options, and a hassle-free return policy. Start exploring our
                online store and discover a world of convenience and choice.
              </p>
            </li>
            <li>
              <p className="font-bold text-lg uppercase mb-2">
                Job Recruitment Portal:
              </p>
              <p>
                Are you looking for your dream job or searching for talented
                individuals to join your team? Our job recruitment portal is
                here to help. We connect job seekers with employers, making the
                job search process efficient and effective. Job seekers can
                create detailed profiles, upload resumes, and browse through a
                wide range of job postings across various industries.
              </p>
              <p>
                Employers, on the other hand, can post job listings, search for
                qualified candidates, and manage their recruitment process
                seamlessly. Whether you're a job seeker or an employer, our job
                recruitment portal provides you with the tools and resources to
                find the perfect match.
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <p>
            At our tridimensional structure website, we strive to provide you
            with a seamless and engaging experience across all our services. We
            are committed to delivering convenience, security, and efficiency,
            ensuring that you have the best possible experience when using our
            electronic ticketing system, online shopping platform, and job
            recruitment portal. Explore our website today and discover the
            possibilities that await you!
          </p>
        </div>
        <section className="my-10">
          <h1 className="md:text-3xl text-2xl  font-bold tracking-widest mb-5">
            MEET OUR TEAM
          </h1>
        </section>
      </section>
      {/* <Foot /> */}
    </main>
  );
};

export default AboutUs;
