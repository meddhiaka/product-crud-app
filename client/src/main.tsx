import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import './index.css'
import Home from './pages/Home.tsx'
import Product from './pages/Product.tsx'
import Create from './pages/Create.tsx'
import View from './pages/View.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' index={true} element={<Home />} />
      <Route path='/product/:productName' element={<Product />} />
      <Route path='/create' element={<Create />} />
      <Route path='/view-unique-product/:productName' element={<View />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
