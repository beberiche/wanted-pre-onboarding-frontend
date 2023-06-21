import StyledLabel from './style';

type Props = {
  name?: string;
  htmlFor: string;
  character?: string;
  children?: JSX.Element;
};
const index = ({ name, htmlFor, character, children }: Props) => {
  return (
    <StyledLabel name={name} htmlFor={htmlFor} character={character}>
      {name}
      {name && <br />}
      {children}
    </StyledLabel>
  );
};

export default index;
