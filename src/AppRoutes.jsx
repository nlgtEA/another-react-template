import { createRoutesFromElements, Route } from 'react-router-dom';

import Root from 'components/Root';
import Home from 'pages/Home';
import Login from 'pages/Login';

const AppRoutes = createRoutesFromElements(
  <Route>
    <Route path="login" element={<Login />} />
    <Route path="/" element={<Root />}>
      <Route path="about" element={<h1>About</h1>} />
      <Route path="contact" element={<h1>Contact</h1>} />
      <Route index element={<Home />} />
    </Route>
  </Route>,
);

export default AppRoutes;
