import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientCard from '../components/ClientCard';
import Header from '../components/Header';

export interface IClient {
  _id: string
  name: string
  email: string
  phoneNumber: string
  address: string
  cpf: string
}

function ClientsList(): JSX.Element {
  const navigate = useNavigate();
  const [clientsList, setClientsList] = useState([]);

  const getClients = async (): Promise<void> => {
    const response = await fetch('http://localhost:3001/clients');
    const result = await response.json();
    setClientsList(result);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('se_rememberme');
    if (loggedIn !== 'true') navigate('/');

    void getClients();
  }, []);

  return (
    <>
      <Header />
      <h2>ClientsList</h2>
      <div>
        {clientsList.map((client: IClient) => (
          <ClientCard key={client._id} clientData={client} />
        ))}
      </div>
    </>
  );
}

export default ClientsList;
