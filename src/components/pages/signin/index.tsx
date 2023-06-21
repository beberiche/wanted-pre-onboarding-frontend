// library
import { useNavigate } from 'react-router-dom';
import {
  useRef,
  useReducer,
  MutableRefObject,
  MouseEvent,
  useEffect,
} from 'react';

// common
import Input from 'components/common/Input';
import Label from 'components/common/Label';
import Button from 'components/common/Button';
import Message from 'components/common/Message';

// reducer
import { emailReducer } from 'utils/reducer/emailReducer';
import { passwordReducer } from 'utils/reducer/passwordReducer';

// type
import { InputStateType } from 'types/inputStateType';

// api
import { signin } from 'api/auth';

const index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('Authorization')) {
      alert('로그인이 확인되었습니다. todo 페이지로 이동합니다.');
      navigate('/todo');
    }
  }, []);

  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [email, dispatchEmail] = useReducer(emailReducer, {
    currValue: '',
    valid: undefined,
  });

  const [password, dispatchPassword] = useReducer(passwordReducer, {
    currValue: '',
    valid: undefined,
  });

  const inputValidHandler = (input: InputStateType): string => {
    const { currValue, valid } = input;
    if (valid === undefined || currValue === '') return 'default';
    if (valid === true) return 'success';
    return 'error';
  };

  const emailCharacter = inputValidHandler(email);
  const passwordCharacter = inputValidHandler(password);

  const moveToSignupHandler = () => {
    navigate('/signup');
  };

  const loginHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    type Response = {
      data: {
        access_token: string;
      };
    };

    try {
      const response = (await signin({
        email: email.currValue,
        password: password.currValue,
      })) as Response;

      console.log(response);

      localStorage.setItem('Authorization', response.data.access_token);
      alert('로그인에 성공했습니다.');
      navigate('/todo');
    } catch (error) {
      const message = '로그인에 실패했습니다.';
      alert(message);

      // 초기화
      emailRef.current.value = '';
      passwordRef.current.value = '';
      dispatchEmail({ type: 'INIT', newValue: emailRef.current.value });
      dispatchPassword({ type: 'INIT', newValue: passwordRef.current.value });
    }
  };

  return (
    <>
      <h2>로그인</h2>
      <form action="">
        <Label name="EMAIL" htmlFor="email" character={emailCharacter}>
          <>
            <Input
              inputRef={emailRef}
              dataTestId="email-input"
              type="text"
              id="email"
              setValue={dispatchEmail}
              character={emailCharacter}
            />
            <Message
              message={
                emailCharacter === 'error'
                  ? '올바른 이메일 형식을 작성해주세요.'
                  : ''
              }
              character={emailCharacter}
            />
          </>
        </Label>

        <Label name="PASSWORD" htmlFor="password" character={passwordCharacter}>
          <>
            <Input
              inputRef={passwordRef}
              dataTestId="password-input"
              type="password"
              id="password"
              setValue={dispatchPassword}
              character={passwordCharacter}
            />
            <Message
              message={
                passwordCharacter === 'error'
                  ? '비밀번호는 8자 이상이어야 합니다.'
                  : ''
              }
              character={passwordCharacter}
            />
          </>
        </Label>
        <Button name="회원가입으로 이동" onClick={moveToSignupHandler} />
        <Button
          dataTestId="signin-button"
          name="로그인"
          onClick={loginHandler}
          disabled={
            emailCharacter !== 'success' || passwordCharacter !== 'success'
          }
        />
      </form>
    </>
  );
};

export default index;
