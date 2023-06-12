import { MouseEventHandler } from 'react';
import StyledButton from './style';

type Props = {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  dataTestId?: string;
};

const index = ({ name, onClick, dataTestId }: Props) => {
  return (
    <StyledButton data-testid={dataTestId} onClick={onClick}>
      {name}
    </StyledButton>
  );
};

export default index;
