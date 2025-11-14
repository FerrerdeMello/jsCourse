import {
  FaCircle,
  FaHome,
  FaPowerOff,
  FaSeedling,
  FaSignInAlt,
  FaUserAlt,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { successColor } from '../../config/colors';
import { logout } from '../../store/modules/auth/authSlice';
import { Nav } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Nav>
      <Link to="/plants">
        <FaHome size={24} />
      </Link>
      <Link to="/user-register">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/plant-register">
        <FaSeedling size={24} />
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      )}

      {isLoggedIn && <FaCircle size={24} color={successColor}></FaCircle>}
    </Nav>
  );
}
