import React, { useContext } from 'react'
import Product from '../Companents/product/Product'
import ProductsName from '../Companents/product/ProductsName'
import { UserContext } from '../Context/UserContext'

export default function Products() {

  const { category, product } = useContext(UserContext)

  return (
    <div className='Products'>
      <ProductsName />
      <div className="allProducts">
        {
          product.map((item, index) => (
            <Product item={item} key={index}/>
          ))
        }
      </div>
    </div>
  )
}
