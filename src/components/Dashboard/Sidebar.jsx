import React from 'react'

import './dashboard.css'
import { links } from '../../assets/data/dashboarddata'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-header">
          <FaBars className='sidebar-bars'/>

        </div>
        <div className="nav-links">
          {links.map((i)=>(
            <div key={i.id} className='sidebar-links'>
            <Link to={`/admin/${i.name}`}>
            <span>{i.icon}</span>
            <span>{i.name}</span>
            
            </Link>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Sidebar