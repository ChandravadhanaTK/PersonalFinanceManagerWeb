import * as actions from '../actions/types'

let user = JSON.parse(localStorage.getItem('pfm_user'))
// const initialState = user ? { loggedIn: true, user: user } : { loggedIn: false, user: {} };
const initialState = {
  user: user ? user : {},
  loggedIn: user ? true : false,
  stepDetails: {
    stepError: false,
    currentStep: 0
  }
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.AUTH_LOGIN_FULFILLED:
      return state = {...state, loggedIn: true, user: action.payload.pfmUser }
    case actions.AUTH_LOGOUT:
      return state = {...state, loggedIn: false }
    case actions.REGISTER_USER_FULFILLED:
      return state = {...state, stepDetails: { currentStep: 1, stepError: false } }
    case actions.REGISTER_USER_REJECTED:
      return state = {...state, stepDetails: { ...state.stepDetails, stepError: true } }
    case actions.ACTIVATE_USER_REJECTED:
      return state = {...state, stepDetails: { ...state.stepDetails, stepError: true } }
    case actions.GET_PROFILE_FULFILLED:
      return state = {...state, user: action.payload.data}
    default:
      return state
    }
}