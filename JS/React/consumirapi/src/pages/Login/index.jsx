import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { login } from '../../store/modules/auth/authSlice';

import Loading from '../../components/Loading';
import { Container } from '../../styles/Container';
import { FormLogin } from './styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, token } = useSelector((state) => state.auth);
  const location = useLocation();
  const from = location.state?.from?.pathname;
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid e-mail.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('The password must be between 6 and 50 characters long.');
    }

    if (formErrors) return;
    setIsLoading(true);
    dispatch(login({ email, password }));
  }

  // Redirects after successful login.
  useEffect(() => {
    if (token) {
      setPassword('');
      setIsLoading(false);
      toast.success('Welcome back!');
      navigate(from || '/plants', { replace: true }); // or another page after logging in
    }
  }, [token, navigate, from]);

  // Show global login error
  useEffect(() => {
    setIsLoading(false);
    if (error) toast.error(error);
  }, [error]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>

      <FormLogin onSubmit={handleSubmit}>
        <label htmlFor="email">
          E-mail:
          <input
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your e-mail"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Access'}
        </button>
      </FormLogin>
    </Container>
  );
}
