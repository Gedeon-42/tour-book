import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './router.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import router from './router.jsx'
import { ContextProvider } from './assets/Context/ContextProvide.jsx'

const client = new  QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={client}>
    <ContextProvider> 
    <RouterProvider router={router} />
    </ContextProvider>
    </QueryClientProvider>
   
    
  </React.StrictMode>,
)
