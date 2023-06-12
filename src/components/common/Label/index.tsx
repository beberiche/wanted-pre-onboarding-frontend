import { ReactNode } from 'react';
import StyledLabel from './style';

type Props = {
  name: string;
  htmlFor: string;
  children: ReactNode;
};
const index = ({ name, htmlFor, children }: Props) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {name} {children}
    </StyledLabel>
  );
};

export default index;
