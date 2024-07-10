import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { UserState } from '../../types/types';
import { useEffect, useState } from 'react';
import { userApi } from '../../api/api_user';
import { login } from '../../store/auth-slice';

export const User = () => {
  const token = useSelector((state: RootState) => state.token.value);
  const [user, setUser] = useState<UserState>();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await userApi.getUser(token);
        if (response.ok) {
          const result = await response.json();
          setUser(result.body);
          dispatch(login(result.body));
        }
      } catch (error) {
        console.error(error)
      }
    };

    getUser();
  }, [dispatch, token]);

  return <h1 style={{color: 'white'}}>User</h1>;
};
