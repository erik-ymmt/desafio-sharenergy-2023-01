import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function Users(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('se_rememberme');
    if (loggedIn !== 'true') navigate('/');
  }, []);

  return (
    <>
      <Header />
      <div>Users</div>
    </>
  );
}

export default Users;
