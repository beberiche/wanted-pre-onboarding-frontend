import { ReactNode } from 'react';
import StyledLabel from './style';

type Props = {
  name: string;
  htmlFor: string;
  children: ReactNode;
  character?: string;
};
const index = ({ name, htmlFor, children, character }: Props) => {
  return (
    <StyledLabel htmlFor={htmlFor} character={character}>
      {name} {children}
    </StyledLabel>
  );
};

export default index;
