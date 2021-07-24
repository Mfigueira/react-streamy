import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = uId => ({ type: SIGN_IN, payload: { uId } });

export const signOut = () => ({ type: SIGN_OUT });
