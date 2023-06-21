// library
import {
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  MouseEvent,
  useCallback,
  ChangeEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';

// component
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import Label from 'components/common/Label';

// api

import { createTodo, getTodos, updateTodo } from 'api/todo';

type Props = {
  id: number;
  todo: string;
  isCompleted: boolean;
  isEdit: boolean;
  onUpdate: () => void;
};

const TodoLi = ({ id, todo, isCompleted, isEdit, onUpdate }: Props) => {
  const checkBoxChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const body = {
        id,
        todo,
        isCompleted: e.target.checked,
      };

      await updateTodo(body);
      onUpdate();
    } catch (error) {
      console.log(error);
      const message = '체크박스를 수정하는데 실패했습니다.';
      alert(message);
    }
  };

  return (
    <li>
      <Label htmlFor={id.toString()}>
        <>
          <input
            type="checkbox"
            id={id.toString()}
            checked={isCompleted}
            onChange={checkBoxChangeHandler}
          />
          {isEdit ? (
            <Input type="text" initValue={todo} dataTestId="modify-input" />
          ) : (
            <span style={{ display: 'inline-block', width: '7rem' }}>
              {todo}
            </span>
          )}
        </>
      </Label>
      <Button
        name={isEdit ? '제출' : '수정'}
        dataTestId={isEdit ? 'submit-button' : 'modify-button'}
      />
      <Button
        name={isEdit ? '취소' : '삭제'}
        dataTestId={isEdit ? 'cancel-button' : 'delete-button'}
      />
    </li>
  );
};

const index = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const getTodosHandler = useCallback(async () => {
    const response = await getTodos();
    setTodoList(response.data);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('Authorization')) {
      alert('로그인 이후 사용하실 수 있습니다.');
      navigate('/signin');
    }
    (async () => getTodosHandler())();
  }, []);

  const createTodoHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await createTodo(inputRef.current.value);

      getTodosHandler();
    } catch (error) {
      const message = '할 일을 생성하는데 실패했습니다.';
      alert(message);
    } finally {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <h2>todo</h2>
      <form>
        <Input type="text" inputRef={inputRef} />
        <Button name="생성" onClick={createTodoHandler} />
      </form>
      <ul>
        {todoList.map(({ id, todo, isCompleted }) => (
          <TodoLi
            key={id}
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            isEdit={false}
            onUpdate={getTodosHandler}
          />
        ))}
      </ul>
    </>
  );
};
export default index;
