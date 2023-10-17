import React from 'react'
import { Outlet } from 'react-router-dom'
import './dashboard.css'
import AdminNav from './AdminNav'
import Sidebar from './Sidebar'
function Dashboard() {
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