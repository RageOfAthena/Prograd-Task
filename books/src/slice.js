import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  query: "A",
  login: "",
};
export const slice = createSlice({
  name: "query",
  initialState,
  reducers: {
    update: (state, action) => {
      state.query = action.payload.query;
      state.login = action.payload.login;
    },
  },
});
export const authActions = slice.actions;
export default slice.reducer;
