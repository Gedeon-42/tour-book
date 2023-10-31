import React from 'react'
import { useParams } from 'react-router-dom'
import { FaCalendar, FaSearch } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { useState } from 'react'
import { useStateContext } from '../../assets/Context/ContextProvide'
function TourDetail() {
  const{tours}=useStateContext()
  
  const {_id} = useParams()
  const individualTour = tours.find(tour => tour._id === _id);
const{backdropImage,destination}=individualTour
  if (!individualTour) {
    // Handle the case where the tour is not found (e.g., show a not found message)
    return <div>Tour not found.</div>;
  }
  return (
    <div className='tourdetail-wrapper'>
      <div className='tour-container'>

         <img src={backdropImage} className='detail-image' alt="" /> 
        <div className="tour-banner"><h1>{destination}</h1></div>
        </div>
        <div className="detail-content-wrapper">
          <div className="detail-content-wrapper1">
          <div className="detail-location-desc">
          <div className="information">information</div>
          <div className="tour-plan">tour plan</div>
          <div className="location">location</div>
          <div className="gallery">gallery</div>
          <div className="review">review</div>
        </div>
        <div className="offer-detail-amount">
          <h1>{destination}</h1>
          <div className="amount-perperson">
            <h1 className='amount-1'>
              $123
            </h1>
            <p className='amount-2'>per person</p>
          </div>
        </div>
        <div className="header-detail-desc">
          <p>12px</p>
          <p>6 people</p>
          <p>18</p>
          <p>Greece</p>
          <p>discovery</p>
        </div>
        <div className="tour-detail-description">
          <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam voluptates sed
         repudiandae eos, itaque, assumenda voluptatibus possimus ex odit
         nihil expedita facilis voluptas. Quasi molestias culpa officiis illum deserunt.
          </p>
        </div>
        <div className="table-wrapper">
          <table>
          <tbody>
            <tr>
              <th>destination</th>
              <td>greece</td>
            </tr>
            <tr>
              <th>departure</th>
              <td>lorem ipsum</td>
            </tr>
            <tr>
              <th>departure time</th>
              <td>9 Am to 11 Am</td>
            </tr>
            <tr>
              <th>return time</th>
              <td>approximately</td>
            </tr>
            <tr>
              <th>dress code</th>
              <td>t shirt and jacket</td>
            </tr>
            <tr>
              <th>departure</th>
              <td>greece</td>
            </tr>
          </tbody>
          </table>
         
        </div>
          </div>
        
        <div className="detail-form-wraper">
                <div className="detail-tour-form1">
                    <form action="" className='detail-form'>
                    <h1 className='tour-find'>Book this tour</h1>
                  <input type="text" name="fullname" placeholder='Full Names' id="" />
                  <input type="email" name="email" placeholder='email' id="" />
                  <input type="number" name="phone" placeholder='phone' id="" />
                  <input type="date" name="name"  id="" />
                  <input type="number" name="ticket" placeholder='number of ticket' id="" />
                  <textarea name="message" id="" cols="20" rows="5" placeholder='message'></textarea>
                  <div className="detail-check">
                  <input type="checkbox" name="" id="" /> <span>check Availablity</span>
                  </div>
                  <button className='btn-booking'>Book now</button>
                    </form>
                </div>
                <div className="tour-form2">
                <h1 className='tour-find'>why book with us</h1>
                <ul>
                    <li>best price guarante</li>
                    <li>best price guarante</li>
                    <li>customare acre</li>
                    <li>best price guarante</li>
                </ul>
                </div>
                <div className="tour-form3">
                <h1 className='tour-find'>GET A QUESTION?</h1>
                <p>
      Do not hesitage to
     give us a call. 
     We are an expert team and
      we are happy to talk to you.</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default TourDetail