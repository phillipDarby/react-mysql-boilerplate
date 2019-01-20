// src/js/actions/index.js
import { ADD_USER, DATA_LOADED } from '../types';

export function addUser(payload) {
  return { type: ADD_USER, payload };
}

export function getUsers() {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}
