const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(state);
      console.log(action);
      state.users = action.payload;
      //   const data = {
      //     id: nanoid(),
      //     name: action.payload,
      //   };
      //   state.users.push(data);
      //   let userData = JSON.stringify(current(state.users));
      //   localStorage.setItem("users", userData);
    },
  },
});

// export const { addUser } = Slice.actions;
export const addUserActions = Slice.actions;

export default Slice.reducer;
