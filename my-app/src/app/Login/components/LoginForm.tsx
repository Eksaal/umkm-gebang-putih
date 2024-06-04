'use client';

import React, { useState } from 'react';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginForm = () => {

  const [action, setAction] = useState('');

  const RegisterLink = () => {
    setAction(' active');
  };

  const LoginLink = () => {
    setAction('');
  };


  return (
    <div className={`wrapper${action}`}>
      <div className='form-box login'>
        <form action="">
          <h1>
            <span style={{ color: '#4DD553' }}>Login UMKM </span>GEBANG PUTIH
          </h1>
          <div className='input-box'>
            <input type="text" placeholder='Username' required />
            <FaUserAlt className='icon' />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
          </div>

          <div className='Remember'>
            <label><input type="checkbox" />Remember me</label>
            <a href="/">Lupa Password?</a>
          </div>

          <button type='submit'>Login</button>
          <div className='Register-link'>
            <p>Belum memiliki akun?
              <a href="#" onClick={RegisterLink}>Klik Disini</a>
            </p>
          </div>
        </form>
      </div>

      <div className='form-box Registrasi'>
        <form action="">
          <h1>
            REGISTRATION
          </h1>
          <div className='input-box'>
            <input type="text" placeholder='Username' className='text-black' required />
            <FaUserAlt className='icon' />
          </div>
          <div className='input-box'>
            <input type="text" placeholder='Email' className='text-black' required />
            <MdEmail className='icon' />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' className='text-black' required />
            <FaLock className='icon' />
          </div>
          
          <button className='button-regis' type='submit'>Registrasi</button>

          <div className='Register-link'>
            <p>Sudah memiliki akun?
              <a href="#" onClick={LoginLink}>Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>

    
  );
};

export default LoginForm;
