import React from "react";
import { Link } from "react-router-dom";

export const Jobs = (props) => {
  return (
    <Link>
      <div>
        <img src="" alt="" className="material-symbols-outlined">
          {}
        </img>
        <p className="">{}</p>
        <p className="">
          {} <span className="material-symbols-outlined">arrow_forward</span>
        </p>
      </div>
    </Link>
  );
};

const Job = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="uppercase">Featured Jobs</h1>
        <p>
          <Link to="/job/jobs">
            <span className="flex gap-10">
              SEE ALL JOBS{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </span>
          </Link>
        </p>
      </div>
      <div>{}</div>
    </section>
  );
};

export default Job;
