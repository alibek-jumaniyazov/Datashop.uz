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

export default function HeaderComponent() {

    const [categoryClass , setCategoriClass] = useState("noneCategory")
    const[categoryIcon , setCategoryIcon] = useState(iconCategory)

    function categoryOpen(){
        if(categoryClass == 'noneCategory'){
            setCategoriClass('Category')
            setCategoryIcon(xIcon)
        }
        if(categoryClass == 'Category'){
            setCategoriClass('noneCategory')
            setCategoryIcon(iconCategory)
        }
    }

    return (
        <>
            <div className="headerConpanents">
                <div className="headerContainer ">
                    <img src={logo} alt="" />
                    <KategoriBtn categoryOpen={categoryOpen} iconCategory={categoryIcon}/>
                    <Search />
                    <div className="userProductsinfo">
                        <div className="userInfoProduct">
                            <img src={cardShop} alt="" />
                            <p>Корзина</p>
                        </div>

                        <div className="userInfoProduct">
                            <img src={heart} alt="" />
                            <p>Избранное</p>
                        </div>

                        <div className="userInfoProduct">
                            <img src={user} alt="" />
                            <p>Профиль</p>
                        </div>
                    </div>
                </div>
            </div>
            <Category categoryClass={categoryClass}/>

        </>
    )
}
