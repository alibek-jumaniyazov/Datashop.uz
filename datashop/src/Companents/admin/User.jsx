import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function User({ item }) {
    const handleDelete = () => {
        // O'sishni amalga oshiradigan kodni qo'shing
        console.log('O\'chirish tugmasi bosildi');
        // O'sishni bajarish uchun kerakli logikani yozing
    };

    const navigate = useNavigate()

    return (
        <div className='User'>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.phone}</p>
            <div className="Actions">
                <Button colorScheme='red' variant='solid' onClick={handleDelete}>
                    <i className="fa-solid fa-trash" style={{ marginRight: '5px' }}></i>
                    O'chirish
                </Button>
                <Link to={`user/${item.id}`}>
                    <Button  colorScheme='gray' variant='outline'>
                        <i className="fa-solid fa-pen" style={{ marginRight: '5px' }}></i>
                        Tahrirlash
                    </Button>
                </Link>

            </div>
        </div>
    );
}
