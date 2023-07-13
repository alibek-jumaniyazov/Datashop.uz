import React from 'react'
import img1 from '../../images/Frame 1.png'
import { Carousel } from 'flowbite-react';
export default function Banners() {
    return (
        <div className='Banners'>
            <Carousel>
                <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                />
                <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                />
                <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                />
                <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                />
                <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                />
            </Carousel>
        </div>

    )
}
