import { useMutation, useQuery } from 'react-query';

import { login, getCurrentUser } from 'apis/auth';

export const useLogin = () =>
  useMutation(async ({ email, password }) => {
    return login(email, password);
  });

export const useCurrentUser = (accessToken) =>
  useQuery(
    'currentUser',
    async () => {
      return getCurrentUser(accessToken);
    },
    { retry: false },
  );
