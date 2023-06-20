import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      alert('로그인 이후 사용하실 수 있습니다.');
      navigate('/signin');
    }
  }, []);

  return (
    <>
      <h2>todo</h2>
      {/* <li>
        <label>
          <input type="checkbox" />
          <span>TODO 1</span>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span>TODO 2</span>
        </label>
      </li> */}
    </>
  );
};
export default index;
