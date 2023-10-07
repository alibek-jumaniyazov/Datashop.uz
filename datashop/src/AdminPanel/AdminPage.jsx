import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'
import DashboardPages from '../Companents/admin/DashboardPages'
import { Outlet, Route, Routes } from 'react-router-dom'
import Users from './Users'

export default function AdminPage() {

    return (
        <div className='Admin'>
            <div className="DashboardDiv">
                <DashboardPages />
            </div>
            <div className="AdminPages">
                <Routes>
                    <Route path='users' element={<Users />} />
                </Routes>
            </div>

        </div>
    )
}
