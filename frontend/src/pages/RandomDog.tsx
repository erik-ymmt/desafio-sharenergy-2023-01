import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import { BiRefresh } from 'react-icons/bi';

function RandomDog(): JSX.Element {
  const navigate = useNavigate();
  const [dogImg, setDogImg] = useState('');

  const getRandomDog = async (): Promise<void> => {
    const response = await fetch('https://random.dog/woof?include=jpeg');
    const result = await response.text();
    setDogImg(result);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('se_token');
    if (loggedIn === null) navigate('/');
    void getRandomDog();
  }, []);

  return (
    <div className='bg-se_bg h-screen'>
      <Header />
      <div className='flex flex-col items-center'>
        <h2 className='mt-8 mb-4 text-2xl font-semibold text-se_green'>
          RandomDog
        </h2>
        <button
          className='bg-se_green py-1 px-2 w-52 h-10 flex justify-center items-center rounded-lg text-white gap-2 text-lg mb-8 hover:bg-se_dark_green'
          onClick={getRandomDog}
          >
          New Dog
          <BiRefresh />
        </button>
        <div className='min-h-small10 min-w-small bg-dog-loader bg-contain bg-no-repeat mx-8 flex border-4 border-se_green'>
          <img
            className='max-h-96 min-w-small'
            src={`https://random.dog/${dogImg}`}
            alt='random dog'
          />
        </div>
      </div>
    </div>
  );
}

export default RandomDog;
