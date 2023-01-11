import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducer/userSlice";
import ReduxThunk from "redux-thunk";

export const middlewares = [ReduxThunk];

export const store = configureStore({
  reducer: {
    abc: userReducer,
  },
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
