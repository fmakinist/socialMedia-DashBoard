import React from 'react'
import '../components/TotalFollowers.css'

function TotalFollow({follow,userName,icon,signal,numberToday,textColor,border}) {
  return (
    <div className='followers col-lg-2 col-sm-6  mt-2 ' style={{borderTop: border}}>
     <div className='d-flex mt-3  justify-content-center'>
     {icon}
     <p className='userName ms-2'>{userName}</p>
     </div>
     <div className='d-flex justify-content-center'>
        <strong className='followNumber follow   mt-3 '>{follow}</strong>
    </div>
    <div className='d-flex justify-content-center '><p className='textFollowers text-muted'>FOLLOWERS</p></div>
     <div className='signalArrow d-flex justify-content-center '>
        <p>{signal}</p>
     <p style={{color:textColor}}>{numberToday}</p>
     </div>
    </div>
  )
}

export default TotalFollow