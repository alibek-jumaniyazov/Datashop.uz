import { useState } from 'react'
import axios from 'axios';

export default function Register({ registerClass, setRegister, setLogikn, setVerify }) {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    function closeRegister() {
        setRegister('none')
    }

    function openLogin() {
        setLogikn('blockPage')
        setRegister('none')
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };


    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleAddresChange = (event) => {
        setAddress(event.target.value);
    };


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !surname || !phone || !email || !address || !password) {
            alert('Iltimos, hamma maydonlarni to\'ldiring');
            return;
        }

        if (password.length < 6) {
            alert('Parol kamida 6 belgidan iborat bo\'lishi kerak');
            return;
        }

        const body = {
            name,
            surname,
            phone,
            email,
            address,
            password
        }

        // Ro'yhatdan o'tish logikasi
        console.log('Ro\'yhatdan o\'tish ma\'lumotlari:', body);


        // Bu erda API ga ma'lumotlarni yuborish yoki serverga POST qilishni qo'shishingiz mumkin
        // axios.post("http://localhost:9060/api/v1/auth/register", body)
        //     .then(response => { console.log(response.data); })
        //     .catch(error => {
        //         alert('Ro\'yhatdan o\'tishda xatolik yuz berdi', error);
        //     });

        const RequestRegister = async () => {
            try {
                const response = await axios.post("http://faveo.uz:9060/api/v1/auth/register", body)
                localStorage.setItem('verifyId', JSON.stringify(response.data))
                console.log(response.data);
                setVerify('blockPage')
                setRegister('none')
                setLogikn('none')
            }
            catch (error) {
                alert('Emaildan oldin foydalanilgan', error);
            }
        }

        RequestRegister()

    };





    function openVerify() {

    }

    return (
        <div className={registerClass}>
            <div className='Register'>
                <h1>Вход / Регистрация</h1>
                <form onSubmit={handleSubmit} className='inputsFrom'>
                    <div className='inputFrom'>
                        <label htmlFor="name" >Ism</label>
                        <div className="registerInput">
                            <i className="fa-regular fa-user" style={{ color: "#85878a" }}></i>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                placeholder='Name'
                            />
                        </div>

                    </div>

                    <div className='inputFrom'>
                        <label htmlFor="surname" >Familya</label>
                        <div className="registerInput">
                            <i className="fa-regular fa-user" style={{ color: "#85878a" }}></i>
                            <input
                                type="text"
                                id="surname"
                                value={surname}
                                onChange={handleSurnameChange}
                                placeholder='Surname'
                            />
                        </div>

                    </div>

                    <div className='inputFrom'>
                        <label htmlFor="phone" >Telefon</label>
                        <div className="registerInput">
                            <i className="fa-regular fa-user" style={{ color: "#85878a" }}></i>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder='telefon'
                            />
                        </div>

                    </div>


                    <div className='inputFrom'>
                        <label htmlFor="email">Email</label>
                        <div className="registerInput">
                            <i className="fa-regular fa-envelope" style={{ color: "#85878a" }}></i>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder='example@gmail.com'
                            />
                        </div>
                    </div>

                    <div className='inputFrom'>
                        <label htmlFor="address">Addres</label>
                        <div className="registerInput">
                            <i className="fa-regular fa-envelope" style={{ color: "#85878a" }}></i>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={handleAddresChange}
                                placeholder='Yashash Joy'
                            />
                        </div>
                    </div>



                    <div className='inputFrom'>
                        <label htmlFor="password">Parol</label>
                        <div className="registerInput">
                            <i className="fa-solid fa-lock" style={{ color: "#85878a" }}></i>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder='*********'
                            />
                        </div>
                    </div>
                    <hr />
                    <p className='loginAddPageText'>У меня есть аккаунт <a href="#" onClick={() => openLogin()}>Login</a> </p>
                    <button type="submit" onClick={() => openVerify()}>Ro'yhatdan o'tish</button>
                </form>
            <i className="fa-solid fa-x" style={{ color: "#0000000", fontSize: "30ppx" }} onClick={() => closeRegister()}></i>

            </div>
        </div>
    )
}
