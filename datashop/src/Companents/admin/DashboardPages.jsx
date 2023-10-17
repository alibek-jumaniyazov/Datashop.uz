import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Badge, Flex, Avatar, Box, Text } from '@chakra-ui/react'
import logo from '../../images/icons/logo.svg'

export default function DashboardPages() {

  const navigate = useNavigate()



  return (
    <div className='DashboardPages'>
      <div className="LogoRole">
     <Link to={'/'} >  <img src={logo} alt="" className='AdminLogo' /></Link>
        <span className='UserRole'>  Supervisor</span>
      </div>
      <div className="Items">
        <div className="iconTitle">
          <i className="fa-brands fa-slack"></i>
          <p>Dashboard</p>
        </div>
        <i className="fa-solid fa-chevron-right" ></i>
      </div>
      <div className="Listes">

        <div className="Items" onClick={() => navigate('users')}>

          <div className="iconTitle">
            <i className="fa-solid fa-user " style={{color:'white'}} ></i>
            <p>Users</p>
          </div>
          <i className="fa-solid fa-chevron-right" ></i>

        </div>

        <div className="Items" onClick={() => navigate('product')}>

          <div className="iconTitle">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Product</p>
          </div>
          <i className="fa-solid fa-chevron-right" ></i>

        </div>

        <div className="Items" onClick={() => navigate('category')}>

          <div className="iconTitle">
            <i className="fa-solid fa-bars"></i>
            <p>Category</p>
          </div>
          <i className="fa-solid fa-chevron-right" ></i>

        </div>

        <div className="Items" onClick={() => navigate('users')}>

          <div className="iconTitle">
            <i className="fa-solid fa-user" ></i>
            <p>Users</p>
          </div>
          <i className="fa-solid fa-chevron-right" ></i>

        </div>

        <div className="Items" onClick={() => navigate('users/')}>

          <div className="iconTitle">
            <i className="fa-solid fa-user" ></i>
            <p>Users</p>
          </div>
          <i className="fa-solid fa-chevron-right" ></i>

        </div>

        <div className="Items" onClick={() => navigate('users')}>

          <div className="iconTitle">
            <i className="fa-solid fa-user" ></i>
            <p>Users</p>
          </div>
          <i className="fa-solid fa-chevron-right" ></i>

        </div>

      </div>
    </div>
  );
}
