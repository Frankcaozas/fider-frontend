import React from 'react';
import GlobalFooter from '../../components/GlobalFooter';
import { useListPostByPageQuery } from '../../store/api/postApi';

/**
 * 默认分页大小
 */
const DEFAULT_PAGE_SIZE = 10;

const IndexPage: React.FC = () => {
  const initSearchParams: PostType.PostQueryRequest = {
    current: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    // 只展示已审核通过的
    reviewStatus: 1,
    sortField: 'createTime',
    sortOrder: 'descend',
  };
  const {data, isError}= useListPostByPageQuery(initSearchParams)
  console.log(data)
  return (
    <div>
      IndexPage
      
    </div>
  );
};

export default IndexPage;