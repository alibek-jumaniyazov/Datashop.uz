import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Verify({ verifyClass, setVerify, setRegister, setLogikn }) {
  const [code, setVerifyAdd] = useState('');
  const verificationIdFromLocalStorage = JSON.parse(localStorage.getItem('verifyId')) || {};

  const handleVerifyChange = (event) => {
    setVerifyAdd(event.target.value);
  };


  const RequestVerify = async () => {
    const body = {
      code,
      verificationId: verificationIdFromLocalStorage.verificationId,
    };
    try {
      const response = await axios.post('http://localhost:9060/api/v1/auth/verify', body);
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log(response.data);
      setVerify('none');
      setRegister('none');
      setLogikn('none');
    } catch (error) {
      alert('Xatolik: ' + error);
    }
  };

  const closeVerify = () => {
    setVerify('none');
  };

  return (
    <div className={verifyClass}>
      <div className='Register'>
        <div className="verify">
          <h1>Kod yuborildi</h1>
          <p>{verificationIdFromLocalStorage ? verificationIdFromLocalStorage.email : 'Gmail yoq'} shu email pochtaga tasdiqlash kodi yuborildi</p>
          <div className="verifyINput">
            <i className="fa-regular fa-envelope" ></i>
            <input type='text' value={code} onChange={handleVerifyChange} />
          </div>

          <button onClick={RequestVerify}>Send</button>
        </div>
        <i className="fa-solid fa-x"  onClick={closeVerify}></i>
      </div>
    </div>
  );
}
