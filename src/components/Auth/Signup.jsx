import React, { useState } from 'react'
import { Link, useNavigate,} from 'react-router-dom'
import chair from '../../assets/images/chair.jpg'
import google from '../../assets/images/google1.png'
import { FaFacebook } from 'react-icons/fa'
import axiosClent from '../../../axiosclient'
import { useStateContext } from '../../assets/Context/ContextProvide'
import axiosClient from '../../../axiosclient'
import axios from 'axios'
function Signup() {


    const[email,setEmail]=useState('')
    const[FullNames,setFullnames]=useState('')
    const[PhoneNumber,setPhone]=useState('')
    const[Location,setLocation]=useState('')
    const[Password,setPassword]=useState('')
    const[Role,setRole]=useState('');
    const{setToken,setUser}=useStateContext()
const navigate = useNavigate()
const handlesubmit = async(e) =>{
    e.preventDefault();
    const payload = { email, FullNames, PhoneNumber, Password, Location };

    await axios.post('https://events-planner.onrender.com/api/v1/auth/signup', payload).then(({data})=>{
      setUser(data.user)
      setToken(data.access_token)
      navigate('/login')
    });


    // try {
    //     const response = await axios.post('https://events-planner.onrender.com/api/v1/auth/signup', payload);
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
    <div className='login-wrapper'>
<div className="login-page">

    <div className="login-form">
    <h1>Signup </h1>
    <p>does not have account?  <Link to='/login'>login</Link></p>
        <form action="" method="post" onSubmit={handlesubmit}>
            <label htmlFor="email"> Email address</label>
            <input type="email"  placeholder='email address' onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="full name"> Full Names</label>
            <input type="text" onChange={(e)=>setFullnames(e.target.value)}  placeholder=' Fullname' />
            <label htmlFor="full name"> Phone number</label>
            <input type="number" onChange={(e)=>setPhone(e.target.value)}  placeholder=' Phone number'/>
            <label htmlFor="location"> Location</label>
            <input type="text" onChange={(e)=>setLocation(e.target.value)}  placeholder=' location'/>
            <div className='password-forgot'>
            <label htmlFor="password">password</label>
            <Link to='/login'>forgot password</Link>
            </div>
            <input type="password"  onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
            
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

    </div>
  )
}

export default Signup