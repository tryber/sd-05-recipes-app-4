import React from 'react';
import './index.css';

const Login = () => (
  <div>
    <h1 className="login">Login</h1>
    <form>
      <input
        data-testid="email-input"
        className="email"
        type="type"
        name="email"
        placeholder="Email"
      />
      <input
        data-testid="password-input"
        className="password"
        type="password"
        name="password"
        placeholder="Senha"
      />
      <button
        data-testid="login-submit-btn"
        className="login-btn"
        onClick={() => console.log('Supimpa baby')}
        value="Entrar"
      >
        Entrar
      </button>
    </form>
  </div>
);

export default Login;
