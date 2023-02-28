import React from 'react'
import '../components/Today.css'

function TodayCard({icon,descr,percentage,signal,number,textColor ,theme}) {
  return (
    <div className={`followers col-lg-2 col-sm-10  mt-4 me-5 ms-4 ${theme} `}>
        <div className='d-flex justify-content-around mt-5'>
             <h4 className='text-muted'>{descr}</h4>
             {icon}
        </div>
        <div className='d-flex mt-3 justify-content-around'>
            <strong className='fs-2 text-center'>{number}</strong>
            <div className='d-flex justify-content-between mt-3'>
            {signal}
             <p className='mb-5 percentage' style={{color:textColor}}>{percentage}%</p>
            </div>
        </div>
  
    </div>
  )
}

export default TodayCard