import React from 'react';

import Logo from '../assets/logo.png'

const Header = () => {
  return <header className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='/' aria-label='learn more' title="learn more">
          <img src={Logo} alt='Logo' className='h-12 w-[195px]' />
        </a>
        <a href="mailto:muhammedozcan786@gmail.com" aria-label='learn more' title="learn more">
          <button className='btn btn-sm'>Work with me</button>
        </a>
      </div>
    </div>
  </header>;
};

export default Header;
