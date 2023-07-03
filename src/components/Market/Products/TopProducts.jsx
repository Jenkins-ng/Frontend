import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";

const url =
  "https://aliexpress-datahub.p.rapidapi.com/item_details?itemId=3256804591426248";
const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6938c6e432mshe3a01b58ac44e0ep113ae2jsn2b887700961a",
    "X-RapidAPI-Host": "aliexpress-datahub.p.rapidapi.com",
  },
};
const TopProducts = () => {
  const [Data, setData] = useState([]);

  //   useEffect(() => {
  try {
    fetch(url, option)
      .then((data) => data.text())
      .then((response) => {
        setData(response);
        console.log(response);
      });
  } catch (error) {
    console.log(error);
  }
  //   });

  return (
    <div className="my-4 flex justify-between">{<Product data={Data} />}</div>
  );
};

export default TopProducts;
