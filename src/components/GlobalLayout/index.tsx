import { Image, Layout, Menu } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import React, { ReactNode } from 'react'
import logo from '/vite.svg'
import GlobalFooter from '../GlobalFooter'
import './index.less'

interface props {
  children: ReactNode
}
const GlobalLayout: React.FC<props> = ({ children }) => {
  return (
    <Layout>
      <Header className="layout-header">
        <div className="header-left">
          <div className="logo-container">
            <img id="logo" src={logo} alt="" />
            <h1>Fider</h1>
          </div>
        </div>

        <Menu
          style={{
            flex: 'auto',
          }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(4).fill(null).map((_, index) => {
            const key = index + 1
            return {
              key,
              label: `nav ${key}`,
            }
          })}
        />
      </Header>
      <Content>{children}</Content>
      <GlobalFooter />
    </Layout>
  )
}

export default GlobalLayout
