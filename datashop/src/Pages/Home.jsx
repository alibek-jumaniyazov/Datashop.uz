import React, { useState } from 'react'
import Banners from '../Companents/home/Banners'
import Boxes from '../Companents/home/Boxes'
import img1 from "../images/laptop.png"
import Products from './Products'
export default function Home() {

  const [box , setBox] = useState([
    {
      id:1,
      name:"Ноутбуки",
      img:img1,
      bgColor:"#60B2FF"
    },
    {
      id:1,
      name:"Ноутбуки",
      img:img1,
      bgColor:"#60B2FF"
    },
    {
      id:1,
      name:"Ноутбуки",
      img:img1,
      bgColor:"#60B2FF"
    },
    {
      id:1,
      name:"Ноутбуки",
      img:img1,
      bgColor:"#60B2FF"
    },
    {
      id:1,
      name:"Ноутбуки",
      img:img1,
      bgColor:"#60B2FF"
    },
    {
      id:1,
      name:"Ноутбуки",
      img:img1,
      bgColor:"#60B2FF"
    },
    {
      id:1,
      name:"Ноутбуки",
      img:img1,
      bgColor:"#60B2FF"
    },
    {
      id:1,
      name:"Ноутбуки",
      img:img1,
      bgColor:"#6B3C81"
    }
  ])

  return (
    <div className='Home'>
        <Banners/>
        <div className="allBox">
          {
            box.map((item) => (
                <Boxes item={item}/>
            ))
          }
        </div>
          <Products/>
    </div>
  )
}
