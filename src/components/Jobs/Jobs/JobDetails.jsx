import React, { useEffect, useState } from "react";
import Loginbutton from "../../Buttons/Loginbutton";
import { apiprivate as api } from "../../../utils/api";
import notifyError from "../../../utils/notifyError";
import notifySuccess from "../../../utils/notifySuccess";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const [Data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    document.title = "Job Details";
    const Fetch = async () => {
      try {
        const result = await api.get(`/jobs/${id}`);
        const response = await result.data.data;
        notifySuccess(response);
      } catch (error) {
        notifyError(error.response);
      }
    };
  }, [id]);

  return (
    <main className="w-[90%] mx-auto py-10">
      <section>
        {/* DETAILS HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            <img src="" alt="" />
            <div>
              <p>Senior UX Designer</p>
              <p>at Facebook</p>
            </div>
          </div>
          <div>
            <Loginbutton title="Apply Now" className="bg-blue-400" />
          </div>
        </div>
        {/* DETAILS DESCRIPTION */}
        <div>
          <p>Job Description</p>
          <p></p>
        </div>
        {/* DETAILS REQUIREMENTS */}
        <div>
          <p>Requirements</p>
          <p></p>
        </div>
      </section>
    </main>
  );
};

export default JobDetails;
