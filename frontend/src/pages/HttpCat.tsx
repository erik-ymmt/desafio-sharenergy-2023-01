import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import { IoMdSearch } from 'react-icons/io';

function HttpCat(): JSX.Element {
  const navigate = useNavigate();
  const [searchBarText, setSearchBarText] = useState('');
  const [statusCode, setStatusCode] = useState('100');

  useEffect(() => {
    const loggedIn = localStorage.getItem('se_rememberme');
    if (loggedIn !== 'true') navigate('/');
  }, []);

  return (
    <div className='bg-se_bg h-screen'>
      <Header />
      <div className='flex flex-col items-center'>
        <h2 className='mt-8 mb-4 text-2xl font-semibold text-se_green'>
          HttpCat
        </h2>
        <form className='flex gap-4 mb-8'>
          <input
            className='rounded-lg border-se_green border-2 px-4 w-96'
            type="text"
            placeholder="Type a HTTP status code e.g. 400"
            onChange={({ target: { value } }) => { setSearchBarText(value); }}
          />
          <button
            className='bg-se_green py-1 px-2 w-10 h-10 flex justify-center items-center rounded-lg text-white hover:bg-se_dark_green'
            onClick={(e) => { e.preventDefault(); setStatusCode(searchBarText); }}
          >
            <IoMdSearch size='100%'/>
          </button>
        </form>
        <img
          className='h-96 border-4 border-se_green'
          src={`https://http.cat/${statusCode}.jpg`}
          alt={`${statusCode} cat`}
        />
      </div>
    </div>
  );
}

export default HttpCat;
