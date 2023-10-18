import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {users} from '../../assets/data/dashboarddata'
import { useParams } from 'react-router-dom'
function EditUser({openmodal,user}) {
  

  return (
    <div className='edit-user-wrapper'>
      
        <form action="" method="get" className='form-user'>
            <FaTimes className='fa-times' onClick={openmodal}/>
                <label htmlFor="">firstname</label>
                <input type="text" placeholder='country' value={user.name} />
                <label htmlFor="">Biography</label>
                <input type="text" placeholder='Biography' value={user.position} />
                <label htmlFor="">lastname</label>
                <input type="email" placeholder='email '  value={user.email}/>
                <label htmlFor="">country</label>
                <input type="text" placeholder='country' value={user.country} />
                <input type="file"  /> <img src={user.image} alt="" className='tour-image3' />
                <div className="button-edit-cancel">
                <button className='btn-submit-edit'>edit</button>
                <button type='button' onClick={openmodal} className='btn-cancel-edit'>cancel</button>
                </div>
                
        </form>
    </div>
  )
}

export default EditUser