import React from "react";
import Sign from "../../UI/sign";
import Loginbutton from "../../Buttons/Loginbutton";
import { useForm } from "react-hook-form";
import Contact from "../../../assets/contact us.gif";

const SectionThree = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Sign className="h-full bg-blue-100  px-0 py-0 justify-between md:gap-[50px] my-20 w-full">
      <div className="w-[80%] m-auto flex gap-10">
        <div className="py-5 md:py-2 grid items-center">
          <h1 className="text-blue-400 font-bold text-4xl text-center">
            GET IN TOUCH
          </h1>
          <p className="text-blue-400 mb-5 font-semibold text-center text-lg">
            24/7 We will answer your questions and problems
          </p>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="md:flex gap-2">
                <div className="grid">
                  <label
                    htmlFor="email"
                    className="text-bold grid text-base font-bold text-slate-500 w-full"
                  >
                    Email Address
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl"
                      {...register("email", {
                        required: true,
                      })}
                    />
                  </label>
                  {errors.email && errors.email.type === "required" && (
                    <p className="text-sm text-red-600 font-bold">
                      Email is required
                    </p>
                  )}
                </div>
                <div className="grid">
                  <label
                    htmlFor="phoneNumber"
                    className="text-bold grid text-base font-bold text-slate-500 w-full"
                  >
                    Phone Number
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl"
                      {...register("phoneNumber", {
                        required: true,
                      })}
                    />
                  </label>
                  {errors.phoneNumber &&
                    errors.phoneNumber.type === "required" && (
                      <p className="text-sm text-red-600 font-bold">
                        Phone Number is required
                      </p>
                    )}
                </div>
              </div>
              <div className="md:flex gap-2">
                <div className="grid">
                  <label
                    htmlFor="firstName"
                    className="text-bold grid text-base font-bold text-slate-500 w-full"
                  >
                    First Name
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl"
                      {...register("firstName", {
                        required: true,
                      })}
                    />
                  </label>
                  {errors.firstName && errors.firstName.type === "required" && (
                    <p className="text-sm text-red-600 font-bold">
                      First Name is required
                    </p>
                  )}
                </div>
                <div className="grid">
                  <label
                    htmlFor="lastName"
                    className="text-bold grid text-base font-bold text-slate-500 w-full"
                  >
                    Last Name
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl"
                      {...register("lastName", {
                        required: true,
                      })}
                    />
                  </label>
                  {errors.lastName && errors.lastName.type === "required" && (
                    <p className="text-sm text-red-600 font-bold">
                      Last Name is required
                    </p>
                  )}
                </div>
              </div>
              <div>
                <textarea
                  className="w-full bg-slate-300 border-slate-500 outline-slate-500 border-solid mt-2 h-[100px] outline-none p-2 text-sm rounded-xl text-slate-600"
                  placeholder="Write your message here."
                  {...register("message", {
                    required: true,
                  })}
                >
                  Write a message
                </textarea>
                {errors.message && errors.message.type === "required" && (
                  <p className="text-sm text-red-600 font-bold">
                    Message is required
                  </p>
                )}
              </div>
              <Loginbutton title="send" className="bg-blue-400 w-full mt-0" />
            </form>
          </div>
        </div>
        <div className="hidden md:grid md:w-full">
          <img src={Contact} className="w-full" alt="" />
        </div>
      </div>
    </Sign>
  );
};

export default SectionThree;
