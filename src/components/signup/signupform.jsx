import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loginbutton from "../Buttons/Loginbutton";
import { Link } from "react-router-dom";
import Logo from "../Landing page/Header/Logo";

async function signupUser(credential) {
  return fetch("https://api.jenkins.ng/api/register", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  })
    .then((data) => data.json())
    .then((res) => console.log(res));
}

const Signupform = () => {
  const [checkbox, ischecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signupUser(data);
  };

  const checkBox = () => {
    if (!checkbox) {
    }
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
              <p className="text-slate-300 font-semibold text-sm">
                Get started with jenkins.NG by creating an account
              </p>
            </div>
          </div>
          <div>
            <div className="grid">
              <label
                htmlFor="lastName"
                className="text-bold grid text-base font-bold text-slate-500 w-full"
              >
                Name
                <input
                  type="text"
                  name="Name"
                  className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl"
                  id="Name"
                  {...register("Name", {
                    required: true,
                  })}
                />
              </label>
              {errors.Name && errors.Name.type === "required" && (
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
                  className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl"
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
          </div>

          <div className="flex gap-3 mt-4">
            <input type="checkbox" />
            <p>
              I've read and I accept the{" "}
              <a href="" className="text-blue-400 font-bold">
                Terms & conditions
              </a>
            </p>
          </div>
          <Loginbutton title="Create account" className="bg-blue-400 w-full" />
          <p className="text-center mt-4">
            Already created an account?{" "}
            <Link to="/signin" className="text-blue-400 font-bold">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signupform;
