import React from 'react'
import './footer.css'
import payment from '../../assets/images/payment1.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer-wrapper'>
<div className="footer-content1">
  <div className="footer1-desc">
    <p>Holiday Planners sit amet consectetur adipisicing elit. Perferendis 
      sapiente tenetur officiis 
      explicabo fugit, sit mollitia eum atque excepturi quaerat autem.</p>
      <form action="" method="post">
        <input type="email"  placeholder='enter you emai'/>
        <button> submit</button>
      </form>
      <img src={payment}className='payment-logo' alt="" />
  </div>
</div>
<div className="footer-content2">
  <ul>
    
  <li><Link> home</Link></li>
      <li><Link> about</Link></li>
      <li><Link> destination</Link></li>
     <li><Link> tour</Link></li> 
      <li><Link> blog</Link></li>
     <li> <Link> contact us</Link></li>
    
  </ul>
</div>
<div className="footer-content3">
  <div className="footer-content3-desc">
    <p>callus</p>
    <h4>+250780749799</h4>
  </div>
  <div className="footer-content3-desc">
    <p>email for us</p>
    <h4>email@gmail.com</h4>
  </div>
  <div className="footer-content3-desc">
    <p>lacation</p>
    <h4>Main stereet, Kg 456</h4>
  </div>
  <div className="footer-content3-desc">
    <p>follow us</p>
    <FaFacebook/>
    <FaInstagram/>
    <FaTwitter/>
  </div>
</div>
       
    </div>
  )
}

export default Footer