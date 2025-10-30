import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import axios from '../../services/axios';

import { Container } from '../../styles/Container';
import { FormRegister } from './styled';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('The name must be between 3 and 255 characters long.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid e-mail.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('The password must be between 6 and 50 characters long.');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', {
        name,
        password,
        email,
      });
      toast.success(
        'Welcome! Your account is ready to use. Log in to get started.'
      );
      navigate('/login');
    } catch (err) {
      const errors = err.response?.data.errors;
      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Create your account</h1>

      <FormRegister onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your e-mail"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
        </label>
        <button type="submit">Create my account</button>
      </FormRegister>
    </Container>
  );
}
