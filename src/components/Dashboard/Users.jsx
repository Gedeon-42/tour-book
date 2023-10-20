import React, { useEffect, useState } from 'react'
import profile from '../../assets/images/riyad.jpg'
//import {users} from '../../assets/data/dashboarddata'
import EditUser from './EditUser'
import DeleteUser from './DeleteUser'
import AddUser from './AddUser'
import axiosClent from '../../../axiosclient'
import axios from 'axios'
function Users() {
  const[Modal,setModal]= useState(false)
  const[modalDelete,setModaDelete]=useState(false)
  const[AddModal,setAddModal]= useState(false)
  const [selecteduser,setSelectedUser]=useState(null)
  const [users,setUsers]=useState('')

  function openmodal(){
    setModal((prevModal)=>!prevModal)
  }
  function deleteModal(){
    setModaDelete((prevmodalDelete)=>!prevmodalDelete)
  }
  function openAddModal(){
    setAddModal((prevAddModal)=>!prevAddModal)
  }
  // function to open edit modal
  function openEditModal(user) {
    setSelectedUser(user);
    openmodal();
    console.log(user)
  }
  function openDeletemodal(user){
    setSelectedUser(user)
    deleteModal()
  }

  useEffect(() => {
    getUsers();
}, []);
const getUsers = () => {
    
    axios
        .get('https://events-planner.onrender.com/api/v1/auth/View-all-users',{
          headers:{
     Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(({ data }) => {
            
            setUsers(data.data);
            
        })
        .catch(() => {
          
        });
};

  return (
    <div>

           <h1 className='text-center'> users list</h1>
       
        {Modal&&<EditUser openmodal={openmodal} user={selecteduser}/> }
          <>
          {modalDelete&&<DeleteUser deleteModal={deleteModal} user={selecteduser} />}
          {AddModal &&<AddUser openAddModal={openAddModal}/>}
           <form className='tour-input' action="" method="get">
           <input type="text" placeholder='search user' />
           <button type='button' className='btn-add-1' onClick={openAddModal}> new user </button>
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
                   {users?.map((user)=>(
        <tr key={user.id}>
        <td className='cell'><input type="checkbox" /></td>
        <td className='cell'> <img src={user.image} className='tour-image' /></td>
          <td className='cell'>{user.name}</td>
          <td className='cell'>{user.email}</td>
          <td className='cell'>{user.country}</td>
          <td className='cell'>{user.position}</td>
          <td className='cell edit-cell'>
            <button className='btn-edit'  onClick={() => openEditModal(user)}>edit</button>
            <button className='btn-delete' onClick={()=>openDeletemodal(user)}>delete</button>
      
          </td>
        </tr>
                  ))} 
                
          
                  
                  
                </tbody>
      
              </table>
          
          
          
          
          </>
          
       
  
    </div>
  )
}

export default Users