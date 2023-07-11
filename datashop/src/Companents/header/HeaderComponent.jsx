import React, { useState } from 'react'
import logo from '../../images/icons/logo.svg'
import cardShop from '../../images/icons/cardShop.svg'
import heart from '../../images/icons/heart.svg'
import user from '../../images/icons/user.svg'
import KategoriBtn from './KategoriBtn'
import Search from './Search'
import Category from './Category'

export default function HeaderComponent() {

    const [categoryClass , setCategoriClass] = useState("noneCategory")

    function categoryOpen(){
        if(categoryClass == 'noneCategory'){
            setCategoriClass('Category')
        }
        if(categoryClass == 'Category'){
            setCategoriClass('noneCategory')
        }
    }

    return (
        <>
            <div className="headerConpanents">
                <div className="headerContainer ">
                    <img src={logo} alt="" />
                    <KategoriBtn categoryOpen={categoryOpen}/>
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
