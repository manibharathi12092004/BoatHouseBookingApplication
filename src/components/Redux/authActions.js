export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_UP = 'SIGN_UP';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';

export const signIn = (email, token) => ({
  type: SIGN_IN,
  payload: { email, token },
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const signUp = (email, token) => ({
  type: SIGN_UP,
  payload: { email, token },
});

export const fetchProfile = (profile) => ({
  type: FETCH_PROFILE,
  payload: profile,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile,
});
