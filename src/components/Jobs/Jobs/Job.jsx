import React from "react";
import { Link } from "react-router-dom";
import { job } from "../Data/job";

export const Jobs = ({ job }) => {
  return (
    <Link to={`/job/${job.id}`}>
      <div className="relative bg-slate-200 px-4 py-3 w-auto h-auto">
        <img src={job.image} alt="" className="material-symbols-outlined" />

        <p className="">{job.title}</p>
        <div className="flex gap-4">
          <p className="">{job.companyName}</p>
          <p className="">{job.location}</p>
        </div>
        <p>{job.description}</p>
        <p className="absolute top-3 right-4 px-4 py-1 text-blue-400 border-[1px] border-blue-400">
          {job.role}
        </p>
        <div className="flex gap-2 mt-2">
          {job.tag.map((tag) => (
            <p className="px-2 py-1 text-slate-400 border-[1px] border-blue-400 text-sm font-mono font-semibold">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

const Job = () => {
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
        {job.map((job) => (
          <Jobs job={job} key={job.id} />
        ))}
      </div>
    </section>
  );
};

export default Job;
