import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function HttpCat(): JSX.Element {
  const navigate = useNavigate();
  const [searchBarText, setSearchBarText] = useState('');
  const [statusCode, setStatusCode] = useState('100');

  useEffect(() => {
    const loggedIn = localStorage.getItem('se_rememberme');
    if (loggedIn !== 'true') navigate('/');
  }, []);

  return (
    <>
      <Header />
      <div>HttpCat</div>
      <form>
        <input
          type="text"
          placeholder="Type a HTTP status code e.g. 400"
          onChange={({ target: { value } }) => { setSearchBarText(value); }}
        />
        <button onClick={(e) => { e.preventDefault(); setStatusCode(searchBarText); }}>
          Search
        </button>
      </form>
      <img src={`https://http.cat/${statusCode}.jpg`} alt={`${statusCode} cat`} />
    </>
  );
}

export default HttpCat;
