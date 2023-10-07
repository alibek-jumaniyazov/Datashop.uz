import { Button } from '@chakra-ui/react'
import React from 'react'

export default function User({item}) {
    return (
        <div className='User'>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.phone}</p>
            <div className="Actions">
                <Button  colorScheme='red' variant='solid'>
                <i class="fa-solid fa-trash" style={{marginRight:'5px'}}></i>
                    Delete
                </Button>
                <Button colorScheme='gray' variant='outline'>
                <i class="fa-solid fa-pen" style={{marginRight:'5px'}}></i>
                    Rename
                </Button>
            </div>
        </div>
    )
}
