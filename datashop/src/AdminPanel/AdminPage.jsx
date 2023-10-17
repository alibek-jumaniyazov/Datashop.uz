import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import DashboardPages from '../Companents/admin/DashboardPages';
import Users from './Users';
import UserPage from '../Companents/admin/Users/UserPage';
import Error from '../Pages/Error';

export default function AdminPage() {
    return (
        <div className='Admin'>
            <div className="DashboardDiv">
                <DashboardPages />
            </div>
            <div className="AdminPages">
                <Routes>
                    <Route path='/users' element={<Users />} />
                    <Route path='users/user/:id' element={<UserPage />} />
                    <Route path='*' element={<Error />} />
                    <Route path='/' element={<Users />} />
                </Routes>
            </div>
            
        </div>
    );
}
