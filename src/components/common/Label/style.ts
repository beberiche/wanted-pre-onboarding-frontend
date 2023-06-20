import styled from 'styled-components';

import { changeColor } from 'utils/fn/changeColor';

type Style = {
  character?: string;
};

const StyledLabel = styled.label<Style>`
  color: ${({ character }) => changeColor(character)};
  border-color: ${({ character }) => changeColor(character)};
  display: block;
  margin: 1rem 0;
  transition: all 0.2s ease;
  font-weight: 600;
`;

export default StyledLabel;
