import StyledMessage from './style';

type Props = {
  message: string;
  character?: string;
};
const index = ({ message, character }: Props) => {
  return <StyledMessage character={character}>{message}</StyledMessage>;
};

export default index;
