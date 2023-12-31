import { InputActionType } from 'types/inputActionType';
import { InputStateType } from 'types/inputStateType';

import { passwordValidHandler } from 'utils/valid/passwordValidHandler';

export const passwordReducer = (
  state: InputStateType,
  action: InputActionType,
): InputStateType => {
  switch (action.type) {
    case 'SET_VALUE': {
      const newState = {
        ...state,
        currValue: action.newValue,
        valid: passwordValidHandler(action.newValue),
      };
      return newState;
    }
    case 'INIT': {
      const newState = {
        ...state,
        currValue: action.newValue,
        valid: undefined,
      };
      return newState;
    }
    default:
      return state;
  }
};
