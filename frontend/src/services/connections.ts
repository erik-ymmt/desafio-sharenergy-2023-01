import { ILoginInputs } from '../pages/Login';

interface ILoginResponse {
  authorized: boolean
  message: string
  token: string
}

const login = async (loginInputs: ILoginInputs): Promise<ILoginResponse> => {
  const { username, password } = loginInputs;
  const url = 'http://localhost:3001/users';
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      username,
      password,
      // username: 'desafiosharenergy',
      // password: 'sh@r3n3rgy',
    }),
  };
  const respose = await fetch(url, options);
  const result = await respose.json();
  console.log(result);
  return result;
};

export default login;
