import React from 'react';
import { IClient } from '../pages/ClientsList';

interface IClientCardProps {
  clientData: IClient
  setEditClientFormEnabled: Function
  setClientIdToEdit: Function
}

function ClientCard({
  clientData, setEditClientFormEnabled, setClientIdToEdit,
}: IClientCardProps): JSX.Element {
  const deleteClient = (id: string): void => {
    console.log(id);
  };

  const { _id, name, email, phoneNumber, address, cpf } = clientData;

  return (
    <div>
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phoneNumber}</p>
        <p>Address: {address}</p>
        <p>CPF: {cpf}</p>
      </div>
      <div>
        <button onClick={() => { setEditClientFormEnabled(true); setClientIdToEdit(_id); }}>
          edit
        </button>
        <button onClick={() => { deleteClient(_id); }}>delete</button>
      </div>
    </div>
  );
}

export default ClientCard;
