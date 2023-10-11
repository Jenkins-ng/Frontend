import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { job } from "../Data/job";
import notifyError from "../../../utils/notifyError";
import notifySuccess from "../../../utils/notifySuccess";
import { Spinner } from "flowbite-react";
import { apiPrivate } from "../../../utils/api";

const imageurl = "https://api.jenkins.ng/storage/";

export const Jobs = ({ job }) => {
  return (
    <Link to={`/job/${job.id}`} key={job.id}>
      <div className="relative bg-slate-200 px-4 py-3 w-auto h-auto my-2">
        <img
          src={imageurl + job.logo}
          alt=""
          className="sm:w-28 sm:h-28 w-20 h-20 mb-2 object-cover rounded-full"
        />

        <p className="">{job.title}</p>
        <div className="flex gap-4">
          <p className="">{job.company}</p>
          <p className="">{job.location}</p>
        </div>
        <p># {job.salary}</p>
        <p className="absolute top-3 right-4 px-4 py-1 text-blue-400 border-[1px] capitalize border-blue-400">
          {job.category}
        </p>
        {/* <div className="flex gap-2 mt-2">
          {job.tag.map((tag) => (
            <p className="px-2 py-1 text-slate-400 border-[1px] border-blue-400 text-sm font-mono font-semibold">
              {tag}
            </p>
          ))}
        </div> */}
      </div>
    </Link>
  );
};

const Job = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const Fetch = async () => {
      try {
        const response = await apiPrivate.get("/jobs");
        const result = await response.data;

        setData(result.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    Fetch();
  }, []);

  return (
    <section className="mt-5">
      <div className="flex justify-between">
        <h1 className="uppercase font-black text-blue-400">Featured Jobs</h1>
        <p>
          <Link to="/jobs">
            <span className="flex gap-3">
              SEE ALL JOBS{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </span>
          </Link>
        </p>
      </div>
      <div className="mt-4">
        {Data.map((job) => (
          <Jobs job={job} key={job.id} />
        ))}
      </div>
    </section>
  );
};

export default Job;
