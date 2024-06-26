import React, { useEffect, useState } from 'react'
import { FaBell, FaEnvelope, FaGem, FaMoon, FaSun } from 'react-icons/fa'
import { FiSettings} from 'react-icons/fi'
import profile from '../../assets/images/riyad.jpg'
import { FaBars } from 'react-icons/fa'
import LargeSidebar from './LargeSidebar'
import { useStateContext } from '../../assets/Context/ContextProvide'
import axios from 'axios'
function AdminNav() {
  const{loggedUser}=useStateContext()
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
    <h1 className='admin-h1'>Hello <span>{loggedUser?.FullNames}</span></h1>
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