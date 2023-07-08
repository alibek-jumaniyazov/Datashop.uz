import React from 'react'
import icon from '../../images/icons/searchIcon.svg'
export default function Search() {
  return (
    <div className='Search'>
        <input type="text" placeholder='Введите запрос...' />
        <div className="serarchIcon">
            <img src={icon} alt="" />
        </div>
    </div>
  )
}
