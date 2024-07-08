import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Homepage } from './pages/Homepage/Homepage';
import { Signin } from './pages/Signin/Signin';
import { User } from './pages/User/User';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/login',
        element: <Signin />,
      },
      {
        path: '/profile',
        element: <User />,
      },
    ],
  },
]);
