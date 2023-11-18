import { createRoutesFromElements, Route } from 'react-router-dom';

import Root from './components/Root';
import Home from './pages/Home';

const AppRoutes = createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="about" element={<h1>About</h1>} />
    <Route path="contact" element={<h1>Contact</h1>} />
    <Route path="home" element={<Home />} />
  </Route>,
);

export default AppRoutes;
