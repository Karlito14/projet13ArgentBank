import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import style from './editName.module.scss';
import { cancelEdit } from '../../store/editProfile-slice';
import { useState } from 'react';
import { userApi } from '../../api/api_user';
import { updateUser } from '../../store/user-slice';

export const EditName = () => {
  const user = useSelector((state: RootState) => state.user.stateUser);
  const token = useSelector((state: RootState) => state.token.value);

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleClick = async () => {
    const updatedNames = {
      firstName,
      lastName,
    };

    try {
      const response = await userApi.updateUser(updatedNames, token);
      if (response.status === 200) {
        dispatch(updateUser(updatedNames));
        dispatch(cancelEdit());
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <input
          className={style.content__input}
          type="text"
          defaultValue={firstName}
          autoFocus
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          className={style.content__input}
          type="text"
          defaultValue={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div className={style.action}>
        <button className={style.action__button} onClick={handleClick}>
          Save
        </button>

        <button
          className={style.action__button}
          onClick={() => dispatch(cancelEdit())}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
