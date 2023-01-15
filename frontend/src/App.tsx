import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ClientsList from './pages/ClientsList';
import HttpCat from './pages/HttpCat';
import Login from './pages/Login';
import RandomDog from './pages/RandomDog';
import Users from './pages/Users';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/users' element={<Users />} />
        <Route path='/cats' element={<HttpCat />} />
        <Route path='/dogs' element={<RandomDog />} />
        <Route path='/clients' element={<ClientsList />} />
      </Routes>
    </div>
  );
}

export default App;
