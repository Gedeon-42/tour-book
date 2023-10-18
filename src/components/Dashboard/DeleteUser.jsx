import React from 'react'

function DeleteUser({deleteModal,user}) {
  return (
    <div className='edit-user-wrapper'>
        <div className='form-user'>
            <div className="delete-user-top">
            <h1> are you sure you want to delete user <span className='span-delete'>{user.name}</span>?</h1>
            <p> this action can not be undone</p>
            </div>
            <div className="button-edit-cancel">
                <button className='btn-submit-edit'>delete</button>
                <button type='button' onClick={deleteModal} className='btn-cancel-edit'>cancel</button>
                </div>
        </div>
        </div>
  )
}

export default DeleteUser