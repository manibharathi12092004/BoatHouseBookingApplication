export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_UP = 'SIGN_UP';

// Action Creators
export const sign_In = (email, token) => ({
  type: SIGN_IN,
  payload: { email, token },
});

export const sign_Out = () => ({
  type: SIGN_OUT,
});

export const sign_Up = (email, token) => ({
  type: SIGN_UP,
  payload: { email, token },
});