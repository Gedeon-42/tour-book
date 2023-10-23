import axios from 'axios'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

function EditTour({openmodal,tour}) {
  const [editedDestination, setEditedDestination] = useState(tour.destination);
  const [editedDuration, setEditedDuration] = useState(tour.Duration);
  const [editedGroupSize, setEditedGroupSize] = useState(tour.GroupTize);
  const [editedPrice, setEditedPrice] = useState(tour.Price);
  const [editedTitle, setEditedTitle] = useState(tour.Title);
   function handleUpdate(e){
    e.preventDefault()
    openmodal()
   }
  return (
    <div className='edit-user-wrapper'>
         <form action="" method="get" className='form-user' onSubmit={handleUpdate}>
            <FaTimes className='fa-times' onClick={openmodal}/>
                <label htmlFor="">tour title</label>
                <input type="text" placeholder='tour title' value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)} />
                <label htmlFor="">country</label>
                <input type="text" placeholder='country' 
              value={editedDestination}
              onChange={(e) => setEditedDestination(e.target.value)}
                />
                <label htmlFor="">tour date</label>
                <input type="date"  />
                <label htmlFor="">price</label>
                <input type="text"  placeholder='price'
                value={editedPrice}
                onChange={(e) => setEditedPrice(e.target.value)}
                            />
                <label htmlFor="">tour image</label>
                <input type="file" />
                <label htmlFor="">owner image</label>
                <input type="file" />
      
                <div className="button-edit-cancel">
                <button className='btn-submit-edit'>edit</button>
                <button type='button' onClick={openmodal} className='btn-cancel-edit'>cancel</button>
                </div>
                
        </form>

    </div>
  )
}

export default EditTour