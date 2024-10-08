import style from './header.module.scss';
import logo from '../../assets/img/argentBankLogo.png';
import { FaCircleUser } from 'react-icons/fa6';
import { FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../store/auth-slice';
import { logout } from '../../store/user-slice';

export const Header = () => {
  const user = useSelector((state: RootState) => state.user.stateUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(deleteToken(''));
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header className={style.header}>
      <Link to={'/'}>
        <img src={logo} alt="Logo Argent Bank" className={style.header__logo} />
      </Link>
      <div className={style.header__action}>
        {user.firstName ? (
          <>
            <Link to={'/profile'} className={style.header__action__link}>
              <FaCircleUser className={style.header__action__link__icon} />
              {user.firstName}
            </Link>
            <p className={style.header__action__link} onClick={signOut}>
              <FaSignOutAlt className={style.header__action__link__icon} />
              Sign Out
            </p>
          </>
        ) : (
          <>
            <Link to={'/signup'} className={style.header__action__login}>
              <AiOutlineUserAdd className={style.header__action__login__icon} />
              Sign Up
            </Link>
            <Link to={'/login'} className={style.header__action__login}>
              <FaCircleUser className={style.header__action__login__icon} />
              Sign In
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
