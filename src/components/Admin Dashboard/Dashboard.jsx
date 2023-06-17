import React from "react";
import Wrapper from "./Wrapper";
import "./wrapper.css";
const Dashboard = () => {
  return (
    <Wrapper>
      <section className="overflow-hidden">
        <div className="flex justify-between bg-black">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="bg-green-400">
          <div></div>
        </div>
        <div className="bg-red-400">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Dashboard;
