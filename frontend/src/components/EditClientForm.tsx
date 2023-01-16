import React, { useEffect } from 'react';
import { IClient } from '../pages/ClientsList';
import { updateClient } from '../services/dataBaseConnections';

interface IEditClientForm {
  editClientFormEnabled: boolean
  setEditClientFormEnabled: Function
  getClients: Function
  clientsList: IClient[]
  clientIdToEdit: string
}

function EditClientForm({
  editClientFormEnabled, setEditClientFormEnabled, getClients, clientsList, clientIdToEdit,
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
    const clientForm = document.querySelector('.newClient_true') as HTMLFormElement;
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
    <form className={`newClient_${editClientFormEnabled.toString()}`}>
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
    <button onClick={(e) => { e.preventDefault(); void editClient(); }}>
      Edit client
    </button>
    <button onClick={(e) => { e.preventDefault(); setEditClientFormEnabled(false); }}>
      Go back
    </button>
  </form>
  );
}

export default EditClientForm;
