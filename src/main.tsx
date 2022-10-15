import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from '../config/router'
import './index.less'
import store from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Provider store={store}>

        <RouterProvider router={router} />

    </Provider>
  </>,
)
