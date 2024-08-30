
const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const updatedAddCartItems = [...state.cartItems, action.payload];
        localStorage.setItem("cartItems", JSON.stringify(updatedAddCartItems));
        return { ...state, cartItems: updatedAddCartItems };
  
      case "REMOVE_FROM_CART":
        const updatedRemoveCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        localStorage.setItem("cartItems", JSON.stringify(updatedRemoveCartItems));
        return { ...state, cartItems: updatedRemoveCartItems };
  
      case "SET_CART_ITEMS":
        return { ...state, cartItems: action.payload };
  
      case "CLEAR_CART": // Added this case
        localStorage.removeItem("cartItems");
        return { ...state, cartItems: [] };
  
      default:
        return state;
    }
  };