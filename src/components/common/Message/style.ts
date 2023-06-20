import styled from 'styled-components';

import { changeColor } from 'utils/fn/changeColor';

type Style = {
  character?: string;
};

const StyledMessage = styled.div<Style>`
  color: ${({ character }) => changeColor(character)};
  border-color: ${({ character }) => changeColor(character)};
  visibility: ${({ character }) =>
    character === 'default' ? 'hidden' : 'visible'};
  margin-bottom: 0.3rem;
  transition: all 0.2s ease;
`;

export default StyledMessage;
