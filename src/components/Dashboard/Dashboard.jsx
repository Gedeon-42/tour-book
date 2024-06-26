import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import './dashboard.css'
import AdminNav from './AdminNav'
import Sidebar from './Sidebar'
import { useStateContext } from '../../assets/Context/ContextProvide'
function Dashboard() {
  const{user,access_token,allusers}= useStateContext()
 if(!access_token){
    return <Navigate to='/login'/>
 }

  return (
  
    <div className='Dashboard-wrapper'>
        <AdminNav/>
        <Sidebar/>
       
        < div className='mains'>
        
        <Outlet/>
        </div>


    </div>
  )
}

export default Dashboard