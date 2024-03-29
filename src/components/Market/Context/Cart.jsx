import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  /////////////////////////////////////////// ADD TO CART /////////////////////////////////////////////////

  const addToCart = (item, quantities) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: quantities }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: quantities }]);
    }
  };
  //////////////////////////////////////////////// UPDATE CART //////////////////////////////////////////
  const updateCart = (item, quantities) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartitem) => {
          cartitem.id === item.id
            ? { ...cartitem, quantity: quantities }
            : cartitem;
        })
      );
    }
  };

  ////////////////////////////////////////////// REMOVE FROM CART ////////////////////////////////////////////

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  //////////////////////////////////////////////// CLEAR CART ///////////////////////////////////////////

  const clearCart = () => {
    setCartItems([]);
  };

  /////////////////////////////////////////////// GET CART TOTAL /////////////////////////////////////////////

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  ///////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// export default Cart;
