import { useReducer } from 'react';

// common
import Input from 'components/common/Input';
import Label from 'components/common/Label';
import Button from 'components/common/Button';
import emailReducer from 'utils/reducer/emailReducer';

const index = () => {
  const [email, dispatchEmail] = useReducer(emailReducer, {
    currValue: '',
    valid: undefined,
  });

  const emailCheckHandler = (): string => {
    const { currValue, valid } = email;
    if (valid === undefined || currValue === '') return 'default';
    if (valid === true) return 'success';
    return 'error';
  };

  return (
    <>
      <h2>회원가입</h2>
      <Label name="EMAIL" htmlFor="email">
        <Input
          dataTestId="email-input"
          type="text"
          id="email"
          setValue={dispatchEmail}
          character={emailCheckHandler()}
        />
        {/* {email.currValue !== '' && email.valid === true && (
          <div>정상입니다.</div>
        )}
        {email.currValue !== '' && email.valid === false && (
          <div>유효성 에러</div>
        )} */}
      </Label>
      <Label name="PASSWORD" htmlFor="password">
        <Input
          dataTestId="password-input"
          type="password"
          id="password"
          // setValue={setPassword}
          // character={themeCheckHandler()}
        />
      </Label>
      <Button dataTestId="signup-button" name="회원가입" />
    </>
  );
};

export default index;
