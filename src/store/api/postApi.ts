import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8103/api',
  }),
  endpoints(build) {
    return {
      /**
       * 分页查询列表
       */
      listPostByPage: build.query<
        BaseResponse<PageInfo<PostType.PostVO>>,
        PostType.PostQueryRequest
      >({
        query(param) {
          return {
            method: 'GET',
            url: 'post/list/page',
            params: param,
          }
        },
      }),

      /**
       * 添加
       */
      addPost: build.mutation<BaseResponse<number>, PostType.PostAddRequest>({
        query(params) {
          return {
            method: 'POST',
            url: '/post/add',
            headers: {
              'Content-Type': 'application/json',
            },
            data: params,
          }
        },
      }),

      /**
       * 根据 id 查询
       */
      getPostById: build.query<
        BaseResponse<BaseResponse<PostType.Post>>,
        number
      >({
        query(id) {
          return {
            method: 'GET',
            url: 'post/list/page',
            params: { id },
          }
        },
      }),

      /**
       * 更新
       */
       updatePost: build.mutation<BaseResponse<boolean>, PostType.PostUpdateRequest>({
        query(params) {
          return {
            method: 'POST',
            url: '/post/add',
            headers: {
              'Content-Type': 'application/json',
            },
            data: params,
          }
        },
      }),


    }
  },
})
export const { useListPostByPageQuery } = postApi
