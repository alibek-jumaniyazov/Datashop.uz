import React, { useState } from 'react'
import KabinetPages from '../Companents/kabinet/KabinetPages'
import KabinetInfo from '../Companents/kabinet/KabinetInfo'
import KabinetOrder from '../Companents/kabinet/KabinetOrder'
import KabinetMessange from '../Companents/kabinet/KabinetMessange'

export default function Kabinet() {

  const [kabinetCom , setKabinetCom] = useState({
    info:'KabinetInfo',
    order:'none',
    messange:'none',
  })

  return (
    <div className='Kabinet'>
        <KabinetPages setKabinetCom={setKabinetCom}/>
        <KabinetInfo kabinetCom={kabinetCom}/>
        <KabinetOrder kabinetCom={kabinetCom}/>
        <KabinetMessange kabinetCom={kabinetCom}/>
    </div>
  )
}
