import { createBrowserRouter } from 'react-router-dom'
import GlobalLayout from '../components/GlobalLayout'
import IndexPage from '../pages/index/index'
import PostAddpage from '../pages/post/add'
import LoginPage from '../pages/user/login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      {
        path: '/',
        element: <IndexPage />,
      },
      {
        path: '/post/add',
        element: <PostAddpage />,
      },
      

    ],
  },
  {
    path: '/user/login',
    element: <LoginPage />,
  },
  
])

export default router
