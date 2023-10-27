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
    const[loading,setLoading]=useState(false)
    const{setToken,setUser,signupMutation}=useStateContext()
const navigate = useNavigate()
const handlesubmit = async(e) =>{
    e.preventDefault();
    const payload = { email, FullNames, PhoneNumber, Password, Location };
setLoading(true)
    // await axios.post('https://events-planner.onrender.com/api/v1/auth/signup', payload).then(({data})=>{
    //   setUser(data.user)
    //   //setToken(data.access_token)
    //   setLoading(false)
    //   navigate('/login')
    // }).catch(()=>(
    //     setLoading(false)
    // ));


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
    signupMutation.mutate(payload)
  }

  return (
    <div className='login-wrapper'>
        <div className="advenure-wrapper">
        <h1>every day is adventure</h1>
        </div>
        
<div className="signup-page">
<div className="signup-form">
    <form action="" method="post" onSubmit={handlesubmit}>
        <h1>Signup </h1>
        <div className="email-name-signup">
            <input type="email"  placeholder='email address' onChange={(e)=>setEmail(e.target.value)}/>
            <br/>

            <input type="text" onChange={(e)=>setFullnames(e.target.value)}  placeholder=' Fullname' />
        </div>
            
            <div className="password-location">
            <input type="number" onChange={(e)=>setPhone(e.target.value)}  placeholder=' Phone number'/>
            <input type="text" onChange={(e)=>setLocation(e.target.value)}  placeholder=' location'/>
           
            <input type="password"  onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
            <div className='password-forgot'>
            <Link to='/login'>forgot password</Link>
            </div>
            
            <div className='check-box'>
            <input type="checkbox" className='check-box1' />remember me
            </div>
            
            <button  className='btn-signup' type='submit'>{loading?(<p className='loader-login'></p>):(<p>SignUp</p>)}</button>
            </div>
           
            <p className='message-p'>Already Registered?  <Link to='/login'>Login</Link></p>
    
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
  )
}

export default Signup