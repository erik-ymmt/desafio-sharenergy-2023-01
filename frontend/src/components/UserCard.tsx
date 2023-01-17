import React from 'react';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';

export interface IUser {
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  login: {
    uuid: string
    username: string
  }
  dob: {
    age: number
  }
  picture: {
    large: string
  }
}

interface IUserCardProps {
  user: IUser
}

function UserCard({ user }: IUserCardProps): JSX.Element {
  return (
    <div className='flex items-center gap-4 mb-6 max-md:text-sm'>
      <img
      className='rounded-full max-md:w-24'
        src={user.picture.large}
        alt={user.name.first + user.name.last}
      />
      <div>
        <h2 className='text-se_green font-semibold text-xl'>
          {`${user.name.first}  ${user.name.last}, ${user.dob.age}`}
        </h2>
        <h4 className='flex gap-2 items-center text-gray-700'>
          <AiOutlineUser color='rgb(0 162 162)' />
          {user.login.username}
        </h4>
        <h4 className='flex gap-2 items-center text-gray-700'>
          <AiOutlineMail color='rgb(0 162 162)' />
          {user.email}
        </h4>
      </div>
    </div>
  );
}

export default UserCard;
