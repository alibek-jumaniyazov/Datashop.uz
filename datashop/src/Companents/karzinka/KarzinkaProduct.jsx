import React from 'react'
import img1 from '../../images/krProduct.png'

export default function KarzinkaProduct() {
    return (
        <div className='KarzinkaProduct'>
            <div className="karzinkaProductImg">
                <img src={img1} alt="" />
                <div className="karzinkaProductInfos">
                    <h5>HP Victus 15 RTX 3050...</h5>
                    <p>Ноутбук</p>
                    <span>Удалить</span>
                </div>
            </div>
            <div className="krProductCounterPrice">
                <div className="krProductCounter">
                    <p>-</p>
                    <s>1</s>
                    <p>+</p>
                </div>
                <p className="krProductPrice">6 800 000 СУМ</p>
            </div>

        </div>
    )
}
