import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mount7 from '../../assets/images/mount7.jpg'
import google from '../../assets/images/google1.png'
import './auth.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { useStateContext } from '../../assets/Context/ContextProvide'

function Login() {
    const[email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const { setUser, setToken } = useStateContext();
    const navigate = useNavigate()
    const [loading,setLoading]=useState(false)
    const{loginMutation}=useStateContext()
    const [errors, setErrors] = useState({ email: '', Password: '' });

    const validateForm = () => {
        let valid = true;
        const newErrors = { email: '', Password: '' };

        if (!email) {
            valid = false;
            newErrors.email = 'Email is required';
        }

        if (!Password) {
            valid = false;
            newErrors.Password = 'Password is required';
        }

        setErrors(newErrors);
        return valid;
    };

 const  handlesubmit= async (e)=>{
    e.preventDefault()
    if (validateForm()) {
        setLoading(true);

        const payload = { email, Password };
        loginMutation.mutate(payload);
    }
    



    // await axios.post('https://events-planner.onrender.com/api/v1/auth/login', payload).then(({data})=>{
    //     setUser(data.user)
    //     setToken(data.access_token)
    //     setLoading(false)
        
    //   }).catch(()=>(
    //     setLoading(false)
    //   ));

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
            <div className="error">{errors.email}</div>
            <input type="email"  placeholder='email address' onChange={(e)=>setEmail(e.target.value)}/>
            <div className='password-forgot'>
            <label htmlFor="password">password</label>
            <Link to='/login'>forgot password</Link>
            </div>
            <div className="error">{errors.Password}</div>
            <input type="password"  onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
            <div className='check-box'>
            <input type="checkbox" className='check-box1' />remember me
            </div>
            
            <button  className='btn-login' type='submit'>{loading?(<p className='loader-login'></p>):(<p>login</p>)}</button>
            <p className='message-p'>Does not have account?  <Link to='/signup'>signup</Link></p>
    
       
        </form>
    </div>
</div>
    </div>
    </>

  )
}

export default Login