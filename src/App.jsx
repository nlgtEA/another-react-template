import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Root from './components/Root';
import Home from './pages/Home';

import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="about" element={<h1>About</h1>} />
      <Route path="contact" element={<h1>Contact</h1>} />
      <Route path="home" element={<Home />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
