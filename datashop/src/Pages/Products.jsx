import React, { useContext, useState } from 'react'
import Product from '../Companents/product/Product'
import ProductsName from '../Companents/product/ProductsName'
import { UserContext } from '../Context/UserContext'


export default function Products({addProduct}) {

  const { category, fakeProduct ,stateContex ,setState } = useContext(UserContext)

  function addInfo(id , image ,description , price , type){
    addProduct(id , image , description ,price, type)
  }


  return (
    <div className='Products'>
      <ProductsName />
      <div className="allProducts">
        {
          fakeProduct.slice(0,10).map((item, index) => (
            <Product item={item} key={index} addInfo={addInfo}/>
          ))
        }
      </div>
    </div>
  )
}
