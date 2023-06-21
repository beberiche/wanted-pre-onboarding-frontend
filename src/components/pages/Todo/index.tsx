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

import { createTodo, deleteTodo, getTodos, updateTodo } from 'api/todo';

type Props = {
  id: number;
  todo: string;
  isCompleted: boolean;
  initEdit: boolean;
  onUpdate: () => void;
};

const TodoLi = ({ id, todo, isCompleted, initEdit, onUpdate }: Props) => {
  const inputRef = useRef({
    value: todo,
  }) as MutableRefObject<HTMLInputElement>;

  const [isEdit, setIsEdit] = useState(initEdit);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(inputRef.current.value);
  }, []);

  const toggleIsEditHandler = () => {
    setIsEdit(!isEdit);
  };
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
      const message = '체크박스를 수정하는데 실패했습니다.';
      alert(message);
    }
  };

  const submitUpdateClickHandler = async () => {
    try {
      const body = {
        id,
        todo: value,
        isCompleted,
      };

      await updateTodo(body);
      onUpdate();
      toggleIsEditHandler();
    } catch (error) {
      const message = 'todo를 변경하는데 실패했습니다.';
      alert(message);
    }
  };

  const deleteTodoHandler = async () => {
    try {
      await deleteTodo(id);
      onUpdate();
    } catch (error) {
      const message = 'todo를 삭제하는데 실패했습니다.';
      alert(message);
    }
  };

  const inputValueChangeHandler = () => {
    setValue(inputRef.current.value);
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
            <input
              ref={inputRef}
              value={value}
              onChange={inputValueChangeHandler}
              type="text"
              data-testid="modify-input"
            />
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
        onClick={isEdit ? submitUpdateClickHandler : toggleIsEditHandler}
      />
      <Button
        name={isEdit ? '취소' : '삭제'}
        onClick={isEdit ? toggleIsEditHandler : deleteTodoHandler}
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
            initEdit={false}
            onUpdate={getTodosHandler}
          />
        ))}
      </ul>
    </>
  );
};
export default index;
