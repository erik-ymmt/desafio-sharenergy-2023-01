import React, { useEffect } from 'react';
import { IClient } from '../pages/ClientsList';
import { updateClient } from '../services/dataBaseConnections';

interface IEditClientForm {
  setEditClientFormEnabled: Function
  getClients: Function
  clientsList: IClient[]
  clientIdToEdit: string
}

function EditClientForm({
  setEditClientFormEnabled, getClients, clientsList, clientIdToEdit,
}: IEditClientForm): JSX.Element {
  useEffect(() => {

  });

  const clientToEdit = clientsList.find((client) => client._id === clientIdToEdit);

  const name = document.getElementById('name') as HTMLInputElement;
  const email = document.getElementById('email') as HTMLInputElement;
  const phoneNumber = document.getElementById('phoneNumber') as HTMLInputElement;
  const address = document.getElementById('address') as HTMLInputElement;
  const cpf = document.getElementById('cpf') as HTMLInputElement;

  if (clientToEdit != null) {
    name.value = clientToEdit.name;
    email.value = clientToEdit.email;
    phoneNumber.value = clientToEdit.phoneNumber;
    address.value = clientToEdit.address;
    cpf.value = clientToEdit.cpf;
  }

  const editClient = async (): Promise<void> => {
    const clientForm = document.querySelector('.editClient_true') as HTMLFormElement;
    const formData = new FormData(clientForm);
    const client = {
      _id: clientIdToEdit,
      name: formData.get('name'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      address: formData.get('address'),
      cpf: formData.get('cpf'),
    };
    await updateClient(client as IClient);
    await getClients();
  };

  return (
    <div className='flex justify-center bg-se_bg w-1/3 rounded-lg'>
      <form className='editClient_true flex flex-col p-8 gap-4 w-10/12'>
        <label htmlFor='name'> Name:
          <input type='text' id='name' name='name' className='border-se_green border-2 w-full rounded-md py-1 px-2' />
        </label>
        <label htmlFor='email'> Email:
          <input type='text' id='email' name='email' className='border-se_green border-2 w-full rounded-md py-1 px-2' />
        </label>
        <label htmlFor='phoneNumber'> Phone:
          <input type='text' id='phoneNumber' name='phoneNumber' className='border-se_green border-2 w-full rounded-md py-1 px-2' />
        </label>
        <label htmlFor='address'> Address:
          <input type='text' id='address' name='address' className='border-se_green border-2 w-full rounded-md py-1 px-2' />
        </label>
        <label htmlFor='cpf'> CPF:
          <input type='text' id='cpf' name='cpf' className='border-se_green border-2 w-full rounded-md py-1 px-2' />
        </label>
        <div className='flex justify-between'>
          <button
            className='bg-gray-500 py-1 px-3 w-auto h-10 flex justify-center items-center rounded-lg text-white hover:bg-gray-700'
            onClick={(e) => { e.preventDefault(); setEditClientFormEnabled(false); }}
          >
            Go back
          </button>
          <button
            className='bg-se_green py-1 px-3 w-auto h-10 flex justify-center items-center rounded-lg text-white hover:bg-se_dark_green'
            onClick={(e) => { e.preventDefault(); void editClient(); setEditClientFormEnabled(false); }}
          >
            Edit client
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditClientForm;
