import * as actions from './types'
import API from '../api/apiController'
import { history } from '../helper'

export const loginUser = (loginDetails) => {
  return (dispatch) => {
    dispatch({type: actions.AUTH_LOGIN_PENDING})
    API.post('/login', loginDetails)
      .then(res => {
        //set local storage item
        const pfmUser = {
          emailId: loginDetails.emailId
        }
        localStorage.setItem('pfm_user', JSON.stringify(pfmUser));
        dispatch({type: actions.AUTH_LOGIN_FULFILLED, payload: { res, pfmUser}})
        history.push('/')
      })
      .catch(err => {
        dispatch({type: actions.AUTH_LOGIN_REJECTED, payload: err})
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({type: actions.AUTH_LOGOUT})
    localStorage.removeItem('pfm_user');
    history.push('/login')
  }
}

export const registerUser = (registerDetails) => {
  return (dispatch) => {
    dispatch({type: actions.REGISTER_USER_PENDING})
    API.post('/register/new', registerDetails)
      .then(res => {
        dispatch({type: actions.REGISTER_USER_FULFILLED, payload: res})
      })
      .catch(err => {
        dispatch({type: actions.REGISTER_USER_REJECTED, payload: err})
      })
  }
}

export const activateUser = (activationDetails) => {
  return (dispatch) => {
    dispatch({type: actions.ACTIVATE_USER_PENDING})
    API.post('/activateUser', activationDetails)
      .then(res => {
        dispatch({type: actions.ACTIVATE_USER_FULFILLED, payload: res})
        history.push('/login')
      })
      .catch(err => {
        dispatch({type: actions.ACTIVATE_USER_REJECTED, payload: err})
      })
  }
}

export const getProfile = (emailId) => {
  return (dispatch) => {
    dispatch({type: actions.GET_PROFILE_PENDING})
    API.get(`/${emailId}/profile`)
      .then(res => {
        dispatch({type: actions.GET_PROFILE_FULFILLED, payload: res})
      })
      .catch(err => {
        dispatch({type: actions.GET_PROFILE_REJECTED, payload: err})
      }) 
  }
}