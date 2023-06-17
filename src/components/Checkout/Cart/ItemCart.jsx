import React from "react";
import Head from "../../Landing page/Header/Head";
import Loginbutton from "../../Buttons/Loginbutton";
import Foot from "../../Landing page/Footer/foot";

const ItemCart = () => {
  return (
    <>
      <Head />
      <div>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <p>0</p>
            </div>
          </div>
          <div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
          </div>
          <Loginbutton title="Back To Homepage" />
        </div>
      </div>
      <Foot />
    </>
  );
};

export default ItemCart;
