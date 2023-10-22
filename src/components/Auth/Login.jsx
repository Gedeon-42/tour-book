import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mount7 from '../../assets/images/mount7.jpg'
import google from '../../assets/images/google1.png'
import './auth.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import axios from 'axios'
import axiosClent from '../../../axiosclient'
import { useStateContext } from '../../assets/Context/ContextProvide'
import axiosClient from '../../../axiosclient'
function Login() {
    const[email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const { setUser, setToken } = useStateContext();
    const navigate = useNavigate()
    
 const  handlesubmit= async (e)=>{
    e.preventDefault()
    const payload = {email,Password}

    await axios.post('https://events-planner.onrender.com/api/v1/auth/login', payload).then(({data})=>{
        setUser(data.user)
        setToken(data.access_token)
        
      });

    // try {
    //     const response = await axios.post('https://events-planner.onrender.com/api/v1/auth/login', payload);
    //     const { access_token } = response.data; // Extract the access_token from the response
    //     if (access_token) {
    //       localStorage.setItem('token', access_token); // Store the token in local storage
    //       console.log('token was stored')
    //     } else {
    //       console.error('Token is missing in the response data.');
    //     }
    //   } catch (error) {
    //     console.error('Request failed:', error);
    //   }
  

 }
  return (
    <>
        <div className='login-wrapper'>
        <div className="advenure-wrapper">
        <h1>every day is like holiday</h1>
        </div>
<div className="login-page">
    <div className="login-form">
        <form action="" method="post" onSubmit={handlesubmit}>
        <h1>Login</h1>
            <label htmlFor="email"> Email address</label>
            <input type="email"  placeholder='email address' onChange={(e)=>setEmail(e.target.value)}/>
            <div className='password-forgot'>
            <label htmlFor="password">password</label>
            <Link to='/login'>forgot password</Link>
            </div>
            <input type="password"  onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
            <div className='check-box'>
            <input type="checkbox" className='check-box1' />remember me
            </div>
            
            <button  className='btn-login' type='submit'>login</button>
            <p className='message-p'>Does not have account?  <Link to='/signup'>signup</Link></p>
    
       {/* <fieldset >
                <legend>or login with: </legend>
                <div className='btn-google1'>
                
                <button type='button' className='btn-google'>
                    <img src={google} className='google'/> google
                </button>
                <button type='button' className='btn-facebook'>
                    <FaFacebook/>face book
                </button>
                </div>
                
            </fieldset> */}
       
        </form>
    </div>
</div>
    </div>
    </>

  )
}

export default Login