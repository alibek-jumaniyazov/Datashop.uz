import React from 'react'

export default function Boxes({item}) {
  return (
    
    <div style={{background:`#${item.bgColor}`}} className='Boxes'>
        <p className="boxName">{item.title}</p>      
        {/* <img src={`http://localhost:9060/upload/${item.icon}`} alt="" className="boxImg" />   */}
        <img src={item.image} alt="" className="boxImg" />  
    </div>
  )
}
