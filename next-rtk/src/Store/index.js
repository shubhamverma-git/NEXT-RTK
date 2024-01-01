import cartReducer from "./reducers/cart-reducer";

const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
  reducer: cartReducer,
});

export default Store;
