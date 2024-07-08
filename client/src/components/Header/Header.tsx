import style from './header.module.scss';
import logo from '../../assets/img/argentBankLogo.png';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={style.header}>
      <Link to={'/'}>
        <img src={logo} alt="Logo Argent Bank" className={style.header__logo} />
      </Link>
      <div className={style.header__action}>
        <Link to={'/login'} className={style.header__action__link}>
          <FaCircleUser className={style.header__action__link__icon} />Sign In
        </Link>
      </div>
    </header>
  );
};
