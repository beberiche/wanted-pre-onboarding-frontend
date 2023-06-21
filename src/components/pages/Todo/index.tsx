// library
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// component
import Input from 'components/common/Input';
import Button from 'components/common/Button';

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
      <span>{todo}</span>
      <Button name={isEdit ? '제출' : '수정'} />
      <Button name="삭제" />
    </li>
  );
};

const index = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      alert('로그인 이후 사용하실 수 있습니다.');
      navigate('/signin');
    }
  }, []);

  return (
    <>
      <h2>todo</h2>
      <form>
        <Input type="checkbox" />
        <Button name="수정" />;
      </form>
      <ul>
        {todoList.map(({ id, todo, isCompleted }) => (
          <TodoLi
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            isEdit={false}
          />
        ))}
      </ul>
    </>
  );
};
export default index;
