import React, { useState } from 'react';
import '../App.css';

export default function RegisterPanel({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onRegister({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <div className="register-panel">
      <h2>Rejestracja</h2>
      <input
        type="text"
        placeholder="Nazwa użytkownika"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit}>Zarejestruj</button>
    </div>
  );
}
