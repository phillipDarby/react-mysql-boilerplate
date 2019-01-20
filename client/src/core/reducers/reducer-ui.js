import {
  OPEN_NAV,
  CLOSE_NAV,
  OPEN_MODAL,
  OPEN_CONFIRM_MODAL,
  CLOSE_MODAL,
  CLOSE_CONFIRM_MODAL
} from '../types';

const initialState = {
  modalState: {
    openModal: false,
    modalKey: ''
  },
  confirmModalState: {
    openModal: false,
    modalKey: ''
  },
  leftNavOpen: false
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_NAV:
      state = {
        ...state,
        leftNavOpen: true
      };
      return state;

    case CLOSE_NAV:
      state = {
        ...state,
        leftNavOpen: false
      };
      return state;

    case OPEN_MODAL:
      return Object.assign({}, state, {
        modalState: {
          openModal: true,
          modalKey: action.modalKey
        }
      });
    case OPEN_CONFIRM_MODAL:
      return Object.assign({}, state, {
        confirmModalState: {
          openModal: true,
          modalKey: action.modalKey
        }
      });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        modalState: {
          openModal: false
        }
      });

    case CLOSE_CONFIRM_MODAL:
      return Object.assign({}, state, {
        confirmModalState: {
          openModal: false
        }
      });
    default:
      return state;
  }
}
