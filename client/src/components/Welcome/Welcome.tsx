import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import style from './welcome.module.scss';
import { edit } from '../../store/editProfile-slice';
import { EditName } from '../EditName/EditName';

export const Welcome = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.stateUser);
  const editName = useSelector((state: RootState) => state.editName.value);

  const handleClick = () => {
    dispatch(edit());
  };

  return (
    <div className={style.header}>
      <h1 className={style.header__title}>
        Welcome back
        <br />
        {!editName ? `${user.firstName} ${user.lastName} !` : <EditName />}
      </h1>
      {!editName && (
        <button className={style.header__button} onClick={handleClick}>
          Edit Name
        </button>
      )}
    </div>
  );
};
