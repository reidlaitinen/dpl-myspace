import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import post from './post';

const rootReducer = combineReducers({
  user,
  flash,
  post
});

export default rootReducer;
