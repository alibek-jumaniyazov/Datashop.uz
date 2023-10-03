import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { Badge, Flex, Avatar, Box, Text } from '@chakra-ui/react'
import logo from '../../images/icons/logo.svg'

export default function DashboardPages() {
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

        <div className="Items">
          <Link to='users'>
            <div className="iconTitle">
              <i class="fa-solid fa-user" ></i>
              <p>Users</p>
            </div>
            <i class="fa-solid fa-chevron-right" ></i>
          </Link>
        </div>

        <div className="Items">
          <Link to='product'>
            <div className="iconTitle">
              <i class="fa-solid fa-cart-shopping"></i>
              <p>Product</p>
            </div>
            <i class="fa-solid fa-chevron-right" ></i>
          </Link>
        </div>

        <div className="Items">
          <Link to='category'>
            <div className="iconTitle">
              <i class="fa-solid fa-bars"></i>
              <p>Category</p>
            </div>
            <i class="fa-solid fa-chevron-right" ></i>
          </Link>
        </div>

        <div className="Items">
          <Link to='users'>
            <div className="iconTitle">
              <i class="fa-solid fa-user" ></i>
              <p>Users</p>
            </div>
            <i class="fa-solid fa-chevron-right" ></i>
          </Link>
        </div>

        <div className="Items">
          <Link to='users'>
            <div className="iconTitle">
              <i class="fa-solid fa-user" ></i>
              <p>Users</p>
            </div>
            <i class="fa-solid fa-chevron-right" ></i>
          </Link>
        </div>

        <div className="Items">
          <Link to='users'>
            <div className="iconTitle">
              <i class="fa-solid fa-user" ></i>
              <p>Users</p>
            </div>
            <i class="fa-solid fa-chevron-right" ></i>
          </Link>
        </div>

      </div>
    </div>
  );
}
