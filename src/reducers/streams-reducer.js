import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';

const streamsReducer = (state = {}, action) => {
  if (action.type === FETCH_STREAMS) {
    return { ...state, ..._.mapKeys(action.payload, 'id') };
  }
  if (action.type === FETCH_STREAM) {
    return { ...state, [action.payload.id]: action.payload };
  }
  if (action.type === CREATE_STREAM) {
    return { ...state, [action.payload.id]: action.payload };
  }
  if (action.type === EDIT_STREAM) {
    return { ...state, [action.payload.id]: action.payload };
  }
  if (action.type === DELETE_STREAM) {
    return _.omit(state, action.payload);
  }
  return state;
};

export default streamsReducer;
