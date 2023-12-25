import { useEffect, useReducer } from "react";
import { CartContext, useAuth } from ".";

const addItem = (state, action) => [
  ...state,
  { id: action.itemId, count: 1, price: action.itemPrice },
];

const removeItem = (state, action) =>
  state.filter((item) => item.id !== action.itemId);

const updateItem = (state, action) => {
  if (action.itemCount === 0) return removeItem(state, action);
  return state.map((item) => {
    if (item.id === action.itemId) return { ...item, count: action.itemCount };
    return item;
  });
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return addItem(state, action);
    case "update":
      return updateItem(state, action);
    case "remove":
      return removeItem(state, action);
    case "reset":
      return [];
    default:
      return state;
  }
};

const initialCart = [];

const CartProvider = ({ children }) => {
  const { authToken } = useAuth();
  const [cart, dispatch] = useReducer(reducer, initialCart);

  useEffect(() => {
    if (!authToken) {
      dispatch({ type: "reset" });
    }
  }, [authToken]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
