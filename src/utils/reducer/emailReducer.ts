import { InputActionType } from 'types/inputActionType';
import { InputStateType } from 'types/inputStateType';

import { emailValidHandler } from 'utils/valid/emailValidHandler';

export const emailReducer = (
  state: InputStateType,
  action: InputActionType,
): InputStateType => {
  switch (action.type) {
    case 'SET_VALUE': {
      const newState = {
        ...state,
        currValue: action.newValue,
        valid: emailValidHandler(action.newValue),
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
