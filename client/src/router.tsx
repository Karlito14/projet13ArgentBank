import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Homepage } from './pages/Homepage/Homepage';
import { Signin } from './pages/Signin/Signin';
import { User } from './pages/User/User';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
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
        element: (
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
