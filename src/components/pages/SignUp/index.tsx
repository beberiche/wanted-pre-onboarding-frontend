import { useReducer, MouseEvent } from 'react';

// common
import Input from 'components/common/Input';
import Label from 'components/common/Label';
import Button from 'components/common/Button';

// reducer
import emailReducer from 'utils/reducer/emailReducer';
import passwordReducer from 'utils/reducer/passwordReducer';

// type
import InputStateType from 'types/inputStateType';

const index = () => {
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

  const buttonTest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('됨');
  };

  return (
    <>
      <h2>회원가입</h2>
      <form action="">
        <Label name="EMAIL" htmlFor="email">
          <Input
            dataTestId="email-input"
            type="text"
            id="email"
            setValue={dispatchEmail}
            character={emailCharacter}
          />
        </Label>
        <Label name="PASSWORD" htmlFor="password">
          <Input
            dataTestId="password-input"
            type="password"
            id="password"
            setValue={dispatchPassword}
            character={passwordCharacter}
          />
        </Label>
        <Button
          dataTestId="signup-button"
          name="회원가입"
          onClick={buttonTest}
          disabled={
            emailCharacter !== 'success' || passwordCharacter !== 'success'
          }
        />
      </form>
    </>
  );
};

export default index;
