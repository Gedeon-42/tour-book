import React, { useState } from 'react'
//import { Tours } from '../../assets/data/dashboarddata'
import EditTour from './EditTour'
import AddTour from './AddTour'
import { useStateContext } from '../../assets/Context/ContextProvide'
import { FaPen, FaTrash } from 'react-icons/fa'

function Tour1() {
  const[Modal,setModal]= useState(false)
  const[AddModal,setAddModal]= useState(false)
  const [selectedTour,setSelectedTour]=useState(null)
   // function to open edit modal
   function openEditModal(tour) {
    setSelectedTour(tour);
    openmodal();
    console.log(tour)
  }
  function openmodal(){
    setModal((prevModal)=>!prevModal)
  }
  function openAddModal(){
    setAddModal((prevAddModal)=>!prevAddModal)
  }
  const{tours,setTours}=useStateContext()
  return (
    <div className='tour-details'>
      {Modal&&<EditTour openmodal={openmodal} tour={selectedTour}/>} 
      <>
      { AddModal &&<AddTour  openAddModal={openAddModal} />}
      </>
     
      <div className="tour-description">
        <h1>tour details</h1>
        <div className="tour-manage-btn">
          <form action="" method="get" >
            <input type="text" className='btn-input1' placeholder=' search tours' />
            <button type='button' className='btn-delete1' onClick={openAddModal}>add new</button>
          </form>
        </div>
      </div>
      <table className="tour-table">
        <thead>
          <tr>
          <th className='tour-cell tour-desc1'>check</th>
            <th className='tour-cell tour-desc1'>destination</th>
            <th className='tour-cell tour-desc1'>Duration </th>
            <th className='tour-cell tour-desc1'>Groupsize</th>
            <th className='tour-cell tour-desc1'>image</th>
            <th className='tour-cell tour-desc1 '>price</th>
            <th className='tour-cell tour-desc1 '>action</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour)=>(
             <tr key={tour._id}>
              <td className='tour-cell'>
                <input type="checkbox" name=" " id="" /></td>
          
              <td className='tour-cell'>{tour.destination}</td>
              <td className='tour-cell'>{tour.Duration}</td>
              <td className='tour-cell'>{tour.GroupTize}</td>
              <td className='tour-cell'>
                <img src={tour.backdropImage} alt="" className='tour-image2' />
                </td>
                <td className='tour-cell'>${tour.Price}</td>
                 <td className='tour-cell edit-cell'>
                  <button className='btn-edit' onClick={() => openEditModal(tour)}><FaPen/></button>
                  <button className='btn-delete'><FaTrash/></button>
                 </td>
                
             </tr>
          ))}
         
        </tbody>
      </table>
     </div>
  )
}

export default Tour1