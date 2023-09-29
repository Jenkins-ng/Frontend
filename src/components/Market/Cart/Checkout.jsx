import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/Cart";
import { apiPrivate as api } from "../../../utils/api";
import CheckoutProduct from "./CheckoutProduct";
import Cart from "../../../assets/cart.png";
import { Link } from "react-router-dom";
import PopUpModal from "../../../utils/PopupModal";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import notifyError from "../../../utils/notifyError";

const Checkout = () => {
  // const { cartItems, clearCart, getCartTotal, updateCart } =
  //   useContext(CartContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState();
  const [showModal, setShowModal] = useState(false);

  const Fetch = async () => {
    try {
      const response = await api.get("/cart");
      const result = response.data;
      setData(result.cartItems);
    } catch (error) {
      console.log(error);
      notifyError(error.response?.data?.message);
      if (error.response.status === 401) {
        navigate("/signin");
      }
      // console.log(error);
    }
  };
  useEffect(() => {
    Fetch();
  }, []);

  useEffect(() => {
    document.title = "Your Cart - Shop";
  }, []);

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["cart"],
  //   queryFn: Fetch,
  // });

  // console.log(data);

  // if (isLoading) return <Spinner size="xl" />;
  // if (error) return <p>Error Loading Cart Content.</p>;

  return (
    <main className="relative top-[6px] pt-10 overflow-scroll h-[calc(100% - 80px)] Hide">
      {data.length !== 0 ? (
        <main className="relative md:flex grid min-h-screen">
          <section className="lg:w-8/12 md:6/12 relative sm:w-10/12 sm:m-auto md:m-0 w-full px-5 pl-5">
            {/* {showModal ? <PopUpModal /> : ""} */}
            <div className="my-5">
              <h2 className="font-bold text-blue-400 mb-4 text-2xl w-5/6 ">
                YOUR CART
              </h2>
              <div className="md:flex m-auto flex-wrap justify-between">
                {data.map((item) => (
                  <CheckoutProduct
                    item={item}
                    key={item.product.id}
                    onAdd={Fetch}
                  />
                ))}
              </div>
            </div>

            <div className="text-right w-auto m-auto block">
              {/* <button
                type="submit"
                className="bg-slate-400 px-4 text-xs sm:text-sm md:text-base md:px-8 py-[4px] text-white hover:bg-blue-400 rounded-xl"
                onClick={updateCart(cartItems)}
              >
                UPDATE CART
              </button> */}
              {/* <button
                type="submit"
                className="bg-slate-400 text-xs sm:text-sm md:text-base px-4 py-[4px] text-white hover:bg-blue-400 rounded-xl"
                onClick={() => {
                  setShowModal((prevstate) => !showModal);
                  setOpenModal("pop-up");
                }}
              >
                CLEAR CART
              </button> */}
            </div>
            <div>
              {/* {showModal ? (
                <PopUpModal
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  clearCart={clearCart}
                />
              ) : (
                ""
              )} */}
            </div>
          </section>
          <div className="relative lg:w-4/12 inline-block">
            <aside className=" m-auto lg:w-4/12 md:6/12 md:fixed flex flex-col right-0 px-5 ">
              <h2 className="text-blue-400 md:text-2xl text-lg sm:text-xl mb-4 font-bold mt-12">
                CART TOTAL
              </h2>
              <div className="border-slate-400 border-[1px] p-3 sm:p-5 rounded-xl text-sm">
                <div className="flex justify-between">
                  <h1 className="sm:text-lg text-base  font-bold">
                    Number Of Items :
                  </h1>
                  <p>{data.length}</p>
                </div>
                <div className="flex justify-between">
                  <h1 className="sm:text-lg text-base font-bold ">
                    Sub Total :
                  </h1>
                  <p className="flex gap-2">
                    <strike>#</strike>
                    {data
                      .map((item) => item.product.price * item.quantity)
                      .reduce((accu, value, i) => accu + value, 0)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-lg font-bold">Delivery Fee :</h1>
                  <p className="flex gap-2">
                    <strike>#</strike>
                    {3000}
                  </p>
                </div>
                <div className="flex justify-between">
                  <h1 className="sm:text-lg text-base  font-bold">Total :</h1>
                  <p className="flex gap-2">
                    <strike>#</strike>
                    {data
                      .map((item) => item.product.price * item.quantity)
                      .reduce((accu, value, i) => accu + value, 0) + 3000}
                  </p>
                </div>
                <div className="text-right">
                  <Link to="/shop/checkout">
                    <button
                      type="submit"
                      className="bg-slate-400 text-sm sm:text-base px-4 py-1 text-white hover:bg-blue-400 rounded-xl mt-5"
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </main>
      ) : (
        <div className="relative  pt-16 overflow-scroll h-[calc(100% - 80px)] text-center m-auto my-20 h-full Hide">
          <div className="block m-auto w-full text-center">
            <img src={Cart} alt="" className="w-6/6 block text-center m-auto" />
          </div>
          <p className="text-slate-400 font-bold text-xl text-center text-capitalise my-5">
            YOU HAVE NOT ADDED ANYTHING YET.
          </p>
          <Link to="/shop/product">
            <button
              type="submit"
              className="bg-blue-400 px-10 sm:py-[4px] py-[4px] md:py-[4px] text-white hover:bg-slate-400 rounded-xl"
            >
              GO TO SHOP
            </button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default Checkout;
