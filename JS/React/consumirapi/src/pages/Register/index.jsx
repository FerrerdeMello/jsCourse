import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import axios from '../../services/axios';
import { logout, updateUserData } from '../../store/modules/auth/authSlice';

import Loading from '../../components/Loading';
import { Container } from '../../styles/Container';
import { FormRegister } from './styled';

export default function Register() {
  const user = useSelector((state) => state.auth.user);
  const id = user?.id;
  const nameStored = user?.name;
  const emailStored = user?.email;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!id) return;
    setName(nameStored);
    setEmail(emailStored);
  }, [id, nameStored, emailStored]);

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

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('The password must be between 6 and 50 characters long.');
    }

    if (formErrors) return;

    setIsLoading(true);
    try {
      if (id) {
        await axios.put(`/users/`, {
          name,
          email,
          ...(password ? { password } : {}),
        });
        toast.success('Your account has been successfully updated!');
        dispatch(updateUserData({ name, email }));

        // It the e-mail was changed, force a new login
        if (email !== emailStored) {
          toast.info('Your email has been changed. Please log in again.');
          dispatch(logout());
          navigate('/login');
          return;
        }
      } else {
        await axios.post('/users/', {
          name,
          email,
          password,
        });
        toast.success(
          'Welcome! Your account is ready to use. Log in to get started.'
        );
        navigate('/login');
      }
    } catch (err) {
      const errors = err.response?.data.errors || ['Unexpected error.'];
      errors.map((error) => toast.error(error));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Edit your account' : 'Create your account'}</h1>

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
        <button type="submit">
          {id ? 'Edit my account' : 'Create my account'}
        </button>
      </FormRegister>
    </Container>
  );
}
