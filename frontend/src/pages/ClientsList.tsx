import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientCard from '../components/ClientCard';
import EditClientForm from '../components/EditClientForm';
import Header from '../components/Header';
import NewClientForm from '../components/NewClientForm';

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
  const [searchFor, setSearchFor] = useState('');
  const [newClientFormEnabled, setNewClientFormEnabled] = useState(false);
  const [editClientFormEnabled, setEditClientFormEnabled] = useState(false);
  const [clientIdToEdit, setClientIdToEdit] = useState('');

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

      <EditClientForm
        editClientFormEnabled={editClientFormEnabled}
        setEditClientFormEnabled={setEditClientFormEnabled}
        getClients={getClients}
        clientsList={clientsList}
        clientIdToEdit={clientIdToEdit}
      />

      <NewClientForm
        newClientFormEnabled={newClientFormEnabled}
        setNewClientFormEnabled={setNewClientFormEnabled}
        getClients={getClients}
      />
      <form>
        <input
          type='text'
          placeholder='Search for name, email, phone, address or cpf'
          onChange={({ target: { value } }) => { setSearchBarText(value); }}
        />
        <button onClick={(e) => { e.preventDefault(); setSearchFor(searchBarText); }}>
          Search
        </button>
        <button onClick={(e) => { e.preventDefault(); setSearchFor(''); }}>
          Show all clients
        </button>
        <button onClick={(e) => { e.preventDefault(); setNewClientFormEnabled(true); }}>
          Add new client +
        </button>
      </form>
      <div>
        {
          (
            clientsList
              .filter((client: IClient) => (
                client.name.toLowerCase().includes(searchFor.toLowerCase()) ||
                client.email.toLowerCase().includes(searchFor.toLowerCase()) ||
                client.phoneNumber.toLowerCase().includes(searchFor.toLowerCase()) ||
                client.address.toLowerCase().includes(searchFor.toLowerCase()) ||
                client.cpf.toLowerCase().includes(searchFor.toLowerCase())
              ))
              .map((client: IClient) => (
                  <ClientCard
                    key={client._id}
                    clientData={client}
                    setEditClientFormEnabled={setEditClientFormEnabled}
                    setClientIdToEdit={setClientIdToEdit}
                  />
              ))
          )
        }
      </div>
    </>
  );
}

export default ClientsList;
