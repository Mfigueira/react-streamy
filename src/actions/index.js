import history from '../history';
import streams from '../api/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from './types';

export const signIn = userId => ({ type: SIGN_IN, payload: { userId } });

export const signOut = () => ({ type: SIGN_OUT });

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streams.post('/streams', { ...formValues, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: res.data,
  });

  // After stream created, programatic navigate to home
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const res = await streams.get('/streams');

  dispatch({
    type: FETCH_STREAMS,
    payload: res.data,
  });
};

export const fetchStream = id => async dispatch => {
  const res = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: res.data,
  });
};

export const editStream = (id, formValues) => async dispatch => {
  const res = await streams.patch(`/streams/${id}`, formValues);

  dispatch({
    type: EDIT_STREAM,
    payload: res.data,
  });

  // After stream edited, programatic navigate to home
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });

  history.push('/');
};
