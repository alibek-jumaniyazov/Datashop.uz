import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/UserContext.jsx'
export default function Category({ categoryClass }) {


    const { category } = useContext(UserContext)

    console.log(category);

    // const [categoryMap, select] = useState(category[0])


    return (
        <div className={categoryClass}>
            <div className="categoryContainer">
                <div className="categoryNames">
                    {
                        category.map((item, index) => (
                            <div className="categoryName" key={index} >
                                <div className="categoryNameIcon">
                                    <svg width="22" height="18" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.06249 1.19842V13.9585H20.1874V1.19842H1.06249ZM2.85404 15.021H0.531246C0.237847 15.021 0 14.7832 0 14.4898V0.667172C0 0.373772 0.237847 0.135925 0.531246 0.135925H20.7186C21.012 0.135925 21.2499 0.373772 21.2499 0.667172V14.4898C21.2499 14.7832 21.012 15.021 20.7186 15.021H18.3958L18.922 16.0733H20.7186C21.012 16.0733 21.2499 16.3112 21.2499 16.6046C21.2499 16.898 21.012 17.1358 20.7186 17.1358H18.6051C18.5977 17.136 18.5903 17.136 18.5829 17.1358H16.4686C16.1752 17.1358 15.9374 16.898 15.9374 16.6046C15.9374 16.3112 16.1752 16.0733 16.4686 16.0733H17.7341L17.2079 15.021H4.04195L3.51581 16.0733H4.78122C5.07462 16.0733 5.31246 16.3112 5.31246 16.6046C5.31246 16.898 5.07462 17.1358 4.78122 17.1358H2.66692C2.65953 17.136 2.65213 17.136 2.64472 17.1358H0.531246C0.237847 17.1358 0 16.898 0 16.6046C0 16.3112 0.237847 16.0733 0.531246 16.0733H2.3279L2.85404 15.021Z" />
                                    </svg>
                                    <span>{item.title}</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            </div>
                        ))
                    }

                </div>


                <div className="categoryInfos">
                    {
                        category.map((item , index) => (
                            <div className="categoryInfo" key={index}>
                                <p>Ноутбуки по брендам</p>
                                <span>{item.id}</span>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
