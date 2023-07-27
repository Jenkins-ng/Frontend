import React from "react";

const Checkout = () => {
  return (
    <section className="my-20 w-5/6 m-auto">
      <form action="">
        <div className="grid grid-flow-row grid-cols-2 my-20 w-5/6">
          {/* <div>
            <label htmlFor="phoneNumber">
              Email Address
              <input type="tel" name="" id="" />
            </label>
          </div> */}
          <div>
            <label htmlFor="phoneNumber">
              Phone Number
              <input type="tel" name="" id="" />
            </label>
          </div>
          <div>
            <label htmlFor="phoneNumber">
              Address
              <input type="tel" name="" id="" />
            </label>
          </div>
          <div>
            <label htmlFor="phoneNumber">
              State
              <input type="tel" name="" id="" />
            </label>
          </div>
        </div>
        <p>Total amount</p>
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
    </section>
  );
};

export default Checkout;
