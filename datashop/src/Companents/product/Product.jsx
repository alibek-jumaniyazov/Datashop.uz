import React from 'react'
import img from '../../images/notebook.png'
import { Link } from 'react-router-dom'
export default function Product({ item , addInfo }) {

    // console.log(item);

    


    return (
        <div className="servicess" >
            <div className="laptop">
                <div className="content">
                    <Link to='product' onClick={() => addInfo(item.id , `http://localhost:9060/upload/${item.image}` , item.description ,item.price)}>
                        <div className="inner">
                            <div className="laptopImg" >
                                <img src={`http://localhost:9060/upload/${item.image}`} alt="" />
                            </div>
                            <div className="laptopInfo">
                                <span className='lapName'>{item.description}</span>
                                <div className="addKarzinka">
                                    <span id='productPrice' className='price'>{item.price} UZS</span>
                                    <button className="goShopBtnClose"><i className="fa-solid fa-cart-shopping" style={{ color: "#fffff" }}></i></button>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>

            </div>
        </div >

    )
}
