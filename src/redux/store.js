import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { createStore, } from "redux";
// import { composeWithDevTools ,  } from "redux-devtools-extension";
import combineReducers from "./root-reducers";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: combineReducers,

  middleware: middleware,
  devTools: process.env.NODE_ENV !== "development",
});

export default store;
