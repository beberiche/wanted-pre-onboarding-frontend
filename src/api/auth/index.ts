import { customAxios, customAxiosArr } from 'api';

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

  customAxiosArr.forEach((axios) => {
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
  });
  return response;
};
