import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routes.jsx'
import '@smastrom/react-rating/style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='max-w-screen-lg mx-auto'>
  <RouterProvider router={router}></RouterProvider>
  </div>
  </React.StrictMode>,
)
