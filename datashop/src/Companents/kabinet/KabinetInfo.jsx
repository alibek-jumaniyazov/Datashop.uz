import React from 'react'

export default function KabinetInfo({kabinetCom}) {
    return (
        <div className={kabinetCom.info}>
            <div className="blockInputs">
                <h1>Информация о пользователе</h1>
                <div className="lnputs">
                    <div className="inputTitle">
                        <p>Телефон номер</p>
                        <input type="text" placeholder='Телефон номер' className='allWidth' />
                    </div>
                    <div className="inputTitle">
                        <p>Имя</p>
                        <input type="text" placeholder='Имя' className='smallWidth' />
                    </div>
                    <div className="inputTitle">
                        <p>Фамилия</p>
                        <input type="text" placeholder='Фамилия' className='smallWidth' />
                    </div>
                </div>
            </div>
            <div className="blockInputs">
                <h1>Информация об учетной записи пользователя</h1>
                <div className="lnputs">
                    <div className="inputTitle">
                        <p>Email</p>
                        <input type="text" placeholder='Email' className='allWidth' />
                    </div>
                    <div className="inputTitle">
                        <p>Пароль</p>
                        <input type="password" placeholder='*********' className='smallWidth' />
                    </div>
                    <div className="inputTitle">
                        <p>Подтвержедение Пароля</p>
                        <input type="password" placeholder='*********' className='smallWidth' />
                    </div>
                </div>
            </div>
            <div className="blockInputs">
                <h1>Адрес доставки</h1>
                <div className="lnputs">
                    <div className="inputTitle">
                        <p>Область</p>
                        <select name="" id="" className='smallWidth'>
                            <option value="">Urganch</option>
                            <option value="">Xonqa</option>
                            <option value="">Yangi Ariq</option>
                            <option value="">Shovot</option>
                            <option value="">Qo'shkopir</option>
                        </select>
                    </div>
                    <div className="inputTitle">
                        <p>Город</p>
                        <select name="" id="" className='smallWidth'>
                            <option value="">Xorazm</option>
                            <option value="">Xonqa</option>
                            <option value="">Yangi Ariq</option>
                            <option value="">Shovot</option>
                            <option value="">Qo'shkopir</option>
                        </select>
                    </div>
                    <div className="inputTitle">
                        <p>Полный адрес</p>
                        <input type="text" placeholder='Введите полный адрес' className='allWidth' />
                    </div>
                </div>
            </div>
            <button>Сохранить</button>
        </div>
    )
}
