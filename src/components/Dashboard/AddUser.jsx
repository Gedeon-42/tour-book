import React from 'react'
import { FaTimes } from 'react-icons/fa'

function AddUser({openAddModal}) {
  return (
    <div className='edit-user-wrapper'>
        <form action="" method="get" className='form-user'>
            <FaTimes className='fa-times' onClick={openAddModal}/>
                <label htmlFor="">firstname</label>
                <input type="text" placeholder='country' />
                <label htmlFor="">Biography</label>
                <input type="text" placeholder='Biography' />
                <label htmlFor="">lastname</label>
                <input type="email" placeholder='email' />
                <label htmlFor="">country</label>
                <input type="text" placeholder='country' />
                <input type="file" />
                <div className="button-edit-cancel">
                <button className='btn-submit-edit'>add</button>
                <button type='button' onClick={openAddModal} className='btn-cancel-edit'>cancel</button>
                </div>
                
        </form>
    </div>
  )
}

export default AddUser