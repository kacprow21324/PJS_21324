import React, { useState } from 'react';
import '../App.css';

export default function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onLogin({ user, pass });
  };

  return (
    <div className="login-panel">
      <h2>Logowanie</h2>
      <input
        type="text"
        placeholder="Nazwa użytkownika"
        value={user}
        onChange={e => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit}>Zaloguj</button>
    </div>
  );
}
