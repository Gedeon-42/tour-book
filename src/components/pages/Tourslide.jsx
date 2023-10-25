import Carousel from 'react-bootstrap/Carousel';
import { useStateContext } from '../../assets/Context/ContextProvide';
import { Link } from 'react-router-dom';
import { FaClock, FaUserFriends } from 'react-icons/fa';

function Tourslide() {
    const{tours}=useStateContext()
  return (
    <div className='dived' >
      < div className="amazing-header">
        <h1 >amazing destination</h1>
        <h1> trending , best selling tours </h1>
        <h1>Fun destination</h1>
        </div>
  <div className="tour-location-container-home">
            
            {tours?.map((tour)=>(
                <div key={tour._id} className="tour-loaction-content">
<img className='loacation-img' src={tour.backdropImage}/>
<div className="tour-location-desc">
                <button className='locatio-btn'> {tour.Title}</button>
                <h1>{tour.TourType}</h1>
                <h1>{tour.destination}</h1>
                <p>{tour.Discription}</p>
                     <div className="laction-size">
                        <div className="duration">
                            <FaClock className='location-icon'/>
                            <div className="duration-desc">
                                <h4>time</h4>
                                <p>{tour.fromMonth}</p>
                            </div>
                            </div>
                        <div className="size">
                            <FaUserFriends className='location-icon'/>
                            <div className="duration-desc">
                                <h4>Group size</h4>
                                <p>{tour.GroupTize}</p>
                            </div>
                            
                        </div>
                     </div>
                     <div className="tour-amount">
                        <h1>{tour.Price}</h1>
                        <Link to={`/tour/${tour._id}`} className='btn-book'>Book now</Link>
                     </div>
            </div>
                </div>
            ))}
      
       </div>
    </div>
  )
}

export default Tourslide