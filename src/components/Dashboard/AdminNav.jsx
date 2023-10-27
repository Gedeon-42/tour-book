import React, { useState } from 'react'
import { FaBell, FaEnvelope, FaGem, FaMoon, FaSun } from 'react-icons/fa'
import { FiSettings} from 'react-icons/fi'
import profile from '../../assets/images/riyad.jpg'
import { FaBars } from 'react-icons/fa'
import LargeSidebar from './LargeSidebar'
function AdminNav() {
  const[menu,setMenu]= useState(false)
  function openMenu(){
    setMenu(!menu)
  }
  return (
    <>
        {menu?<LargeSidebar openMenu={openMenu}/>:(
      <div className='admin-nav'>
      <div className='bars-name-div'>
      <FaBars className='sidebar-bars' onClick={openMenu}/>
    <h1 className='admin-h1'>Hello Gedeon</h1>
      </div>
     
    <div className='admin-nav-right'>
    <div className='settings'><FaEnvelope/></div>
    <div className='settings'><FaBell/></div>
        <div className='settings'><FiSettings/></div>
        <div className="dark-light">
         <img  src={profile} className=''/>
  </div>
    </div>
    </div>
      )}</>

  
  )
}

export default AdminNav