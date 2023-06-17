import React from "react";
// import Verifysuccessfulbutton from "../Buttons/Verifysuccessfulbutton";
import Recoveryfinal from "../UI/Recoveryfinal";
import { Checkbox } from "@mui/material";
import Signupbutton from "../Buttons/Signupbutton";

const Recoverysuccess = () => {
  return (
    <Recoveryfinal>
      <div className="items-center grid text-center m-auto">
        <div className="pb-8">
          <Checkbox
            // {...label}
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 31 } }}
            color="success"
          />
          <p className="text-green-600 font-bold">
            Your email has been successfully verified.
          </p>
        </div>
        <Signupbutton title="Proceed to dashboard." />
      </div>
    </Recoveryfinal>
  );
};

export default Recoverysuccess;
