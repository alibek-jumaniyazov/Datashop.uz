import React, { useContext, useState } from 'react'
import Banners from '../Companents/home/Banners'
import Boxes from '../Companents/home/Boxes'
import img1 from "../images/laptop.png"
import asusLogo from "../images/asus.png"
import Products from './Products'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import LogosCarusel from '../Companents/home/LogosCarusel'
import AksesuarName from '../Companents/home/AksesuarName'
import { UserContext } from '../Context/UserContext'
import AksesuarImg from '../Companents/home/AksesuarImg'
export default function Home({setPage}) {


  const {category , product} = useContext(UserContext)

  function addProduct(id , image , description , price){
    setPage([
      {
        id:id,
        image:image,
        description:description,
        price:price
      }
    ])
  }

  return (
    <div className='Home'>
      <Banners />
      <div className="allBox">
        {
          category.map((item, index) => (
            <Boxes item={item} key={index} />
          ))
        }
      </div>
      <Products addProduct={addProduct}/>
      <Products />
      <AksesuarName />
      <LogosCarusel />
      <AksesuarName />
      <AksesuarImg/>
      <Products />
    </div>
  )
}
