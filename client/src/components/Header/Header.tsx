import style from './header.module.scss';
import logo from '../../assets/img/argentBankLogo.png';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="Logo Argent Bank" className={style.header__logo} />
      <div className={style.header__action}>
        <FaCircleUser className={style.header__action__icon} />
        <Link to={'/signin'} className={style.header__action__link}>Sign In</Link>
      </div>
    </header>
  );
};
