import React, { useEffect, useState, useContext, useRef } from "react";
import { Spinner } from "flowbite-react";
import { apiPrivate as api } from "../../../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import notifySuccess from "../../../utils/notifySuccess";
import notifyError from "../../../utils/notifyError";
import { CartContext } from "../Context/Cart";
import Product from "./Product";
import { useMutation } from "@tanstack/react-query";

const ImageUrl = "https://api.jenkins.ng/storage/";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState();
  const [item, setItem] = useState();
  const [productCategory, setProductCategory] = useState();
  const category = useRef();
  const params = useParams();
  const history = useNavigate();
  const parameter = params.slug;

  const Fetch = async (item) => {
    const data = {
      product_id: item.id,
      quantity: quantity,
    };
    console.log(data);
    try {
      const response = await api.post("/cart/add", data);
      const result = await response.data;
      notifySuccess(result.message);
      history("/shop/cart");
      console.log(result);
    } catch (error) {
      notifyError(error.response.data.message);
      if (error.response.status === 401) {
        history("/signin");
      }
    }
  };

  // const { isLoading, mutate } = useMutation(
  //   { mutationFn: Fetch },
  //   { onSuccess: notifySuccess("Item Added Successfully!") }
  // );
  // console.log(parameter);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get(`/products/${parameter}`);
        const result = await response.data.data;
        setProduct([result]);
        category.current = result.category;
        console.log(result);
      } catch (error) {
        // console.log(error.response);
      }
    }
    // setTimeout(fetch, 1000000);
    fetch();
  }, []);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get(
          `/products/category/${category.current}`
        );
        const result = await response.data.data;
        setProductCategory(result);
        console.log(result);
      } catch (error) {
        // console.log(error.response);
      }
    }
    // setTimeout(fetch, 10000);
    fetch();
  }, [product]);

  console.log(productCategory);
  console.log(category);
  // console.log(data);
  // if (isLoading)
  //   return (
  //     <div>
  //       <Spinner size={30} />
  //     </div>
  //   );

  return (
    <section className=" relative pt-10 overflow-scroll h-[calc(100% - 80px)] Hide">
      {!product ? (
        <div className="text-center relative pt-10 overflow-scroll h-[calc(100% - 80px)] Hide pt-20 my-20 m-auto">
          <Spinner size="xl" />
        </div>
      ) : (
        <section className="w-[90%] m-auto mb-10">
          {product.map((items) => (
            <div
              key={items.id}
              className="md:flex justify-around items-center mt-20 rounded-lg sm:gap-6"
            >
              <div>
                <div>
                  <img src={ImageUrl + items.image} alt="" />
                </div>
              </div>
              <div className="my-5">
                <div>
                  <h1 className="text-2xl font-bold text-blue-400">
                    {items.title}
                  </h1>
                  <div className="text-lg">
                    <p>{items.category}</p>
                    <p>{items.description}</p>
                    <p className="font-bold text-blue-400">
                      <span>#</span>
                      {parseInt(items.price, 10)}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="my-4 flex items-center gap-4">
                    <span
                      className="material-symbols-outlined cursor-pointer bg-slate-400 w-auto p-2 rounded-full text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        if (quantity <= 0) {
                          return;
                        } else {
                          setQuantity(quantity - 1);
                        }
                      }}
                    >
                      remove
                    </span>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      value={quantity}
                      className="text-center outline-none rounded-xl"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <span
                      className="material-symbols-outlined cursor-pointer bg-slate-400 w-auto p-2 rounded-full text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        setQuantity(quantity + 1);
                      }}
                    >
                      add
                    </span>
                  </div>
                  <div className="flex gap-5 text-lg font-regular">
                    <p>Total :</p>
                    <p>
                      <span># </span> {quantity * +items.price}
                    </p>
                  </div>
                  <div className="flex md:justify-between gap-8 my-2">
                    <button
                      type="submit"
                      className="px-4 py-[4px] bg-slate-400 rounded-xl hover:bg-blue-400 text-white"
                    >
                      Buy Now
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-[4px] bg-slate-400 rounded-xl hover:bg-blue-400 text-white"
                      onClick={() => {
                        // addToCart(items, quantity);
                        // notifySuccess("Items added successfully!");
                        // setItem(items);
                        Fetch(items);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
      <div className="w-[90%] pt-10 m-auto">
        <h1 className="text-xl md:text-2xl text-blue-400 font-bold my-3 mt-10">
          Related Items
        </h1>
        <div className="my-4 w-full m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between">
          {productCategory ? (
            productCategory.map((product) => (
              <Product data={product} key={product.id} />
            ))
          ) : (
            <div className="text-center pt-5 w-1/2 m-auto">
              <Spinner size="xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
