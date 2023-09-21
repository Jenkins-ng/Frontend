import React, { useContext, useState } from "react";
import { CartContext } from "../Context/Cart";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { apiPrivate as api } from "../../../utils/api";
import notifyError from "../../../utils/notifyError";
import notifySuccess from "../../../utils/notifySuccess";

const Checkout = () => {
  const { auth } = useContext(AuthContext);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    const data = { phone, address, state };
    console.log(auth);
    if (!auth) {
      navigate("/signin");
      return;
    }
    try {
      const response = await api.post("/checkout", data, {
        mode: "no-cors",
        beforeRedirect: "follow",
        headers: {
          "Access-Control-Allow-Origin": "www.localhost:5173",
          "Access-control-Allow-Headers": "*",
        },
      });
      const result = response.data;
      console.log(data);
      notifySuccess(response.data.message);
      if (response.data.message === "cart is empty") navigate("/shop/products");
    } catch (error) {
      notifyError(error.response?.data?.message);
      console.log(error);
    }

    // try {
    //   const response = await fetch("https://api.jenkins.ng/api/v1/checkout", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     redirect: "follow",
    //     headers: {
    //       Authorization: `Bearer ${auth.token} `,
    //     },
    //   });
    //   const result = await response.json();
    //   console.log(result);
    // } catch (error) {
    //   // console.log(error);
    // }
  };

  const GoBack = (e) => {
    e.preventDefault();
    navigate("/shop/cart");
  };

  // const { getCartTotal } = useContext(CartContext);
  return (
    <section className="my-20 w-5/6 md:w-[90%] m-auto relative pt-24 overflow-scroll h-[calc(100% - 80px)] Hide Hide grid gap-5">
      <h2 className="font-bold text-blue-400 mb- text-2xl w-5/6 ">
        BILLING DETAILS
      </h2>
      <form onSubmit={Submit}>
        <div className="grid grid-flow-row justify-between md:grid-cols-3 my-10 w-5/6 md:w-full m-auto">
          {/* <div>
            <label htmlFor="phoneNumber">
              Email Address
              <input type="tel" name="" id="" />
            </label>
          </div> */}
          <div className="">
            <label
              htmlFor="phoneNumber"
              className="md:flex grid md:gap-5 gap-3 items-center font-regular text-base text-slate-500"
            >
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={phone}
                onChange={(e) => setPhone(Number(e.target.value))}
                id="PhoneNumber"
                className="px-4 text-base py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-auto font-normal"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="address"
              className="md:flex grid md:gap-5 gap-3 items-center font-regular text-base text-slate-500"
            >
              Address:
              <input
                type="address"
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="px-4 text-base py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-auto"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="state"
              className="md:flex grid md:gap-5 gap-3 items-center font-regular text-base text-slate-500"
            >
              State:
              <input
                type="text"
                name="state"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="px-4 text-base py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-auto"
              />
            </label>
          </div>
        </div>
        {/* <p className="my-5 font-bold">Total amount: #{getCartTotal()}</p> */}
        <div className="flex justify-between mt-5">
          <button
            type="submit"
            className="px-4 py-[4px] bg-slate-400 rounded-xl hover:bg-blue-400 text-white"
          >
            Place Order
          </button>
          <button
            type="button"
            onClick={GoBack}
            className="px-4 py-[4px] bg-slate-400 rounded-xl hover:bg-blue-400 text-white"
          >
            Cancel
          </button>
        </div>
      </form>
      <section>
        <h1>CART TOTALL</h1>
        <div>
          <div>
            <h1>SUBTOTAL:</h1>
          </div>
          <div>
            <h1>DELIVERY FEE:</h1>
          </div>
          <div>
            <h1>TOTAL:</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Checkout;
