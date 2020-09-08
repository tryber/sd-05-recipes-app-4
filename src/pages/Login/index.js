import React from 'react';
import './index.css';

const Login = () => (
  <div>
    <h1>Login</h1>
    <form>
    <input
    id='email'
      type="text"
      name="email"
      placeholder="Email"
    />
    <input
      id='password'
      type="text"
      name="password"
      placeholder="Senha"
    />
    <button
      classname="login-btn"
      onClick={() => console.log('Supimpa baby')}
      value="Entrar"
    >
        Entrar
    </button>
    </form>
  </div>
);

export default Login;
