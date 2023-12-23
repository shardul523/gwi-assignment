import { useReducer } from "react";
import { CartContext } from ".";

const addToCart = (currCart, productId) => [...currCart, productId];

const removeFromCart = (currCart, productId) =>
  currCart.filter((id) => id !== productId);

const cartReducer = (currCart, action) => {
  switch (action.type) {
    case "add-product":
      return addToCart(currCart, action.productId);
    case "remove-product":
      return removeFromCart(currCart, action.productId, action.count);
    default:
      return currCart;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
