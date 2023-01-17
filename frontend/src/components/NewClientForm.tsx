import React from 'react';
import { IClient } from '../pages/ClientsList';
import { createClient } from '../services/dataBaseConnections';

interface INewClientForm {
  setNewClientFormEnabled: Function
  getClients: Function
}

function NewClientForm({
  setNewClientFormEnabled, getClients,
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
    setNewClientFormEnabled(false);
  };

  return (
    <div className='flex justify-center bg-se_bg w-1/3 rounded-lg'>
      <form className='newClient_true flex flex-col p-8 gap-4 w-10/12'>
        <label htmlFor='name'>
          <p>Name:</p>
          <input type='text' id='name' name='name' className='border-se_green border-2 w-full rounded-md py-1 px-2' />
        </label>
        <label htmlFor='email'>
          <p>Email:</p>
          <input type='text' id='email' name='email' className='border-se_green border-2 w-full rounded-md py-1 px-2' />
        </label>
        <label htmlFor='phoneNumber'>
          <p>Phone:</p>
          <input type='text' id='phoneNumber' name='phoneNumber' className='border-se_green border-2 w-full rounded-md py-1 px-2' />
        </label>
        <label htmlFor='address'>
          <p>Address:</p>
          <input type='text' id='address' name='address' className='border-se_green border-2 w-full rounded-md py-1 px-2' />
        </label>
        <label htmlFor='cpf'>
          <p>CPF:</p>
          <input type='text' id='cpf' name='cpf' className='border-se_green border-2 w-full rounded-md py-1 px-2' />
        </label>
        <div className='flex justify-between'>
          <button
            className='bg-gray-500 py-1 px-3 w-auto h-10 flex justify-center items-center rounded-lg text-white hover:bg-gray-700'
            onClick={(e) => { e.preventDefault(); setNewClientFormEnabled(false); }}
          >
            Go back
          </button>
          <button
          className='bg-se_green py-1 px-3 w-auto h-10 flex justify-center items-center rounded-lg text-white hover:bg-se_dark_green'
            onClick={(e) => { e.preventDefault(); void createNewClient(); }}
          >
            Create client
          </button>
        </div>
      </form>
    </div>

  );
}

export default NewClientForm;
