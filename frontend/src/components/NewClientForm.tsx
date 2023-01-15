import React from 'react';
import { IClient } from '../pages/ClientsList';
import { createClient } from '../services/dataBaseConnections';

interface INewClientForm {
  newClientFormEnabled: boolean
  setNewClientFormEnabled: Function
  getClients: Function
}

function NewClientForm({
  newClientFormEnabled, setNewClientFormEnabled, getClients,
}: INewClientForm): JSX.Element {
  const createNewClient = async (): Promise<void> => {
    const newClientForm = document.querySelector('.newClient_true') as HTMLFormElement;
    const formData = new FormData(newClientForm);
    const client = {
      name: formData.get('name'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      address: formData.get('address'),
      cpf: formData.get('cpf'),
    };
    await createClient(client as IClient);
    await getClients();
  };

  return (
    <form className={`newClient_${newClientFormEnabled.toString()}`}>
    <label htmlFor='name'>Name:</label>
      <input type='text' id='name' name='name' />
    <label htmlFor='email'>Email:</label>
      <input type='text' id='email' name='email' />
    <label htmlFor='phoneNumber'>Phone:</label>
      <input type='text' id='phoneNumber' name='phoneNumber' />
    <label htmlFor='address'>Address:</label>
      <input type='text' id='address' name='address' />
    <label htmlFor='cpf'>CPF:</label>
      <input type='text' id='cpf' name='cpf' />
    <button onClick={(e) => { e.preventDefault(); void createNewClient(); }}>
      Create client
    </button>
    <button onClick={(e) => { e.preventDefault(); setNewClientFormEnabled(false); }}>
      Go back
    </button>
  </form>
  );
}

export default NewClientForm;
