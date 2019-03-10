import {notify} from 'reapop';

export const defaultToast = (message) => {
  return (dispatch) => {
    dispatch(notify({message: message, status: 'default'}));
  }
}

export const successToast = (message) => {
  return (dispatch) => {
    dispatch(notify({message: message, status: 'success'}));
  }
}

export const dangerToast = (message) => {
  return (dispatch) => {
    dispatch(notify({message: message, status: 'error'}));
  }
}

export const warningToast = (message) => {
  return (dispatch) => {
    dispatch(notify({message: message, status: 'warning'}));
  }
}

export const infoToast = (message) => {
  return (dispatch) => {
    dispatch(notify({message: message, status: 'info'}));
  }
}