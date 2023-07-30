import React from "react";
import Wrapper from "./Wrapper";
import "./wrapper.css";
const Dashboard = () => {
  return (
    <Wrapper>
      <section className="overflow-auto">
        <div className="flex justify-between bg-black w-1/2 h-[200px]">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="bg-green-400 h-[200px]">
          <div></div>
        </div>
        <div className="bg-red-400 h-[200px]">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="bg-gray-400 h-[200px]">
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
