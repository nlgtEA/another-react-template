export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@gmail.com' && password === '123456') {
        resolve({
          id: 1,
          email,
          accessToken: 'abcxyz',
        });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000);
  });
};

export const getCurrentUser = (accessToken) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (accessToken !== 'abcxyz') {
        return reject(new Error('Unauthenticated'));
      }
      resolve({
        id: 1,
        email: 'admin@gmail.com',
        fullName: 'Admin John',
      });
    }, 500);
  });
};
