import * as actions from '../actions/types'

const initialState = {
  bankAccountList: []
}

export default function bankAccountReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_BANKACCOUNT_FULFILLED:
      return state = {...state, bankAccountList: action.payload.data}
    case actions.SEARCH_BANKACCOUNT_FULFILLED:
      return state = {...state, bankAccountList: action.payload.data}
    default:
      return state
  }
}
