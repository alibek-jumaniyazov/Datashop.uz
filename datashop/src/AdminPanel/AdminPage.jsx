import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'

export default function AdminPage() {
   
    return (
        <div className='Admin' style={{display:"flex", justifyContent: "center" , alignItems: "center"}}>
            <h1 >You Admin Page</h1>
        </div>
    )
}
