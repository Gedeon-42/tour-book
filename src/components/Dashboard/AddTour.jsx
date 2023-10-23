import axios from 'axios';
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

function AddTour({openAddModal}) {
  
  const [tours, setTours] = useState({
    destination: '',
    backdropImage: null,
    image_url:null,
    title: '',
    description: '',
    duration: '',
    groupSize: '',
    price: '',
    discount: '',
    departur:'',
    seats:'',
    fromMonth:'',
    toMonth:'',
    departureTime:'',
    returnTime:''
  });
  const onImagechoose = (ev) => {
    //console.log("image choosen");
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        setTours({
            ...tours,
            backdropImage: file,
            image_url: reader.result,
        });
        ev.target.value = "";
    };

    reader.readAsDataURL(file);
};
const handleAddTour = (e)=>{
e.preventDefault()
// formData.append('destination', tours.destination);
// formData.append('title', tours.title);
// Add other fields to formData

if (tours.backdropImage) {
    formData.append('backdropImage', tours.backdropImage);
}

const payload = { ...tours };
        // if (payload.backdropImage) {
        //     payload.backdropImage = payload.image_url;
        // }
        delete payload.image_url;
        axios.post('https://holiday-planner.onrender.com/api/v1/tours/createTour',payload).then(()=>{
          openAddModal()
        })
}
  return (
    <div className='edit-user-wrapper'>
         <form action="" method="get" className='form-user' onSubmit={handleAddTour}>
            <FaTimes className='fa-times' onClick={openAddModal}/>
                <label htmlFor="">tour title</label>
                <input type="text" placeholder='tour title'   value={tours.title}
                            onChange={(ev) =>
                                setTours({
                                    ...tours,
                                    title: ev.target.value,
                                })
                            } />
                <label htmlFor="">country</label>
                <input type="text" placeholder='country'  value={tours.destination}
                            onChange={(ev) =>
                                setTours({
                                    ...tours,
                                    destination: ev.target.value,
                                })}/>
                <label htmlFor="">tour duration</label>
                <input type='text'   value={tours.duration}
                            onChange={(ev) =>
                                setTours({
                                    ...tours,
                                    duration: ev.target.value,
                                })} />
                <label htmlFor="">tour description</label>
                <input type="text" placeholder='tour owner'   value={tours.description}
                            onChange={(ev) =>
                                setTours({
                                    ...tours,
                                    description: ev.target.value,
                                })} />
                <label htmlFor="">tour image</label>
                {tours.image_url && (
                                <img
                                    src={tours.image_url}
                                    style={{
                                        width: "35px",
                                        height: "35px",
                                        borderRadius: "50%",
                                    }}
                                    alt=""
                                />
                            )}
                <input type="file"  onChange={onImagechoose}/>
                <input type="text" placeholder='groupsize'   value={tours.groupSize}
                            onChange={(ev) =>
                                setTours({
                                    ...tours,
                                    groupSize: ev.target.value,
                                })} />
                                <input type="text" placeholder='seats'   value={tours.seats}
                            onChange={(ev) =>
                                setTours({
                                    ...tours,
                                    seats: ev.target.value,
                                })} />
                <div className="button-edit-cancel">
                <button className='btn-submit-edit'>add</button>
                <button type='button' className='btn-cancel-edit' onClick={openAddModal}>cancel</button>
                </div>
                
        </form>

    </div>
  )
}

export default AddTour