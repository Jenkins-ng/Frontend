import React, { useEffect, useState } from "react";
import Category from "./Category";
import { Spinner } from "flowbite-react";
import { apiPrivate as api } from "../../../../utils/api";
// import Data from "../../Data/Categoriesdata";
// import { Categories } from "../../Data/Categoriesdata";
import "./Style.css";

const Catergories = () => {
  //   console.log(Data);
  const [isLoading, setIsLoading] = useState(true);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get("/category");
        setCategory(response.data.data);
        setIsLoading(false);
        console.log(response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetch();
  }, []);

  return (
    <div className="w-[87%] sm:w-[90%] m-auto my-10 mb-20">
      <h1 className="text-slate-400 font-bold text-xl mt-10">TOP CATEGORIES</h1>
      <div className="relative">
        {isLoading && (
          <div className="text-center my-10 m-auto">
            <Spinner size="xl" />
          </div>
        )}
        <div className="grid my-4 grid-flow-col overflow-auto overflow-y-hidden justify-between  Hide relative">
          {category ? (
            category.map((items) => <Category items={items} key={items.id} />)
          ) : (
            <div className="text-center my-10 m-auto">
              <Spinner size="xl" />
            </div>
          )}
        </div>
        <span className="material-symbols-outlined absolute text-5xl text-slate-200 rounded-full -right-4 bottom-1/3 bg-slate-400 hidden md:block">
          arrow_right
        </span>
      </div>
    </div>
  );
};

export default Catergories;
