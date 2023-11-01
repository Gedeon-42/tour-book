import React from 'react'
import { useStateContext } from '../../assets/Context/ContextProvide'
import { FaPen, FaTrash } from 'react-icons/fa'

function Contactdash() {
    const{allcontacts} = useStateContext()
    return (
        <div className='tour-details'>
         
         
         
          <div className="tour-description">
            <h1>tour details</h1>
            <div className="tour-manage-btn">
              <form action="" method="get" >
                <input type="text" className='btn-input1' placeholder=' search tours' />
                <button type='button' className='btn-delete1'>add new</button>
              </form>
            </div>
          </div>
          <table className="tour-table">
            <thead>
              <tr>
              <th className='tour-cell tour-desc1'>check</th>
              <th className='tour-cell tour-desc1'>name</th>
                <th className='tour-cell tour-desc1'>email</th>
                <th className='tour-cell tour-desc1'>message </th>
                <th className='tour-cell tour-desc1 '>action</th>
              </tr>
            </thead>
            <tbody>
              {allcontacts?.map((cont)=>(
                 <tr key={cont._id}>
                  <td className='tour-cell'>
                    <input type="checkbox" name=" " id="" /></td>
                    <td className='tour-cell'>{cont.fullName}</td>
                  <td className='tour-cell'>{cont.email}</td>
                  <td className='tour-cell'>{cont.message}</td>
                     <td className='tour-cell edit-cell'>
                      <button className='btn-edit'><FaPen/></button>
                      <button className='btn-delete'><FaTrash/></button>
                     </td>
                    
                 </tr>
              ))}
             
            </tbody>
          </table>
         </div>
      )
}

export default Contactdash