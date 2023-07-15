import React from 'react'

export default function Boxes({item}) {
  return (
    <div style={{background:`#${item.bgColor}`}} className='Boxes'>
        <p className="boxName">{item.name}</p>      
        <img src={item.img} alt="" className="boxImg" />  
    </div>
  )
}
