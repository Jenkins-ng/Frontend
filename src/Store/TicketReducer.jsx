import React from "react";

export const initialState = {
  cart: [],
};

export const getBasketTotal = (cart) => {
  cart?.reduce((amount, item) => item.price + amount, 0);
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_DETAILS":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    default:
      return state;
  }
};

export default Reducer;
