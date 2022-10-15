import { api } from './api'

export const postApi = api.injectEndpoints({
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
        providesTags: ['Post'],
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
        invalidatesTags: result => [{ type: 'Post', id: result?.data }],
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
            url: 'post/get',
            params: { id },
          }
        },
        providesTags: (result, err, id) => [{ type: 'Post', id }],
      }),

      /**
       * 更新
       */
      updatePost: build.mutation<
        BaseResponse<boolean>,
        PostType.PostUpdateRequest
      >({
        query(params) {
          return {
            method: 'POST',
            url: '/post/update',
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
      deletePost: build.mutation<
        BaseResponse<boolean>,
        PostType.PostDeleteRequest
      >({
        query(params) {
          return {
            method: 'POST',
            params: { ...params },
            headers: {
              'Content-Type': 'application/json',
            },
            data: params,
            url: '/post/delete',
          }
        },
        invalidatesTags: (result, err, param) => [{ type: 'Post', id: param.id }],
      }),

      /**
       * 点赞 / 取消点赞
       */
      postDoThumb: build.mutation<
        BaseResponse<number>,
        PostType.PostDoThumbRequest
      >({
        query(params) {
          return {
            method: 'POST',
            params: { ...params },
            headers: {
              'Content-Type': 'application/json',
            },
            data: params,
            url: '/post/thumb',
          }
        },
        invalidatesTags: (result, err, param) => [{ type: 'Post', id: param.postId }],
      }),
    }
  },
})
export const {
  useListPostByPageQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostByIdQuery,
  usePostDoThumbMutation,
  useUpdatePostMutation,
} = postApi
