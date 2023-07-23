import React, { useState } from 'react'
import logo from '../../images/icons/logo.svg'
import cardShop from '../../images/icons/cardShop.svg'
import heart from '../../images/icons/heart.svg'
import user from '../../images/icons/user.svg'
import KategoriBtn from './KategoriBtn'
import Search from './Search'
import Category from './Category'
import iconCategory from '../../images/icons/categoryIcon.svg'
import xIcon from '../../images/icons/x.svg'
import { Link } from 'react-router-dom'

export default function HeaderComponent({addREgister}) {

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
                        <div className="userInfoProduct">
                            <img src={cardShop} alt="" />
                            <span>Корзина</span>
                        </div>

                        <div className="userInfoProduct">
                            <img src={heart} alt="" />
                            <span>Избранное</span>
                        </div>

                        <div className="userInfoProduct" onClick={() => addREgister()}>
                            <img src={user} alt="" />
                            <span>
                                {
                                    user ?
                                        user.user.name 
                                        :
                                        "Profil"
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Category categoryClass={categoryClass} />

        </>
    )
}
