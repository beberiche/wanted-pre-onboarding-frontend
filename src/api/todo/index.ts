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
