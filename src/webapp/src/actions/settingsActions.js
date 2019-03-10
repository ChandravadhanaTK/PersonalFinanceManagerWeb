import * as actions from './types'
import API from '../api/apiController'
import { history } from '../helper'
import {notify} from 'reapop';

export const getSettings = (emailId) => {
  return (dispatch) => {
    dispatch({type: actions.GET_SETTINGS_PENDING})
    API.get(`/${emailId}/settings`)
      .then(res => dispatch({type: actions.GET_SETTINGS_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.GET_SETTINGS_REJECTED, payload: err}))
  }
}

export const editCurrency = (currencyData) => {
  return (dispatch) => {
    dispatch({type: actions.EDIT_CURRENCY_PENDING})
    API.post('/userSettings/currencyUpdate', currencyData)
      .then(res => {
        dispatch({type: actions.EDIT_CURRENCY_FULFILLED, payload: res})
        dispatch(notify({message: "Successfully updated currency", status: 'success'}));
        history.push('/settings/view')
      })
      .catch(err => dispatch({type: actions.EDIT_CURRENCY_REJECTED, payload: err}))
  }
}

export const editPassword = (passwordData) => {
  return (dispatch) => {
    dispatch({type: actions.EDIT_PASSWORD_PENDING})
    API.post('/userSettings/passwordUpdate', passwordData)
      .then(res => {
        dispatch({type: actions.EDIT_PASSWORD_FULFILLED, payload: res})
        dispatch(notify({message: "Successfully updated password", status: 'success'}));
        history.push('/settings/view')
      })
      .catch(err => dispatch({type: actions.EDIT_PASSWORD_REJECTED, payload: err}))
  }
}