import React, { useEffect } from "react";
import Ctawrapper from "../../components/Landing page/CTA/Ctawrapper";
import CTAtextcomponent from "../../components/Landing page/CTA/CTAtextcomponent";
import Job from "../../components/Jobs/Jobs/Job";
import { Link } from "react-router-dom";

const AllJobs = () => {
  useEffect(() => {
    document.title = "All Jobs";
  });

  return (
    <div>
      <nav>
        <div>
          <Ctawrapper className="bg-Job">
            <CTAtextcomponent
              headline="FIND YOUR DREAM JOBS."
              tagword=" Find your next dream career job in companies like Apple, Goggle, and Microsoft."
              title="DISCOVER JOBS"
            >
              <Link to="/jobs">DISCOVER JOBS</Link>
            </CTAtextcomponent>
          </Ctawrapper>
        </div>
      </nav>
      <Job />
    </div>
  );
};

export default AllJobs;
