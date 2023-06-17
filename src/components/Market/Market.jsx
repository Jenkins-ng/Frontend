import React from "react";
import Header from "./Header";
import Home from "./Home";
import state, { StateProvider } from "../../Store/StateProvider";
import { initialState } from "../../Store/Reducer";
import Reducer from "../../Store/Reducer";

const market = () => {
  return (
    <StateProvider initialState={initialState} reducer={Reducer}>
      <div>
        <Header />
        <Home />
      </div>
    </StateProvider>
  );
};

export default market;
