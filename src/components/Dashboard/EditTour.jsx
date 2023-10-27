import axios from 'axios';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function EditTour({ openmodal, tour }) {
  const [editedDestination, setEditedDestination] = useState(tour.destination);
  const [editedDuration, setEditedDuration] = useState(tour.Duration);
  const [editedGroupSize, setEditedGroupSize] = useState(tour.GroupTize);
  const [editedPrice, setEditedPrice] = useState(tour.Price);
  const [editedTitle, setEditedTitle] = useState(tour.Title);
  const [editedBackdropImage, setEditedBackdropImage] = useState(tour.backdropImage);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleUpdate(e) {
    e.preventDefault();
    setLoading(true);

    const updatedTour = {
      destination: editedDestination,
      duration: editedDuration,
      groupSize: editedGroupSize,
      price: editedPrice,
      title: editedTitle,
    };

    // Check if a new image file has been selected and include it in the request if so
    if (imageFile) {
      updatedTour.backdropImage = imageFile;
    }

    const formData = new FormData();

    for (const key in updatedTour) {
      formData.append(key, updatedTour[key]);
    }

    axios
      .patch(`https://events-planner.onrender.com/api/v1/Tours/update-Tour/${tour._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        //alert('success')
        window.location.reload();
        //console.log(response.data)
        //console.log('Tour updated successfully', response.data);
        openmodal();
      })
      .catch((error) => {
        alert(error);
        console.error('Error updating tour', error);
      });
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEditedBackdropImage(URL.createObjectURL(file)); // Show a preview of the selected image
    setImageFile(file);
  };
  

  return (
    <div className="edit-user-wrapper">
      {loading ? (
        <div className="loading-indicator">
          <span className="loader"></span>
          <p>Please wait ....</p>
        </div>
      ) : (
        <>
          <form action="" method="get" className="form-user" onSubmit={handleUpdate}>
            <FaTimes className="fa-times" onClick={openmodal} />
            <label htmlFor="title">Tour Title</label>
            <input
              type="text"
              id="title"
              placeholder="Tour title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              placeholder="Country"
              value={editedDestination}
              onChange={(e) => setEditedDestination(e.target.value)}
            />
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              placeholder="Price"
              value={editedPrice}
              onChange={(e) => setEditedPrice(e.target.value)}
            />
            <label htmlFor="tourImage">Tour Image</label>
            <input
              type="file"
              id="tourImage"
              onChange={handleImageChange}
            />
            {editedBackdropImage && (
              <img className="edited-image" src={editedBackdropImage} alt="Tour Backdrop" />
            )}
            <label htmlFor="gallery">Gallery</label>
            <input type="file" id="gallery" />

            <div className="button-edit-cancel">
              <button className="btn-submit-edit">Edit</button>
              <button type="button" onClick={openmodal} className="btn-cancel-edit">
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default EditTour;
