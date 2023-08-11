// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Verify({ verifyClass, setVerify, setRegister, setLogikn }) {
//   const [code, setVerifyAdd] = useState('');
//   const [verificationId, setVerificationId] = useState(null);

//   useEffect(() => {
//     const verificationIdFromLocalStorage = JSON.parse(localStorage.getItem('verifyId'));
//     setVerificationId(verificationIdFromLocalStorage);
//   }, []);

//   const handleVerifyChange = (event) => {
//     setVerifyAdd(event.target.value);
//   };

//   const body = {
//     code,
//     verificationId,
//   };

//   console.log(body);

//   const RequestVerify = async () => {
//     try {
//       const response = await axios.post('http://localhost:9060/api/v1/auth/verify', body);
//       localStorage.setItem('user', JSON.stringify(response.data));
//       console.log(response.data);
//       setVerify('none');
//       setRegister('none');
//       setLogikn('none');
//     } catch (error) {
//       alert('xatolik', error);
//     }
//   };

//   function closeVerify(){
//     setVerify('none')
//  }


//   return (
//     <div className={verifyClass}>
//       <div className='Register'>
//         <div className="verify">
//           <h1>Kod yuborildi</h1>
//           <p>email@gmail.com shu email pochtaga tasdiqlash kodi yuborildi</p>
//           <div className="verifyINput">
//             <i className="fa-regular fa-envelope" style={{ color: "#85878a" }}></i>
//             <input type='text' value={code} onChange={handleVerifyChange} />
//           </div>

//           <button onClick={() => RequestVerify()}>Send</button>
//         </div>
//         <i className="fa-solid fa-x" style={{ color: "#0000000", fontSize: "30ppx" }} onClick={() => closeVerify()}></i>
//       </div>

//     </div>
//   );
// }
