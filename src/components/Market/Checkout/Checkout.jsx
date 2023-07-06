import React from "react";

const Checkout = () => {
  return (
    <section>
      <form action="">
        <div>
          <div>
            <label htmlFor="phoneNumber">
              Email Address
              <input type="tel" name="" id="" />
            </label>
          </div>
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
        <div>
          <p>Total amount</p>
          <button type="submit">Place Order</button>
          <button type="submit">Cancel</button>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
