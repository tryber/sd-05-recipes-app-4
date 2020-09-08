import React from 'react';
import './index.css';

const Login = () => (
  <div>
    <h1>Login</h1>
    <form>
      <input className="email" type="type" name="email" placeholder="Email" />
      <input className="password" type="password" name="password" placeholder="Senha" />
      <button
        className='login-btn'
        onClick={() => console.log('Supimpa baby')}
        value="Entrar"
      >
        Entrar
      </button>
    </form>
  </div>
);

export default Login;
