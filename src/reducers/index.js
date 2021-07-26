import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import streamsReducer from './streams-reducer';

const reducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  streams: streamsReducer,
});

export default reducers;
