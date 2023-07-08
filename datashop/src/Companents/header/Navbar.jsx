import React from 'react'
import uzbIcon from '../../images/icons/uzb.svg'
export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className="navContainer">
                <div className="navAdres">
                    <p>Адрес: Urganch, Darital, 2-этаж</p>
                </div>
                <div className="navTelRegion">
                    <p>Телефон поддержки: <span>(99) 900 10 10</span></p>
                    <select >
                        <option value="O'z"><img src={uzbIcon} alt="" /> O'z </option>
                        <option value="Rus">Rus</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
