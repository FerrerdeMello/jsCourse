import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

export default function MyRoute({ isClosed, isLoggedIn }) {
  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

// Props default
MyRoute.defaultProps = {
  isClosed: false,
  isLoggedIn: false,
};

// Validação de props
MyRoute.propTypes = {
  isClosed: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};
