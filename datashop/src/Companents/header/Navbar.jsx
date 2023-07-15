import React from 'react'
import uzbIcon from '../../images/icons/uzb.svg'
export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className="navContainer">
                <div className="navAdres">
                    <span>Адрес: Urganch, Darital, 2-этаж</span>
                </div>
                <div className="navTelRegion">
                    <span className='telNumber'>Телефон поддержки: <span>(99) 900 10 10</span></span>
                    <select >
                        <option value="O'z"><img src={uzbIcon} alt="" /> O'z </option>
                        <option value="Rus">Rus</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
