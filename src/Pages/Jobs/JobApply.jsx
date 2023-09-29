import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../components/Input";
import useAuth from "../../Hooks/useAuth";
import { useParams } from "react-router-dom";
import Signupbutton from "../../components/Buttons/Signupbutton";
import { apiPrivate } from "../../utils/api";
import notifySuccess from "../../utils/notifySuccess";
import { useNavigate } from "react-router-dom";
import notifyError from "../../utils/notifyError";

const JobApply = () => {
  const { auth } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const Submit = async (data) => {
    const Data = new FormData();
    Data.append("job_listing_id", id);
    Data.append("user_id", auth.id);
    Data.append("first_name", data.fName);
    Data.append("last_name", data.lName);
    Data.append("email", data.email);
    Data.append("phone", data.pNumber);
    Data.append("address", data.address);
    Data.append("cv", data.file[0]);

    console.log(data);

    try {
      const response = await apiPrivate.post("/job-application", Data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const result = await response.data;
      if (response.status === 201) {
        notifySuccess("Job submitted successfully");
        reset();
        navigate("/jobs");
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      const errors = error?.response?.data?.message;
      const message = errors.split(".");
      notifyError(message[0]);
      if (error.response.status === 422) {
        navigate("/jobs");
      }
    }
  };

  return (
    <main>
      <section className="my-5 grid gap-4 w-[90%] mx-auto">
        <h1 className="text-blue-400 font-black text-lg">
          APPLY FOR THIS JOB TODAY!
        </h1>
        <form onSubmit={handleSubmit(Submit)} encType="mutlipart/form-data">
          <section className="grid sm:grid-cols-2  gap-4">
            <TextInput
              title="First Name"
              register={register}
              error={errors}
              placeholder="Appleseed"
              name="fName"
              type="text"
            />
            <TextInput
              title="Last Name"
              register={register}
              error={errors}
              placeholder="Abel"
              name="lName"
              type="text"
            />
            <TextInput
              title="Email Address"
              register={register}
              error={errors}
              placeholder="jenkins@gmail.com"
              name="email"
              type="email"
            />
            <TextInput
              title="Phone Number"
              register={register}
              error={errors}
              placeholder="0812 367 9898"
              name="pNumber"
              type="tel"
            />
            <TextInput
              title="Address"
              register={register}
              error={errors}
              placeholder="Lagos State, Nigeria"
              name="address"
              type="text"
            />
            <TextInput
              title="Upload CV"
              register={register}
              error={errors}
              accept="/*"
              name="file"
              type="file"
            />
          </section>
          <div className="text-right mt-2">
            <Signupbutton className="bg-blue-400 uppercase font-bold">
              Submit Application
            </Signupbutton>
          </div>
        </form>
      </section>
    </main>
  );
};

export default JobApply;
