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

  return <div>todo</div>;
};
export default index;
