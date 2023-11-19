import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import AppRoutes from './AppRoutes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createBrowserRouter(AppRoutes)} />
    </QueryClientProvider>
  );
}

export default App;
