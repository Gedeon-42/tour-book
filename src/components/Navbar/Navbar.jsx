import React, { useState } from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa'
 import {BsFillTelephoneFill} from 'react-icons/bs'
 import {RiFacebookFill} from 'react-icons/ri'
 import './navbar.css'
import Navbanner from './Navbanner'
import Modal from '../pages/Modal'
import { useStateContext } from '../../assets/Context/ContextProvide'
function Navbar() {
const{openModal}=useStateContext()
  return (
    <>
      <>
 <div className='navbar'>
 <div className="navbar-contact">
     <div className='email-top'>
     <FaEnvelope className='icons'/>
     <p>holidaypreners@gmail.com</p>
     </div>
   <BsFillTelephoneFill className='icons'/>
   <p>+250780749799</p>
 </div>
 <div className="navbar-social">
     <div className="facebook">
         <RiFacebookFill className='icons'/>
     </div>
     <div className="instagram">
         <FaInstagram className='icons'/>
     </div>
     <div className="twitter">
         <FaTwitter className='icons'/>
     </div>
 </div>
     </div>
     <Navbanner openModal={openModal}/>
     </>
    
   
    </>
  )
}

export default Navbar