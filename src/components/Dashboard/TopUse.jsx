import React from 'react'
import { friends } from '../../assets/data/friend'
import { FaEnvelopeOpen, FaSms } from 'react-icons/fa'

function TopUser() {
  return (
    <div className='topusers'>
        {friends.map((friend)=>(
            <div key={friend.id} className='friends-content'> 
            <div  className='name-location'>
            <img className='friend-img' src={friend.image} alt="" />
            <div className='name-location2'>
            <h3>{friend.name}</h3>
            <div>
            <p>{friend.country}</p>
            </div>
            
            </div>
            </div>
            <FaEnvelopeOpen className='envlope'/>
            </div>
        ))}
    </div>
  )
}

export default TopUser