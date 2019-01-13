// src/js/reducers/index.js
import { ADD_USER, DATA_LOADED } from '../constants/action-types';

const initialState = {
  users: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    state = {
      ...state,
      users: [...state.users, action.payload]
    };
  }
  if (action.type === DATA_LOADED) {
    const payload = action.payload.map(item => {
      let obj = { id: item.id, name: item.name };

      return obj;
    });
    state = {
      ...state,
      users: [...state.users, ...payload]
    };
  }

  return state;
}
export default rootReducer;
