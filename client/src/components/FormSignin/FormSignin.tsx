import { useState } from 'react';
import style from './formSignin.module.scss';
import { FaCircleUser } from 'react-icons/fa6';

export const FormSignin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleInputUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangeRemember = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemember(event.target.checked);
  };

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(username)) {
      setErrorUsername('Only characters A-Z, a-z and 0-9 are acceptable.');
    } else {
      setErrorUsername('');
    }

    if (!regex.test(password)) {
      setErrorPassword('Only characters A-Z, a-z and 0-9 are acceptable.');
    } else {
      setErrorPassword('');
    }
  };

  return (
    <section className={style.container}>
      <FaCircleUser />
      <h2 className={style.container__title}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.wrapper}>
          <label htmlFor="username">Username</label>
          <input
            onInput={handleInputUsername}
            type="text"
            name="username"
            id="username"
            defaultValue={username}
          />
          {errorUsername && (
            <p className={style.wrapper__error}>{errorUsername}</p>
          )}
        </div>
        <div className={style.wrapper}>
          <label htmlFor="password">Password</label>
          <input
            onInput={handleInputPassword}
            type="password"
            name="password"
            id="password"
            defaultValue={password}
          />
          {errorPassword && (
            <p className={style.wrapper__error}>{errorPassword}</p>
          )}
        </div>
        <div className={style.remember}>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={remember}
            onChange={handleChangeRemember}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className={style.button}>Sign In</button>
      </form>
    </section>
  );
};
