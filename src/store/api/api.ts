import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const env = import.meta.env
const baseQuery = fetchBaseQuery({
  baseUrl: env.PROD
    ? env.ImportBaseUrl.VITE_DEV_URL
    : env.ImportBaseUrl.VITE_PROD_URL,
})

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQuery,
  tagTypes: ['Tag', 'Post', 'User', 'Report'],
  endpoints: () => ({})
})
