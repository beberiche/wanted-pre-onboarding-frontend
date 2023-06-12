import { useNavigate } from 'react-router-dom';

// common
import Input from 'components/common/Input';
import Label from 'components/common/Label';
import Button from 'components/common/Button';

const index = () => {
  const navigate = useNavigate();

  const clickToSignUpHandler = () => {
    navigate('/signup');
  };

  return (
    <>
      <h2>로그인</h2>
      <Label name="ID" htmlFor="id">
        <Input dataTestId="email-input" type="text" id="id" />
      </Label>
      <Label name="PASSWORD" htmlFor="password">
        <Input dataTestId="password-input" type="password" id="password" />
      </Label>
      <Button name="회원가입으로 이동" onClick={clickToSignUpHandler} />
      <Button dataTestId="signin-button" name="로그인" />
    </>
  );
};

export default index;
