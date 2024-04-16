import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';
import SocialMediaLinks from '../components/SoicalMediaLinks';
import backgroundImage from '../assets/images/myimages02.jpeg';
import '../assets/css/RegisterPage.css'; 

function Register({ setPage }) {
    const [username, setUsername] = useState('');

    function onRegister(name) {
        setUsername(name);
    }

    return (
        <>
            <Header setPage={setPage} />
            <div className='white-space-container'>
                {username && <p className='hello-message'>Hello {username}!</p>}
                <div className='register-modal'>
                    <h1>Register</h1>
                    <RegisterForm onRegister={onRegister} />
                </div>
                <div className='background-image' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            </div>
            <div className='grey-space-container'>
                <SocialMediaLinks />
            </div>
            <Footer />
        </>
    );
}

export default Register;
