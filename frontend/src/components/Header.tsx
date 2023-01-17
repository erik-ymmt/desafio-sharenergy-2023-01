import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header(): JSX.Element {
  const navigate = useNavigate();
  const logout = (): void => {
    localStorage.removeItem('se_token');
    localStorage.removeItem('se_rememberme');
    navigate('/');
  };

  return (
    <header>
      <div className='h-24 bg-white shadow-md flex items-center justify-between px-16'>
        <a href="https://www.sharenergy.com.br/" target="_blank" rel="noreferrer">
          <img src="src/assets/se_logo_color.png" alt="sharenergy logo" className='h-8'/>
        </a>
        <div className='flex gap-6 justify-evenly font-semibold text-lg text-gray-500'>
          <Link to='/users' className='hover:underline'>Random Users</Link>
          <Link to='/cats' className='hover:underline'>HTTP Cats</Link>
          <Link to='/dogs' className='hover:underline'>Random Dog</Link>
          <Link to='/clients' className='hover:underline'>Clients List</Link>
          <span onClick={logout} className='hover:underline hover:cursor-pointer'>Logout</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
