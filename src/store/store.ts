// == Import : npm
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// == Import : local
// import oldAppReducer from "./reducers/oldAppReducer";
// import mealPlanReducer from "./reducers/mealPlanReducer";
// import postReducer from "./reducers/postReducer";
// import userReducer from "./reducers/userReducer";
import { appReducer, userReducer } from "./reducers";
// import workoutReducer from "./reducers/workoutReducer";
// import ajaxMiddleware from "./ajaxMiddleware";

const rootReducer = combineReducers({
  appReducer,
  userReducer,
  // oldAppReducer,
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
