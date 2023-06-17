import React from "react";
import Head from "../../Landing page/Header/Head";
import Foot from "../../Landing page/Footer/foot";
import {
  Box,
  FormLabel,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@mui/material";
import Loginbutton from "../../Buttons/Loginbutton";

const Paymentmethod = () => {
  return (
    <>
      <Head />
      <div className="relative h-full w-full top-20">
        <div className="flex">
          <h2>CHECKOUT</h2>
          <h2>SEE DETAILS</h2>
        </div>
        <Box>
          <FormControl>
            <FormLabel>SELECT PAYMENT METHOD</FormLabel>
            <RadioGroup>
              <FormControlLabel
                control={<Radio />}
                label="Pay With Mastercard"
                Value=""
              ></FormControlLabel>
              <FormControlLabel
                control={<Radio />}
                label="Pay With Visa Debit Card"
                Value=""
              ></FormControlLabel>
              <FormControlLabel
                control={<Radio />}
                label="Pay With Verve Cards"
                Value=""
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <Loginbutton title="PAY #20,000" />
          <p>
            Kindly Note: Jenkins.NG will never ask you for your card details
            over the phone or via email.
          </p>
          <p>Need help?</p>
          <span>
            <a href="">Contact Us.</a>
          </span>
        </Box>
      </div>
      <Foot />
    </>
  );
};

export default Paymentmethod;
