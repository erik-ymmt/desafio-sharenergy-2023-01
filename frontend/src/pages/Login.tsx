import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { login } from '../services/dataBaseConnections';
import { useNavigate } from 'react-router-dom';

export interface ILoginInputs {
  username: FormDataEntryValue | null
  password: FormDataEntryValue | null
}

function Login(): JSX.Element {
  const [invalidMsg, setInvalidMsg] = useState('disabled');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
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
    if (result.authorized) { loginAuthorization(result.token); } else { setInvalidMsg('enabled'); }
  };

  return (
    <div>
      <div className='login_box'>
        <form className='login_form'>
          <input type="text" name='username' />
          <input type="password" name='password'/>
          <span className={`invalid_msg_${invalidMsg}`}> Invalid password or username </span>
          <input
            type="checkbox"
            id="rememberme"
            name="rememberme"
            onChange={() => { setRememberMe(!rememberMe); }}
          />
          <label htmlFor="rememberme">remember me</label>
          <button
            onClick={ handleLogin }
          >LOGIN
          </button>
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
