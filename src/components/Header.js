import React from 'react';

import Logo from '../assets/logo.png'

const Header = () => {
  return <header className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#' >
          <img src={Logo} alt='' className='h-12' />
        </a>
        <a href="mailto:muhammedozcan786@gmail.com">
          <button className='btn btn-sm'>Work with me</button>
        </a>
      </div>
    </div>
  </header>;
};

export default Header;
