import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import transactionReducer from "./transactions/transactionSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    transactions: transactionReducer,
  },
});
