import React from 'react'
import { Link } from 'react-router-dom'
import chair from '../../assets/images/chair.jpg'
import google from '../../assets/images/google1.png'
import './auth.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
function Login() {
  return (
    <div className='login-wrapper'>
<div className="login-page">

    
    <div className="login-form">
    <h1>Login</h1>
    <p>does not have account?<Link to='/signup'>signup</Link></p>
        <form action="" method="post">
            <label htmlFor="email"> Email address</label>
            <input type="email"  placeholder='you@example.com'/>
            <div className='password-forgot'>
            <label htmlFor="password">password</label>
            <Link to='/login'>forgot password</Link>
            </div>
            <input type="password"  placeholder='password'/>
            <div className='check-box'>
            <input type="checkbox" className='check-box1' />remember me
            </div>
            
            <button  className='btn-login' type='submit'>login</button>
    
       <fieldset >
                <legend>or login with: </legend>
                <div className='btn-google1'>
                
                <button type='button' className='btn-google'>
                    <img src={google} className='google'/> google
                </button>
                <button type='button' className='btn-facebook'>
                    <FaFacebook/>face book
                </button>
                </div>
                
            </fieldset>
       
        </form>
    </div>
</div>
<div className="login-image">
    <div className="login-image-container">
        <img src={chair} alt=""  />
    </div>
</div>
    </div>
  )
}

export default Login