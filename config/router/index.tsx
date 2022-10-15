import { createBrowserRouter } from 'react-router-dom'
import GlobalLayout from '../../src/components/GlobalLayout'
import IndexPage from '../../src/pages/index/index'
import PostAddpage from '../../src/pages/post/add'
import LoginPage from '../../src/pages/user/login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      {
        path: '/',
        element: <IndexPage/>,
      },
      {
        path: '/post/add',
        element: <PostAddpage/>,
      },
      {
        path: '/user/login',
        element: <LoginPage/>,
      },
    ],
  },
])

export default router
