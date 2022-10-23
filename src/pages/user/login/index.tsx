import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginForm, ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAppSelector } from '../../../store'
import { useUserLoginMutation } from '../../../store/api/userApi'
import { login } from '../../../store/reducers/authSlice'
import logo from '/vite.svg'
const LoginPage = () => {
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state = useAppSelector(state => state.auth)
  const [loginFn, { error }] = useUserLoginMutation()
  const [serchParam, setSerchParam] = useSearchParams()
  /**
   * 用户登录
   * @param fields
   */
  const doUserLogin = async (fields: UserType.UserLoginRequest) => {
    const hide = message.loading('登录中')
    try {
      const res = await loginFn({...fields}).unwrap()
      dispatch(login({...res.data}))
      message.success('登录成功')
      console.log(state)
      // 重定向到之前页面
      const path = serchParam.get('redirect') ?? '/'
      navigate(path)
      
    }
    catch (e: any) {
      message.error(e.message ?? '登录失败')
    }
    finally {
      hide()
    }
  }
  return (
    <div
      style={{
        height: '100vh',
        // background:
        //   'url(https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png)',
        backgroundSize: '100% 100%',
        paddingTop: '10vh'
      }}
    >
      <LoginForm<UserType.UserLoginRequest>
        logo={logo}
        title="Fider"
        subTitle="find everything here"
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
