import { idIDIntl } from '@ant-design/pro-components'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {} as UserType.UserVO,
  reducers: {
    login(state, action: PayloadAction<UserType.UserVO>) {
      state = {...action.payload}
      return state

    },
  },
})
//wupeng123 123456789
export const { login } = authSlice.actions
