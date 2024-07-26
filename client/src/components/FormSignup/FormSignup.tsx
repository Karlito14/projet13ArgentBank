import style from './formSignup.module.scss';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInputsSignup } from '../../types/types';
import { userApi } from '../../api/api_user';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Please enter an email address'),
  firstname: yup.string().required('Please enter your first name').min(3),
  lastname: yup.string().required('Please enter your last name').min(3),
  password: yup.string().required('Please enter a password').min(5),
});

export const FormSignup = () => {
  const navigate = useNavigate();
  const defaultValues = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormInputsSignup>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<FormInputsSignup> = async (data) => {
    clearErrors();
    try {
      const response = await userApi.signup(data);
      if (response.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={style.container}>
      <AiOutlineUserAdd />
      <h2 className={style.container__title}>Sign Up</h2>
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
          <label htmlFor="firstname">Firstname</label>
          <input
            type="firstname"
            id="firstname"
            defaultValue={defaultValues.firstname}
            {...register('firstname')}
          />
          {errors.firstname && (
            <p className={style.error}>{errors.firstname.message}</p>
          )}
        </div>
        <div className={style.wrapper}>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="lastname"
            id="lastname"
            defaultValue={defaultValues.lastname}
            {...register('lastname')}
          />
          {errors.lastname && (
            <p className={style.error}>{errors.lastname.message}</p>
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

        <button type="submit" className={style.button} disabled={isSubmitting}>
          Sign Up
        </button>
      </form>
    </section>
  );
};
