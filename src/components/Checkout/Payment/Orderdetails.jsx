import React from "react";
import Head from "../../Landing page/Header/Head";
import Foot from "../../Landing page/Footer/foot";

const Orderdetails = () => {
  return (
    <>
      <Head />
      <div>
        <div>
          <div></div>
          <h4>ORDER DETAILS</h4>
          <p>GO BACK TO HOMEPAGE</p>
        </div>
        <div>
          <table>
            <tr>
              <td>PRODUCT : </td>
              <td>Wizkid Event Ticket</td>
            </tr>
            <tr>
              <td>QUANTITY : </td>
              <td>Wizkid Event Ticket</td>
            </tr>
            <tr>
              <td>AMOUNT PAID : </td>
              <td>Wizkid Event Ticket</td>
            </tr>
            <tr>
              <td>PAYMENT TYPE : </td>
              <td>Wizkid Event Ticket</td>
            </tr>
            <tr>
              <td>CARD HOLDER : </td>
              <td>Wizkid Event Ticket</td>
            </tr>
          </table>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Orderdetails;
