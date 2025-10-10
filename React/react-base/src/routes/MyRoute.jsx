import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export default function MyRoute( component: Component, isClosed, ... rest ) {
  const isLoggedId = false;

  if (isClosed && !isLoggedId) {
    return (
      <Redirect
        to={{ pathname: '/login', state: {prevPath: rest.location.pathname} }}
      />
    );
  }

  return <Route { ... rest} component={Component} />;
}

MyRoute.dafaultProps = {
  isClosed: false,
}

MyRoute.prototype = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
}
