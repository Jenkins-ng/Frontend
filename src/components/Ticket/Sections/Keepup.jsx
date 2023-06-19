import React from "react";
import Loginbutton from "../../Buttons/Loginbutton";
import { useForm } from "react-hook-form";

const Keepup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-500">
        KEEP UP WITH TRENDING EVENTS
      </h2>
      <div className=" w-4/6 rounded-xl mb-14 mt-8 bg-slate-200 m-auto p-8 shadow-xl">
        <h3 className="text-lg md:text-2xl font-bold  text-blue-500">
          Subscribe to our newsletter to keep up with the latest and exciting
          events and conferences.
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid">
            <label
              htmlFor="email"
              className="text-bold grid text-base font-bold text-slate-500 w-full"
            >
              Email Address
              <input
                type="text"
                name="email"
                id="email"
                className="text-bold grid text-base font-bold text-slate-500 w-full"
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
        </form>
        <Loginbutton title="SUBSCRIBE" className="m-5 bg-blue-400" />
      </div>
    </div>
  );
};

export default Keepup;
