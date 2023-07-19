import React, { useContext } from 'react'
import Product from '../Companents/product/Product'
import ProductsName from '../Companents/product/ProductsName'
import { UserContext } from '../Context/UserContext'

export default function Products() {

  const { category, product ,aaa ,setAAA } = useContext(UserContext)

  function addInfo(id,img,description, price) {
    setAAA([
      {
          id: id,
          img: img,
          description: description,
          price: price,
      }
  ])
  }

  return (
    <div className='Products'>
      <ProductsName />
      <div className="allProducts">
        {
          product.map((item, index) => (
            <Product item={item} key={index} addInfo={addInfo} setAAA={setAAA}/>
          ))
        }
      </div>
    </div>
  )
}
