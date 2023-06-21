import { customAxios } from 'api';

const authAxios = customAxios('auth');

type UserInfo = {
  email: string;
  password: string;
};

export const signup = async ({ email, password }: UserInfo) => {
  const response = await authAxios.post('/signup', {
    email,
    password,
  });

  return response;
};

export const signin = async ({ email, password }: UserInfo) => {
  const response = await authAxios.post('/signin', {
    email,
    password,
  });

  return response;
};
