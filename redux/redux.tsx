import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    user: null,
    family: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    setFamily: (state, action) => {
      state.family = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentUser,setFamily } = counterSlice.actions;
export const selectUser = (state: any) => state.counter.user;
export const selectFamily = (state: any) => state.counter.family;

export default counterSlice.reducer;
