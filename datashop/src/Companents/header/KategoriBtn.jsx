import React from 'react'
import iconCategory from '../../images/icons/categoryIcon.svg'
export default function KategoriBtn({categoryOpen}) {
  return (
    <div className='KategoriBtn' onClick={() => categoryOpen()}>
        <img src={iconCategory} alt="" />
        <p>Категория</p>
    </div>
  )
}
