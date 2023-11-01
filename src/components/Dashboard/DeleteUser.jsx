import axios from 'axios';
import React, { useState } from 'react'
import { useStateContext } from '../../assets/Context/ContextProvide';
import Notiflix,{Report} from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
function DeleteUser({deleteModal,user}) {
  const[loading,setLoading] = useState(false)
  const {notification,setNotification} = useStateContext()
  
  const handleDelete = () => {
  setLoading(true)
    axios
      .delete(`https://events-planner.onrender.com/api/v1/auth/Delete/${user._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        //alert('user deleted')
        //setNotification('User was successfully deleted')
        //Notify.success('user deleted');
        Report.success('user','user deleted','okey',()=>{
          
        });
        console.log('Tour deleted successfully', response.data);
        deleteModal();
setLoading(false)

setTimeout(() => {
  
  window.location.reload()
}, 4000);
      })
      .catch((error) => {
        alert(error)
        console.error('Error deleting tour', error);
      });
  };

  return (
    <div>
   <div className='edit-user-wrapper'>
   <div>
   {notification &&
          <div className="notification">
            {notification}
          </div>}
    </div>
   {loading?(
   <div className='loading-indicator'>
<span class="loader"></span>
<p>please wait ....</p>
   </div>
   ):(<div className='form-user'>
            <div className="delete-user-top">
          
            <h1> are you sure you want to delete user <span className='span-delete'>{user.FullNames}</span>?</h1>
            <p> this action can not be undone</p>
            </div>
            <div className="button-edit-cancel">
                <button className='btn-submit-edit' onClick={handleDelete}>delete</button>
                <button type='button' onClick={deleteModal} className='btn-cancel-edit'>cancel</button>
                </div>
        </div>)}
        
        </div>
    
    </div>
    
  )
}

export default DeleteUser