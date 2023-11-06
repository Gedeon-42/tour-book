import React, { useEffect, useState } from 'react'
import './thumbnail.css'
import { FaCalendar,  FaFlag, } from 'react-icons/fa'
import{ImLocation2,}from 'react-icons/im'
import Carousel from 'react-bootstrap/Carousel';
import cal from '../../assets/images/cal.jpg'
import forest3 from '../../assets/images/forest3.jpg'
import hotel1 from '../../assets/images/hotel1.jpg'
import land3 from '../../assets/images/land3.jpg'
import mount7 from '../../assets/images/mount7.jpg'
import pixel7 from '../../assets/images/pixel7.jpeg'
import axios from 'axios'
import { FaSlideshare } from 'react-icons/fa'
function Thumbnail() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex,e) => {
  
    setIndex(selectedIndex);
  };
  const handleNext = () => {
    setIndex((index + 1) % 3); // Replace 3 with the number of slides
  };

  const handlePrev = () => {
    setIndex((index - 1 + 3) % 3); // Replace 3 with the number of slides
  };

  return (
    <div className='thumbnai-wrapper'>
      <div className='thumb-container'>
        
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
   <img className='slide-show-img' src={mount7}/>
        <Carousel.Caption className='custom-coursel-capt'>
        <div className="thumb-contentr">
        <h1 className='thumb-desc1'>life is too short</h1>
          {/* <h1 className='thumb-desc2'>world is wide</h1> */}
          <p className='thumb-desc3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure officiis modi.
             Nesciunt tempore ipsa incidunt dolorum numquam, animi, ad quod consequuntur sunt 
            voluptas quae voluptatibus illo consequatur et optio.</p>
        </div>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='slide-show-img' src={hotel1}/>
        <Carousel.Caption className='custom-coursel-capt'>
        <div className="thumb-contentr">
        <h1 className='thumb-desc1'>life is too short</h1>
          {/* <h1 className='thumb-desc2'>world is wide</h1> */}
          <p className='thumb-desc3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure officiis modi.
             Nesciunt tempore ipsa incidunt dolorum numquam, animi, ad quod consequuntur sunt 
            voluptas quae voluptatibus illo consequatur et optio.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='slide-show-img' src={forest3}/>
        <Carousel.Caption className='custom-coursel-capt'>
        <div className="thumb-contentr">
        <h1 className='thumb-desc1'>life is too short</h1>
          {/* <h1 className='thumb-desc2'>world is wide</h1> */}
          <p className='thumb-desc3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure officiis modi.
             Nesciunt tempore ipsa incidunt dolorum numquam, animi, ad quod consequuntur sunt 
            voluptas quae voluptatibus illo consequatur et optio.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="custom-carousel-controls">
      {/* Custom navigation controls */}
      <div
        className="custom-carousel-control custom-prev"
        onClick={handlePrev}
        
      >
        <p>prev</p>
      </div>
      <div
        className="custom-carousel-control custom-next"
        onClick={handleNext}
        
      >
        <p>next</p>
      </div>
    </div>
      </div>
      <div className="thumb-form">
        <form action="" className='thumb-form2'>
           <div className="locationss">
            <div className="form-iconss"><ImLocation2/></div>
          
          <input type="text"placeholder='where to' />
          </div> 
          <div className="calendar">
            <div className="form-iconss"><FaCalendar/></div>   
            <select className='select-thumb'>
            <option value="" disabled> Where to?</option>
            <option value="january">january</option>
            <option value="february">february</option>
            <option value="march">march</option>
            <option value="april">april</option>
            <option value="may">may</option>
            <option value="june">june</option>
            <option value="july">july</option>
            <option value="august">august</option>
            <option value="september">september</option>
            <option value="october">october</option>
            <option value="january">november</option>
            <option value="december">december</option>
          </select>
          </div>
<div className="traveltype">
  <div className="form-iconss"> <FaFlag/></div>
  
  <select>
           <option value="" disabled> travel type</option>
            <option value="discvery">discover</option>
            <option value="february">culture</option>
            <option value="history">historical</option>
            <option value="adventure">adventure</option>
            <option value="sea side">sea side</option>
        
          </select>
</div>
. <button className='btn-find'>find now</button>
        </form>
      </div>
    </div>
  )
}

export default Thumbnail