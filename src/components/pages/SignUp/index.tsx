import { useEffect, useReducer } from 'react';

// common
import Input from 'components/common/Input';
import Label from 'components/common/Label';
import Button from 'components/common/Button';
import emailReducer from 'utils/reducer/emailReducer';

const index = () => {
  const [email, dispatchEmail] = useReducer(emailReducer, {
    currValue: '',
    valid: false,
  });

  useEffect(() => {
    console.log(email.currValue);
  }, [email.currValue]);

  return (
    <>
      <h2>회원가입</h2>
      <Label name="EMAIL" htmlFor="email">
        <Input
          dataTestId="email-input"
          type="text"
          id="email"
          setValue={dispatchEmail}
        />
      </Label>
      <Label name="PASSWORD" htmlFor="password">
        <Input
          dataTestId="password-input"
          type="password"
          id="password"
          // setValue={setPassword}
        />
      </Label>
      <Button dataTestId="signup-button" name="회원가입" />
    </>
  );
};

export default index;
