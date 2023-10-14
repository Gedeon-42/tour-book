import React, { useState } from 'react'
import sea from '../../assets/images/sea.jpg'
import './thumbnail.css'
import { FaCalendar,  FaFlag, } from 'react-icons/fa'
import{ImLocation2,}from 'react-icons/im'
import Carousel from 'react-bootstrap/Carousel';
import cal from '../../assets/images/cal.jpg'
import pixel1 from '../../assets/images/pixel1.jpeg'
import pixel3 from '../../assets/images/pixel3.jpeg'
import pixels2 from '../../assets/images/pixels2.jpeg'
import pixel7 from '../../assets/images/pixel7.jpeg'
function Thumbnail() {

  const [index, setIndex] = useState(0);
  const [direction,setDirection] = useState(null)
  const handleSelect = (selectedIndex,e) => {
    if(direction===null){
      setDirection(e.direction)
    }
    setIndex(selectedIndex);
  };
  const handleNext = () => {
    setDirection('next');
    setIndex((index + 1) % 3); // Replace 3 with the number of slides
  };

  const handlePrev = () => {
    setDirection('prev');
    setIndex((index - 1 + 3) % 3); // Replace 3 with the number of slides
  };

  return (
    <div className='thumbnai-wrapper'>
      <div className='thumb-container'>
        
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
   <img src={sea}/>
        <Carousel.Caption>
        <div className="thumb-contentr">
        <h1 className='thumb-desc1'>life is too short</h1>
          <h1 className='thumb-desc2'>world is wide</h1>
          <p className='thumb-desc3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure officiis modi.
             Nesciunt tempore ipsa incidunt dolorum numquam, animi, ad quod consequuntur sunt 
            voluptas quae voluptatibus illo consequatur et optio.</p>
        </div>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={cal}/>
        <Carousel.Caption>
        <div className="thumb-contentr">
        <h1 className='thumb-desc1'>life is too short</h1>
          <h1 className='thumb-desc2'>world is wide</h1>
          <p className='thumb-desc3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure officiis modi.
             Nesciunt tempore ipsa incidunt dolorum numquam, animi, ad quod consequuntur sunt 
            voluptas quae voluptatibus illo consequatur et optio.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={pixel7}/>
        <Carousel.Caption>
        <div className="thumb-contentr">
        <h1 className='thumb-desc1'>life is too short</h1>
          <h1 className='thumb-desc2'>world is wide</h1>
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
        <form action="">
          <div className="location">
            <div className="form-icons"><ImLocation2/></div>
          
          <input type="text"placeholder='where to' />
          </div>
          <div className="calendar">
            <div className="form-icons"><FaCalendar/></div>   
            <select>
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
  <div className="form-icons"> <FaFlag/></div>
  
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