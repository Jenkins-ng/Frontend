import React from "react";
import Prototype from "./Prototype";
const Benefit = () => {
  return (
    <div className="m-auto block sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl-grid xl-grid-cols-4 justify-between sm:w-[90%] mb-10">
      <Prototype
        image="speed"
        title="FAST DELIVERY"
        text="Free delivery for goods above 100 units"
      />
      <Prototype
        image="payment"
        title="MONEY BACK GUARANTEE"
        text="We return money back in 30 days"
      />
      <Prototype
        image="support_agent"
        title="24/7 CUSTOMER SUPPORT"
        text="Friendly 24/7 customer support "
      />
      <Prototype
        image="assured_workload"
        title="SECURE PAYMENT"
        text="Secure and seamless transactions"
      />
    </div>
  );
};

export default Benefit;
