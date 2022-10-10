import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api } from './api'

export const userApi = api.injectEndpoints({
  endpoints(build) {
    return {
      /**
       * 分页查询列表
       */
      listUserByPage: build.query<
        BaseResponse<PageInfo<UserType.UserVO>>,
        UserType.UserQueryRequest
      >({
        query(param) {
          return {
            method: 'GET',
            url: 'user/list/page',
            params: param,
          }
        },
        providesTags: ['User']
      }),

      /**
       * 添加
       */
      addUser: build.mutation<BaseResponse<number>, UserType.UserAddRequest>({
        query(params) {
          return {
            method: 'POST',
            url: '/user/add',
            headers: {
              'Content-Type': 'application/json',
            },
            data: params,
          }
        },
        invalidatesTags: ['User'],
      }),

      /**
       * 根据 id 查询
       */
      getUserById: build.query<
        BaseResponse<BaseResponse<UserType.User>>,
        number
      >({
        query(id) {
          return {
            method: 'GET',
            url: 'user/get',
            params: { id },
          }
        },
        providesTags: (result, err, id)=>[{type: 'User', id: id}]
      }),

      /**
       * 更新
       */
      updateUser: build.mutation<
        BaseResponse<boolean>,
        UserType.UserUpdateRequest
      >({
        query(params) {
          return {
            method: 'POST',
            url: '/user/update',
            headers: {
              'Content-Type': 'application/json',
            },
            data: params,
          }
        },
        invalidatesTags: (result, err, param)=>[{type: 'Post', id: param.id}]
      }),

      /**
       * 删除
       */
      deleteUser: build.mutation<
        BaseResponse<boolean>,
        UserType.UserDeleteRequest
      >({
        query(params) {
          return {
            method: 'POST',
            params: { ...params },
            headers: {
              'Content-Type': 'application/json',
            },
            data: params,
            url: '/user/delete',
          }
        },
        invalidatesTags: (result, err, param)=>[{type: 'Post', id: param.id}]
      }),
    }
  },
})
export const {
  useListUserByPageQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} = userApi
