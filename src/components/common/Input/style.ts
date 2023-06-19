import styled from 'styled-components';

type Style = {
  character?: string;
};

const changeColor = (character?: string): string => {
  if (character === 'default' || character === undefined) {
    return 'black';
  }
  if (character === 'success') {
    return 'green';
  }
  return 'red';
};

const StyledInput = styled.input<Style>`
  color: ${({ character }) => changeColor(character)};
  border-color: ${({ character }) => changeColor(character)};
`;

export default StyledInput;
