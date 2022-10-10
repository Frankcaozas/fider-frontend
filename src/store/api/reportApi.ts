import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api } from './api'

export const reportApi = api.injectEndpoints({
  endpoints(build) {
    return {
      /**
       * 分页查询列表
       */
      listReportByPage: build.query<
        BaseResponse<PageInfo<ReportType.Report>>,
        ReportType.ReportQueryRequest
      >({
        query(param) {
          return {
            method: 'GET',
            url: 'report/list/page',
            params: param,
          }
        },
        providesTags: ['Report'],
      }),

      /**
       * 添加
       */
      addReport: build.mutation<
        BaseResponse<number>,
        ReportType.ReportAddRequest
      >({
        query(params) {
          return {
            method: 'POST',
            url: '/report/add',
            headers: {
              'Content-Type': 'application/json',
            },
            data: params,
          }
        },
        invalidatesTags: (res, err, param) => [{ type: 'Report', id: res?.data }],
      }),

      /**
       * 根据 id 查询
       */
      getReportById: build.query<
        BaseResponse<BaseResponse<ReportType.Report>>,
        number
      >({
        query(id) {
          return {
            method: 'GET',
            url: 'report/get',
            params: { id },
          }
        },
        providesTags: (result, err, id)=>[{type: 'Report', id: id}]
      }),

      /**
       * 更新
       */
      updateReport: build.mutation<
        BaseResponse<boolean>,
        ReportType.ReportUpdateRequest
      >({
        query(params) {
          return {
            method: 'POST',
            url: '/report/update',
            headers: {
              'Content-Type': 'application/json',
            },
            data: params,
          }
        },
        invalidatesTags: (res, err, param) => [{ type: 'Report', id: param.id }],
      }),

      /**
       * 删除
       */
      deleteReport: build.mutation<BaseResponse<boolean>, DeleteRequest>({
        query(params) {
          return {
            method: 'POST',
            params: { ...params },
            headers: {
              'Content-Type': 'application/json',
            },
            data: params,
            url: '/report/delete',
          }
        },
        invalidatesTags: (res, err, param) => [{ type: 'Report', id: param.id }],
      }),
    }
  },
})
export const {
  useListReportByPageQuery,
  useAddReportMutation,
  useDeleteReportMutation,
  useGetReportByIdQuery,
  useUpdateReportMutation,
} = reportApi
