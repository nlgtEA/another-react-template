import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <div>
      <p>Welcome Guest!</p>
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
          <Link to="/contact" data-testid="contact-link">
            Contact
          </Link>
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
