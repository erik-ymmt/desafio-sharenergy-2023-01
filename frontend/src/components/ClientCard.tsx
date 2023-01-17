import React from 'react';
import { IClient } from '../pages/ClientsList';

import { MdModeEdit } from 'react-icons/md';
import { BsTrashFill } from 'react-icons/bs';

interface IClientCardProps {
  clientData: IClient
  setEditClientFormEnabled: Function
  setClientIdToEdit: Function
  setDeleteClientEnabled: Function
}

function ClientCard({
  clientData, setEditClientFormEnabled, setClientIdToEdit, setDeleteClientEnabled,
}: IClientCardProps): JSX.Element {
  const { _id, name, email, phoneNumber, address, cpf } = clientData;

  return (
    <div className='border-gray-200 border-2 py-4 px-6 w-1/3'>
      <div className='mb-4 text-base text-gray-400'>
        <p> Name:
          <span className='text-black'>{name}</span>
        </p>
        <p> Email:
          <span className='text-black'>{email}</span>
        </p>
        <p> Phone:
          <span className='text-black'>{phoneNumber}</span>
        </p>
        <p> Address:
          <span className='text-black'>{address}</span>
        </p>
        <p>CPF:
          <span className='text-black'>{cpf}</span>
        </p>
      </div>
      <div className='flex gap-2 justify-end'>
        <button
          className='bg-se_green py-1 px-5 h-8 flex items-center rounded-lg text-white hover:bg-se_dark_green gap-2'
          onClick={() => { setEditClientFormEnabled(true); setClientIdToEdit(_id); }}
        >
          edit
          <MdModeEdit />
        </button>
        <button
          className='bg-red-700 py-1 px-3 h-8 flex items-center rounded-lg text-white hover:bg-red-900 gap-2'
          onClick={() => { setDeleteClientEnabled(true); setClientIdToEdit(_id); }}
        >
          delete
          <BsTrashFill />
        </button>
      </div>
    </div>
  );
}

export default ClientCard;
