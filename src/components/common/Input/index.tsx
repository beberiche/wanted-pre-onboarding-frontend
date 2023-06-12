import StyledInput from './style';

type PropType = {
  dataTestId: string;
  id: string;
  type: string;
  width?: string;
  height?: string;
};

const index = ({ dataTestId, type, id }: PropType) => {
  return (
    // <label for></label>
    <StyledInput data-testid={dataTestId} type={type} id={id} />
  );
};

export default index;
