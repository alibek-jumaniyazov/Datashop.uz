import React from 'react'
export default function KategoriBtn({categoryOpen,iconCategory }) {
  return (
    <div className='KategoriBtn' onClick={() => categoryOpen()}>
        <img src={iconCategory} alt="" />
        <span>Категория</span>
    </div>
  )
}
