import React from 'react';

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
    <div>
      <img src={user.picture.large} alt={user.name.first + user.name.last} />
      <div>
        <h2>{`${user.name.first}  ${user.name.last}, ${user.dob.age}`}</h2>
        <h4>{user.login.username}</h4>
        <h4>{user.email}</h4>
      </div>
    </div>
  );
}

export default UserCard;
