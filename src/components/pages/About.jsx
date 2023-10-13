import React from 'react'
import plae from '../../assets/images/plae.jpg'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className='about-wrapper'>
      <div className="about-content1">
<img src={plae} alt="" />
      </div>
      <div className="about-content2">
        <div className='about-title'> about us</div>
        <div className="about-desc">
          <p>plan your trip with us</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est fugiat assumenda 
            aliquam consequatur. Eligendi rerum, perspiciatis iure totam
             accusamus blanditiis quod in
             doloribus nostrum, vero non laboriosam perferendis aliquam sed!
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et totam corporis nulla obcaecati 
             fuga! Dolor, accusamus. A accusantium sint ipsam illo, exercitationem nisi saepe
              officia harum. Sint perspiciatis corporis ipsa?
             </p>
             <Link className='btn-about'>Read more</Link>

        </div>
      </div>
       
    </div>
  )
}

export default About