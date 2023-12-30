const { configureStore } = require("@reduxjs/toolkit");
import reducer from "./slice";

export const store = configureStore({
  reducer,
});

// export const store = configureStore({
//   reducer: {
//     user: reducer,
//   },
// });
