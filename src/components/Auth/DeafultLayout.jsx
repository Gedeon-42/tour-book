import React from 'react'
import { useStateContext } from '../../assets/Context/ContextProvide'
import { Navigate, Outlet } from 'react-router-dom'

function DefaultLayout() {
     const{access_token}= useStateContext()
     if(access_token){
      return <Navigate to='/admin'/>
     }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default DefaultLayout