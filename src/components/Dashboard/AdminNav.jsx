import React from 'react'
import { FaGem, FaMoon, FaSun } from 'react-icons/fa'

function AdminNav() {
  return (
    <div className='admin-nav'>
    <h1 className='admin-h1'>Hello hussein</h1>
    <div className='admin-nav-right'>
        <div className='settings'><FaGem/></div>
        <div className="dark-light">
          <div className="sun"><FaSun/></div>
            <div className="mode">   Dark Mode</div>
         <div className="moon"> <FaMoon/></div>
           
        </div>
    </div>
    </div>
  )
}

export default AdminNav