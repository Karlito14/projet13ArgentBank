import style from './formSignin.module.scss';
import { FaCircleUser } from 'react-icons/fa6';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInputsSignin } from '../../types/types';
import { userApi } from '../../api/api_user';
import { useDispatch } from 'react-redux';
import { saveToken } from '../../store/auth-slice';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Please enter an email address'),
  password: yup.string().required('Please enter your password'),
  remember: yup.boolean(),
});

export const FormSignin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultValues = {
    email: '',
    password: '',
    remember: false,
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormInputsSignin>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<FormInputsSignin> = async (data) => {
    clearErrors();
    try {
      const response = await userApi.login(data);
      if (response.status === 200) {
        const token = response.body.token;
        dispatch(saveToken(token));
        localStorage.setItem('token', token);
        navigate('/profile');
      } else {
        setError('generic', {
          type: 'generic',
          message: 'Invalid email / password',
        });
      }
    } catch (error) {
      setError('generic', {
        type: 'generic',
        message: 'Invalid email / password',
      });
    }
  };

  return (
    <section className={style.container}>
      <FaCircleUser />
      <h2 className={style.container__title}>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.wrapper}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            defaultValue={defaultValues.email}
            {...register('email')}
          />
          {errors.email && (
            <p className={style.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={style.wrapper}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            defaultValue={defaultValues.password}
            {...register('password')}
          />
          {errors.password && (
            <p className={style.error}>{errors.password.message}</p>
          )}
        </div>
        <div className={style.remember}>
          <input
            type="checkbox"
            id="remember"
            checked={defaultValues.remember}
            {...register('remember')}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        {errors.generic && (
          <p className={style.error}>{errors.generic.message}</p>
        )}
        <button type="submit" className={style.button} disabled={isSubmitting}>
          Sign In
        </button>
      </form>
    </section>
  );
};
