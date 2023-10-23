import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

function EditTour({openmodal,tour}) {
  const[tours,setTour]=useState({
    Description:'',
    Title:'',
    Price:'',
    backdropImage:null,
    Duration:'',
    destination:''

  })
   
  
  return (
    <div className='edit-user-wrapper'>
         <form action="" method="get" className='form-user'>
            <FaTimes className='fa-times' onClick={openmodal}/>
                <label htmlFor="">tour title</label>
                <input type="text" placeholder='tour title' value={tour.Title} onChange={(ev) =>
                                setTour({
                                    ...tours,
                                    Title: ev.target.value,
                                })}/>
                <label htmlFor="">country</label>
                <input type="text" placeholder='country' value={tour.destination}
                
                onChange={(ev) =>
                  setTour({
                      ...tours,
                      Title: ev.target.value,
                  })}
                />
                <label htmlFor="">tour date</label>
                <input type="date"  />
                <label htmlFor="">price</label>
                <input type="text" placeholder='price' onChange={(ev) =>
                                setTour({
                                    ...tours,
                                    Price: ev.target.value,
                                })} />
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
                <button type='button' onClick={openmodal} className='btn-cancel-edit'>cancel</button>
                </div>
                
        </form>

    </div>
  )
}

export default EditTour