import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import style from './welcome.module.scss';

export const Welcome = () => {
  const user = useSelector((state: RootState) => state.auth.initialStateUser);

  return (
    <div className={style.header}>
      <h1 className={style.header__title}>
        Welcome back
        <br />
        {user.firstName + ' ' + user.lastName}{' !'}
      </h1>
      <button className={style.header__button}>Edit Name</button>
    </div>
  );
};
