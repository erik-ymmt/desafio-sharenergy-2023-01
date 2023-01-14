import React from 'react';
import login from '../services/connections';
import styles from '../styles/login.module.css';

function Login(): JSX.Element {
  const handleLogin = async (): Promise<void> => {
    await login();
  };

  return (
    <div>
      <div className={styles.login_box}>
        <input type="text" />
        <input type="password" />
        <input type="checkbox" id="rememberme" name="rememberme" />
        <label htmlFor="rememberme">remember me</label>
        <button
          onClick={handleLogin}
        >LOGIN
        </button>
      </div>
    </div>
  );
}

export default Login;
