import { useState } from 'react'
import reactLogo from './assets/logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* {
    name: '首页',
    path: '/',
    component: 'index',
  },
  {
    name: '我要寻爱',
    path: '/post/add',
    component: 'post/add',
  },
  {
    path: '/user',
    hideInMenu: true,
    headerRender: false,
    routes: [
      {
        name: '用户登录',
        path: '/user/login',
        component: 'user/login',
      },
      {
        name: '用户注册',
        path: '/user/register',
        component: 'user/register',
      },
    ],
  },
  {
    path: '/admin',
    access: 'canAdmin',
    name: '管理',
    flatMenu: true,
    routes: [
      {
        name: '用户管理',
        path: '/admin/user',
        component: 'admin/user',
      },
      {
        name: '帖子管理',
        path: '/admin/post',
        component: 'admin/post',
      },
      {
        name: '标签管理',
        path: '/admin/tag',
        component: 'admin/tag',
      },
      {
        name: '举报管理',
        path: '/admin/report',
        component: 'admin/report',
      },
    ],
  }, */}
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
      </Routes>
    </div>
  )
}

export default App
