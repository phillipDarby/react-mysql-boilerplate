import { ADD_USER, DATA_LOADED } from '../types';

const initialState = {
  users: []
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      state = {
        ...state,
        users: [...state.users, action.payload]
      };
      return state;

    case DATA_LOADED:
      const payload = action.payload.map(item => {
        let obj = { id: item.id, name: item.name };

        return obj;
      });
      state = {
        ...state,
        users: [...state.users, ...payload]
      };
      return state;

    default:
      return state;
  }
}
