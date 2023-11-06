
import './App.css'
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Thumbnail from './components/Thumbnail/Thumbnail'
import About from './components/pages/About'
import Amazing from './components/pages/Amazing'
import Offers from './components/pages/Offers'
import Tourslide from './components/pages/Tourslide'
import pixel1 from '../src/assets/images/hotel1.jpg'
import hotel2 from '../src/assets/images/hotel2.jpg'
import houses from '../src/assets/images/houses.jpg'
import { sliderSettings } from './utils/common';
import { useStateContext } from './assets/Context/ContextProvide';
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight, FaClock, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function App() {
  const{tours}=useStateContext()
  return (
    <>
      <div className='main'>
<Thumbnail />
<About/>
<Amazing />
<Tourslide/>
<>

<Swiper
      {...sliderSettings}
      className='swipper-top'
    >
      <SliderButton/>
      {tours.map((item)=>(
        <>
          <SwiperSlide className='flex-tour'>
          <img className='loacation-img' src={item.backdropImage}/>
          <div className="tour-location-desc">
                <button className='locatio-btn'> {item.Title}</button>
                <h1>{item.TourType}</h1>
                <h1>{item.destination}</h1>
                <p>{item.Discription}</p>
                     <div className="laction-size">
                        <div className="duration">
                            <FaClock className='location-icon'/>
                            <div className="duration-desc">
                                <h4>time</h4>
                                <p>{item.fromMonth}</p>
                            </div>
                            </div>
                        <div className="size">
                            <FaUserFriends className='location-icon'/>
                            <div className="duration-desc">
                                <h4>Group size</h4>
                                <p>{item.GroupTize}</p>
                            </div>
                            
                        </div>
                     </div>
                     <div className="tour-amount">
                        <h1>{item.Price}</h1>
                        <Link to={`/tour/${item._id}`} className='btn-book'>Book now</Link>
                     </div>
            </div>
      </SwiperSlide>
        </>
      ))}
     
    </Swiper>
</>

      </div>
    </>
  )
}

export default App
 export const SliderButton =()=>{
  const swiper = useSwiper()
  return(
    <div className='slider-btns'>
     <button type='button' onClick={()=>swiper.slidePrev()}> <FaAngleLeft/> </button>
    <button  type='button' onClick={()=>swiper.slideNext()}> <FaAngleRight/></button>
    </div>
   
  )
 }