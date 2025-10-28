import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function MyRoute({ element: Element, isClosed }) {
  const isLoggedId = false;

  if (isClosed && !isLoggedId) {
    return <Navigate to="/login" replace />;
  }

  return Element;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isClosed: PropTypes.bool,
};
