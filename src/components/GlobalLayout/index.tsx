import { Layout, Menu } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import GlobalFooter from '../GlobalFooter'
import './index.less'
import logo from '/vite.svg'

// interface props {
//   children: ReactNode
// }
const menuItems = [
  {
    key: '/index',
    label: <Link to={'/'}>首页</Link>,
  },
  {
    key: '/post/add',
    label: <Link to={'/post/add'}>发帖</Link>,
  },
]

const GlobalLayout: React.FC = () => {
  return (
    <Layout>
      <Header className="layout-header">
        <div className="header-left">
          <a href='/'>
            <div className="logo-container">
              <img id="logo" src={logo} alt="" />
              <h1>Fider</h1>
            </div>
          </a>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={menuItems}
        />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <GlobalFooter />
    </Layout>
  )
}

export default GlobalLayout
