import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import AppRoutes from './AppRoutes';

function App() {
  return <RouterProvider router={createBrowserRouter(AppRoutes)} />;
}

export default App;
