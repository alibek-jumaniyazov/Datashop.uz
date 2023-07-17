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
export default function Home() {


  const {category , product} = useContext(UserContext)

  console.log(category);

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
      <Products />
      <Products />
      <AksesuarName />
      <LogosCarusel />
      <AksesuarName />
      
      <Products />
    </div>
  )
}
