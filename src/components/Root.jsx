import { Link, Outlet } from 'react-router-dom';

import { useCurrentUser } from 'hooks/auth';

function Root() {
  const currentUserQuery = useCurrentUser();
  const currentUser = currentUserQuery.data;

  return (
    <div>
      <p>Welcome {currentUser ? currentUser.email : 'Guest'}!</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/private" data-testid="contact-link">
            Private page
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Root;
