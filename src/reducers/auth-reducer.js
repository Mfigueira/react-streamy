import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  uId: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === SIGN_IN) {
    return {
      ...state,
      isSignedIn: true,
      uId: action.payload.uId,
    };
  }

  if (action.type === SIGN_OUT) {
    return {
      ...state,
      isSignedIn: false,
      uId: null,
    };
  }

  return state;
};

export default authReducer;
