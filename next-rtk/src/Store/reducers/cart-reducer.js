import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    // contains all the pure functions to change initial state value
    // this value on every change will re render the component which it is called in using useSelector

    addItems: (state, action) => {
      // console.log("state", state);
      // console.log("action", action);
      state.cartItems = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
