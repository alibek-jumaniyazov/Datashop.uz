import axios from 'axios';
import React from 'react'

export default function Delete() {

    const userInfo = JSON.parse(localStorage.getItem('user'))

    const url = `http://localhost:9060/api/v1/user/${userInfo.user.id}`

    const userDelete = async () => {
        try{
            await axios.delete(url,{
                headers :{
                    Authorization :  userInfo.token
                }
            })

            localStorage.removeItem('user');
            window.location.href = '/';
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <button onClick={() => userDelete()} className='Delete'>
        Delete
    </button>  
  )
}
