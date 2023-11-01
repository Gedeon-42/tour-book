import React from 'react'
import { FaPen, FaTrash } from 'react-icons/fa'
import { useStateContext } from '../../assets/Context/ContextProvide'

function BookTour() {
  const{books}=useStateContext()
  console.log(books)
  return (
    <div className='tour-details'>
   
     
      <div className="tour-description">
        <h1>Bookings details</h1>
        <div className="tour-manage-btn">
          <form action="" method="get" >
            <input type="text" className='btn-input1' placeholder=' search tours' />
            <button type='button' className='btn-delete1' >add new</button>
          </form>
        </div>
      </div>
      <table className="tour-table">
        <thead>
          <tr>
          <th className='tour-cell tour-desc1'>check</th>
          <th className='tour-cell tour-desc1'>TourId</th>
            <th className='tour-cell tour-desc1'>UserId</th>
            <th className='tour-cell tour-desc1'>PaymentMethod</th>
            <th className='tour-cell tour-desc1 '>action</th>
          </tr>
        </thead>
        <tbody>
         {books?.map((book)=>(
 <tr>
 <td className='tour-cell'>
   <input type="checkbox" name=" " id="" /></td>
   <td className='tour-cell'>{book.tourId}</td>
 <td className='tour-cell'>{book.userId}</td>
 <td className='tour-cell'>{book.paymentMethod}</td>
    <td className='tour-cell edit-cell'>
     <button className='btn-edit'><FaPen/></button>
     <button className='btn-delete' ><FaTrash/></button>
    </td>
   
</tr>

         ))}
            
         
        </tbody>
      </table>
     </div>
  )
}

export default BookTour