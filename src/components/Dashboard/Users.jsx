import React, { useState } from 'react'
import profile from '../../assets/images/riyad.jpg'
import {users} from '../../assets/data/dashboarddata'
import EditUser from './EditUser'
function Users() {
  const[Modal,setModal]= useState(false)
  function openmodal(){
    setModal((prevModal)=>!prevModal)
  }
  return (
    <div>
           <h1 className='text-center'> users list</h1>
       
        {Modal?<EditUser openmodal={openmodal}/>:(
          <>
           <form className='tour-input' action="" method="get">
           <input type="text" placeholder='search tours' />
         </form>
                <table className='tables'>
                <thead >
                  <tr>
                    <td className='cell tour-desc1'>check</td>
                    <th className=' cell tour-desc1'>image</th>
                    <th className='cell tour-desc1' >name</th>
                    <th className='cell tour-desc1'>country</th>
                    <th className='cell tour-desc1'>Bipgraphy</th>
                    <th className='cell tour-desc1'>action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user)=>(
        <tr>
        <td className='cell'><input type="checkbox" /></td>
        <td className='cell'> <img src={user.image} className='tour-image' /></td>
          <td className='cell'>{user.name}</td>
          <td className='cell'>{user.country}</td>
          <td className='cell'>{user.position}</td>
          <td className='cell edit-cell'>
            <button className='btn-edit' onClick={openmodal}>edit</button>
            <button className='btn-delete'>delete</button>
      
          </td>
        </tr>
                  ))}
                
          
                  
                  
                </tbody>
      
              </table>
          
          
          
          
          </>
          
        )}
  
    </div>
  )
}

export default Users