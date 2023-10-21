import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/images/holliday.jpg'
import { FaSearch } from 'react-icons/fa'
import {BiMenuAltRight} from 'react-icons/bi'
import Modal from '../pages/Modal'
function Navbanner({openModal}) {
  const [isScrolled,setIsScrolled]=useState(false)

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
  return (
<>

  <div className='navbanner'>
   
   <div className="banner-logo">
       <img src={logo}/>
   </div>
   <div className="banner-btns">
       <button className='btn-banner'>Reserve</button>
       <button className='btn-search'><FaSearch/></button>
       <button className='btn-menu' onClick={openModal}><BiMenuAltRight/></button>
   </div>
</div>

</>
    
  )
}

export default Navbanner