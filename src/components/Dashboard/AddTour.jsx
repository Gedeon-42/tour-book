import React from 'react'
import { FaTimes } from 'react-icons/fa'

function AddTour({openAddModal}) {
  return (
    <div className='edit-user-wrapper'>
         <form action="" method="get" className='form-user'>
            <FaTimes className='fa-times' onClick={openAddModal}/>
                <label htmlFor="">tour title</label>
                <input type="text" placeholder='tour title' />
                <label htmlFor="">country</label>
                <input type="text" placeholder='country' />
                <label htmlFor="">tour date</label>
                <input type="date"  />
                <label htmlFor="">owner</label>
                <input type="text" placeholder='tour owner' />
                <label htmlFor="">tour image</label>
                <input type="file" />
                <label htmlFor="">owner image</label>
                <input type="file" />
                <label htmlFor="">status</label>
                <select>
                    <option value="booked">booked</option>
                    <option value="booked">pending</option>
                    <option value="booked">booked</option>
                </select>
                <label htmlFor="">activity</label>
                <select>
                    <option value="booked">discovery</option>
                    <option value="booked">adventure</option>
                    <option value="booked">learning</option>
                </select>
                <div className="button-edit-cancel">
                <button className='btn-submit-edit'>add</button>
                <button type='button' className='btn-cancel-edit' onClick={openAddModal}>cancel</button>
                </div>
                
        </form>

    </div>
  )
}

export default AddTour