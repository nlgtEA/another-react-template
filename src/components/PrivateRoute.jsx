import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useCurrentUser } from 'hooks/auth';

function PrivateRoute({ children }) {
  const currentUserQuery = useCurrentUser();
  if (currentUserQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (currentUserQuery.isError) {
    const nextPath = window.location.pathname;
    localStorage.setItem('nextPath', nextPath);
    return <Navigate to="/login" />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
