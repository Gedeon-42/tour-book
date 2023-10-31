import React, { useState } from 'react'
import campus from '../../assets/images/contact2.jpg'
import axios from 'axios'
import { useStateContext } from '../../assets/Context/ContextProvide'
function  Contact() {
  const [email,setEmail] = useState('')
  const[body,setBody] = useState('')
  const[loading,setLoading]=useState(false)
  const{ContactMutation}=useStateContext()

  const payload = {email,body}
 function handleContact(e){
  e.preventDefault()
  setLoading(true)
  
ContactMutation.mutate(payload)
 }

  return (
    <div className='contact-wrapper'>
      <div className="contact-image-wrapper">
        <h1>contact us</h1>
      </div>
      <div className="contact-flex-wrapper">
        <div className="contac-flex1">
          <div className="contact-form-wrapper2">
            <form action="" onSubmit={handleContact} method="post" className='contact-form1'>
              <div className="contact-input">
                <input type="text" placeholder='Full Name' />
                <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="contact-input">
                <input type="number" placeholder='Phone' />
                <input type="text" placeholder='Service' />
              </div>
              <div className="contact-textarea">
                <textarea name="" id="" cols="30" rows="10" placeholder='Message' onChange={(e)=>setBody(e.target.value)}></textarea>
              </div>
              <button className='btn-contact'>{loading?<p>loading...</p>:(<p>submit</p>)}</button>
            </form>
          </div>
        </div>
        <div className="contact-flex2">
          <div className="contact-flex2-col1">
          <h1 className='tour-find'>why book with us</h1>
                <ul>
                    <li>best price guarante</li>
                    <li>best price guarante</li>
                    <li>customare acre</li>
                    <li>best price guarante</li>
                </ul>
          </div>
          <div className="contact-flex2-col2">
          <h1 className='tour-find'>GET A QUESTION?</h1>
                <p>
      Do not hesitage to
     give us a call. 
     We are an expert team and
      we are happy to talk to you.</p>
      <p>holidayplanners@gmail.com
</p>
<p>+123 456 7890</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default  Contact