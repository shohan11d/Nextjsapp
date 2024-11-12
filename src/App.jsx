import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Menu from './components/Menu';
import Order from './components/Order';
import PizzaMenu from './components/PizzaMenu';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/pizzamenu',
        element: <PizzaMenu />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/order',
        element: <Order />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
