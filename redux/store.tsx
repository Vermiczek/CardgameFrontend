import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import counterReducer from "../redux/redux";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
