import React from 'react';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  console.log('teste header');
  return (
    <header>
      <div>
        <Link to='/users'>Users</Link>
        <Link to='/cats'>HTTP Cats</Link>
        <Link to='/dogs'>Random Dog</Link>
        <Link to='/clients'>Clients List</Link>
      </div>
    </header>
  );
}

export default Header;
