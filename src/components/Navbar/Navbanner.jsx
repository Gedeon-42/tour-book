import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/images/holliday.jpg'
import { FaSearch } from 'react-icons/fa'
import {BiMenuAltRight} from 'react-icons/bi'
import Modal from '../pages/Modal'
import { useStateContext } from '../../assets/Context/ContextProvide'
import axiosClient from '../../../axiosclient'
function Navbanner({openModal}) {
  const [isScrolled,setIsScrolled]=useState(false)
const {loggedUser}=useStateContext()



  useEffect(()=>{
const handleScroll = ()=>{
  setIsScrolled(window.scrollY>0)
}
window.addEventListener('scroll',handleScroll)
return () => {
  window.removeEventListener('scroll',handleScroll)
}
  },[])

const navBannerClass = isScrolled ? 'large-navbanner':'navbanner'
const handleLogout =()=>{
  localStorage.removeItem('token')
  window.location.reload()
}
  return (
<>

  <div className='navbanner'>
   
   <div className="banner-logo">
       <img src={logo}/>
   </div>
   <div className="banner-btns">
       <div className='btn-banner' onClick={handleLogout}>signup</div>
       <div className='btn-banner' onClick={handleLogout}>login</div>
       <div className='btn-search'><FaSearch/></div>
       <div className='btn-menu' onClick={openModal}><BiMenuAltRight/></div>
   </div>
</div>

</>
    
  )
}

export default Navbanner