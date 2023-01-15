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
      <div>
        <Link to='/users'>Random Users</Link>
        <Link to='/cats'>HTTP Cats</Link>
        <Link to='/dogs'>Random Dog</Link>
        <Link to='/clients'>Clients List</Link>
        <span onClick={logout}>Logout</span>
      </div>
    </header>
  );
}

export default Header;
