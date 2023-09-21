import React from "react";
import { Link } from "react-router-dom";

export const Categories = (props) => {
  return (
    <Link to={`/job/${props.id}`}>
      <div>
        <span className="material-symbols-outlined">{}</span>
        <p className="">{}</p>
        <p className="">
          {} <span className="material-symbols-outlined">arrow_forward</span>
        </p>
      </div>
    </Link>
  );
};

const Category = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="uppercase">explore by category</h1>
        <p>
          <Link to="/jobs">
            <span className="flex gap-3">
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

export default Category;
