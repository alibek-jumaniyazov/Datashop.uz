import React from 'react'
import { Link } from 'react-router-dom'
import iconHome from '../../images/icons/home.svg'
import iconUser from '../../images/icons/userWite.svg'
import iconSavat from '../../images/icons/shopping-cart.svg'
import iconSave from '../../images/icons/star.svg'

export default function MobilKatalog({ addREgister }) {

    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className='MobilKatalog'>
            <Link to='/'>
                <div className="KatalogPage">
                    <img src={iconHome} alt="" />
                    <p>Главная</p>
                </div>
            </Link>

            <div className="KatalogPage">
                <img src={iconSave} alt="" />
                <p>Избранное</p>
            </div>
            <Link to='savat'>
                <div className="KatalogPage">
                    <img src={iconSavat} alt="" />
                    <p>Корзина  </p>
                </div>
            </Link>

            <div className="KatalogPage" onClick={() => addREgister()}>
                <img src={iconUser} alt="" />
                {
                    user ?
                        <Link to='kabinet' >
                            <p >
                                {
                                    user ?
                                        user.user.name
                                        :
                                        'Профиль'
                                }
                            </p>
                        </Link>
                        :
                        <p >
                            {
                                user ?
                                    user.user.name
                                    :
                                    'Профиль'
                            }
                        </p>
                }

            </div>
        </div>
    )
}
