import { customAxios } from 'api';

const authAxios = customAxios('auth');

type User = {
  email: string;
  password: string;
};

type ResponseCommonType<T> = {
  status: number;
  body: T;
};

export const signUp = async ({ email, password }: User) => {
  const response = await authAxios.post<ResponseCommonType<null>>('/signup', {
    email,
    password,
  });

  console.log(response);
  return response;
};
