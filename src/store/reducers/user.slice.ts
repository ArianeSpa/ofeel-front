import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginStateI {
  username: string;
  password: string;
  rememberMe?: boolean;
}

interface SigninStateI extends LoginStateI {
  email: string;
  newsletter: boolean;
}

interface UserStateI {
  logged: boolean;
  username?: string;
  password?: string;
  email?: string;
  newsletter?: boolean;
  rememberMe?: boolean;
}

const initialState: UserStateI = {
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<LoginStateI>) {
      if (action.payload.rememberMe) {
        localStorage.setItem(
          "username",
          JSON.stringify(action.payload.username)
        );
        localStorage.setItem(
          "password",
          JSON.stringify(action.payload.password)
        );
        localStorage.setItem("remember", JSON.stringify(true));
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("remember");
      }
      state.logged = true;
      state.username = action.payload.username;
    },
    logOut(state) {
      state.logged = false;
      if (!localStorage.getItem("remember")) {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("remember");
      }
      /** @TODO reset state */
    },
    updateNewsletter(state) {
      state.newsletter = !state.newsletter;
    },
    saveConnexionData(state) {
      /** @todo */
      if (state.rememberMe) {
        // remove data from localstorage
      } else {
        // save data in localstorage
      }
      state.rememberMe = !state.rememberMe;
    },
    signIn(state, action: PayloadAction<SigninStateI>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.newsletter = action.payload.newsletter;
    },
  },
});

export const { logIn, logOut, updateNewsletter, saveConnexionData, signIn } =
  userSlice.actions;

export default userSlice.reducer;
