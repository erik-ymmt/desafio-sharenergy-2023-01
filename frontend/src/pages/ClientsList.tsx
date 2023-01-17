import React, { useEffect, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import ClientCard from '../components/ClientCard';
import EditClientForm from '../components/EditClientForm';
import Header from '../components/Header';
import NewClientForm from '../components/NewClientForm';
import { deleteClient } from '../services/dataBaseConnections';

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
  const [deleteClientEnabled, setDeleteClientEnabled] = useState(false);
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

  const deleteClientPopUp = async (): Promise<void> => {
    await deleteClient(clientIdToEdit);
    void getClients();
    setDeleteClientEnabled(false);
  };

  return (
    <div className='bg-se_bg h-screen'>
      <Header />
      <div className='flex flex-col items-center'>
        <h2 className='mt-8 mb-4 text-2xl font-semibold text-se_green'>
          ClientsList
        </h2>
        <div className={`${editClientFormEnabled ? '' : 'hidden'}`}>
          <EditClientForm
            editClientFormEnabled={editClientFormEnabled}
            setEditClientFormEnabled={setEditClientFormEnabled}
            getClients={getClients}
            clientsList={clientsList}
            clientIdToEdit={clientIdToEdit}
          />
        </div>

        <div className={`${newClientFormEnabled ? '' : 'hidden'} absolute top-0 h-screen w-screen bg-gray-900/50 flex justify-center items-center`}>
        <NewClientForm
          setNewClientFormEnabled={setNewClientFormEnabled}
          getClients={getClients}
          />
        </div>

        <div className={`${deleteClientEnabled ? '' : 'hidden'}`}>
          <h3>Confirm that you want to delete</h3>
          <button onClick={deleteClientPopUp}>Confirm</button>
          <button onClick={() => { setDeleteClientEnabled(false); }}>Go back</button>
        </div>

        <form className='flex gap-2 mb-8'>
          <input
            className='rounded-lg border-se_green border-2 px-4 w-96'
            type='text'
            placeholder='Search for name, email, phone, address or cpf'
            onChange={({ target: { value } }) => { setSearchBarText(value); }}
          />
          <button
          className='bg-se_green py-1 px-2 w-10 h-10 flex justify-center items-center rounded-lg text-white hover:bg-se_dark_green'
            onClick={(e) => { e.preventDefault(); setSearchFor(searchBarText); }}
          >
            <IoMdSearch size='100%'/>
          </button>
          <button
            className='bg-se_green py-1 px-2 w-auto h-10 flex justify-center items-center rounded-lg text-white hover:bg-se_dark_green'
            onClick={(e) => { e.preventDefault(); setSearchFor(''); }}
          >
            Show all clients
          </button>
          <button
            className='bg-se_green py-1 px-2 w-auto h-10 flex justify-center items-center rounded-lg text-white hover:bg-se_dark_green'
            onClick={(e) => { e.preventDefault(); setNewClientFormEnabled(true); }}
          >
            Add new client +
          </button>
        </form>
        <div className='flex flex-wrap gap-4 mx-6 justify-center w-11/12'>
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
                    setDeleteClientEnabled={setDeleteClientEnabled}
                  />
                ))
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ClientsList;
