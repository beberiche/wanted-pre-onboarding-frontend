import { Dispatch, MutableRefObject, useRef } from 'react';
import { InputActionType } from 'types/inputActionType';

import StyledInput from './style';

type Props = {
  inputRef?: MutableRefObject<HTMLInputElement>;
  dataTestId?: string;
  id?: string;
  type: string;
  setValue?: Dispatch<InputActionType>;
  character?: string;
  checked?: boolean;
  initValue?: string;
};

const index = ({
  inputRef,
  dataTestId,
  type,
  id,
  setValue,
  character,
  checked,
  initValue,
}: Props) => {
  let checkValid: ReturnType<typeof setTimeout> | undefined;
  const ref = useRef({
    value: initValue || '',
  }) as MutableRefObject<HTMLInputElement>;

  const inputValidHandler = () => {
    if (!setValue || !inputRef) return;
    clearTimeout(checkValid);

    checkValid = setTimeout(() => {
      setValue({
        type: 'SET_VALUE',
        newValue: inputRef.current.value || ref.current.value,
      });
    }, 300);
  };

  return (
    <StyledInput
      ref={inputRef || ref}
      data-testid={dataTestId}
      type={type}
      id={id}
      onChange={inputValidHandler}
      character={character}
      checked={type === 'checkbox' && checked}
    />
  );
};

export default index;
