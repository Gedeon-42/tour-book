import React from 'react'
import { useStateContext } from '../../assets/Context/ContextProvide'
import { Navigate, Outlet } from 'react-router-dom'

function DefaultLayout() {
    // const{token}= useStateContext()
    // if(!token){
    //   return <Navigate to='/admin'/>
    // }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default DefaultLayout