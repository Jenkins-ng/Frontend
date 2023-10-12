import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import notifySuccess from "../utils/notifySuccess";
import notifyError from "../utils/notifyError";
import Success from "../assets/images/Success.gif";
import Failure from "../assets/images/Failure.gif";
import { Spinner } from "flowbite-react";
const token = getCookie("token");
import { getCookie } from "../utils/cookie";

import { useSearchParams } from "react-router-dom";
import { apiPrivate as api } from "../utils/api";

const Payment = () => {
  const [loading, setLoading] = useState(true);
  const [transactionId, setTransactionId] = useState("");
  const [params, setParams] = useSearchParams();
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const token = getCookie("token");

  const Navigation = () => {
    navigate("/");
  };

  useEffect(() => {
    const Fetch = async () => {
      setTransactionId(params.get("reference"));
      try {
        const data = { reference: `${params.get("reference")}` };
        console.log(transactionId);
        const response = await api.post("/payment-verify", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.data;
        console.log(result);
        setResult(result);
        setLoading(false);
        setTimeout(Navigation, 5000);
        // navigate("/");
      } catch (error) {
        console.log(error.response.data);
        notifyError(error.response.data.message);
        if (error.response.status === 401) {
          navigate("/signin");
        }
      }
    };
    Fetch();
  }, [params]);

  return (
    <div className="flex items-center content-center justify-center h-screen">
      {!loading ? (
        <div className="h-[60vh] justify-center m-auto grid w-[90%] ">
          <div className="font-black">Payment with: {transactionId}</div>
          {result.status === "success" ? (
            <div className="text-center m-auto grid gap-3 shadow-md">
              <img
                src={Success}
                alt="success-gif"
                className="w-24 h-24 sm:w-32 sm:h-32 m-auto"
              />
              <p className="font-black sm:text-lg">{result.message}</p>
            </div>
          ) : (
            <div className="text-center m-auto grid gap-3 shadow-md">
              <img
                src={Failure}
                alt="failure-gif"
                className="w-24 h-24 sm:w-32 sm:h-32"
              />
              <p className="font-black sm:text-lg">{result.message}</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Spinner size={25} />
        </div>
      )}
    </div>
  );
};

export default Payment;
