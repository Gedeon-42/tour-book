import React from 'react'
import './dashboard.css'
import { links } from '../../assets/data/dashboarddata'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
function LargeSidebar({openMenu}) {
  return (
    <div className="large-sidebar-container">
    <div className="nav-links">
          {links.map((i)=>(
            <div key={i.id} className='sidebar-links' onClick={openMenu}>
            <Link to={`/admin/${i.name}`}>
            <span>{i.icon}</span>
            <span>{i.name}</span>
            
            </Link>
            </div>
          ))}
      </div>
      <div className="fa-times-large">
        <FaTimes onClick={openMenu}/>
      </div>
    </div>
         
  )
}

export default LargeSidebar