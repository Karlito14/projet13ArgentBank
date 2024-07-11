import style from './header.module.scss';
import logo from '../../assets/img/argentBankLogo.png';
import { FaCircleUser } from 'react-icons/fa6';
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export const Header = () => {
  const user = useSelector((state: RootState) => state.auth.initialStateUser);

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
            <Link to={'/'} className={style.header__action__link}>
              <FaSignOutAlt className={style.header__action__link__icon} />
              Sign Out
            </Link>
          </>
        ) : (
          <Link to={'/login'} className={style.header__action__login}>
            <FaCircleUser className={style.header__action__login__icon} />
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};
