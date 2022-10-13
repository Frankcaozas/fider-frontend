import React from "react";
import { createBrowserRouter } from "react-router-dom"; 
import IndexPage from '../../src/pages/index/index'
 const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage/>
  }
])

export default router