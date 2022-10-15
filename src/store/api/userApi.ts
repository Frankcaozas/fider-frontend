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
        providesTags: ['User'],
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
        providesTags: (result, err, id) => [{ type: 'User', id }],
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
        invalidatesTags: (result, err, param) => [{ type: 'Post', id: param.id }],
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
        invalidatesTags: (result, err, param) => [{ type: 'Post', id: param.id }],
      }),

      /**
        * 登录
        */
      userLogin: build.mutation<
       BaseResponse<UserType.UserVO>,
       UserType.UserLoginRequest
     >({
       query(params) {
         return {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           data: params,
           url: '/user/login',
         }
       },
     }),

      /**
        * 退出登录
        */
      userLogout: build.mutation<
       BaseResponse<boolean>,
       null
     >({
       query() {
         return {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           data: {},
           url: '/user/logout',
         }
       },
     }),

      /**
        * 注册
        */
      userRegister: build.mutation<
       BaseResponse<number>,
       UserType.UserRegisterRequest
     >({
       query(param) {
         return {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           data: { param },
           url: '/user/register',
         }
       },
     }),
      /**
        * 注册
        */
      getLoginUser: build.query<
       BaseResponse<UserType.UserVO>,
       null
     >({
       query() {
         return {
           method: 'GET',
           url: '/user/register',
         }
       },
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
  useGetLoginUserQuery,
  useUserLoginMutation,
  useUserLogoutMutation,
  useUserRegisterMutation,
} = userApi
