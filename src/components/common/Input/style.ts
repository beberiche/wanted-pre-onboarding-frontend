import styled from 'styled-components';
import { changeColor } from 'utils/fn/changeColor';

type Style = {
  character?: string;
  type: string;
  checked?: boolean;
};

const StyledInput = styled.input.attrs({
  autoComplete: 'off',
})<Style>`
  color: ${({ character }) => changeColor(character)};
  border-color: ${({ character }) => changeColor(character)};
  min-width: ${({ type }) => (type === 'text' ? '15rem' : '0em')};
  font-size: 1.2rem;
  padding: 0.5rem;
  outline: none;
  transition: all 0.2s ease;
`;

export default StyledInput;
