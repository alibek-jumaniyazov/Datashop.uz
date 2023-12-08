import React from 'react'
import img1 from '../../images/banner1.png'
import img2 from '../../images/banner2.png'
import img3 from '../../images/banner4.png'
import img4 from '../../images/banner6.png'
import img5 from '../../images/banner7.jpg'


export default function Banners() {
    return (
        <div className='Banners'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img5} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img1} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}
