import React from 'react'
import holiday from '../../assets/images/holliday2.png'
import { FaFacebook, FaInstagram, FaTimes, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Modal({openModal}) {

  return (
    <div className='modal-container'>
<div className="modal-header">
    <img src={holiday} alt="" />
    <div onClick={openModal} className="close-modal">
        <FaTimes/>
    </div>
</div>
<div className="modal-body">
    <div className="modal-links" onClick={openModal}>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>destination</Link>
        <Link to='/tour'>tour</Link>
        <Link to='/'>contact us</Link>
    </div>
    <div className="modal-icons">
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
    </div>
</div>
    </div>
  )
}

export default Modal