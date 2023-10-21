import React from 'react'
import pixel1 from '../../assets/images/pixel1.jpeg'
import pixel3 from '../../assets/images/pixel3.jpeg'
import pixels2 from '../../assets/images/pixels2.jpeg'
import pixel7 from '../../assets/images/pixel7.jpeg'
import land3 from '../../assets/images/land3.jpg'
function Amazing() {
  return (
    <div className='Amazing-wrapper'>
        <div className="amazing-header">
        <h1 >amazing destination</h1>
        <h1>Choose The Destination </h1>
        <h1>Just Right For Your Vacation</h1>
        </div>
        
<div className="amazing-container">
<div className="boxx box1">
<img src={pixel1} alt="" />
</div>
<div className="boxx box2">
    <img src={pixels2} alt="" />
</div>
<div className="boxx box3">
    <img src={land3} alt="" />
</div>
<div className="boxx box4">
<img src={pixel7} alt="" />
</div>

</div>
    </div>
  )
}

export default Amazing