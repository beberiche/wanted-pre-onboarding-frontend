import { useReducer, MouseEvent, useRef, MutableRefObject } from 'react';
import { useNavigate } from 'react-router-dom';

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
import { signUp } from 'api/auth';
import { isAxiosError } from 'axios';

const index = () => {
  const navigate = useNavigate();

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

  const signupHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email.currValue && password.currValue) {
      try {
        await signUp({
          email: email.currValue,
          password: password.currValue,
        });
        alert('성공적으로 가입이 완료되었습니다.');
        navigate('/signin');
      } catch (error) {
        let message = '회원가입에 실패했습니다.';
        if (isAxiosError(error) && error.response?.status === 400)
          message = error.response?.data?.message;

        alert(message);

        // 초기화
        emailRef.current.value = '';
        passwordRef.current.value = '';
        dispatchEmail({ type: 'INIT', newValue: emailRef.current.value });
        dispatchPassword({ type: 'INIT', newValue: passwordRef.current.value });
      }
    }
  };

  return (
    <>
      <h2>회원가입</h2>
      <form action="">
        <Label name="EMAIL" htmlFor="email" character={emailCharacter} />
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
              : '사용가능한 이메일 입니다.'
          }
          character={emailCharacter}
        />
        <Label
          name="PASSWORD"
          htmlFor="password"
          character={passwordCharacter}
        />
        <Input
          inputRef={passwordRef}
          dataTestId="password-input"
          type="password"
          id="password"
          setValue={dispatchPassword}
          character={passwordCharacter}
        />
        <Button
          dataTestId="signup-button"
          name="회원가입"
          onClick={signupHandler}
          disabled={
            emailCharacter !== 'success' || passwordCharacter !== 'success'
          }
        />
      </form>
    </>
  );
};

export default index;
