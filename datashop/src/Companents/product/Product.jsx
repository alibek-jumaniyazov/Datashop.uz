import React from 'react'
import img from '../../images/notebook.png'

export default function Product({item}) {

console.log(item);

    return (
        <div className="servicess" >
            <div className="laptop">
                <div className="content">
                        <div className="inner">
                            <div className="laptopImg" >
                                <img src={`http://localhost:9060/upload/${item.image}`} alt="" />
                            </div>
                            <div className="laptopInfo">
                                <span className='lapName'>{item.description}</span>
                                <div className="addKarzinka">
                                    <span id='productPrice' className='price'>{item.price} UZS</span>
                                    <button className="goShopBtnClose"><i className="fa-solid fa-cart-shopping" style={{color:"#fffff"}}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
