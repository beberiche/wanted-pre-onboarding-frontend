import StyledLabel from './style';

type Props = {
  name: string;
  htmlFor: string;
  character?: string;
};
const index = ({ name, htmlFor, character }: Props) => {
  return (
    <StyledLabel htmlFor={htmlFor} character={character}>
      {name}
    </StyledLabel>
  );
};

export default index;
