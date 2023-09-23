import React from 'react'
import { Link } from 'react-router-dom'

export default function MobilKatalog({ addREgister }) {

    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className='MobilKatalog'>
            <Link to='/'>
                <div className="KatalogPage">
                    <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 22V12H15V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>Главная</p>
                </div>
            </Link>

            <div className="KatalogPage">
                <svg width="20" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>Избранное</p>
            </div>
            <Link to='karzinka'>
                <div className="KatalogPage">
                    <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>Корзина  </p>
                </div>
            </Link>

            <div className="KatalogPage" onClick={() => addREgister()}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 14H15C17.7614 14 20 16.2386 20 19C20 19.5523 19.5523 20 19 20C18.4872 20 18.0645 19.614 18.0067 19.1166L17.9949 18.8237C17.907 17.3072 16.6928 16.093 15.1763 16.0051L15 16H5C3.34315 16 2 17.3431 2 19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19C0 16.3112 2.12231 14.1182 4.78311 14.0046L5 14H15H5ZM10 0C13.3137 0 16 2.68629 16 6C16 9.31371 13.3137 12 10 12C6.68629 12 4 9.31371 4 6C4 2.68629 6.68629 0 10 0ZM10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2Z" fill="white" />
                </svg>
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
