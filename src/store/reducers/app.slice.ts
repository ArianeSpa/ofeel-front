import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppStateI {
  hasBackdrop: boolean;
}
const initialState: AppStateI = {
  hasBackdrop: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setHasBackdrop(state, action: PayloadAction<boolean>) {
      state.hasBackdrop = action.payload;
    },
  },
});

export const { setHasBackdrop } = appSlice.actions;

export const appReducer = appSlice.reducer;
