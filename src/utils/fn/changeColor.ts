export const changeColor = (character?: string): string => {
  if (character === 'default' || character === undefined) {
    return 'black';
  }
  if (character === 'success') {
    return 'green';
  }
  return 'red';
};
