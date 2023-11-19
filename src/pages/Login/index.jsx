import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
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
  );
}

export default Login;
