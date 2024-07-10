import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store/store';

export const ProtectedRoute = (props : { children: JSX.Element }) => {
  const token = useSelector((state: RootState) => state.token.value);
  console.log(token);

  return token === '' ? <Navigate to={'../login'}></Navigate> : props.children;
};
