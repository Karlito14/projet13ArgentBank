import style from './formSignin.module.scss';
import { FaCircleUser } from 'react-icons/fa6';


export const FormSignin = () => {
    return(
        <section className={style.container}>
            <FaCircleUser />
            <h2 className={style.container__title}>Sign In</h2>
            <form>
                <div className={style.wrapper}>
                    <label htmlFor="username" >Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className={style.wrapper}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className={style.remember}>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button className={style.button}>Sign In</button>
            </form>
        </section>
    )
}