/* eslint-disable @typescript-eslint/no-unused-vars */
// library
import { useEffect, useRef, MutableRefObject, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// component
import Input from 'components/common/Input';
import Button from 'components/common/Button';

// api

import { createTodo } from 'api/todo';

type Props = {
  id: number;
  todo: string;
  isCompleted: boolean;
  isEdit: boolean;
};

const TodoLi = ({ id, todo, isCompleted, isEdit }: Props) => {
  return (
    <li>
      <Input type="checkbox" id={id.toString()} checked={isCompleted} />
      {isEdit ? (
        <Input type="text" initValue={todo} dataTestId="modify-input" />
      ) : (
        <span>{todo}</span>
      )}
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
  // const [todoList, setTodoList] = useState([]);

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (!localStorage.getItem('Authorization')) {
      alert('로그인 이후 사용하실 수 있습니다.');
      navigate('/signin');
    }
  }, []);

  const createTodoHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await createTodo(inputRef.current.value);
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
        {/* {todoList.map(({ id, todo, isCompleted }) => (
          <TodoLi
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            isEdit={false}
          />
        ))} */}
      </ul>
    </>
  );
};
export default index;
