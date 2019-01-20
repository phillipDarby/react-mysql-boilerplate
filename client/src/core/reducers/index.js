import { combineReducers } from 'redux';
import { uiReducer } from '../reducers/reducer-ui';
import { userReducer } from '../reducers/reducer-user';

const rootReducer = combineReducers({
  ui: uiReducer,
  users: userReducer
});

export default rootReducer;
