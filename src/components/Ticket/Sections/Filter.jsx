import React from "react";
import Inputfield from "../../signup/Inputfield";
import Dropdown from "../../signup/Dropdown";

const Filter = () => {
  return (
    <div className=" m-auto w-4/6 place-content-center md:flex md:max-w-1/2 p-4 md:p-2  bg-slate-800 md:gap-5 rounded-xl mt-8">
      <Inputfield
        label="FILTER BY LOCATION"
        placeholder="Search by location"
        className="p-2"
      />
      <Inputfield
        label="FILTER BY CATEGORY"
        placeholder="Search by Catergory"
      />
      <Inputfield
        label="FILTER BY DATE"
        placeholder="Search by date"
        type="date"
      />
      {/* <Dropdown label="FILTER BY CATEGORY" /> */}
      <div className="block  text-slate-400 font-bold">
        <label htmlFor="filter by price">FILTER BY PRICE</label>
        <div className="gap-8 flex md:mt-4">
          <label className="flex gap-5">
            PAID <input type="checkbox" name="Paid" id="" />
          </label>
          <label className="flex gap-5">
            FREE <input type="checkbox" name="Free" id="" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
