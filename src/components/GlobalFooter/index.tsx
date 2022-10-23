import { GithubOutlined, UserOutlined } from '@ant-design/icons'
import { DefaultFooter } from '@ant-design/pro-components'
import React from 'react'
import { useDark } from '../../hooks/useDark'
import './index.less'

/**
 * 全局 Footer
 *
 * @author frankcao
 */
const GlobalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const setDark = useDark()
  const toggleDark = () => {
    setDark((pre) => !pre)
  }
  return (
    <nav flex justify-center>
      <button icon-btn onClick={toggleDark}>
        <div i-carbon-sun dark:i-carbon-moon ></div>
      </button>
      <a
        icon-btn i-carbon-logo-github
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
        title="GitHub"
      />
      
    </nav>

  )
}

export default GlobalFooter
