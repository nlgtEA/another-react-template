import { createRoutesFromElements, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import Root from 'components/Root';
import Home from 'pages/Home';
import Login from 'pages/Login';
import PrivatePage from 'pages/PrivatePage';

const AppRoutes = createRoutesFromElements(
  <Route>
    <Route path="login" element={<Login />} />
    <Route path="/" element={<Root />}>
      <Route path="about" element={<h1>About</h1>} />
      <Route
        path="private"
        element={
          <PrivateRoute>
            <PrivatePage />
          </PrivateRoute>
        }
      />
      <Route index element={<Home />} />
    </Route>
  </Route>,
);

export default AppRoutes;
