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
  const [searchBarText, setSearchBarText] = useState('');
  const [newClientFormEnabled, setNewClientFormEnabled] = useState(false);

  const getClients = async (): Promise<void> => {
    const response = await fetch('http://localhost:3001/clients');
    const result = await response.json();
    setClientsList(result);
  };

  const createNewClient = async (): Promise<void> => {

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

      <form className={`newClient_${newClientFormEnabled.toString()}`}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' />
        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' name='email' />
        <label htmlFor='phoneNumber'>Phone:</label>
        <input type='text' id='phoneNumber' name='phoneNumber' />
        <label htmlFor='cpf'>CPF:</label>
        <input type='text' id='cpf' name='cpf' />
        <button onClick={createNewClient}>Create client</button>
      </form>

      <form>
        <input
          type='text'
          placeholder='Search for a name'
          onChange={({ target: { value } }) => { setSearchBarText(value); }}
        />
        <button onClick={(e) => { e.preventDefault(); }}>
          Search
        </button>
        <button onClick={(e) => { e.preventDefault(); setNewClientFormEnabled(true); }}>
          Add new client +
        </button>
      </form>
      <div>
        {clientsList.map((client: IClient) => (
          <ClientCard key={client._id} clientData={client} />
        ))}
      </div>
    </>
  );
}

export default ClientsList;
