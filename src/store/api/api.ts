import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const env = import.meta.env
const baseQuery = fetchBaseQuery({
  baseUrl: env.PROD
    ? 'https://www.lovefinder.cn/api'
    : 'http://localhost:8103/api',
})

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQuery,
  tagTypes: ['Tag', 'Post', 'User', 'Report'],
  endpoints: () => ({})
})
