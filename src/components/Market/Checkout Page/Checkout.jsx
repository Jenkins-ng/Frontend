import React, { useContext } from "react";
import { CartContext } from "../Context/Cart";

const Checkout = () => {
  const { getCartTotal } = useContext(CartContext);
  return (
    <section className="my-20 w-5/6 m-auto">
      <h2 className="font-bold text-blue-400 mb-4 text-2xl w-5/6 ">
        BILLING DETAILS
      </h2>
      <form>
        <div className="grid grid-flow-row md:grid-cols-3 my-10 w-5/6 md:w-full m-auto">
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
                className="px-4 text-base py-[4px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-auto"
              />
            </label>
          </div>
        </div>
        <p className="my-5 font-bold">Total amount: #{getCartTotal()}</p>
        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-[4px] bg-slate-400 rounded-xl hover:bg-blue-400 text-white"
          >
            Place Order
          </button>
          <button
            type="submit"
            className="px-4 py-[4px] bg-slate-400 rounded-xl hover:bg-blue-400 text-white"
          >
            Cancel
          </button>
        </div>
      </form>
      <section>
        <h1>CART TOATL</h1>
        <div>
          <div>
            <h1>SUBTOAL:</h1>
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
