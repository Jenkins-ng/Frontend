import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Store/StateProvider";
import { getBasketTotal } from "../../Store/Reducer";

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(cart)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"#"}
      />
      <LoginButton title="Proceed to checkout" />
    </div>
  );
};

export default Subtotal;
