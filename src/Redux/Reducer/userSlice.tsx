import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gitdata: {},

};
const userSlice: any = createSlice({
  name: "GitList",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.gitdata = action.payload;
    }
  },
});
export const { setActiveUser } = userSlice.actions;
export const selectUser = (state: any) => state.abc.gitdata;
export default userSlice.reducer;