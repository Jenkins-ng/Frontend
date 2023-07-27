import React, { Children } from "react";
import Typewriter from "typewriter-effect";
import Signupbutton from "../../Buttons/Signupbutton";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const CTAtextcomponent = (props) => {
  const classes = `mb-6 text-blue-400 + ${props.className}`;
  return (
    <div>
      <div className="absolute w-4/5 h-1/2 items-center content-center grid pl-8 sm:pl-14 md:pl-20 translate-y-2/3 sm:translate-y-2/4">
        <div className={classes}>
          <h1 className="md:text-6xl text-xl sm:text-4xl font-bold tracking-widest uppercase">
            <Typewriter
              className="md:text-6xl text-4xl font-bold tracking-widest"
              onInit={(typewriter) => {
                typewriter
                  .typeString(props.headline)
                  .pauseFor(5000)
                  // .deleteAll()
                  // .typeString("Welcomes you")
                  .start();
              }}
            />
          </h1>
          <div>
            <h1 className="my-2 text-sm sm:text-xl capitalize">
              <Typewriter
                className="my-2 text-xl"
                onInit={(typewriter) => {
                  typewriter
                    .typeString(props.tagword)
                    .pauseFor(3000)
                    // .deleteAll()
                    // .typeString("Welcomes you")
                    .start();
                }}
              />
            </h1>
          </div>
        </div>

        <Signupbutton
          // title={props.title}
          className="hover:bg-blue-400 bg-blue-950 hover:text-slate-800 text-lg rounded-2xl mt-10 font-bold"
          // to={props.to}
        >
          {/* <Link to="/">good</Link> */}
          {props.children}
        </Signupbutton>
      </div>
    </div>
  );
};

export default CTAtextcomponent;
