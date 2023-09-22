import React from 'react'
import KarzinkaProduct from '../Companents/karzinka/KarzinkaProduct'

export default function Karzinka({addKazinka}) {
  return (
    <div className='Karzinka'>
      <p className='titlePage'>Главная  /  Корзина  </p>
      <div className="ProductPriceAllBox">
        <div className="karzinkaInfo">
          <div className="karzinkaNameHeader">
            <p>Корзина</p>
            <span>Товаров в корзине (3)</span>
          </div>
          <div className="karzinkaProductAll">
            <div className="allProductHeaderInfo">
              <p>Детали продуктов</p>
              <p className='counterName'>Количество</p>
              <p>Цена</p>
            </div>
            <div className="KarzinkaProducts">
              {
                addKazinka.map((item) => (
                  <KarzinkaProduct item={item}/>
                ))
              }
            </div>
          </div>
        </div>
        <div className="karzinkaInfoPrice">
          <div className="allPrice">
            <p>Итого: 766.000 UZS</p>
          </div>
          <div className="miniPrices">
            <div className="miniPrice">
              <p>Промокод: </p>
              <span>0 сум</span>
            </div>
            <div className="miniPrice">
              <p>Сумма доставки: </p>
              <span>30.000 сум</span>
            </div>
            <div className="miniPrice">
              <p>Сумма товара:</p>
              <span>736.000 сум</span>
            </div>
          </div>
          <div className="dastavki">
            <p>Доставка:</p>
            <span>Курьером</span>
          </div>
          <div className="priceInfoBtn">
            <p>Оформить заказ</p>
          </div>
          <span className="footerTitle">Нажимая 'Оформить заказ', я соглашаюсь с публичным договором оферты</span>
        </div>
      </div>

    </div>
  )
}
