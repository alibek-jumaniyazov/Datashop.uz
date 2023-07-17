import React from 'react'
import img1 from '../../images/AksLaptop.png'
import img2 from '../../images/zT.png'
import img3 from '../../images/airPods.png'
import img4 from '../../images/aipadPro.png'
import img5 from '../../images/watch.png'
import img6 from '../../images/iphone.png'

export default function AksesuarImg() {
  return (
    <div className='AksesuarImg'>
        <div className="images">
            <img src={img1} alt="" width={'400px'} />
            <img src={img2} alt="" width={"400px"}/>
        </div>
        <div className="images">
            <img src={img3} alt="" width={"400px"}/>
            <img src={img4} alt="" width={"390px"} height={'360px'}/>
        </div>
        <div className="images">
            <img src={img5} alt="" width={"400px"}/>
            <img src={img6} alt="" width={"400px"}/>
        </div>
    </div>
  )
}
