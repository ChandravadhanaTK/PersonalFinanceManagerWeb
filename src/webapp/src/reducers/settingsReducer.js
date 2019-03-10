import * as actions from '../actions/types'

const initialState = {
  currentSettings: {},
  currency: '',
  password: {}
}

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_SETTINGS_FULFILLED:
      return state = {...state, currentSettings: action.payload.data}
    default:
      return state
  }
}
