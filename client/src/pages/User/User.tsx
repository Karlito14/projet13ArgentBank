import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { UserState } from '../../types/types';
import { useEffect, useState } from 'react';
import { userApi } from '../../api/api_user';
import { login } from '../../store/user-slice';
import { Welcome } from '../../components/Welcome/Welcome';
import { AccountList } from '../../components/AccountList/AccountList';

export const User = () => {
  const token =
    useSelector((state: RootState) => state.token.value) ||
    localStorage.getItem('token')!;

  const [user, setUser] = useState<UserState>();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await userApi.getUser(token);
        if (data.status === 200) {
          setUser(data.body);
          dispatch(login(data.body));
          localStorage.setItem('user', JSON.stringify(data.body))
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, [dispatch, token]);

  return (
    <>
      {user && <Welcome />}
      {user && <AccountList />}
    </>
  );
};
