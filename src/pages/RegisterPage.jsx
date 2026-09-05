import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from '../redux/authOps';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await dispatch(register({ email, password })).unwrap();

      navigate('/contacts');
    } catch (error) {
      console.error('Registration error:', error);
      alert(error);
    }
  };

  return (
    <div>
      <h1>Registration</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>

        <br />

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;

