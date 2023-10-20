import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './router.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ContextProvider } from './assets/Context/ContextProvide.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider> 
    <RouterProvider router={router} />
    </ContextProvider>
    
  </React.StrictMode>,
)
