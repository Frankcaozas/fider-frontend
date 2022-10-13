import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Router, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.less'
import store from './store'
import router from '../config/router'
import GlobalLayout from './components/GlobalLayout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Provider store={store}>
      <GlobalLayout>
        <RouterProvider router={router} />
      </GlobalLayout>
    </Provider>
  </>
)
