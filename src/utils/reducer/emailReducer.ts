import InputActionType from 'types/inputActionType';
import InputStateType from 'types/inputStateType';
import emailValidHandler from 'utils/valid/emailValidHandler';

const emailReducer = (
  state: InputStateType,
  action: InputActionType,
): InputStateType => {
  switch (action.type) {
    case 'VALID': {
      const newState = {
        ...state,
        valid: emailValidHandler(state.currValue),
      };
      return newState;
    }
    case 'SET_VALUE': {
      const newState = {
        ...state,
        currValue: action.newValue,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default emailReducer;
