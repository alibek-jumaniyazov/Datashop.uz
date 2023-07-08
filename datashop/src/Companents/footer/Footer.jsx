import React from 'react'
import logo from '../../images/icons/logo.svg'
import uzcard from '../../images/uzcard.png'
export default function Footer() {
    return (
        <div className='Footer'>
            <div className="footerContainer">

                <div className="footerInfo">
                    <img src={logo} alt="" className="logo" />
                    <div className="footerinfoName">
                        <span>Телефон поддержки</span>
                        <p>+998 (99) 999 01 00</p>
                    </div>
                    <div className="footerinfoName">
                        <span>Адрес</span>
                        <p>Даритал, Ургенч</p>
                    </div>
                    <div className="footerinfoName">
                        <span>Email</span>
                        <p>datashop@gmail.com</p>
                    </div>
                </div>
                <div className="footerInfos">
                    <div className="footerInfo">
                        <p>О компании</p>
                        <p>Вакансии</p>
                        <p>Возврат и обмен товара</p>
                        <p>Условия рассрочки</p>
                        <p>Помощь</p>
                        <p>Доставка</p>
                    </div>

                    <div className="footerInfo">
                        <p>О компании</p>
                        <p>Вакансии</p>
                        <p>Возврат и обмен товара</p>
                        <p>Условия рассрочки</p>
                        <p>Помощь</p>
                        <p>Доставка</p>
                    </div>
                   
                    <div className="footerInfo">
                        <p>Способы оплаты</p>
                        <div className="footerOplataInfo">
                            <div className="opataName">
                                <img src={uzcard} alt="" />
                            </div>
                            <div className="opataName">
                                <img src={uzcard} alt="" />
                            </div>
                            <div className="opataName">
                                <img src={uzcard} alt="" />
                            </div>
                            <div className="opataName">
                                <img src={uzcard} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
