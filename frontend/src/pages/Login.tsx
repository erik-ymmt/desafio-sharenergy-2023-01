import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { login } from '../services/dataBaseConnections';
import { useNavigate } from 'react-router-dom';

export interface ILoginInputs {
  username: FormDataEntryValue | null
  password: FormDataEntryValue | null
}

function Login(): JSX.Element {
  const [invalidMsg, setInvalidMsg] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [randomBg, setRandomBg] = useState('bg-solar1');

  const navigate = useNavigate();

  useEffect(() => {
    const randomBackground = 'bg-solar' + String(Math.floor(Math.random() * 3) + 1);
    setRandomBg(randomBackground);

    const loggedIn = localStorage.getItem('se_rememberme');
    if (loggedIn === 'true') navigate('/users');
  }, []);

  const handleLoginForm = (): ILoginInputs => {
    const loginForm = document.querySelector('.login_form') as HTMLFormElement;
    const formData = new FormData(loginForm);
    const loginInputs = {
      username: formData.get('username'),
      password: formData.get('password'),
    };
    return loginInputs;
  };

  const loginAuthorization = (token: string): void => {
    localStorage.setItem('se_token', token);
    if (rememberMe) {
      localStorage.setItem('se_rememberme', 'true');
    }
    navigate('/users');
  };

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const loginInputs = handleLoginForm();
    const result = await login(loginInputs);
    if (result.authorized) { loginAuthorization(result.token); } else { setInvalidMsg(true); }
  };

  return (
    <div className={`min-h-screen ${randomBg} bg-cover bg-no-repeat flex justify-center items-center`}>
      <div className='bg-white/50 h-1/2 flex flex-col backdrop-blur-sm rounded-lg shadow-lg'>
        <form className='login_form flex flex-col items-center gap-4 m-14'>
          <img src="src/assets/se_logo_color.png" alt="sharenergy logo" className='h-8 mb-4 drop-shadow-xl'/>
          <input type="text" name='username' placeholder='username' className='bg-white/50 rounded-lg h-16 px-4 py-2 w-full'/>
          <input type="password" name='password'placeholder='password' className='bg-white/50 rounded-lg h-16 px-4 py-2 w-full'/>
          <div className='flex items-center gap-2 text-gray-800'>
            <input
              type="checkbox"
              id="rememberme"
              name="rememberme"
              onChange={() => { setRememberMe(!rememberMe); }}
            />
            <label htmlFor="rememberme">remember me</label>
          </div>
          <button
            className='bg-se_green rounded-lg h-16 py-2 font-sans text-2xl text-white font-semibold w-full hover:-translate-y-0.5'
            onClick={ handleLogin }
          >Login
          </button>
          <span className={`${invalidMsg ? '' : 'hidden'} text-red-700 absolute bottom-5`}> Invalid password or username </span>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  auth: PropTypes.bool,
  setAuth: PropTypes.func,
};

export default Login;
