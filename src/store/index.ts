import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import {authSlice} from './reducers/authSlice'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice.reducer,
  },
  
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})

export default store
