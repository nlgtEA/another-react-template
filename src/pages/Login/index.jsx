import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useLogin } from '../../hooks/auth';

function Login() {
  const [loginError, setLoginError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const loginMutation = useLogin();

  const onSubmit = async (data) => {
    try {
      const res = await loginMutation.mutateAsync(data);
      console.log('==== res', res);
      reset();
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span role="alert">Email is required</span>}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: true })}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && <span role="alert">Password is required</span>}
        <button type="submit">Login</button>
      </form>
      {loginError && <p role="alert">{loginError}</p>}
    </>
  );
}

export default Login;
