import React from 'react'
import { FaGem, FaMoon, FaSun } from 'react-icons/fa'
import { FiSettings} from 'react-icons/fi'
import profile from '../../assets/images/riyad.jpg'
function AdminNav() {
  return (
    <div className='admin-nav'>
    <h1 className='admin-h1'>Hello Gedeon</h1>
    <div className='admin-nav-right'>
        <div className='settings'><FiSettings/></div>
        <div className="dark-light">
         <img  src={profile} className=''/>
  </div>
    </div>
    </div>
  )
}

export default AdminNav