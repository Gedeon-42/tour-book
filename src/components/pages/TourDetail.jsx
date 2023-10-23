import React from 'react'
import { useParams } from 'react-router-dom'
import { FaCalendar, FaSearch } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { useState } from 'react'
import { useStateContext } from '../../assets/Context/ContextProvide'
function TourDetail() {
  // const{tours}=useStateContext()
  let tours = []
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
          <h1>italy</h1>
          <div className="amount-perperson">
            <p className='amount-1'>
              $123
            </p>
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
        
        <div className="tour-form-wraper">
                <div className="tour-form1">
                    <form action="">
                    <h1 className='tour-find'>find your tour</h1>
                    <div className="tour-search">
            <div className="form-tour-icons"><FaSearch/></div>
          <input type="text"placeholder='search tour' />
          </div>
          <div className="tour-search">
            <div className="form-tour-icons"><ImLocation2/></div>
          <input type="text"placeholder='where to ?' />
          </div>
          <div className="tour-search">
            <div className="form-tour-icons"><FaCalendar/></div>
            <select>
            <option value="" disabled> Where to?</option>
            <option value="january">january</option>
            <option value="february">february</option>
            <option value="march">march</option>
           
          </select>
          </div>
          
            <label htmlFor="">Duration</label>
            <select>
            <option value="" disabled> any</option>
            <option value="january">1 day tour</option>
            <option value="february">2-4 day tour</option>
            <option value="march">march</option>
            <option value="april">april</option>
            
          </select>
         
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