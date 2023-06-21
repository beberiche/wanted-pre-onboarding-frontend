import StyledLabel from './style';

type Props = {
  name?: string;
  htmlFor: string;
  character?: string;
  children?: JSX.Element;
};
const index = ({ name, htmlFor, character, children }: Props) => {
  return (
    <StyledLabel htmlFor={htmlFor} character={character}>
      {name}
      {children}
    </StyledLabel>
  );
};

export default index;
