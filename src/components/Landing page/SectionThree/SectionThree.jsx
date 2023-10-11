import React, { useState } from "react";
import Sign from "../../UI/sign";
import emailjs from "@emailjs/browser";
import { Spinner } from "flowbite-react";
import success from "../../../assets/images/Success.gif";
import Loginbutton from "../../Buttons/Loginbutton";
import { useForm } from "react-hook-form";
import Contact from "../../../assets/contact us.gif";
import notifyError from "../../../utils/notifyError";
import notifySuccess from "../../../utils/notifySuccess";

const serviceId = "service_x87p4mr";
const templateId = "template_d4ih9ev";
const publicKey = "YHBX-56WgiGoJi_P3";

const SectionThree = () => {
  const [loading, setLoading] = useState(false);

  emailjs.init(publicKey);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const templateParams = {
      name: data.firstName + " " + data.lastName,
      email: data.email,
      message: data.message,
      phoneNumber: data.phoneNumber,
    };

    console.log(data);
    if (!data) {
      return;
    }
    setLoading(true);
    const sent = await emailjs.send(serviceId, templateId, templateParams);

    // console.log(sent.text);
    if (sent.text === "OK") {
      notifySuccess("Message Sent!");
      setLoading(false);
      reset();
    } else {
      notifyError("Message Failed!");
      setLoading(false);
    }
  };

  return (
    <Sign className=" bg-blue-100  px-0 py-0 justify-between md:gap-[50px] my-20 w-full">
      <div className="xl:w-[85%] w-[90%] m-auto block lg:flex justify-around gap-10">
        <div className="pb-5 md:py-2 grid place-items-center place-content-center flex-col items-center">
          <div className="grid gap-1 sm:gap-4 my-6">
            <h1 className="text-blue-400 font-bold text-xl sm:text-2xl md:text-3xl text-center">
              GET IN TOUCH
            </h1>
            <p className="text-blue-400 mb- font-semibold text-center text-lg">
              24/7 We will answer your questions and problems
            </p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-2 w-full"
            >
              <div className="sm:flex grid gap-2 sm:gap-5">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="text-bold grid text-base font-bold text-slate-500"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl w-full text-slate-600"
                    {...register("firstName", {
                      required: true,
                    })}
                  />
                  {errors.firstName && errors.firstName.type === "required" && (
                    <p className="text-sm text-red-600 font-bold">
                      First Name is required
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="text-bold grid text-base font-bold text-slate-500 w-full"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-600"
                    {...register("lastName", {
                      required: true,
                    })}
                  />
                  {errors.lastName && errors.lastName.type === "required" && (
                    <p className="text-sm text-red-600 font-bold">
                      Last Name is required
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:flex grid sm:gap-5 gap-2">
                <div className="grid w-full">
                  <label
                    htmlFor="email"
                    className="text-bold grid text-base font-bold text-slate-500 w-full"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-600"
                    {...register("email", {
                      required: true,
                    })}
                  />
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
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="px-4 py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-600"
                    {...register("phoneNumber", {
                      required: true,
                    })}
                  />
                  {errors.phoneNumber &&
                    errors.phoneNumber.type === "required" && (
                      <p className="text-sm text-red-600 font-bold">
                        Phone Number is required
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
                ></textarea>
                {errors.message && errors.message.type === "required" && (
                  <p className="text-sm text-red-600 font-bold">
                    Message is required
                  </p>
                )}
              </div>
              {/* <Loginbutton title="send" className="bg-blue-400 w-full mt-0" /> */}
              <button
                className="px-8 py-2 text-slate-200 font-bold text-center rounded-lg mt-6 text-sm sm:text-base bg-blue-400 w-full gap-2 flex mx-auto justify-center"
                type="submit"
              >
                {loading ? <Spinner size="sm" /> : ""}
                Send
              </button>
            </form>
          </div>
        </div>
        {/* ////////////////// For the image //////////////////////////// */}
        <div className="hidden lg:flex">
          <img src={Contact} className="w-full h-max-content" alt="" />
        </div>
      </div>
    </Sign>
  );
};

export default SectionThree;
