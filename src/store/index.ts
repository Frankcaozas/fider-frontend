import { postApi } from './api/postApi'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store
