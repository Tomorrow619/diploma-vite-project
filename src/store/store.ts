import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./API/authAPI"
import userSlice from "./userSlice"
import { bayutApi } from "./API/bayutAPI";


export const store = configureStore({
  reducer: {
    user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [bayutApi.reducerPath]: bayutApi.reducer,
    

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware,bayutApi.middleware, ]),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

 