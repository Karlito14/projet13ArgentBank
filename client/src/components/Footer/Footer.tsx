import style from './footer.module.scss';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <p className={style.footer__copyright}>Copyright 2020 Argent Bank</p>
        </footer>
    )
}