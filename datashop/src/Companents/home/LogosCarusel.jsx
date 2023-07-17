import React from 'react'
import asusLogo from "../../images/asus.png"


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function LogosCarusel() {
    return (
        <div className='allCarusalLogo'>
            <div className='LogosCarusel'>
                
            </div>
            <div className="brendContainer">
                <Swiper
                    style={{
                        'background': '#E81D1C',
                        'display': 'flex',
                        'flexDirection': 'column',
                        'justifyContent': 'center',
                        'alignItems': 'center',
                        'justifySelf': 'center',
                        'alignSelf': 'center'
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        "@1.50": {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                    }}

                    className="mySwiper3"
                >
                    <div className="brend">
                        <div className="brandLogos">
                            <div className="joys">
                                <SwiperSlide className='brendCon'>
                                    <div className="brandLogo">
                                        <img src={asusLogo} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='brendCon'>
                                    <div className="brandLogo">
                                        <img src={asusLogo} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='brendCon'>
                                    <div className="brandLogo">
                                        <img src={asusLogo} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='brendCon'>
                                    <div className="brandLogo">
                                        <img src={asusLogo} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='brendCon'>
                                    <div className="brandLogo">
                                        <img src={asusLogo} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='brendCon'>
                                    <div className="brandLogo">
                                        <img src={asusLogo} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='brendCon'>
                                    <div className="brandLogo">
                                        <img src={asusLogo} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='brendCon'>
                                    <div className="brandLogo">
                                        <img src={asusLogo} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='brendCon'>
                                    <div className="brandLogo">
                                        <img src={asusLogo} alt="" />
                                    </div>
                                </SwiperSlide>
                            </div>
                        </div>
                    </div>
                </Swiper>
            </div>

        </div>
    )
}
