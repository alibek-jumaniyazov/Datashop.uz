import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function User({ item }) {
    const handleDelete = () => {
        console.log('O\'chirish tugmasi bosildi');
    };

    return (
        <div className='User'>
            <p>ID: {item.id}</p>
            <p>{item.name}</p>
            <p>{item.phone}</p>
            <div className="Actions">
                <Button colorScheme='red' variant='solid' onClick={handleDelete}>
                    <i className="fa-solid fa-trash" style={{ marginRight: '5px' }}></i>
                    O'chirish
                </Button>
                <Link to={`user/${item.id}`}>
                    <Button colorScheme='gray' variant='outline'>
                        <i className="fa-solid fa-pen" style={{ marginRight: '5px' }}></i>
                        Tahrirlash
                    </Button>
                </Link>
            </div>
        </div>
    );
}
