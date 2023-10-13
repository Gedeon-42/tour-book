import React from 'react'
import  houses from '../../assets/images/houses.jpg'
import mountain from '../../assets/images/mountain.jpg'
import pixel1 from '../../assets/images/pixel1.jpeg'
import pixel from '../../assets/images/sea2.jpeg'
import pixel7 from '../../assets/images/pixel7.jpeg'
import { FaCalendar, FaClock, FaSearch, FaUserFriends, FaUserInjured } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
function Tour() {
  return (
    <div className='tour-wrapper'>
        
        <div className='tour-container'>
        <img src={pixel} alt="" />
        <div className="tour-banner"><h1>Tour list</h1></div>
        </div>
        <div className="tour-content-wrapper">
            <div className="tour-location-wrapper">
            
                <div className="tour-location-form">
                    <div className="sort-by">sort by</div>
                    <form action="">
                        <div className="select1">
                        <select name="" id="">
                            <option value="realese date">release date</option>
                            <option value="realese date">tour date</option>
                            <option value="realese date">price</option>
                        </select>
                        </div>
                        <div className="select2">
                        <select name="" id="">
                            <option value="realese date">Ascending</option>
                            <option value="realese date">Descending</option>
                    
                        </select>
                        </div>
                        
                    </form>
                </div>
           {/* location grid wrapper */}
           <div className="tour-location-container">
            <div className="tour-loaction-content">
                <img className='loacation-img' src={pixel7}/>
                <div className="tour-location-desc">
                    <button className='locatio-btn'> India</button>
                    <h1>holiday planner is is a world learning</h1>
                    <h1>Online tour booking platform</h1>
                    <p>Far far away, behind the word mountains, far from the countries
                         Vokalia and Consonantia,</p>
                         <div className="laction-size">
                            <div className="duration">
                                <FaClock className='location-icon'/>
                                <div className="duration-desc">
                                    <h4>Duration</h4>
                                    <p>2days</p>
                                </div>
                                </div>
                            <div className="size">
                                <FaUserFriends className='location-icon'/>
                                <div className="duration-desc">
                                    <h4>Group size</h4>
                                    <p>15 people</p>
                                </div>
                                
                            </div>
                         </div>
                         <div className="tour-amount">
                            <h1>$1200</h1>
                            <button className='btn-book'>Book now</button>
                         </div>
                </div>
            </div>
            <div className="tour-loaction-content">
                <img className='loacation-img' src={pixel1}/>
                <div className="tour-location-desc">
                    <button className='locatio-btn'> India</button>
                    <h1>holiday planner is is a world learning</h1>
                    <h1>Online tour booking platform</h1>
                    <p>Far far away, behind the word mountains, far from the countries
                         Vokalia and Consonantia,</p>
                         <div className="laction-size">
                            <div className="duration">
                                <FaClock className='location-icon'/>
                                <div className="duration-desc">
                                    <h4>Duration</h4>
                                    <p>2days</p>
                                </div>
                                </div>
                            <div className="size">
                                <FaUserFriends className='location-icon'/>
                                <div className="duration-desc">
                                    <h4>Group size</h4>
                                    <p>15 people</p>
                                </div>
                            </div>
                         </div>
                         <div className="tour-amount">
                            <h1>$1200</h1>
                            <button className='btn-book'>Book now</button>
                         </div>
                </div>
            </div>
            <div className="tour-loaction-content">
                <img className='loacation-img' src={mountain}/>
                <div className="tour-location-desc">
                    <button className='locatio-btn'> India</button>
                    <h1>holiday planner is is a world learning</h1>
                    <h1>Online tour booking platform</h1>
                    <p>Far far away, behind the word mountains, far from the countries
                         Vokalia and Consonantia,</p>
                         <div className="laction-size">
                            <div className="duration">
                                <FaClock className='location-icon'/>
                                <div className="duration-desc">
                                    <h4>Duration</h4>
                                    <p>2days</p>
                                </div>
                                </div>
                            <div className="size">
                                <FaUserFriends/>
                                <div className="duration-desc">
                                    <h4>Group size</h4>
                                    <p>15 people</p>
                                </div>
                            </div>
                         </div>
                         <div className="tour-amount">
                            <h1>$1200</h1>
                            <button className='btn-book'>Book now</button>
                         </div>
                </div>
            </div>
            <div className="tour-loaction-content">
                <img className='loacation-img' src={houses}/>
                <div className="tour-location-desc">
                    <button className='locatio-btn'> India</button>
                    <h1>holiday planner is is a world learning</h1>
                    <h1>Online tour booking platform</h1>
                    <p>Far far away, behind the word mountains, far from the countries
                         Vokalia and Consonantia,</p>
                         <div className="laction-size">
                            <div className="duration">
                                <FaClock className='location-icon'/>
                                <div className="duration-desc">
                                    <h4>Duration</h4>
                                    <p>2days</p>
                                </div>
                                </div>
                            <div className="size">
                                <FaUserFriends className='location-icon'/>
                                <div className="duration-desc">
                                    <h4>Group size</h4>
                                    <p>15 people</p>
                                </div>
                            </div>
                         </div>
                         <div className="tour-amount">
                            <h1>$1200</h1>
                            <button className='btn-book'>Book now</button>
                         </div>
                </div>
            </div>
            <div className="tour-loaction-content">
                <img className='loacation-img' src={pixel7}/>
                <div className="tour-location-desc">
                    <button className='locatio-btn'> India</button>
                    <h1>holiday planner is is a world learning</h1>
                    <h1>Online tour booking platform</h1>
                    <p>Far far away, behind the word mountains, far from the countries
                         Vokalia and Consonantia,</p>
                         <div className="laction-size">
                            <div className="duration">
                                <FaClock className='location-icon'/>
                                <div className="duration-desc">
                                    <h4>Duration</h4>
                                    <p>2days</p>
                                </div>
                                </div>
                            <div className="size">
                                <FaUserFriends className='location-icon'/>
                                <div className="duration-desc">
                                    <h4>Group size</h4>
                                    <p>15 people</p>
                                </div>
                            </div>
                         </div>
                         <div className="tour-amount">
                            <h1>$1200</h1>
                            <button className='btn-book'>Book now</button>
                         </div>
                </div>
            </div>
            <div className="tour-loaction-content">
                <img className='loacation-img' src={pixel7}/>
                <div className="tour-location-desc">
                    <button className='locatio-btn'> India</button>
                    <h1>holiday planner is is a world learning</h1>
                    <h1>Online tour booking platform</h1>
                    <p>Far far away, behind the word mountains, far from the countries
                         Vokalia and Consonantia,</p>
                         <div className="laction-size">
                            <div className="duration">
                                <FaClock className='location-icon'/>
                                <div className="duration-desc">
                                    <h4>Duration</h4>
                                    <p>2days</p>
                                </div>
                                </div>
                            <div className="size">
                                <FaUserFriends className='location-icon'/>
                                <div className="duration-desc">
                                    <h4>Group size</h4>
                                    <p>15 people</p>
                                </div>
                            </div>
                         </div>
                         <div className="tour-amount">
                            <h1>$1200</h1>
                            <button className='btn-book'>Book now</button>
                         </div>
                </div>
            </div>
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
          <div className="tour-search">
            <label htmlFor="">Duration</label>
            <select>
            <option value="" disabled> any</option>
            <option value="january">1 day tour</option>
            <option value="february">2-4 day tour</option>
            <option value="march">march</option>
            <option value="april">april</option>
            
          </select>
          </div>
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

export default Tour