import * as actions from '../actions/types'

const initialState = {
  investmentsEditData: {},
  investmentsList: []
}

export default function investmentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_INVESTMENTS_FULFILLED:
      return state = {...state, investmentsList: action.payload.data}
    case actions.GET_INVESTMENTS_FULFILLED:
      return state = {...state, investmentsEditData: action.payload.data}
    case actions.SEARCH_INVESTMENTS_FULFILLED:
      return state = {...state, investmentsList: action.payload.data}
    default:
      return state
  }
}
