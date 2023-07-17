import React from 'react'

export default function Boxes({item}) {
  return (
    <div style={{background:`#${item.bgColor}`}} className='Boxes'>
        <p className="boxName">{item.name}</p>      
        <img src={`http://localhost:9060/upload/${item.icon}`} alt="" className="boxImg" />  
    </div>
  )
}
