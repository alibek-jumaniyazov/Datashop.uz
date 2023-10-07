import React, { useContext } from 'react'
import { Button, ButtonGroup, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import CreateUser from '../Companents/admin/CreateUser'
import User from '../Companents/admin/User'
import { UserContext } from '../Context/UserContext'
export default function Users() {

  const { users } = useContext(UserContext)
  console.log(users);
  return (
    <div className='Users'>
      <div className="usersHeader">
        <p>Users Page</p>
        <CreateUser />
      </div>
      <InputGroup>
        <InputLeftElement pointerEvents='none' >
          <i class="fa-solid fa-magnifying-glass"></i>
        </InputLeftElement>
        <Input type='text' placeholder='Search User' focusBorderColor='red.500' />
      </InputGroup>
      <div className="UsersInfo">
        <div className="TypeUsers">
          <p>Id</p>
          <p className='typeNam'>Name</p>
          <p className='typePhon'>Phone</p>
          <p className='typeActi'>Actions</p>
        </div>
        <div className="AllUsers">
          {
            users.map((item) => (
              <User item={item}/>
            ))
          }
        </div>
      </div>

    </div>
  )
}
