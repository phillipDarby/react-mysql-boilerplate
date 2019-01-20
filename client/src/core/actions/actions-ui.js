import {
  OPEN_NAV,
  CLOSE_NAV,
  OPEN_MODAL,
  OPEN_CONFIRM_MODAL,
  CLOSE_MODAL,
  CLOSE_CONFIRM_MODAL
} from '../types';

/**
 * openNav - Open the side nav
 */
export function openNav() {
  return {
    type: OPEN_NAV
  };
}

/**
 * closeNav - Close the side nav
 */
export function closeNav() {
  return {
    type: CLOSE_NAV
  };
}

export function openModal(obj) {
  return {
    type: OPEN_MODAL,
    modalKey: obj.modalKey
  };
}

export function openConfirmModal(obj) {
  return {
    type: OPEN_CONFIRM_MODAL,
    modalKey: obj.modalKey
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

export function closeConfirmModal() {
  return {
    type: CLOSE_CONFIRM_MODAL
  };
}
