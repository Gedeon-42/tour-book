import React, { useEffect, useState } from 'react'
import profile from '../../assets/images/riyad.jpg'
//import {users} from '../../assets/data/dashboarddata'
import EditUser from './EditUser'
import DeleteUser from './DeleteUser'
import AddUser from './AddUser'
import axiosClent from '../../../axiosclient'
import { useStateContext } from '../../assets/Context/ContextProvide'
import { FaEdit, FaPen, FaTrash } from 'react-icons/fa'
import ReactPaginate  from 'react-paginate'
function Users() {
  const[Modal,setModal]= useState(false)
  const[modalDelete,setModaDelete]=useState(false)
  const[AddModal,setAddModal]= useState(false)
  const [selecteduser,setSelectedUser]=useState(null)
  const{allusers}=useStateContext()
  //  pagination state
  const[pageNumber,setPageNumber]=useState(0)
  const userPerpage =4
  const pageVisited =pageNumber * userPerpage 
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
  // function to open delete modal
  function openDeletemodal(user){
    setSelectedUser(user)
    deleteModal()
  }



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
                    <th className='cell tour-desc1' > Fullname</th>
                    <th className='cell tour-desc1'>email</th>
                    <th className='cell tour-desc1'>Phone Number</th>
                    <th className='cell tour-desc1'>Locations</th>
                    <th className='cell tour-desc1'>action</th>
                  </tr>
                </thead>
                <tbody>
                    {allusers?.map((user)=>(
        <tr key={user._id}>
        <td className='cell'><input type="checkbox" /></td>
          <td className='cell'>{user.FullNames}</td>
          <td className='cell'>{user.email}</td>
          <td className='cell'>{user.PhoneNumber}</td>
          <td className='cell'>{user.Location}</td>
          <td className='cell'>{user.Role}</td>
          <td className='cell edit-cell'>
            <button className='btn-edit'  onClick={() => openEditModal(user)}><FaPen/></button>
            <button className='btn-delete' onClick={()=>openDeletemodal(user)}><FaTrash/></button>
      
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