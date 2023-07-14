import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../Store/StateProvider";

const Product = ({ data }) => {
  const query = useParams();
  console.log(query);
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
      <div className="shadow-lg bg-slate-100 rounded-lg mx-3 relative my-5 overflow-hidden  text-sm hover:cursor-pointer">
        <div className="overflow-hidden object-contain">
          <img src={data.image} alt="" className="w-full" />
        </div>

        <div className="p-2 grid grid-flow-row justify-between place-content-between">
          <div className="py-2">
            <p className="font-[500] text-slate-600 text-[16px]">
              {data.title}
            </p>
            <p className="text-slate-400 text-[14px]">{data.description}</p>
          </div>
          <p className="text-sm font-[500] text-slate-600 text-strikethrough">
            <strike>
              <strike className="">N</strike>
            </strike>
            <strong>{data.price}</strong>
          </p>
          <div className="flex gap-2">
            {[...Array(data.rating)].map((star, index) => {
              return (
                <span className="star text-yellow-400 text-xl" key={index}>
                  &#9733;
                </span>
              );
            })}
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
