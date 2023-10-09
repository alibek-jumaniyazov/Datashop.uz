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
        <img src={logo} alt="" className='AdminLogo' />
        <span className='UserRole'>  Supervisor</span>
      </div>
      <div className="Items">
        <div className="iconTitle">
          <i class="fa-brands fa-slack"></i>
          <p>Dashboard</p>
        </div>
        <i class="fa-solid fa-chevron-right" ></i>
      </div>
      <div className="Listes">

        <div className="Items" onClick={() => navigate('users')}>

          <div className="iconTitle">
            <i class="fa-solid fa-user" ></i>
            <p>Users</p>
          </div>
          <i class="fa-solid fa-chevron-right" ></i>

        </div>

        <div className="Items" onClick={() => navigate('product')}>

          <div className="iconTitle">
            <i class="fa-solid fa-cart-shopping"></i>
            <p>Product</p>
          </div>
          <i class="fa-solid fa-chevron-right" ></i>

        </div>

        <div className="Items" onClick={() => navigate('category')}>

          <div className="iconTitle">
            <i class="fa-solid fa-bars"></i>
            <p>Category</p>
          </div>
          <i class="fa-solid fa-chevron-right" ></i>

        </div>

        <div className="Items" onClick={() => navigate('users')}>

          <div className="iconTitle">
            <i class="fa-solid fa-user" ></i>
            <p>Users</p>
          </div>
          <i class="fa-solid fa-chevron-right" ></i>

        </div>

        <div className="Items" onClick={() => navigate('users')}>

          <div className="iconTitle">
            <i class="fa-solid fa-user" ></i>
            <p>Users</p>
          </div>
          <i class="fa-solid fa-chevron-right" ></i>

        </div>

        <div className="Items" onClick={() => navigate('users')}>

          <div className="iconTitle">
            <i class="fa-solid fa-user" ></i>
            <p>Users</p>
          </div>
          <i class="fa-solid fa-chevron-right" ></i>

        </div>

      </div>
    </div>
  );
}
