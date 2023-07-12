import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loginbutton from "../Buttons/Loginbutton";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Landing page/Header/Logo";
import Preloader from "../eventhive/Preloader";
import notifyError from "../../utils/notifyError";
import api from "../../utils/api";
// import { useNavigation } from "react-router-dom";

const Signupform = () => {
  const navigate = useNavigate();
  const [checkbox, ischecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(true);
  const [icon, setIcon] = useState("visibility");

  //////////// LOGIC FOR SHOWING AND HIDING PASSWORD /////////////

  const showPassword = (e) => {
    setShow((prevstate) => !show);
    e.preventDefault();
    if (show) {
      setIcon("visibility_off");
    } else {
      setIcon("visibility");
    }
  };

  ///////////////////////////////////////////FORM VALIDATION AND FORM HANDLER////////////////////////////////////

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //////////////////////////////////////////FORM SUBMIT HANDLER/////////////////////////////////////////////////////

  const onSubmit = async (data, e) => {
    setIsLoading(true);
    e.preventDefault();
    if (!checkbox) {
      return;
    }

    try {
      const response = await api.post("/register", data);
      const message = await response.data;
      console.log(JSON.stringify(message));

      console.log(message);

      // navigate("/signin");
    } catch (error) {
      console.log(error);
      // notifyError(error.response ? error.response.data.message : error.message);
    } finally {
      setIsLoading(false);
    }
  };

  ///////////////////////////////////TO CHECK STATE OF THE CHECKBOX/////////////////////////////////////////

  const checkBox = () => {
    ischecked((prevstate) => !checkbox);
  };
  //

  return (
    <div className="md:w-1/3 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="md:hidden block text-center">
            <Logo />
          </div>
          <div className="mb-5 flex justify-between items-center">
            <div>
              <h1 className="text-4xl text- text-blue-400 font-bold tracking-wide">
                Create account
              </h1>
              <p className="text-slate-500 font-semibold text-sm">
                Get started with Jenkins.NG by creating an account
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="grid">
              <label
                htmlFor="lastName"
                className="text-bold grid text-base font-bold text-slate-500 w-full"
              >
                Name
                <input
                  type="text"
                  name="name"
                  className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-500"
                  id="name"
                  {...register("name", {
                    required: true,
                  })}
                />
              </label>
              {errors.name && errors.name.type === "required" && (
                <p className="text-sm text-red-600 font-bold">
                  Name is required
                </p>
              )}
            </div>

            <div className="grid">
              <label
                htmlFor="email"
                className="text-bold grid text-base font-bold text-slate-500 w-full"
              >
                Email Address
                <input
                  type="text"
                  name="email"
                  className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-500"
                  id="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
                  })}
                />
              </label>
              {errors.email && errors.email.type === "required" && (
                <p className="text-sm text-red-600 font-bold">
                  Email is required
                </p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="text-sm text-red-600 font-bold">
                  Email is not valid
                </p>
              )}
            </div>
            <div className="grid">
              <label
                htmlFor="password"
                className="text-bold grid text-base font-bold text-slate-500 w-full relative"
              >
                Password
                <input
                  type={show ? "password" : "text"}
                  name="password"
                  className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-500"
                  id="password"
                  {...register("password", {
                    required: true,
                    validate: {
                      checkLength: (value) => value.length >= 6,
                      matchPattern: (value) =>
                        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/.test(
                          value
                        ),
                    },
                  })}
                />
                <span
                  className="material-symbols-outlined absolute right-3 bottom-1"
                  onClick={showPassword}
                >
                  {icon}
                </span>
              </label>
              {errors.password && errors.password.type === "required" && (
                <p className="text-sm text-red-600 font-bold">
                  Password is required
                </p>
              )}
              {errors.password && errors.password.type === "checkLength" && (
                <p className="text-sm text-red-600 font-bold">
                  Password is must be up to six characters
                </p>
              )}
              {errors.password && errors.password.type === "matchPattern" && (
                <p className="text-sm text-red-600 font-bold">
                  Password is must be contain at least a number, symbol,
                  uppercase letter and lowercase letter
                </p>
              )}
            </div>
            <div className="grid">
              <label
                htmlFor="password_confirm"
                className="text-bold grid text-base font-bold text-slate-500 w-full relative"
              >
                Confirm Password
                <input
                  type={show ? "password" : "text"}
                  name="password_confirm"
                  className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-500"
                  id="password_confirm"
                  {...register("password_confirm", {
                    required: true,
                    validate: {
                      checkLength: (value) => value.length >= 6,
                      matchPattern: (value) =>
                        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/.test(
                          value
                        ),
                    },
                  })}
                />
                <span
                  className="material-symbols-outlined absolute right-3 bottom-1"
                  onClick={showPassword}
                >
                  {icon}
                </span>
              </label>
              {errors.password_confirm &&
                errors.password_confirm.type === "required" && (
                  <p className="text-sm text-red-600 font-bold">
                    Password is required
                  </p>
                )}
              {errors.password_confirm &&
                errors.password_confirm.type === "checkLength" && (
                  <p className="text-sm text-red-600 font-bold">
                    Password is must be up to six characters
                  </p>
                )}
              {errors.password_confirm &&
                errors.password_confirm.type === "matchPattern" && (
                  <p className="text-sm text-red-600 font-bold">
                    Password is must be contain at least a number, symbol,
                    uppercase letter and lowercase letter
                  </p>
                )}
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <input type="checkbox" onClick={checkBox} />
            <p>
              I've read and I accept the{" "}
              <a href="" className="text-blue-400 font-bold">
                Terms & conditions
              </a>
            </p>
          </div>
          {/* <Loginbutton title="Create account" className="bg-blue-400 w-full" /> */}
          <button
            type="submit"
            className={` ${
              !checkbox ? "bg-slate-100" : "bg-blue-400"
            } w-full my-3 text-white font-bold rounded-xl mt-6 py-[4px]`}
          >
            Create Account
          </button>
          <p className="text-center mt-4">
            Already created an account?{" "}
            <Link to="/signin" className="text-blue-400 font-bold">
              Log in
            </Link>
          </p>
        </div>
      </form>
      {isLoading && <Preloader />}{" "}
    </div>
  );
};

export default Signupform;
