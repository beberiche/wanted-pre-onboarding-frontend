import styled from 'styled-components';
import { changeColor } from 'utils/fn/changeColor';

type Style = {
  character?: string;
};

const StyledInput = styled.input<Style>`
  color: ${({ character }) => changeColor(character)};
  border-color: ${({ character }) => changeColor(character)};
  outline: none;
  transition: all 0.2s ease;
`;

export default StyledInput;
