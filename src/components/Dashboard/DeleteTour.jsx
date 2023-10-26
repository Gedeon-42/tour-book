import axios from 'axios';
import React from 'react'

function DeleteTour({deleteModal,tour}) {
    const handleDelete = () => {
  
        axios
          .delete(`https://events-planner.onrender.com/api/v1/Tours/delete-Tour/${tour._id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            
          })
          .then((response) => {
        
            console.log('Tour deleted successfully', response.data);
            deleteModal();
            window.location.reload()
          })
          .catch((error) => {
            alert(error)
            console.error('Error deleting tour', error);
          });
      };
    

  return (
    <div className='edit-user-wrapper'>
    <div className='form-user'>
        <div className="delete-user-top">
        <h1> are you sure you want to delete tour <span className='span-delete'>{tour.Title} with{tour._id}</span>?</h1>
        <p> this action can not be undone</p>
        </div>
        <div className="button-edit-cancel">
            <button className='btn-submit-edit' onClick={handleDelete}>delete</button>
            <button type='button' onClick={deleteModal} className='btn-cancel-edit'>cancel</button>
            </div>
    </div>
    </div>
  )
}

export default DeleteTour