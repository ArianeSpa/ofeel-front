// == Import : npm
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// == Import : local
// import appReducer from "./reducers/appReducer";
// import mealPlanReducer from "./reducers/mealPlanReducer";
// import postReducer from "./reducers/postReducer";
// import userReducer from "./reducers/userReducer";
import userReducer from "./reducers/user.slice";
// import workoutReducer from "./reducers/workoutReducer";
// import ajaxMiddleware from "./ajaxMiddleware";

const rootReducer = combineReducers({
  userReducer,
  // appReducer,
  // mealPlanReducer,
  // postReducer,
  // workoutReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(ajaxMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
