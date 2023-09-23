import React, { useEffect, useState } from 'react'
import logo from '../../images/icons/logo.svg'
import cardShop from '../../images/icons/cardShop.svg'
import heart from '../../images/icons/heart.svg'
import userr from '../../images/icons/user.svg'
import KategoriBtn from './KategoriBtn'
import Search from './Search'
import Category from './Category'
import iconCategory from '../../images/icons/categoryIcon.svg'
import uzbIcon from '../../images/icons/uzbIcon.svg'
import xIcon from '../../images/icons/x.svg'
import { Link } from 'react-router-dom'

export default function HeaderComponent({ addREgister }) {

    const [categoryClass, setCategoriClass] = useState("noneCategory")
    const [categoryIcon, setCategoryIcon] = useState(iconCategory)



    function categoryOpen() {
        if (categoryClass == 'noneCategory') {
            setCategoriClass('Category')
            setCategoryIcon(xIcon)
        }
        if (categoryClass == 'Category') {
            setCategoriClass('noneCategory')
            setCategoryIcon(iconCategory)
        }

    }

    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <>
            <div className="headerConpanents">
                <div className="headerContainer ">
                    <Link to={'/'}> <img src={logo} alt="" /> </Link>
                    <KategoriBtn categoryOpen={categoryOpen} iconCategory={categoryIcon} />
                    <Search />
                    <div className="userProductsinfo">
                        <Link to={'/savat'} >
                            <div className="userInfoProduct">
                                <img src={cardShop} alt="" />
                                <span>Корзина</span>
                                <div className="productNumber">0</div>
                            </div>
                        </Link>
                        <div className="userInfoProduct">
                            <img src={heart} alt="" />
                            <span>Избранное</span>
                        </div>

                        <div className="userInfoProduct"
                            onClick={() => addREgister()}
                        >
                            <img src={userr} alt="" />
                            {
                                user ?

                                    <Link to='kabinet'>
                                        <span>

                                            {
                                                user ?
                                                    user.user.name
                                                    :
                                                    "Профиль"
                                            }
                                        </span>
                                    </Link>

                                    :

                                    <span>
                                        {
                                            user ?
                                                user.user.name
                                                :
                                                "Профиль"
                                        }
                                    </span>
                            }

                        </div>
                    </div>
                </div>
            </div>

            <Category categoryClass={categoryClass} />


            <div className="MobilHeader">
                <div className="MobilHeader_Container">
                    <div className="mobilHeader_logoLanguages">
                        <Link to={'/'}> <img src={logo} alt="" /> </Link>
                        <div className="navTelRegion navMobile">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6667 11.2802V13.2802C14.6675 13.4659 14.6294 13.6497 14.555 13.8198C14.4807 13.9899 14.3716 14.1426 14.2348 14.2681C14.0979 14.3937 13.9364 14.4892 13.7605 14.5487C13.5847 14.6082 13.3983 14.6303 13.2134 14.6136C11.1619 14.3907 9.19137 13.6897 7.46004 12.5669C5.84926 11.5433 4.48359 10.1777 3.46004 8.56689C2.33336 6.8277 1.6322 4.84756 1.41337 2.78689C1.39671 2.60254 1.41862 2.41673 1.4777 2.24131C1.53679 2.06589 1.63175 1.90469 1.75655 1.76797C1.88134 1.63126 2.03324 1.52203 2.20256 1.44724C2.37189 1.37245 2.55493 1.33374 2.74004 1.33356H4.74004C5.06357 1.33038 5.37723 1.44495 5.62254 1.65592C5.86786 1.86689 6.02809 2.15986 6.07337 2.48023C6.15779 3.12027 6.31434 3.74871 6.54004 4.35356C6.62973 4.59218 6.64915 4.8515 6.59597 5.10081C6.5428 5.35012 6.41928 5.57897 6.24004 5.76023L5.39337 6.60689C6.34241 8.27592 7.72434 9.65786 9.39337 10.6069L10.24 9.76023C10.4213 9.58099 10.6501 9.45746 10.8994 9.40429C11.1488 9.35112 11.4081 9.37053 11.6467 9.46023C12.2516 9.68593 12.88 9.84248 13.52 9.92689C13.8439 9.97258 14.1396 10.1357 14.3511 10.3852C14.5625 10.6348 14.6748 10.9533 14.6667 11.2802Z" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <img src={uzbIcon} alt="" />
                            <select >
                                <option value="O'z"> O'z </option>
                            </select>
                        </div>
                    </div>
                    <div className="mobilHeader_KategoriSearch">
                        <KategoriBtn categoryOpen={categoryOpen} iconCategory={categoryIcon} />
                        <Search />
                    </div>

                </div>
            </div>
        </>
    )
}
