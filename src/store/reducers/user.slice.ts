import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserStateI {
  logged: boolean;
}

const initialState: UserStateI = {
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state) {
      state.logged = true;
    },
    logOut(state) {
      state.logged = false;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { logIn, logOut } = userSlice.actions;

// Export the slice reducer as the default export
export default userSlice.reducer;
