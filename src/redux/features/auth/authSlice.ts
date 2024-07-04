import { createSlice } from "@reduxjs/toolkit";

type TAuthUser = {
  user: null | Object;
  token: null | string;
};

const InitialState: TAuthUser = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: InitialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
    logOut: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
