import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserCard, { IUser } from '../components/UserCard';

function Users(): JSX.Element {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [seed, setSeed] = useState('');
  const [currPage, setCurrPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('Loading...');

  const generateRandomSeed = (): void => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < 6; i += 1) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setSeed(randomString);
  };

  const getRandomUsers = async (page: number, resultsPerPg = 3): Promise<void> => {
    // Random User API https://randomuser.me/documentation
    const url = `https://randomuser.me/api/?page=${page}&results=${resultsPerPg}&seed=${seed}`;
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
      void getRandomUsers(currPage);
    }
  };

  const goNextPage = (): void => {
    const lastPage = 20;
    if (currPage !== lastPage) {
      setCurrPage(currPage + 1);
      void getRandomUsers(currPage);
    }
  };

  const handleSearch = async (searchedTerm: string): Promise<void> => {
    setMessage('User not found');
    const results = 50;
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
    <>
      <Header />
      <h2>Random Users</h2>
      <form>
        <input
          type="text"
          placeholder="Search name, username or email"
          onChange={({ target: { value } }) => { setSearchTerm(value); }}
        />
        <button onClick={(e) => { e.preventDefault(); void handleSearch(searchTerm); }}>
          Search
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
          <div>
            <span onClick={goBackPage}>back</span>
            <span>page {currPage}</span>
            <span onClick={goNextPage}>next</span>
          </div>
        </div>
        )}
    </>
  );
}

export default Users;
