import { useRef, Dispatch, MutableRefObject } from 'react';
import InputActionType from 'types/inputActionType';

import StyledInput from './style';

type Props = {
  dataTestId?: string;
  id?: string;
  type: string;
  setValue?: Dispatch<InputActionType>;
  character?: string;
  children?: JSX.Element;
};

const index = ({
  dataTestId,
  type,
  id,
  setValue,
  character,
  children,
}: Props) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  let checkValid: ReturnType<typeof setTimeout> | undefined;

  const inputValidHandler = () => {
    if (!setValue) return;
    clearTimeout(checkValid);

    checkValid = setTimeout(() => {
      setValue({ type: 'SET_VALUE', newValue: inputRef.current.value });
    }, 300);
  };

  return (
    <>
      <StyledInput
        ref={inputRef}
        data-testid={dataTestId}
        type={type}
        id={id}
        onChange={inputValidHandler}
        character={character}
      />
      {children}
    </>
  );
};

export default index;
