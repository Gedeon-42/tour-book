import React, { useState } from 'react'

import './dashboard.css'
import { links } from '../../assets/data/dashboarddata'
import { Link } from 'react-router-dom'
import { FaAngleLeft, FaSignOutAlt } from 'react-icons/fa'

function Sidebar() {
  const [loading,setLoading]=useState(false)
  const handelLogout = ()=>{
setLoading(true)
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div className='sidebar-wrapper'>
      
    <div className='sidebar'>
        <div className="sidebar-header">
        <Link to='/' style={{
          textDecoration:'none',
          color:'black'
        }}><FaAngleLeft/>back </Link>
        </div>
        <div className="nav-links">
          {links.map((i)=>(
            <div key={i.id} className='sidebar-links'>
            <Link to={`/admin/${i.name}`}>
            <span className='side-bar-icons'>{i.icon}</span>
            <span>{i.name}</span>
            </Link>
            </div>
          ))}
          <div className="logout" onClick={handelLogout}>
            <FaSignOutAlt />Signout
          </div>
        </div>
    </div>
    </div>
  )
}

export default Sidebar