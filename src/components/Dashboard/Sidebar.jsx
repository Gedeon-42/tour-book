import React from 'react'

import './dashboard.css'
import { links } from '../../assets/data/dashboarddata'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar-wrapper'>
      
    <div className='sidebar'>
        <div className="sidebar-header">
          

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
    </div>
  )
}

export default Sidebar