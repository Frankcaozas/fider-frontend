import { Layout, Menu } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
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
            <div className="logo-container" un-text='center' color-gray-200>
              <div className="i-carbon-campsite inline-block text-4xl" ></div>
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
      <Content
        un-text="center gray-700 dark:gray-200 ma"
        dark:bg-hex-121212>
        <Outlet />
      </Content>
      <Footer
        dark:bg-hex-121212
        un-text="gray-700 dark:gray-200"
        w-screen
        bottom-0
        absolute
      >


        <GlobalFooter justify-items-center />
      </Footer>
    </Layout>
  )
}

export default GlobalLayout
