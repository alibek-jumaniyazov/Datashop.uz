import React from 'react'
import img1 from '../../images/krProduct.png'

export default function KarzinkaProduct({item}) {
    return (
        <div className='KarzinkaProduct'>
            <div className="karzinkaProductImg">
                <img src={item.image} alt="" />
                <div className="karzinkaProductInfos">
                    <h5>{item.description}</h5>
                    <p>{item.type}</p>
                    <span>Удалить</span>
                </div>
            </div>
            <div className="krProductCounter">
                    <p>-</p>
                    <span>1</span>
                    <p>+</p>
                </div>
            <div className="krProductCounterPrice">
                
                <p className="krProductPrice">{item.price} UZS</p>
            </div>

        </div>
    )
}
