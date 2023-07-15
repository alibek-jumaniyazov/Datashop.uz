import React from 'react'
import img from '../../images/notebook.png'

export default function Product() {
    return (
        <div className="servicess" >
            <div className="laptop">
                <div className="content">
                        <div className="inner">
                            <div className="laptopImg" >
                                <img src={img} alt="" />
                            </div>
                            <div className="laptopInfo">
                                <span className='lapName'>HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..</span>
                                <div className="addKarzinka">
                                    <span id='productPrice' className='price'>14.540.000 UZS</span>
                                    <button className="goShopBtnClose"><i class="fa-solid fa-cart-shopping" style={{color:"#fffff"}}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
