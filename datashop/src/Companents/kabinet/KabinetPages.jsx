import React, { useState } from 'react'

export default function KabinetPages({setKabinetCom}) {
    const [color, setColor] = useState({
        info: "#E81D1C",
        order: "#000000",
        messange: "#000000"
    })

    function UserInfo() {
        setColor({
            info: "#E81D1C",
            order: "#000000",
            messange: "#000000"
        })
        setKabinetCom({
            info: "KabinetInfo",
            order: "none",
            messange: "none"
        })
    }
    function UserOrder() {
        setColor({
            info: "#000000",
            order: "#E81D1C",
            messange: "#000000"
        })
        setKabinetCom({
            info: "none",
            order: "KabinetoOrder",
            messange: "none"
        })
    }
    function UserMess() {
        setColor({
            info: "#000000",
            order: "#000000",
            messange: "#E81D1C"
        })
        setKabinetCom({
            info: "none",
            order: "none",
            messange: "KabinetMessange"
        })
    }


    return (
        <div className="KabinetPages">
            <div className="pagesText" onClick={() => UserInfo()} style={{ color: " #E81D1C" }}>
                <i class="fa-regular fa-user" style={{ color: color.info }}></i>
                <p style={{ color: color.info }}>Персональные данные</p>
            </div>
            <div className="pagesText" onClick={() => UserOrder()}>
                <i class="fa-solid fa-sort" style={{ color: color.order }}></i>
                <p style={{ color: color.order }}>Мои заказы</p>
            </div>
            <div className="pagesText" onClick={() => UserMess()}>
                <i class="fa-regular fa-bell" style={{ color: color.messange }}></i>
                <p style={{ color: color.messange }}>Уведомления</p>
            </div>
        </div>
    )
}
