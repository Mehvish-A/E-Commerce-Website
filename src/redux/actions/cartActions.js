
export const addToCart = (product) => (dispatch, getState) => {
    const { cartItems } = getState().cart;
  
    // Check if the product is already in the cart
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
  
    if (!alreadyInCart) {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      alert("Product added to the cart!");
    } else {
      alert("Product is already in the cart");
    }
  };
  
  // Action to remove a product from the cart
  export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
  
    const { cartItems } = getState().cart;
    alert("Product removed from the cart!");
    console.log("Updated cart:", cartItems);
  };
  
  // Action to clear all products from the cart
  export const clearCart = () => (dispatch) => {
    dispatch({
      type: "CLEAR_CART",
    });
  
    alert("All products removed from the cart!");
  };
  
  // Action to set cart items from local storage
  export const SET_CART_ITEMS = "SET_CART_ITEMS";
  
  export const setCartItems = (items) => ({
    type: SET_CART_ITEMS,
    payload: items,
  });