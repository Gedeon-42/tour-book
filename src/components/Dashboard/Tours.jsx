import React, { useState } from 'react'
import { Tours } from '../../assets/data/dashboarddata'
import EditTour from './EditTour'
import AddTour from './AddTour'

function Tour1() {
  const[Modal,setModal]= useState(false)
  const[AddModal,setAddModal]= useState(false)
  function openmodal(){
    setModal((prevModal)=>!prevModal)
  }
  function openAddModal(){
    setAddModal((prevAddModal)=>!prevAddModal)
  }
  
  return (
    <div className='tour-details'>
      {Modal&&<EditTour openmodal={openmodal}/>} 
      <>
      { AddModal &&<AddTour  openAddModal={openAddModal} />}
      </>
     
      <div className="tour-description">
        <h1>tour details</h1>
        <div className="tour-manage-btn">
          <form action="" method="get" >
            <input type="text" className='btn-input1' placeholder=' search tours' />
            <button className='btn-delete1' onClick={openAddModal}>add new</button>
          </form>
        </div>
      </div>
      <table className="tour-table">
        <thead>
          <tr>
          <th className='tour-cell tour-desc1'>check</th>
            <th className='tour-cell tour-desc1'>tour date</th>
            <th className='tour-cell tour-desc1'>tour id</th>
            <th className='tour-cell tour-desc1'>country</th>
            <th className='tour-cell tour-desc1'>activity</th>
            <th className='tour-cell tour-desc1'>For/By</th>
            <th className='tour-cell tour-desc1'>status</th>
            <th className='tour-cell tour-desc1 '>total</th>
            <th className='tour-cell tour-desc1 '>action</th>
          </tr>
        </thead>
        <tbody>
          {Tours.map((tour)=>(
             <tr key={tour.id}>
              <td className='tour-cell tour-title-cell'><input type="checkbox" name=" " id="" /></td>
              <td className='tour-cell tour-title-cell'>
                <div className="tour-title-content">
                <img src={tour.image}className='tour-image1' alt="" />
              <div className="tour-date-cell">
              <h1>{tour.title}</h1>
              <p>{tour.date}</p>
              </div>
                </div>
              </td>
              <td className='tour-cell'>{tour.id}</td>
              <td className='tour-cell'>{tour.country}</td>
              <td className='tour-cell'>{tour.activity}</td>
              <td className='tour-cell'>
                <img src={tour.ownerImag} alt="" className='tour-image2' />
                </td>
                <td className='tour-cell'>{tour.status}</td>
                <td className='tour-cell'>{tour.amount}</td>
                 <td className='tour-cell edit-cell'>
                  <button className='btn-edit' onClick={openmodal}>edit</button>
                  <button className='btn-delete'>delete</button>
                 </td>
                
             </tr>
          ))}
         
        </tbody>
      </table>
     </div>
  )
}

export default Tour1