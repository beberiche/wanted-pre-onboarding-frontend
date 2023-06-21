import { MouseEventHandler } from 'react';
import StyledButton from './style';

type Props = {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  dataTestId?: string;
  disabled?: boolean | undefined;
};

const index = ({ name, onClick, dataTestId, disabled }: Props) => {
  return (
    <StyledButton
      data-testid={dataTestId}
      onClick={onClick}
      disabled={disabled}>
      {name}
    </StyledButton>
  );
};

export default index;
