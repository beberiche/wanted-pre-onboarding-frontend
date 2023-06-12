import { ReactNode } from 'react';
import StyledLabel from './style';

type PropType = {
  name: string;
  htmlFor: string;
  children: ReactNode;
};
const index = ({ name, htmlFor, children }: PropType) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {name} {children}
    </StyledLabel>
  );
};

export default index;
