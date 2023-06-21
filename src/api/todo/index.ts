import { customAxios } from 'api';

const todosAxios = customAxios('todos');

export const createTodo = async (todo: string) => {
  const response = await todosAxios.post('', {
    todo,
  });

  return response;
};

export const getTodos = async () => {
  const response = await todosAxios.get('');

  return response;
};

type Update = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

export const updateTodo = async ({ id, todo, isCompleted }: Update) => {
  const response = await todosAxios.put(`/${id}`, { todo, isCompleted });

  return response;
};
