import { Image, Layout, Menu } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import React, { ReactNode } from 'react'
import logo from '../../../public/vite.svg'

interface props {
  children: ReactNode
}
const GlobalLayout: React.FC<props> = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          padding: '0 20px',
        }}>
        <div>
          <Image src={logo} height={45} preview={false} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(4).fill(null).map((_, index) => {
            const key = index + 1
            return {
              key,
              label: `nav ${key}`,
            }
          })}></Menu>
      </Header>
      <Content>{children}</Content>
    </Layout>
  )
}

export default GlobalLayout
