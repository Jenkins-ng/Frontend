import React from "react";
import Loginbutton from "../Buttons/Loginbutton";
import Logo from "../Landing page/Header/Logo";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../Store/Authentication";

async function loginuser(credential) {
  return fetch("https://api.jenkins.ng/api/login", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  })
    .then((data) => data.json())
    .then((res) => console.log(res));
}

const Signinform = () => {
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    // const auth = useAuth();
    console.log(data);
    e.preventDefault();
    // login;
    // auth.login(data);

    history("/");
  };

  return (
    <>
      <div className="md:w-1/3 w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="md:hidden block text-center">
              <Logo />
            </div>
            <div className="mb-10">
              <h1 className="text-4xl text-blue-400 font-bold tracking-wider mb-2">
                Log In
              </h1>
              <p className="text-slate-500 font-semibold text-base">
                Welcome back, enter details to pick up where you left off.
              </p>
            </div>

            <div>
              <div className="grid">
                <label
                  htmlFor="email"
                  className="text-bold grid text-base font-bold text-slate-500 w-full"
                >
                  Email Address
                  <input
                    type="text"
                    name="email"
                    className="px-4 text-base py-[4px] border-slate-500 outline-none border-2 rounded-xl"
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
                  className="text-bold grid text-base font-bold text-slate-500 w-full"
                >
                  Password
                  <input
                    type="password"
                    name="password"
                    className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl"
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
                to="/signin/recover"
                className="text-blue-400 font-bold text-rights"
              >
                forgot password
              </Link>
            </div>
            <Loginbutton title="Log In" className="bg-blue-400 w-full" />
            <p className="text-center mt-4">
              Yet to create account?{" "}
              <Link to="/signup" className="text-blue-400 font-bold">
                Create account
              </Link>
            </p>
          </div>
          <div className="mt-3">
            <h1 className="text-center font-bold">OR</h1>
            <Loginbutton
              title="Log in with Facebook"
              className="bg-slate-400 text-blue-400 w-full"
            />
            <Loginbutton
              title="Log in with Goggle"
              className="bg-slate-400 text-blue-900 mt-0 w-full"
            />
          </div>
        </form>
      </div>
    </>
  );
  Signinform.PropTypes = {
    setToken: PropTypes.func.isRequired,
  };
};

export default Signinform;
