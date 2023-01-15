import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function ClientsList(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('se_rememberme');
    if (loggedIn !== 'true') navigate('/');
  }, []);
  return (
    <>
      <Header />
      <div>ClientsList</div>
    </>
  );
}

export default ClientsList;
