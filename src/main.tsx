import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import store from './store'
// import '~antd/dist/antd.dark.less';
import './index.less'
import 'uno.css'
import '@unocss/reset/tailwind.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>

    <RouterProvider router={router} />

  </Provider>
)
