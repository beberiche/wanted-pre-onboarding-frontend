// common
import Input from 'components/common/Input';
import Label from 'components/common/Label';

const index = () => {
  return (
    <>
      <Label name="ID" htmlFor="id">
        <Input dataTestId="email-input" type="text" id="id" />
      </Label>

      <Label name="PASSWORD" htmlFor="password">
        <Input dataTestId="password-input" type="password" id="password" />
      </Label>
    </>
  );
};

export default index;
