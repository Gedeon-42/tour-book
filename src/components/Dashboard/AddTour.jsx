import axios from 'axios';
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useStateContext } from '../../assets/Context/ContextProvide';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
function AddTour({openAddModal}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
const [loading,setLoading]=useState(false)
const{setTours}=useStateContext()
const navigate = useNavigate()
  const onSubmit = async (data) => {
    setLoading(true)
    console.log(data);
    try {
      const formData = new FormData();
      formData.append('Title', data.Title);
      formData.append('destination', data.destination);
      formData.append('Duration', data.Duration);
      formData.append('Description', data.Description);
      formData.append('backdropImage', data.backdropImage[0]);
      formData.append('gallery', data.gallery[0]);
      formData.append('GroupTize', data.GroupTize);
      formData.append('Seats', data.Seats);
      formData.append('Price', data.Price);
      formData.append('Discount', data.Discount);
      formData.append('TourType', data.TourType);
      formData.append('Departure', data.Departure);
      formData.append('ReturnTime', data.ReturnTime);
      formData.append('fromMonth', data.fromMonth);
      formData.append('departureTime', data.departureTime);
      formData.append('toMonth', data.toMonth);
      const response = await axios.post('https://events-planner.onrender.com/api/v1/Tours/addTour', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      //setLoading(false)
      if (response.status === 201) {
        const newTour = response.data.data;
      setTours((prevTours) => [...prevTours, newTour]);
   console.log(newTour)
      // Close the modal or perform any other necessary actions
      openAddModal();
      //window.location.reload()
    } }catch (error) {
      alert(error )
      console.error('Error:', error);
    
    }
  };

  return (
    <div className='edit-user-wrapper'>
      {loading?(
        <div className='loading-indicator'>
        <span class="loader"></span>
        <p>please wait ....</p>
           </div>
      ):(
  <form method='POST'  className='form-tour' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
  <FaTimes className='fa-times' onClick={openAddModal}/>
  <div className='tour-add-1'>
  <label htmlFor="" >tour title</label>
      <input type="text" name="Title" placeholder='tour title' {...register("Title",{required:true})} />
      <input type="text"  name="destination" placeholder='country' {...register("destination",{required:true})}/>
      <input type='text'  name="Duration" placeholder='tour duration' {...register("Duration",{required:true})} />
      <input type="text" placeholder='tour description'  name="Description"  {...register("Description",{required:true})}/>
      <input type="file" name='backdropImage' accept='image/*' {...register("backdropImage",{required:true})} />
      <input type="file" name='gallery'  accept='image/*' multiple {...register("gallery",{required:true})} />
      <input type="text" placeholder='groupsize' name='GroupTize' {...register("GroupTize",{required:true})} />
       
          <input type="text" placeholder='price' name='Price'{...register("Price",{required:true})} />
  </div>
      <div className='tour-add-2'>
      <input type="text" placeholder='seats' name='Seats' {...register("Seats",{required:true})} />
          <input type="text" placeholder='discount' name='Discount' {...register("Discount",{required:true})} />
          <input type="text" placeholder='tour type' name='TourType' {...register("TourType",{required:true})} />
          <input type="text" placeholder='Departure' name='Departure' {...register("Departure",{required:true})} />
          <input type="text" placeholder='fromMonth' name='fromMonth' {...register("fromMonth",{required:true})} />
          <input type="text" placeholder='toMonth' name='toMonth' {...register("toMonth",{required:true})} />
          <input type="text" placeholder='departureTime' name='departureTime' {...register("depatureTime",{required:true})} />
          <input type="text" placeholder='ReturnTime' name='ReturnTime' {...register("ReturnTime",{required:true})}/>
          <div className="button-edit-cancel">
      <button className='btn-submit-edit'>add</button>
      <button type='button' className='btn-cancel-edit' onClick={openAddModal}>cancel</button>
      </div>
      
      </div>
     
     
</form>
      )}
       

    </div>
  )
}

export default AddTour