import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserCard, { IUser } from '../components/UserCard';

import { IoMdSearch, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Users(): JSX.Element {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const seedRef = useRef('');
  const [currPage, setCurrPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('Loading...');

  const generateRandomSeed = (): void => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < 6; i += 1) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    seedRef.current = randomString;
  };

  const getRandomUsers = async (page: number, resultsPerPg = 3): Promise<void> => {
    // Random User API https://randomuser.me/documentation
    const url = `https://randomuser.me/api/?page=${page}&results=${resultsPerPg}&seed=${seedRef.current}`;
    const response = await fetch(url);
    const result = await response.json();
    setUsers(result.results);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('se_rememberme');
    if (loggedIn !== 'true') navigate('/');

    generateRandomSeed();
    void getRandomUsers(currPage);
  }, []);

  const goBackPage = (): void => {
    if (currPage !== 1) {
      setCurrPage(currPage - 1);
      void getRandomUsers(currPage - 1);
    }
  };

  const goNextPage = (): void => {
    const lastPage = 20;
    if (currPage !== lastPage) {
      setCurrPage(currPage + 1);
      void getRandomUsers(currPage + 1);
    }
  };

  const handleSearch = async (searchedTerm: string): Promise<void> => {
    setMessage('User not found');
    const results = 100;
    const url = `https://randomuser.me/api/?results=${results}&seed=${seed}`;
    const response = await fetch(url);
    const result = await response.json();
    const searchResults = result.results.filter((user: IUser) => (
      user.login.username.toLowerCase().includes(searchedTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchedTerm.toLowerCase()) ||
      user.name.first.toLowerCase().includes(searchedTerm.toLowerCase()) ||
      user.name.last.toLowerCase().includes(searchedTerm.toLowerCase())
    ));
    setUsers(searchResults.splice(0, 3));
  };

  return (
    <div className='bg-se_bg h-screen'>
      <Header />
      <div className='flex flex-col items-center'>
        <h2 className='mt-8 mb-4 text-2xl font-semibold text-se_green'>
          Random Users
        </h2>
        <form className='flex gap-4 mb-8'>
          <input
            className='rounded-lg border-se_green border-2 px-4 w-96 max-lg:w-full'
            type='text'
            placeholder='Search name, username or email'
            onChange={({ target: { value } }) => { setSearchTerm(value); }}
          />
          <button
            className='bg-se_green py-1 px-2 w-10 h-10 flex justify-center items-center rounded-lg text-white'
            onClick={(e) => { e.preventDefault(); void handleSearch(searchTerm); }}
          >
            <IoMdSearch size='100%'/>
          </button>
        </form>
        {(users.length === 0)
          ? <h3>{message}</h3>
          : (
          <div>
            <div>
              {users.map((user: IUser) => (
                <UserCard key={user.login.uuid} user={user} />
              ))}
            </div>
            <div className='flex gap-4 justify-center'>
              <span onClick={goBackPage} className='flex gap-2 items-center hover:underline cursor-pointer text-se_green'>
                <IoIosArrowBack />
                back
              </span>
              <span className='font-semibold text-gray-700'>
                page {currPage}
              </span>
              <span onClick={goNextPage} className='flex gap-1 items-center hover:underline cursor-pointer text-se_green'>
                next
                <IoIosArrowForward />
              </span>
            </div>
          </div>
          )}
      </div>
    </div>
  );
}

export default Users;
