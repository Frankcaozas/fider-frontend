import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginForm, ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useUserLoginMutation } from '../../../store/api/userApi'
import { login } from '../../../store/reducers/authSlice'
import logo from '/vite.svg'
const LoginPage = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const [loginFn, { error }] = useUserLoginMutation()
  /**
   * 用户登录
   * @param fields
   */
  const doUserLogin = async (fields: UserType.UserLoginRequest) => {
    console.log(fields)
    const hide = message.loading('登录中')
    try {
      const res = await loginFn(fields)
      dispatch(login(res.data.data))
      console.log(res.data.data)
      message.success('登录成功')
      console.log(state);
      // 重定向到之前页面
    }
    catch (e: any) {
      message.error(e.message)
    }
    finally {
      hide()
    }
  }
  return (
    <div
      style={{
        height: '100vh',
        background:
          'url(https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png)',
        backgroundSize: '100% 100%',
      }}
    >
      <LoginForm<UserType.UserLoginRequest>
        logo={logo}
        title="Fider"
        subTitle="发现你的另一半"
        onFinish={async (formData) => {
          await doUserLogin(formData)
        }}
      >
        <>
          <ProFormText
            name="userAccount"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'请输入账号'}
            rules={[
              {
                required: true,
                message: '请输入账号!',
              },
            ]}
          />
          <ProFormText.Password
            name="userPassword"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'请输入密码'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </>
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <Link to="/user/register">新用户注册</Link>
          <Link
            to="/"
            style={{
              float: 'right',
            }}
          >
            返回主页
          </Link>
        </div>
      </LoginForm>
    </div>
  )
}

export default LoginPage
