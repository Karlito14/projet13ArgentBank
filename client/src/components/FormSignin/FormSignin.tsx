import style from './formSignin.module.scss';
import { FaCircleUser } from 'react-icons/fa6';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInputs } from '../../types/types';
import { user } from '../../api/api_user';

const schema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Please enter an email address'),
  password: yup.string().required('Please enter your password'),
  remember: yup.boolean(),
});

export const FormSignin = () => {
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
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    clearErrors();
    try {
      const response = await user.login(data);
      if (!response.ok) {
        setError('generic', { type: 'generic', message: 'invalid email or password' });
      }
    } catch (error) {
      setError('generic', { type: 'generic', message: 'invalid email or password' });
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
        {errors.generic && <p className={style.error}>{errors.generic.message}</p>}
        <button className={style.button} disabled={isSubmitting}>
          Sign In
        </button>
      </form>
    </section>
  );
};
