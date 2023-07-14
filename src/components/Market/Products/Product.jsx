import React, { useState } from "react";
import { useStateValue } from "../../../Store/StateProvider";
import { Link } from "react-router-dom";
import StarRating from "../Home/Components/Star";

const Product = ({ data }) => {
  // const [identity, setIdentity] = useState("");
  // console.log(data);
  // const [state, dispatch] = useStateValue();

  // const addToCart = () => {
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     item: {
  //       id: data.id,
  //       title: data.title,
  //       image: data.image,
  //       price: data.price,
  //       description: data.description,
  //       rating: data.rating,
  //     },
  //   });
  // };
  return (
    <Link to={`/shop/product/${data.id}`}>
      <div className="shadow-xl bg-slate-100 rounded-lg mx-3 my-2 relative overflow-hidden text-sm hover:cursor-pointer">
        <img src={data.image} alt="" className="h-1/2 w-full" />

        <div className="p-2 grid grid-flow-row justify-between place-content-between">
          <div className="py-2">
            <p className="font-[500] text-slate-600 text-[16px]">
              {data.title}
            </p>
            <p className="text-slate-400 text-[14px]">{data.description}</p>
          </div>
          <p className="text-sm font-[500] text-slate-600">
            <strike>
              <strike>N</strike>
            </strike>
            <strong>{data.price}</strong>
          </p>
          <div className="flex gap-2">
            <StarRating rate={+data.rating} />
          </div>
        </div>
        {/* <div className="text-center">
          <button
            type="submit"
            className="bg-blue-400  text-white hover:bg-slate-400 hover:text-slate-100 px-6 py-[3px] rounded-xl text-sm"
          >
            Add to cart{" "}
          </button>
        </div> */}
      </div>
    </Link>
  );
};

export default Product;
