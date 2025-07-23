import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import './styles/reset.scss';
import './styles/variables.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const routers = createBrowserRouter(routes);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers} />
    </QueryClientProvider>
  );
}

export default App;
