import React from 'react'

export default function KabinetInfo() {
  return (
    <div className='KabinetInfo'>
        <div className="blockInputs">
            <h1>Информация о пользователе</h1>
            <div className="lnputs">
                <div className="inputTitle">
                    <p>Телефон номер</p>
                    <input type="text" placeholder='Телефон номер'/>
                </div>
                <div className="inputTitle">
                    <p>Имя</p>
                    <input type="text" placeholder='Имя'/>
                </div>
                <div className="inputTitle">
                    <p>Фамилия</p>
                    <input type="text" placeholder='Фамилия'/>
                </div>
            </div>
        </div>
    </div>
  )
}
