import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfMilk: 10,
};

const milKSlice = createSlice({
  name: "milk",
  initialState,
  reducers: {
    buyMilk: (state, action) => {
      state.numOfMilk = state.numOfMilk - 1;
    },
  },
});

export const { buyMilk } = milKSlice.actions;

export default milKSlice.reducer;
