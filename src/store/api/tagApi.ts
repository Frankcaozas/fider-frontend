import { api } from './api'

export const tagApi = api.injectEndpoints({
  endpoints(build) {
    return {
      /**
       * 分页查询列表
       */
      listTagByPage: build.query<
        BaseResponse<PageInfo<TagType.Tag[]>>,
        TagType.TagQueryRequest
      >({
        query(param) {
          return {
            method: 'GET',
            url: 'tag/list/page',
            params: param,
          }
        },
        providesTags: ['Tag'],
      }),

      /**
       * 获取标签所有的分组列表
       */
      listTagCategory: build.query<BaseResponse<string[]>, any>({
        query() {
          return {
            method: 'GET',
            url: '/tag/category/list',
            params: {},
          }
        },
        providesTags: ['Tag'],
      }),

      /**
       * 添加
       */
      addTag: build.mutation<BaseResponse<number>, TagType.TagAddRequest>({
        query(params) {
          return {
            method: 'POST',
            url: '/tag/add',
            headers: {
              'Content-Type': 'application/json',
            },
            body: params,
          }
        },
        invalidatesTags: (res, _err, _param) => [{ type: 'Tag', id: res?.data }],
      }),

      /**
       * 获取标签分组
       */
      getTagMap: build.query<BaseResponse<TagType.TagMap>, any>({
        query() {
          return {
            method: 'GET',
            url: '/tag/get/map',
            params: {},
          }
        },
        providesTags: ['Tag'],
      }),

      /**
       * 删除
       */
      deleteTag: build.mutation<BaseResponse<boolean>, DeleteRequest>({
        query(params) {
          return {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: params,
            url: '/tag/delete',
          }
        },
        invalidatesTags: (res, err, param) => [{ type: 'Tag', id: param?.id }],
      }),
    }
  },
})
export const {
  useListTagByPageQuery,
  useAddTagMutation,
  useDeleteTagMutation,
  useListTagCategoryQuery,
  useGetTagMapQuery,
} = tagApi
