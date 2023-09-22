import React, { useContext, useState } from 'react'
import cardShop from '../images/icons/cardShop.svg'
import cardShopred from '../images/icons/cardShopred.png'
import Check from '../images/icons/Bag Check.png'
import Circle from '../images/icons/Check Circle.png'
import productInfomini from '../images/productInfomini.png'
import productInfomini2 from '../images/productInfomini2.png'
import productInfomini3 from '../images/productInfomini3.png'


export default function ProductInfo({ page ,setAddKarzinka}) {

    const [allInfoClass, setAllInfoClass] = useState({
        opisani: "opisaniText",
        xarakter: "none",
        otziv: "none"
    })

    const [allInfo, setallInfo] = useState(
        {
            with: 88,
            left: 0,
        }
    )






    function opisaniOpen() {
        setallInfo({
            with: 88,
            left: 0,
        })
        setAllInfoClass({
            opisani: "opisaniText",
            xarakter: "none",
            otziv: "none"
        })
    }

    function XarOpen() {
        setallInfo({
            with: 149,
            left: 12,
        })
        setAllInfoClass({
            opisani: "none",
            xarakter: " xarakteristikaText",
            otziv: "none"
        })
    }

    function OtzivOpen() {
        setallInfo({
            with: 88,
            left: 28.8,
        })
        setAllInfoClass({
            opisani: "none",
            xarakter: "none",
            otziv: "otzivChat"
        })
    }

    function addKArzinka(id ,description,image,price){
        setAddKarzinka(value => ([
            ...value,
            {
                id:id,
                description:description,
                image:image,
                price:price
            }
        ]))
    }

    return (

        <div className='ProductInfo'>
            {

                page.map((add, index) => (
                    <>
                        <p className="productLocation">Главная  /  Категория / Ноутбуки / HP / <span>HP Victus 15 RTX 3050 ...</span>    </p>
                        <p className='productName'>{add.description}</p>

                        <div className="prooductInfos">
                            <div className="productImages">
                                <div className="productImagesBigImg">
                                    <img src={add.image} alt="" />
                                </div>
                                <div className="productMiniImages">
                                    <img src={productInfomini} alt="" />
                                    <img src={productInfomini2} alt="" />
                                    <img src={productInfomini3} alt="" />
                                </div>
                            </div>
                            <div className="productInfoApi">
                                <p className='productInfoApiTitle'>Коротко о товаре</p>
                                <div className="arxitekturniProductInfos">
                                    <div className="seriesProductInfo">
                                        <span>Бренд</span>
                                        <p>HP</p>
                                    </div>

                                    <div className="seriesProductInfo">
                                        <span>Диогональ экрана</span>
                                        <p>16*</p>
                                    </div>

                                    <div className="seriesProductInfo">
                                        <span>Тип процессора</span>
                                        <p>Intel i5-12400F</p>
                                    </div>

                                    <div className="seriesProductInfo">
                                        <span>Оперативный память(RAM)</span>
                                        <p>8 GB</p>
                                    </div>

                                    <div className="seriesProductInfo">
                                        <span>Жесткий диск (SSD)</span>
                                        <p>512 GB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="orderProduct">
                                <div className="orderAdd">
                                    <p className='orderPrice'>{add.price} UZS</p>
                                    <button onClick={() => addKArzinka(add.id , add.description , add.image , add.price)} className='oderBtn'><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.08 3.99998C18.9072 3.7006 18.6598 3.45111 18.3618 3.27585C18.0639 3.10059 17.7256 3.00554 17.38 2.99998H4.58L4 0.739976C3.9414 0.521814 3.81066 0.32992 3.62908 0.195548C3.44749 0.0611759 3.22576 -0.00775711 3 -2.38712e-05H1C0.734784 -2.38712e-05 0.48043 0.105333 0.292893 0.292869C0.105357 0.480406 0 0.73476 0 0.999976C0 1.26519 0.105357 1.51955 0.292893 1.70708C0.48043 1.89462 0.734784 1.99998 1 1.99998H2.24L5 12.26C5.0586 12.4781 5.18934 12.67 5.37092 12.8044C5.55251 12.9388 5.77424 13.0077 6 13H15C15.1847 12.9994 15.3656 12.9477 15.5227 12.8507C15.6798 12.7536 15.8069 12.6149 15.89 12.45L19.17 5.88998C19.3122 5.59199 19.3783 5.26345 19.3626 4.93366C19.3469 4.60387 19.2498 4.2831 19.08 3.99998ZM14.38 11H6.76L5.13 4.99998H17.38L14.38 11Z" fill="#FFFFFF" />
                                        <path d="M5.5 18C6.32843 18 7 17.3284 7 16.5C7 15.6716 6.32843 15 5.5 15C4.67157 15 4 15.6716 4 16.5C4 17.3284 4.67157 18 5.5 18Z" fill="#FFFFFF" />
                                        <path d="M15.5 18C16.3284 18 17 17.3284 17 16.5C17 15.6716 16.3284 15 15.5 15C14.6716 15 14 15.6716 14 16.5C14 17.3284 14.6716 18 15.5 18Z" fill="#FFFFFF" />
                                    </svg>
                                        В корзину</button>
                                    <button className='orederNow'>Купить в один клик</button>
                                </div>
                                <div className="orderInfos">
                                    <div className="oderMiniInfo">
                                        <img src={cardShopred} alt="" />
                                        <p>Быстрая доставка в течении  3-4 дней</p>
                                    </div>
                                    <div className="oderMiniInfo">
                                        <img src={Check} alt="" />
                                        <p>Возможность открыть товар у курьера</p>
                                    </div>
                                    <div className="oderMiniInfo">
                                        <img src={Circle} alt="" />
                                        <p>Все товары имееют гарантию</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allInformation">
                            <div className="allInformationTitle">
                                <p onClick={() => opisaniOpen()}>Описание</p>
                                <p onClick={() => XarOpen()}>Характеристики</p>
                                <p onClick={() => OtzivOpen()}>Отзывы</p>
                            </div>
                            <div className="hrRED">
                                <hr />
                                <div className="redHr" style={{ width: `${allInfo.with}px`, left: `${allInfo.left}%` }}></div>
                            </div>
                            <div className={`allInformationTexts`}>
                                <div className={`${allInfoClass.opisani}`}>
                                    <p>Экран размером 16.1 дюйма с частотой обновления 144 Гц (в топовых конфигурациях разрешение QHD и 165 Гц) Графика RTX 30-й серии от Nvidia и 11-е поколение процессоров от Intel или варианты на AMD Ryzen 7 5800H. Полноразмерная клавиатура с числовым блоком и отдельными клавишами стрелок Тачпад увеличенного размера</p>
                                </div>
                                <div className={`${allInfoClass.xarakter}`}>
                                    <div className="seriesProductInfo">
                                        <span>Бренд</span>
                                        <p>HP</p>
                                    </div>

                                    <div className="seriesProductInfo">
                                        <span>Диогональ экрана</span>
                                        <p>16*</p>
                                    </div>

                                    <div className="seriesProductInfo">
                                        <span>Тип процессора</span>
                                        <p>Intel i5-12400F</p>
                                    </div>

                                    <div className="seriesProductInfo">
                                        <span>Оперативный память(RAM)</span>
                                        <p>8 GB</p>
                                    </div>

                                    <div className="seriesProductInfo">
                                        <span>Жесткий диск (SSD)</span>
                                        <p>512 GB</p>
                                    </div>
                                </div>

                                <div className={`${allInfoClass.otziv}`}>
                                    <div className="chatDiv">
                                        <div className="allTexts">

                                        </div>
                                        <div className="allinputImg">
                                            <input type="text" />
                                            <input type="text" />
                                            <button>Yuborish</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}
