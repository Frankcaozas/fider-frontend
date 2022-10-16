import { createSlice } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {} as UserType.UserVO,
  reducers: {
    login(state, action) {
      state = action.payload
    }
  },
})



export const { login } = authSlice.actions
