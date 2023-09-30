import React, { useEffect, useState } from "react";
import Loginbutton from "../../Buttons/Loginbutton";
import { apiPrivate as api } from "../../../utils/api";
import notifyError from "../../../utils/notifyError";
import notifySuccess from "../../../utils/notifySuccess";
import { useParams } from "react-router-dom";

const imageurl = "https://api.jenkins.ng/storage/";

const JobDetails = () => {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const Fetch = async () => {
      try {
        setLoading(true);
        const result = await api.get(`/jobs/${id}`);
        const response = await result.data;
        setData(response.data);
        setLoading(false);
        notifySuccess("Success");
      } catch (error) {
        notifyError(error.response.message);
      }
    };
    Fetch();
  }, [id]);

  useEffect(() => {
    document.title = `${Data.title} | Job Details }`;
  }, [Data]);

  return (
    <main className="w-[90%] mx-auto py-10">
      {Loading ? (
        <div className="text-center mx-auto">
          {" "}
          <Spinner size={25} />
        </div>
      ) : (
        <section>
          {/* DETAILS HEADER */}
          <div className="flex items-center justify-between">
            <div className="sm:flex grid gap-5">
              <img
                src={imageurl + Data.logo}
                alt="company-logo"
                className="w-28 h-28 object-cover rounded-full"
              />
              <div>
                <p>{Data.title}</p>
                <p>
                  at {Data.company} <span>{Data.location}</span>
                </p>
                <p># {Data.salary}</p>
                <p>Category: {Data.category}</p>
              </div>
            </div>
            <div>
              <Loginbutton
                title="Apply Now"
                className="bg-blue-400"
                to={`/job/apply/${Data.id}`}
              />
            </div>
          </div>
          {/* DETAILS DESCRIPTION */}
          <div>
            <p>Job Description</p>
            <p>{Data.description}</p>
          </div>
          {/* DETAILS REQUIREMENTS */}
          <div>
            <p>Requirements</p>
            <p></p>
          </div>
        </section>
      )}
    </main>
  );
};

export default JobDetails;
