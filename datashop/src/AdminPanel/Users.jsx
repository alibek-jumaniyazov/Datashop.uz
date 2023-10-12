import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonGroup, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import CreateUser from '../Companents/admin/CreateUser'
import User from '../Companents/admin/User'
import { UserContext } from '../Context/UserContext'
import { Outlet } from 'react-router-dom'
import UserPage from '../Companents/admin/Users/UserPage'
export default function Users() {

  const { users } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);





  const performSearch = (term) => {
    const results = term
      ? users.filter((user) =>
        user.name.toLowerCase().includes(term.toLowerCase())
      )
      : users; 
    setSearchResults(results);
  };
  useEffect(() => {
    performSearch(searchTerm);
  }, [searchTerm]);



  return (
    <div className='Users'>
      <div className="usersHeader">
        <p>Users Page</p>
        <CreateUser />
      </div>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <i class="fa-solid fa-magnifying-glass"></i>
        </InputLeftElement>
        <Input
          type='text'
          placeholder='Search User'
          focusBorderColor='red.500'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={() => performSearch(searchTerm)}>Qidiruv</Button>
      </InputGroup>




      <div className="UsersInfo">
        <div className="TypeUsers">
          <p>Id</p>
          <p className='typeNam'>Name</p>
          <p className='typePhon'>Phone</p>
          <p className='typeActi'>Actions</p>
        </div>
        <div className="AllUsers" >
          {searchResults.length > 0 ? (
            searchResults.map((item) => <User item={item} key={item.id} />)
          ) : (
            <p>Hech qanday natija topilmadi.</p>
          )}

        </div>
      </div>
    </div>
  )
}
