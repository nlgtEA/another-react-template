import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <div>
      <h1>Root</h1>
      <p>
        This is the root page. You can go to <Link to="/about">About</Link> or{' '}
        <Link to="/contact">Contact</Link>
      </p>
      <Outlet />
    </div>
  );
}

export default Root;
