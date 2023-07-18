import React from 'react'
import cardShop from '../images/icons/cardShop.svg'
import cardShopred from '../images/icons/cardShopred.png'
import Check from '../images/icons/Bag Check.png'
import Circle from '../images/icons/Check Circle.png'
import productInfo from '../images/productInfo.png'
import productInfomini from '../images/productInfomini.png'
import productInfomini2 from '../images/productInfomini2.png'
import productInfomini3 from '../images/productInfomini3.png'

export default function ProductInfo() {
    return (
        <div className='ProductInfo'>
            <p className="productLocation">Главная  /  Категория / Ноутбуки / HP / <span>HP Victus 15 RTX 3050 ...</span>    </p>
            <p className='productName'>HP Victus 15 RTX 3050 / i5-12400F / 8 GB RAM</p>

            <div className="prooductInfos">
                <div className="productImages">
                    <div className="productImagesBigImg">
                        <img src={productInfo} alt="" />
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
                        <p className='orderPrice'>6 800 000 СУМ</p>
                        <button className='oderBtn'><img src={cardShop} alt="" /> В корзину</button>
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
        </div>
    )
}
