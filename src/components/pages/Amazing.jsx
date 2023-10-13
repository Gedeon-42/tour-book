import React from 'react'
import pixel1 from '../../assets/images/pixel1.jpeg'
import pixel3 from '../../assets/images/pixel3.jpeg'
import pixels2 from '../../assets/images/pixels2.jpeg'
import pixel7 from '../../assets/images/pixel7.jpeg'
function Amazing() {
  return (
    <div className='Amazing-wrapper'>
        <div className="amazing-header">
        <h1 >amazing destination</h1>
        <h1>Choose The Destination </h1>
        <h1>Just Right For Your Vacation</h1>
        </div>
        
<div className="amazing-container">
<div className="box box1">
<img src={pixel1} alt="" />
</div>
<div className="box box2">
    <img src={pixels2} alt="" />
</div>
<div className="box box3">
    <img src={pixel3} alt="" />
</div>
<div className="box box4">
<img src={pixel7} alt="" />
</div>

</div>
    </div>
  )
}

export default Amazing