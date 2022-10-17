import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

const env = import.meta.env

const baseQuery = fetchBaseQuery({
  baseUrl: env.PROD
    ? 'https://www.lovefinder.cn/api'
    : 'http://localhost:8103/api',
})
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  const data: any = result.data;

      if (!data) {
        throw new Error('服务异常');
      }
      const code = data.code ?? 50000;
      // 未登录，且不为获取用户登录信息接口
      if (
        code === 40100 &&
        !location.pathname.includes('/user/login')
      ) {
        // 跳转至登录页
        window.location.href = `/user/login?redirect=${window.location.href}`;
        throw new Error('请先登录');
      }
      if (code !== 0) {
        console.error(`request error`, data);
        throw new Error(data.message ?? '服务器错误');
      }
      // do something
  return result
}



export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery :baseQueryWithReauth,
  tagTypes: ['Tag', 'Post', 'User', 'Report'],
  endpoints: () => ({}),
})
