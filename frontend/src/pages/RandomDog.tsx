import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function RandomDog(): JSX.Element {
  const navigate = useNavigate();
  const [dogImg, setDogImg] = useState('');

  const getRandomDog = async (): Promise<void> => {
    const response = await fetch('https://random.dog/woof?include=jpeg');
    const result = await response.text();
    setDogImg(result);
    console.log(result);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('se_rememberme');
    if (loggedIn !== 'true') navigate('/');
    void getRandomDog();
  }, []);

  return (
    <>
      <Header />
      <div>RandomDog</div>
      <button onClick={getRandomDog}>New Dog</button>
      <img src={`https://random.dog/${dogImg}`} alt="" />
    </>
  );
}

export default RandomDog;
