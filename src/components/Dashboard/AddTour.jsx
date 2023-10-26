import axios from 'axios';
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useStateContext } from '../../assets/Context/ContextProvide';
import {useForm} from 'react-hook-form'
function AddTour({openAddModal}) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
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
      window.location.reload()

      // Handle the response as needed, e.g., show a success message to the user
    } catch (error) {
      alert(error )
      console.error('Error:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
    <div className='edit-user-wrapper'>
         <form method='POST'  className='form-user' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
            <FaTimes className='fa-times' onClick={openAddModal}/>
                <label htmlFor="" >tour title</label>
                <input type="text" name="Title" placeholder='tour title' {...register("Title",{required:true})} />
                <label htmlFor="">country</label>
                <input type="text"  name="destination" placeholder='country' {...register("destination",{required:true})}/>
                <label htmlFor="">tour duration</label>
                <input type='text'  name="Duration" {...register("Duration",{required:true})} />
                <label htmlFor="">tour description</label>
                <input type="text" placeholder='tour description'  name="Description"  {...register("Description",{required:true})}/>
                <label htmlFor="">tour image</label>
              
                <input type="file" name='backdropImage' accept='image/*' {...register("backdropImage",{required:true})} />
                <label htmlFor="">galery</label>
                <input type="file" name='gallery'  accept='image/*' multiple {...register("gallery",{required:true})} />
                <input type="text" placeholder='groupsize' name='GroupTize' {...register("GroupTize",{required:true})} />
                                <input type="text" placeholder='seats' name='Seats' {...register("Seats",{required:true})} />
                    <input type="text" placeholder='price' name='Price'{...register("Price",{required:true})} />
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
                
        </form>

    </div>
  )
}

export default AddTour