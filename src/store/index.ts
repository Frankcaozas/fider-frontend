import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import {authSlice} from './reducers/authSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice.reducer,
  },
  
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),


})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
