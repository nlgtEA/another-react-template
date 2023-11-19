import { useMutation } from 'react-query';

import { login } from '../apis/auth';

const useLogin = () =>
  useMutation(async ({ email, password }) => {
    return login(email, password);
  });

export { useLogin };
