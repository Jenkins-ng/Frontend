import { useEffect, useRef, useState } from "react";
import Logo from "../Landing page/Header/Logo";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Preloader from "../eventhive/Preloader";
import notifyError from "../../utils/notifyError";
import notifySuccess from "../../utils/notifySuccess";
import useAuth from "../../Hooks/useAuth";
import api from "../../utils/api";
import { setCookie } from "../../utils/cookie";
import Signupbutton from "../Buttons/Signupbutton";

const Signinform = () => {
  const { isAuth, setAuth, setIsAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(true);
  const [redirect, setRedirect] = useState("");
  const redirectRef = useRef("");
  const [icon, setIcon] = useState("visibility");

  // /////////////////////////////////////////////////////////////////

  useEffect(() => {
    const returnTo = localStorage.getItem("returnTo");
    setRedirect(returnTo);
    redirectRef.current = returnTo;
  }, [redirect]);

  console.log(redirect, redirectRef);

  const history = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await api.post("/login", data);
      const { user } = response.data;
      const { token } = response.data.authorisation;
      setCookie("token", token, 0.5);

      setAuth((prev) => {
        return {
          ...prev,
          ...user,
          token,
        };
      });

      if (user.is_admin) {
        // history(`${redirect}`);
        if (redirect) window.location.href = redirectRef.current;
        else history("/");
      } else {
        if (redirect) window.location.href = redirectRef.current;
        else history("/");
      }
      // history(from, { replace: true });
      notifySuccess("Login Successfully!");
    } catch (error) {
      notifyError(error.response ? error.response.data.message : error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  ////////////////////////// LOGIC TO SHOW AND HIDE PASSWORD //////////////////////////////

  const showPassword = (e) => {
    setShow(() => !show);
    e.preventDefault();
    if (show) {
      setIcon("visibility_off");
    } else {
      setIcon("visibility");
    }
  };

  // navigate to home if user exists
  // useEffect(() => {
  //   if (isAuth) {
  //     history("/");
  //   }
  // }, []);

  return (
    <>
      <div className="md:w-1/3 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="text-slate-500">
          <div>
            <div className="md:hidden block text-center my-3">
              <Logo />
            </div>
            <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl text-blue-400 font-bold tracking-wider mb-2">
                Log In
              </h1>
              <p className="text-slate-500 font-semibold text-base">
                Welcome back, enter details to pick up where you left off.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="grid">
                <label
                  htmlFor="email"
                  className="text-bold grid text-base font-bold text-slate-500 w-full"
                >
                  Email Address
                  <input
                    type="text"
                    name="email"
                    className="px-4 text-base py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-500"
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
                      // validate: {
                      //   checkLength: (value) => value.length >= 6,
                      //   matchPattern: (value) =>
                      //     /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/.test(
                      //       value
                      //     ),
                      // },
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
                    password is required
                  </p>
                )}
                {errors.password && errors.password.type === "checkLength" && (
                  <p className="text-sm text-red-600 font-bold">
                    password is must be up to six characters
                  </p>
                )}
                {errors.password && errors.password.type === "matchPattern" && (
                  <p className="text-sm text-red-600 font-bold">
                    password is must be contain at least a number, symbol,
                    uppercase letter and lowercase letter
                  </p>
                )}
              </div>
            </div>

            <div className="text-right mt-2">
              <Link
                to="/forget-password"
                className="text-blue-400 font-bold text-right"
              >
                forgot password
              </Link>
            </div>
            {/* <Loginbutton title="Log In" className="bg-blue-400 w-full" /> */}
            <Signupbutton className="bg-blue-400 w-full font-bold">
              LOG IN
            </Signupbutton>
            {/* <button type="submit">Log in</button> */}
            <p className="text-center mt-4">
              Yet to create account?{" "}
              <Link to="/signup" className="text-blue-400 font-bold">
                Create account
              </Link>
            </p>
          </div>
          {/* <div className="mt-3">
            <h1 className="text-center font-bold">OR</h1>
            <Loginbutton
              title="Log in with Facebook"
              className="bg-slate-400 text-blue-400 w-full"
            />
            <Loginbutton
              title="Log in with Goggle"
              className="bg-slate-400 text-blue-900 mt-0 w-full"
            />
          </div> */}
        </form>
        {isLoading && <Preloader />}{" "}
      </div>
    </>
  );
};

export default Signinform;
